import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import yaml from "js-yaml";
import { Helmet } from "react-helmet";
import { getBlogContent } from "./blogService";
import {
  FiCalendar as Calendar,
  FiChevronLeft as ChevronLeft,
  FiLoader as Loader2,
  FiClock as Clock,
  FiUser as User,
  FiShare2 as Share2,
  FiTwitter as Twitter,
  FiLinkedin as Linkedin,
  FiMessageCircle as MessageCircle,
  FiLink as LinkIcon,
  FiCopy as Copy,
  FiCheck as Check,
  FiMaximize2 as Maximize2,
  FiX as X
} from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";

const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog?.title)}&url=${encodeURIComponent(window.location.href)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(blog?.title + " " + window.location.href)}`
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.description,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      handleCopyLink();
    }
  };

  useEffect(() => {
    // Scroll to top immediately when slug changes (new blog selected)
    window.scrollTo(0, 0);

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const data = await getBlogContent(slug);

        if (!data) {
          setError("Blog post not found.");
          return;
        }

        let metadata = {};
        if (data.rawFrontmatter) {
          try {
            metadata = yaml.load(data.rawFrontmatter);
          } catch (e) {
            console.error("YAML parsing error:", e);
          }
        }

        const content = data.content;

        // Extract headings for Table of Contents (H2 and H3)
        const lines = content.split('\n');
        const extractedHeadings = [];

        // If title is missing or starts with #/-, extract it from first H1 if available
        let extractedTitle = metadata.title || metadata.seoTitle;
        if (!extractedTitle || extractedTitle.startsWith('-') || extractedTitle.startsWith('#')) {
          const firstH1 = lines.find(line => line.startsWith('# '));
          if (firstH1) {
            extractedTitle = firstH1.replace('# ', '').trim();
          }
        }

        lines.forEach(line => {
          if (line.startsWith('## ')) {
            const text = line.replace('## ', '').trim();
            const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
            extractedHeadings.push({ text, id, level: 2 });
          } else if (line.startsWith('### ')) {
            const text = line.replace('### ', '').trim();
            const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
            extractedHeadings.push({ text, id, level: 3 });
          }
        });
        setHeadings(extractedHeadings);

        setBlog({
          content: content,
          ...metadata,
          title: extractedTitle || metadata.title,
          slug
        });
      } catch (err) {
        setError("Failed to load blog content.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Small offset for the header

      // Find the heading that is currently "active"
      // We look for the last heading that has passed the scroll position
      let currentActiveId = "";

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentActiveId = heading.id;
          } else {
            // Since headings are in order, we can break once we find one below the scroll position
            break;
          }
        }
      }

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial active state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings, blog, activeId]);

  const scrollToHeading = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Match handleScroll offset for consistency
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update active ID immediately
      setActiveId(id);
      // Update URL hash without causing a jump
      window.history.pushState(null, null, `#${id}`);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
        <p className="text-gray-600 font-medium">Loading story...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{error || "Something went wrong"}</h2>
        <Link to="/blogs" className="text-primary hover:underline flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to all blogs
        </Link>
      </div>
    );
  }

  const MarkdownComponents = {
    h1: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h1 id={id} className="text-3xl font-bold mt-8 mb-4 border-b border-gray-100 pb-2 scroll-mt-24">{children}</h1>;
    },
    h2: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h2 id={id} className="text-xl font-bold mt-6 mb-3 border-b border-gray-100 pb-2 scroll-mt-24">{children}</h2>;
    },
    h3: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h3 id={id} className="text-lg font-bold mt-4 mb-2 scroll-mt-24">{children}</h3>;
    },
    p: ({ children }) => {
      return <p className="leading-relaxed mb-3 text-gray-700 text-base font-normal">{children}</p>;
    },
    img: ({ src, alt }) => (
      <div className="relative group my-8">
        <img
          src={src}
          alt={alt}
          className="rounded-md w-full h-auto shadow-sm object-cover cursor-zoom-in"
          loading="lazy"
          onClick={() => setSelectedImage({ src, alt })}
        />
        <button
          onClick={() => setSelectedImage({ src, alt })}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
          title="View Fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-[#2563eb] font-semibold underline decoration-[#2563eb]/30 underline-offset-4 hover:decoration-[#2563eb] transition-all" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    table: ({ children }) => (
      <div className="my-4 overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left border-collapse bg-white">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-50/80 border-b border-gray-200">{children}</thead>,
    th: ({ children }) => <th className="px-3 py-2 font-semibold text-gray-900 text-[13px]">{children}</th>,
    td: ({ children }) => <td className="px-3 py-2 text-gray-600 text-[14px] border-b border-gray-100 last:border-0">{children}</td>,
    blockquote: ({ children }) => (
      <div className="flex gap-4 my-4 bg-gray-50/50 p-4 rounded-lg border-l-4 border-secondary">
        <span className="text-lg leading-relaxed font-serif text-[#1e293b] italic">
          {children}
        </span>
      </div>
    ),
    ul: ({ children }) => <ul className="list-disc list-outside space-y-2 marker:text-primary border-l border-gray-100 pl-8 my-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-outside space-y-2 marker:text-gray-900 border-l border-gray-100 pl-8 my-4">{children}</ol>,
    li: ({ children }) => <li className="text-base text-gray-700 leading-relaxed pl-2">{children}</li>,
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      const lang = match ? match[1] : "";
      const codeValue = String(children).replace(/\n$/, "");
      const codeId = useMemo(() => Math.random().toString(36).substring(7), []);

      if (inline) {
        return <code className="bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5 text-[0.9em] font-mono text-[#e11d48]">{children}</code>;
      }

      return (
        <div className="code-block-container my-4 rounded-xl overflow-hidden shadow-md border border-gray-800 bg-[#1e1e1e]">
          <div className="flex items-center justify-between px-4 py-2 bg-[#2a2a2a] border-b border-gray-800">
            <span className="text-[11px] font-mono text-gray-400 capitalize opacity-70">{lang || "text"}</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleCopyCode(codeValue, codeId)}
                className={`flex items-center gap-1.5 transition-colors text-[11px] font-medium ${copiedId === codeId ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
              >
                {copiedId === codeId ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === codeId ? "Copied!" : "Copy"}</span>
              </button>
              <div className="flex space-x-1.5 ml-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
            </div>
          </div>
          <pre className="!p-4 overflow-x-auto text-[13px] leading-relaxed !bg-transparent !m-0">
            <code className={`${className} !bg-transparent !p-0 !text-gray-100`} {...props}>
              {children}
            </code>
          </pre>
        </div>
      );
    },
    hr: () => <div className="h-[1px] w-full bg-gray-400 my-8"></div>,
  };

  // Helper for consistent URLs
  const baseUrl = "https://mlawyer.com";
  const currentUrl = blog?.canonical || `${baseUrl}/blog/${slug}`;
  const displayTitle = blog?.seoTitle || blog?.title || "Blog";
  const displayDescription = blog?.seoDescription || blog?.description || "Read our latest story";
  const displayImage = blog?.cover || blog?.coverImage || "https://mlawyer.in/Logo.png";

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": displayTitle,
    "image": displayImage,
    "datePublished": blog?.date,
    "author": {
      "@type": "Person",
      "name": blog?.author || "MLawyer Team"
    },
    "description": displayDescription,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  };

  // Create a base string for the title to avoid any dynamic character issues
  const cleanTitle = (displayTitle || "").replace(/^#\s*/, "").replace(/^-+\s*/, "").trim();

  return (
    <article className="bg-white min-h-screen">
      <Helmet prioritizeSeoTags>
        <title>{cleanTitle} | MLawyer</title>
        <meta name="description" content={displayDescription} />
        <link rel="canonical" href={currentUrl} />
        <meta name="keywords" content={blog?.seoKeywords?.join(', ') || blog?.tags?.join(', ') || "AI, Technology, MLawyer Blog"} />
        <meta name="author" content={blog?.author || "MLawyer Team"} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={cleanTitle} />
        <meta property="og:description" content={displayDescription} />
        <meta property="og:image" content={displayImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blog?.date} />
        <meta property="article:author" content={blog?.author || "MLawyer Team"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cleanTitle} />
        <meta name="twitter:description" content={displayDescription} />
        <meta name="twitter:image" content={displayImage} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={blog?.author || "MLawyer Team"} />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content={blog?.readingTime || `${Math.ceil(blog?.content?.split(/\s+/)?.length / 200)} min read`} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <img
          src={displayImage}
          alt={cleanTitle}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="max-w-4xl text-center text-white relative z-10 px-6">
            <Link to="/blogs" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              {cleanTitle}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-semibold text-white/95">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(blog.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              {blog.lastUpdated && (
                <div className="flex items-center text-white/90">
                  <Clock className="w-4 h-4 mr-2" />
                  Updated: {new Date(blog.lastUpdated).toLocaleDateString()}
                </div>
              )}
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blog.readingTime || `${Math.ceil(blog.content.split(/\s+/).length / 200)} min read`}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {blog.author || "MLawyer Team"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div ref={contentRef} className="prose prose-lg prose-teal max-w-none prose-headings:font-bold prose-img:rounded-2xl">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={MarkdownComponents}
              >
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-1 h-6 bg-primary rounded-full mr-3"></span>
                    On this page
                  </h3>
                  <nav className="space-y-1 relative">
                    <div className="absolute left-[3px] top-1 bottom-1 w-[1px] bg-gray-200"></div>
                    {headings.map((heading) => (
                      <button
                        key={heading.id}
                        onClick={(e) => scrollToHeading(e, heading.id)}
                        className={`w-full text-left py-1.5 transition-all text-sm font-medium leading-tight relative pl-5 ${activeId === heading.id
                            ? "text-primary"
                            : "text-gray-500 hover:text-gray-900"
                          } ${heading.level === 3 ? "ml-4" : ""}`}
                      >
                        {activeId === heading.id && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] bg-primary rounded-full ring-4 ring-primary/10"></div>
                        )}
                        {heading.text}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Share section */}
              <div className="flex flex-col gap-4 px-2">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Share this story:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all group shadow-sm"
                    title="Share on X (Twitter)"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={shareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all group shadow-sm"
                    title="Share on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all group shadow-sm"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-all group shadow-sm"
                    title="Share on Facebook"
                  >
                    <LuFacebook className="w-5 h-5" />
                  </a>
                  {navigator.share && (
                    <button
                      onClick={handleNativeShare}
                      className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all group shadow-sm"
                      title="More Sharing Options"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    onClick={handleCopyLink}
                    className={`p-2.5 rounded-full transition-all relative group shadow-sm border ${copySuccess
                        ? "bg-green-100 border-green-200 text-green-600"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                      }`}
                    title="Copy Link"
                  >
                    {copySuccess ? (
                      <span className="text-[10px] absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded whitespace-nowrap">
                        Copied!
                      </span>
                    ) : null}
                    <LinkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {blog.tags && blog.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-2xl lg:max-w-3xl w-full h-auto flex flex-col items-center justify-center">
            <div className="relative group/modal overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                loading="lazy"
                className="max-w-full max-h-[60vh] md:max-h-[65vh] w-auto h-auto object-contain block animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
              />
              {selectedImage.alt && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-white text-center text-sm font-medium">{selectedImage.alt}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Blog;