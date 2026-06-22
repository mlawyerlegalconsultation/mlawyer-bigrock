import React, { useState, useEffect } from 'react';
import { FaGavel, FaPhoneAlt, FaShieldAlt, FaFileContract, FaBalanceScale, FaCheckCircle, FaUserTie, FaHandshake } from 'react-icons/fa';
import { MdVerified, MdSecurity } from 'react-icons/md';
import PopIn from './animations/PopIn';

// Floating icon component
const FloatingIcon = ({ Icon, className, delay = 0, duration = 6, color = 'primary' }) => (
  <div
    className={`absolute pointer-events-none ${color === 'primary' ? 'text-primary/40 dark:text-white/20' : 'text-secondary/50 dark:text-secondary/40'} ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <Icon />
  </div>
);

const LatestFromMLawyer = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);

  useEffect(() => {
    const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    if (!accessToken) {
      return;
    }

    const fetchReels = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,permalink,caption,timestamp&limit=50&access_token=${accessToken}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch Instagram media: ${response.statusText}`);
        }
        const data = await response.json();
        if (data && Array.isArray(data.data)) {
          // Prioritize video media type (reels)
          const videoItems = data.data.filter(item => item.media_type === 'VIDEO');
          
          let selectedItems = [...videoItems];
          
          // If we have fewer than 4 videos, fill the remaining slots with other post types (images, carousels)
          if (selectedItems.length < 4) {
            const nonVideoItems = data.data.filter(item => item.media_type !== 'VIDEO');
            selectedItems = [...selectedItems, ...nonVideoItems];
          }

          const extractedReels = selectedItems
            .map(item => {
              const match = item.permalink ? item.permalink.match(/\/(?:reel|p|tv)\/([a-zA-Z0-9_-]+)/) : null;
              return match ? match[1] : null;
            })
            .filter(Boolean)
            .slice(0, 4);

          setReels(extractedReels);
        }
      } catch (err) {
        console.error('Error fetching Instagram reels:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReels();
  }, []);

  if (!loading && reels.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-teal-200 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side icons */}
        <FloatingIcon Icon={() => <MdVerified className="text-5xl" />} className="top-[10%] left-[5%]" delay={0} duration={7} color="secondary" />
        <FloatingIcon Icon={() => <FaGavel className="text-4xl" />} className="top-[30%] left-[8%]" delay={1.5} duration={8} color="primary" />
        <FloatingIcon Icon={() => <FaPhoneAlt className="text-3xl" />} className="top-[55%] left-[3%]" delay={0.5} duration={6} color="secondary" />
        <FloatingIcon Icon={() => <FaFileContract className="text-4xl" />} className="top-[75%] left-[10%]" delay={2} duration={7} color="primary" />
        <FloatingIcon Icon={() => <FaHandshake className="text-5xl" />} className="top-[45%] left-[12%]" delay={3} duration={9} color="secondary" />

        {/* Right side icons */}
        <FloatingIcon Icon={() => <FaBalanceScale className="text-5xl" />} className="top-[15%] right-[6%]" delay={1} duration={8} color="primary" />
        <FloatingIcon Icon={() => <FaShieldAlt className="text-4xl" />} className="top-[35%] right-[4%]" delay={2.5} duration={7} color="secondary" />
        <FloatingIcon Icon={() => <FaCheckCircle className="text-3xl" />} className="top-[60%] right-[8%]" delay={0.8} duration={6} color="primary" />
        <FloatingIcon Icon={() => <FaUserTie className="text-4xl" />} className="top-[80%] right-[5%]" delay={1.8} duration={8} color="secondary" />
        <FloatingIcon Icon={() => <MdSecurity className="text-5xl" />} className="top-[50%] right-[12%]" delay={3.5} duration={9} color="primary" />

        {/* Scattered/Top/Bottom icons */}
        <FloatingIcon Icon={() => <MdVerified className="text-3xl" />} className="top-[5%] left-[25%]" delay={2.2} duration={7} color="secondary" />
        <FloatingIcon Icon={() => <FaGavel className="text-3xl" />} className="top-[8%] right-[25%]" delay={1.2} duration={6} color="primary" />
        <FloatingIcon Icon={() => <FaBalanceScale className="text-3xl" />} className="bottom-[10%] left-[20%]" delay={0.3} duration={8} color="secondary" />
        <FloatingIcon Icon={() => <FaShieldAlt className="text-3xl" />} className="bottom-[15%] right-[22%]" delay={2.8} duration={7} color="primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-left mb-12">
          <PopIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Latest from <span className="text-secondary">MLawyer</span>
            </h2>
          </PopIn>
          <PopIn delay={0.1}>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl transition-colors duration-300">
              Stay updated with our latest legal tips, interactive discussions, and client advice directly from our Instagram.
            </p>
          </PopIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto justify-items-center">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full max-w-[340px] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md bg-white dark:bg-gray-800/40 p-4 flex flex-col justify-between animate-pulse"
                style={{ aspectRatio: '340 / 450' }}
              >
                <div className="w-full h-[350px] bg-gray-200 dark:bg-gray-700/60 rounded-xl" />
                <div className="flex items-center space-x-3 mt-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700/60" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700/60 rounded w-1/3" />
                    <div className="h-2 bg-gray-200 dark:bg-gray-700/60 rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            reels.map((id, index) => (
              <PopIn key={id} delay={0.2 + index * 0.1} className="w-full flex justify-center">
                <div
                  className="relative w-full max-w-[340px] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-md bg-white dark:bg-gray-800 group/card transition-colors duration-300"
                  style={{ aspectRatio: '340 / 450' }}
                >
                  {/* Clickable Overlay */}
                  <div
                    onClick={() => setSelectedReel(id)}
                    className="absolute inset-0 z-20 cursor-pointer bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center group"
                  >
                    {/* Play Icon */}
                    <div className="w-14 h-14 rounded-full bg-white/90 text-teal-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-350 shadow-lg">
                      <svg className="w-6 h-6 fill-current translate-x-[2px]" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <iframe
                    src={`https://www.instagram.com/reel/${id}/embed/`}
                    className="absolute inset-x-0 top-0 w-full h-[112%] block z-10"
                    scrolling="no"
                    allowTransparency="true"
                    style={{ border: 'none', overflow: 'hidden' }}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-view"
                    title={`Instagram Reel ${id}`}
                  />
                </div>
              </PopIn>
            ))
          )}
        </div>
      </div>

      {/* Reel Popup Modal */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          {/* Click outside container to close */}
          <div
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setSelectedReel(null)}
          />

          {/* Close button at screen top-right */}
          <button
            onClick={() => setSelectedReel(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-300 shadow-lg border border-white/10 hover:scale-105"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal content wrapper */}
          <div
            className="relative w-full max-w-[360px] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-200 dark:border-gray-800 animate-scale-up"
            style={{ aspectRatio: '360 / 440' }}
          >
            {/* Embedded Iframe Player */}
            <div className="w-full h-full bg-black">
              <iframe
                src={`https://www.instagram.com/reel/${selectedReel}/embed/`}
                className="absolute inset-x-0 top-0 w-full h-[112%] block"
                scrolling="no"
                allowTransparency="true"
                style={{ border: 'none', overflow: 'hidden' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-view"
                title={`Instagram Reel Modal ${selectedReel}`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Glow Blur Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob transition-colors duration-300"></div>
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-secondary/30 dark:bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 transition-colors duration-300"></div>
      </div>

      {/* Floating and Modal animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(-8px) rotate(-3deg);
          }
          75% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default LatestFromMLawyer;
