<?php
header("Content-Type: application/xml; charset=utf-8");
header("Cache-Control: public, max-age=3600");

$domain = "https://www.mlawyer.in";
$today = date('Y-m-d');

$static_pages = [
    ['loc' => '/', 'priority' => '1.0', 'changefreq' => 'daily'],
    ['loc' => '/lawyer', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/customer', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/family-lawyers', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/property-lawyers', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/legal-criminal-lawyers', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/best-corporate-lawyers', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/consumer-right-lawyer-app', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/labour-lawyer-advisor', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/services/startup-lawyer', 'priority' => '0.8', 'changefreq' => 'weekly'],
    ['loc' => '/services/nri-legal-support', 'priority' => '0.8', 'changefreq' => 'weekly'],
    ['loc' => '/pricing', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/about-us', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/blogs', 'priority' => '0.9', 'changefreq' => 'daily'],
    ['loc' => '/contact-us', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/download', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/how-it-works', 'priority' => '0.9', 'changefreq' => 'weekly'],
    ['loc' => '/privacy-policy', 'priority' => '0.9', 'changefreq' => 'monthly'],
    ['loc' => '/terms-and-conditions', 'priority' => '0.9', 'changefreq' => 'monthly'],
    ['loc' => '/customer/best-corporate-lawyers', 'priority' => '0.8', 'changefreq' => 'weekly'],
    ['loc' => '/customer/online-legal-consultation', 'priority' => '0.8', 'changefreq' => 'weekly'],
    ['loc' => '/customer/legal-criminal-lawyer', 'priority' => '0.8', 'changefreq' => 'weekly'],
    ['loc' => '/waitlist', 'priority' => '0.9', 'changefreq' => 'weekly']
];

echo '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;

foreach ($static_pages as $page) {
    echo '  <url>' . PHP_EOL;
    echo '    <loc>' . htmlspecialchars($domain . $page['loc']) . '</loc>' . PHP_EOL;
    echo '    <lastmod>' . $today . '</lastmod>' . PHP_EOL;
    echo '    <changefreq>' . $page['changefreq'] . '</changefreq>' . PHP_EOL;
    echo '    <priority>' . $page['priority'] . '</priority>' . PHP_EOL;
    echo '  </url>' . PHP_EOL;
}

// Fetch dynamic blog pages from GitHub index
$json_url = "https://raw.githubusercontent.com/mlawyerlegalconsultation/mlawyer-blog-files/main/index.json";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $json_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-Sitemap-Generator');
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200 && $response) {
    $blogs = json_decode($response, true);
    if (is_array($blogs)) {
        foreach ($blogs as $blog) {
            if (isset($blog['slug'])) {
                $lastmod = isset($blog['updatedAt']) ? $blog['updatedAt'] : (isset($blog['date']) ? $blog['date'] : $today);
                $formatted_lastmod = date('Y-m-d', strtotime($lastmod));

                echo '  <url>' . PHP_EOL;
                echo '    <loc>' . htmlspecialchars($domain . '/blog/' . $blog['slug']) . '</loc>' . PHP_EOL;
                echo '    <lastmod>' . $formatted_lastmod . '</lastmod>' . PHP_EOL;
                echo '    <changefreq>weekly</changefreq>' . PHP_EOL;
                echo '    <priority>0.8</priority>' . PHP_EOL;
                echo '  </url>' . PHP_EOL;
            }
        }
    }
}

echo '</urlset>' . PHP_EOL;
?>
