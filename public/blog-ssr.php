<?php
// Prevent direct access without slug parameter
$slug = isset($_GET['slug']) ? trim($_GET['slug']) : '';
$slug = preg_replace('/[^a-zA-Z0-9\-]/', '', $slug);

if (empty($slug)) {
    http_response_code(404);
    echo "<h1>404 Not Found</h1><p>No blog post specified.</p>";
    exit;
}

$domain = "https://www.mlawyer.in";
$raw_url = "https://raw.githubusercontent.com/mlawyerlegalconsultation/mlawyer-blog-files/main/blogs/" . $slug . ".md";

// Fetch markdown from GitHub
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $raw_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'MLawyer-SSR-Fetcher');
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$markdown_content = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// If GitHub returns 404 or fails, return real HTTP 404 to avoid Soft 404s
if ($http_code !== 200 || empty($markdown_content)) {
    http_response_code(404);
    
    // Serve index.html shell with 404 status header if present
    $indexPath = __DIR__ . '/index.html';
    if (file_exists($indexPath)) {
        $html = file_get_contents($indexPath);
        $html = str_replace('<title>', '<title>Page Not Found | MLawyer</title><meta name="robots" content="noindex, follow" /><!--', $html);
        echo $html;
    } else {
        echo "<!doctype html><html><head><title>404 Not Found</title></head><body><h1>404 Blog Post Not Found</h1><p>The requested blog article does not exist.</p></body></html>";
    }
    exit;
}

// -------------------------------------------------------------
// Markdown & Frontmatter Parser
// -------------------------------------------------------------

function parseFrontmatter($raw) {
    $meta = [];
    $content = $raw;

    if (preg_match('/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/', $raw, $matches)) {
        $yamlLines = explode("\n", $matches[1]);
        $content = trim($matches[2]);

        $currentKey = null;
        $inArray = false;

        foreach ($yamlLines as $line) {
            $line = trim($line);
            if (empty($line) || strpos($line, '#') === 0) continue;

            if (preg_match('/^([a-zA-Z0-9_\-]+):\s*(.*)$/', $line, $kv)) {
                $key = trim($kv[1]);
                $val = trim($kv[2]);

                if (empty($val)) {
                    $meta[$key] = [];
                    $currentKey = $key;
                    $inArray = true;
                } else {
                    $val = preg_replace('/^["\'](.*)["\']$/', '$1', $val);
                    $meta[$key] = $val;
                    $inArray = false;
                }
            } else if ($inArray && preg_match('/^\-\s*(.*)$/', $line, $item)) {
                $val = trim($item[1]);
                $val = preg_replace('/^["\'](.*)["\']$/', '$1', $val);
                $meta[$currentKey][] = $val;
            }
        }
    }

    return ['metadata' => $meta, 'content' => $content];
}

function markdownToHtml($md) {
    $md = str_replace(["\r\n", "\r"], "\n", $md);

    // Code blocks
    $md = preg_replace_callback('/```(\w*)\n([\s\S]*?)```/', function($matches) {
        $lang = htmlspecialchars($matches[1]);
        $code = htmlspecialchars($matches[2]);
        return "<pre><code class=\"language-{$lang}\">{$code}</code></pre>";
    }, $md);

    // Headings
    $md = preg_replace_callback('/^(#+)\s+(.*?)$/m', function($m) {
        $level = strlen($m[1]);
        $text = htmlspecialchars(trim($m[2]));
        $id = strtolower(preg_replace('/[^\w\s-]/', '', $text));
        $id = preg_replace('/\s+/', '-', $id);
        return "<h{$level} id=\"{$id}\">{$text}</h{$level}>";
    }, $md);

    // Blockquotes
    $md = preg_replace('/^>\s+(.*?)$/m', '<blockquote><p>$1</p></blockquote>', $md);

    // Images & Links
    $md = preg_replace('/!\[(.*?)\]\((.*?)\)/', '<img src="$2" alt="$1" loading="lazy" class="rounded-lg shadow-md my-4 max-w-full h-auto" />', $md);
    $md = preg_replace('/\[(.*?)\]\((.*?)\)/', '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline">$1</a>', $md);

    // Bold & Italics
    $md = preg_replace('/\*\*(.*?)\*\*/', '<strong>$1</strong>', $md);
    $md = preg_replace('/\*([^\*]+)\*/', '<em>$1</em>', $md);

    // Horizontal Rule
    $md = preg_replace('/^---$/m', '<hr class="my-6 border-gray-200" />', $md);

    // Lists
    $md = preg_replace('/^\-\s+(.*?)$/m', '<li>$1</li>', $md);
    $md = preg_replace('/(<li>.*<\/li>\n?)+/s', '<ul class="list-disc pl-6 space-y-2 my-4">$0</ul>', $md);

    // Paragraphs
    $lines = explode("\n", $md);
    $html = '';
    $inPara = false;

    foreach ($lines as $line) {
        $trimmed = trim($line);
        if (empty($trimmed)) {
            if ($inPara) {
                $html .= "</p>\n";
                $inPara = false;
            }
            continue;
        }

        if (preg_match('/^<(h[1-6]|ul|ol|li|blockquote|pre|img|hr|div)/i', $trimmed)) {
            if ($inPara) {
                $html .= "</p>\n";
                $inPara = false;
            }
            $html .= $trimmed . "\n";
        } else {
            if (!$inPara) {
                $html .= "<p class=\"leading-relaxed text-gray-700 my-3\">";
                $inPara = true;
            } else {
                $html .= " ";
            }
            $html .= $trimmed;
        }
    }
    if ($inPara) {
        $html .= "</p>\n";
    }

    return $html;
}

$parsed = parseFrontmatter($markdown_content);
$meta = $parsed['metadata'];
$bodyMd = $parsed['content'];
$bodyHtml = markdownToHtml($bodyMd);

// Extract Meta Variables
$title = !empty($meta['seoTitle']) ? $meta['seoTitle'] : (!empty($meta['title']) ? $meta['title'] : 'Blog');
$cleanTitle = htmlspecialchars(trim(preg_replace('/^#\s*/', '', $title))) . ' | MLawyer';
$description = !empty($meta['seoDescription']) ? $meta['seoDescription'] : (!empty($meta['description']) ? $meta['description'] : 'Read our latest insights on MLawyer.');
$cleanDesc = htmlspecialchars(trim($description));

$coverImage = !empty($meta['cover']) ? $meta['cover'] : (!empty($meta['coverImage']) ? $meta['coverImage'] : $domain . '/Logo.png');
$canonicalUrl = $domain . '/blog/' . $slug;
$publishDate = !empty($meta['date']) ? $meta['date'] : date('c');
$authorName = !empty($meta['author']) ? $meta['author'] : 'MLawyer Team';
$keywords = !empty($meta['seoKeywords']) && is_array($meta['seoKeywords']) ? implode(', ', $meta['seoKeywords']) : 'Legal, MLawyer, Blog';

// Construct JSON-LD Schemas
$articleSchema = [
    "@context" => "https://schema.org",
    "@type" => "BlogPosting",
    "headline" => $title,
    "image" => $coverImage,
    "datePublished" => $publishDate,
    "author" => [
        "@type" => "Person",
        "name" => $authorName
    ],
    "publisher" => [
        "@type" => "Organization",
        "name" => "MLawyer",
        "logo" => [
            "@type" => "ImageObject",
            "url" => $domain . "/Logo.png"
        ]
    ],
    "description" => $description,
    "mainEntityOfPage" => [
        "@type" => "WebPage",
        "@id" => $canonicalUrl
    ]
];

$breadcrumbSchema = [
    "@context" => "https://schema.org",
    "@type" => "BreadcrumbList",
    "itemListElement" => [
        [
            "@type" => "ListItem",
            "position" => 1,
            "name" => "Home",
            "item" => $domain . "/"
        ],
        [
            "@type" => "ListItem",
            "position" => 2,
            "name" => "Blog",
            "item" => $domain . "/blogs"
        ],
        [
            "@type" => "ListItem",
            "position" => 3,
            "name" => $title,
            "item" => $canonicalUrl
        ]
    ]
];

// Load index.html shell
$indexPath = __DIR__ . '/index.html';
if (!file_exists($indexPath)) {
    // Fallback simple HTML
    header("Content-Type: text/html; charset=utf-8");
    echo "<!doctype html><html lang=\"en\"><head><title>{$cleanTitle}</title><meta name=\"description\" content=\"{$cleanDesc}\"><link rel=\"canonical\" href=\"{$canonicalUrl}\"></head><body><article><h1>" . htmlspecialchars($title) . "</h1>{$bodyHtml}</article></body></html>";
    exit;
}

$html = file_get_contents($indexPath);

// Inject SEO Meta Tags into <head>
$seoTags = "\n";
$seoTags .= "  <title>{$cleanTitle}</title>\n";
$seoTags .= "  <meta name=\"description\" content=\"{$cleanDesc}\" />\n";
$seoTags .= "  <link rel=\"canonical\" href=\"{$canonicalUrl}\" />\n";
$seoTags .= "  <meta name=\"keywords\" content=\"" . htmlspecialchars($keywords) . "\" />\n";
$seoTags .= "  <meta name=\"author\" content=\"" . htmlspecialchars($authorName) . "\" />\n";
$seoTags .= "  <meta name=\"robots\" content=\"index, follow\" />\n";

// Open Graph
$seoTags .= "  <meta property=\"og:title\" content=\"" . htmlspecialchars($title) . "\" />\n";
$seoTags .= "  <meta property=\"og:description\" content=\"{$cleanDesc}\" />\n";
$seoTags .= "  <meta property=\"og:image\" content=\"" . htmlspecialchars($coverImage) . "\" />\n";
$seoTags .= "  <meta property=\"og:url\" content=\"{$canonicalUrl}\" />\n";
$seoTags .= "  <meta property=\"og:type\" content=\"article\" />\n";

// Twitter
$seoTags .= "  <meta name=\"twitter:card\" content=\"summary_large_image\" />\n";
$seoTags .= "  <meta name=\"twitter:title\" content=\"" . htmlspecialchars($title) . "\" />\n";
$seoTags .= "  <meta name=\"twitter:description\" content=\"{$cleanDesc}\" />\n";
$seoTags .= "  <meta name=\"twitter:image\" content=\"" . htmlspecialchars($coverImage) . "\" />\n";

// JSON-LD Schemas
$seoTags .= '  <script type="application/ld+json">' . json_encode($articleSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "</script>\n";
$seoTags .= '  <script type="application/ld+json">' . json_encode($breadcrumbSchema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "</script>\n";

// Insert meta tags before </head>
$html = str_replace('</head>', $seoTags . '</head>', $html);

// Build Pre-rendered Body markup inside <div id="root">
$articleHtml = '
<article className="bg-white min-h-screen">
  <div className="relative w-full h-[50vh] min-h-[400px]">
    <img src="' . htmlspecialchars($coverImage) . '" alt="' . htmlspecialchars($title) . '" class="w-full h-full object-cover" />
  </div>
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900">' . htmlspecialchars($title) . '</h1>
    <div className="prose prose-lg max-w-none">' . $bodyHtml . '</div>
  </div>
</article>';

// Inject pre-rendered body into <div id="root"></div>
$html = str_replace('<div id="root"></div>', '<div id="root">' . $articleHtml . '</div>', $html);

header("Content-Type: text/html; charset=utf-8");
header("Cache-Control: public, max-age=3600, s-maxage=86400");
echo $html;
