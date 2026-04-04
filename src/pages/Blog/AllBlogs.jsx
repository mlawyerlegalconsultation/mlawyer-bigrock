import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "./blogService";
import { Calendar, ChevronRight, Loader2, Search, TrendingUp, Sparkles, Send, Mail, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data || []);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog =>
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [blogs, searchQuery]);

  const topBlogs = useMemo(() => {
    return [...blogs].slice(0, 3);
  }, [blogs]);

  const recommendedBlogs = useMemo(() => {
    return [...blogs].sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [blogs]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
        <p className="text-gray-600 font-medium">Fetching the latest insights...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen ">
      <Helmet>
        <title>Our Blog | MLawyer Insights</title>
        <meta name="description" content="Explore our latest thoughts, tutorials, and industry insights on technology, development, and innovation." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="max-w-7xl mx-auto pt-4 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl mb-12 min-h-[300px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1671488618997-dfab26d9d48e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Technology Background"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-12 py-12 w-full md:w-2/3">
            <h1 className="text-4xl font-extrabold text-white sm:text-6xl tracking-tight mb-6">
              MLawyer <span className="text-secondary font-black">Blogs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-medium mb-8">
              Deep dives into modern technology, industry trends, and practical guides for lawyers and clients.
            </p>

            {/* Search Bar Inside Image Box */}
            <div className="max-w-xl relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content Area */}
          <div className="">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {!loading && filteredBlogs.length === 0 && !error && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-gray-500 text-lg font-medium">No results match your search.</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="group flex flex-col h-full"
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={blog.cover || blog.coverImage || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"}
                      alt={blog.title || "Blog cover"}
                      loading="lazy"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="px-2 flex flex-col flex-grow">
                    <div className="flex items-center text-xs font-semibold text-gray-400 mb-4 tracking-wide uppercase">
                      <Calendar className="w-3.5 h-3.5 mr-2 opacity-70" />
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight tracking-tight">
                      {blog.title}
                    </h2>

                    <p className="text-gray-500 text-base mb-6 line-clamp-2 leading-relaxed font-medium">
                      {blog.description}
                    </p>

                    <div className="mt-auto pt-2">
                      <span className="text-sm font-bold text-primary flex items-center group-hover:gap-2 transition-all">
                        Read Article <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let’s explore solutions that deliver real, measurable results.
          </p>
          <Link to="/contact-us" className="bg-secondary text-white hover:bg-secondary/90 font-semibold py-4 px-8 rounded-xl transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
