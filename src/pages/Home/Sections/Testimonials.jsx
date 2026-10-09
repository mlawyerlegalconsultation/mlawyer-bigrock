import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const testimonials = {
  heading: 'Success Stories',
  subHeading: 'Trusted by Clients & Advocates',
  items: [
    {
      id: 1,
      name: 'Karthik Subramanian',
      role: 'Client (Property Law)',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      content:
        'Getting my property documents verified before registry in Chennai was completely stress-free. The advocate pointed out critical clauses I would have missed. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Kavitha Rajendran',
      role: 'Client (Civil Consultation)',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      content:
        'I needed urgent legal guidance on family property partition in Coimbatore. MLawyer connected me with an expert advocate in minutes. The video consultation was clear and reassuring.',
      rating: 5
    },
    {
      id: 3,
      name: 'Venkat Rao Reddy',
      role: 'Client (Corporate & Startup)',
      image: 'https://randomuser.me/api/portraits/men/72.jpg',
      content:
        'Drafting vendor agreements and employment contracts for our venture was handled seamlessly. Transparent pricing and actionable legal counsel made the entire process swift.',
      rating: 5
    },
    {
      id: 4,
      name: 'Lakshmi Prasanna',
      role: 'Client (Family Law)',
      image: 'https://randomuser.me/api/portraits/women/79.jpg',
      content:
        'The advocate was extremely understanding and guided me through family mediation with patience. Having a private, secured online consultation gave me confidence and peace of mind.',
      rating: 5
    },
    {
      id: 5,
      name: 'Rajesh Sharma',
      role: 'Client (Commercial Law)',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      content:
        'Finalizing our commercial lease deeds and business partnership terms used to take weeks of delays. With MLawyer, our consultation was scheduled on demand and agreements were finalized effortlessly.',
      rating: 5
    },
    {
      id: 6,
      name: 'Pooja Verma',
      role: 'Client (Consumer Rights)',
      image: 'https://randomuser.me/api/portraits/women/24.jpg',
      content:
        'I needed legal counsel regarding an unresolved e-commerce consumer grievance. The advocate explained consumer protection procedures clearly and helped me draft a solid legal notice.',
      rating: 5
    },
    {
      id: 7,
      name: 'Mohammed Farooq',
      role: 'Client (Business Contracts)',
      image: 'https://randomuser.me/api/portraits/men/86.jpg',
      content:
        'Consulted a senior advocate regarding supplier contract breach and arbitration clauses. The legal advice was sharp, thorough, and protected our commercial interests completely.',
      rating: 5
    },
    {
      id: 8,
      name: 'Ayesha Fatima',
      role: 'Client (Legal Consultation)',
      image: 'https://randomuser.me/api/portraits/women/48.jpg',
      content:
        'Booking an online legal consultation was quick, confidential, and reassuring. The advocate answered every query with great care, clarity, and professionalism. A truly reliable platform!',
      rating: 5
    }
  ]
};

const Testimonials = () => {
  const items = testimonials.items;
  const totalItems = items.length; // 8 items
  // Triple the items to enable seamless, infinite looping in both directions
  const extendedItems = [...items, ...items, ...items]; // 24 items

  const [currentIndex, setCurrentIndex] = useState(totalItems); // Start at index 8 (middle set)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [resetTimerKey, setResetTimerKey] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Update visible items count responsively
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Slide forward
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setResetTimerKey((k) => k + 1);
  }, []);

  // Slide backward
  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setResetTimerKey((k) => k + 1);
  }, []);

  // Click dot indicator
  const handleDotClick = (dotIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(totalItems + dotIndex);
    setResetTimerKey((k) => k + 1);
  };

  // Auto-scroll every 2 seconds (2000ms)
  useEffect(() => {
    if (isHovered || isUserPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, isUserPaused, resetTimerKey, handleNext]);

  // Seamless boundary wrap when reaching end or start
  const handleTransitionEnd = () => {
    if (currentIndex >= totalItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - totalItems);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + totalItems);
    }
  };

  // Re-enable smooth transition right after instant reset
  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  // Touch gesture support for mobile devices
  const handleTouchStart = (e) => {
    setIsHovered(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    setIsHovered(false);
  };

  // 0-indexed active dot corresponding to current review
  const activeDotIndex = ((currentIndex % totalItems) + totalItems) % totalItems;

  return (
    <section className="py-20 bg-primary/5 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase mb-2 block animate-pulse">
            {testimonials.heading}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
            {testimonials.subHeading}
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Verified experiences from clients and legal professionals who trust MLawyer for on-demand legal counsel.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Viewport */}
          <div
            className="overflow-hidden py-6 -mx-3.5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex items-stretch"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                transition: isTransitioning
                  ? 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedItems.map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3.5 box-border flex"
                >
                  {/* Card Styled according to the Reference Theme */}
                  <div className="bg-[#FAF9F5] dark:bg-gray-800/95 p-7 md:p-8 rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_55px_rgba(0,93,96,0.13)] border border-gray-100/90 dark:border-gray-700/70 hover:border-primary/40 dark:hover:border-secondary/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between w-full h-full relative group">
                    <div>
                      {/* Top Row: Squircle Avatar Blob + Stars */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/10 via-secondary/15 to-primary/5 dark:from-primary/25 dark:to-secondary/25 p-1 flex items-center justify-center border border-teal-100/70 dark:border-gray-700/60 shadow-xs group-hover:scale-105 transition-transform duration-300">
                          <img
                            loading="lazy"
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full rounded-xl object-cover ring-1 ring-primary/20 dark:ring-secondary/20"
                          />
                        </div>
                        <div className="flex items-center gap-1 text-secondary">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} size={14} />
                          ))}
                        </div>
                      </div>

                      {/* Title: Client Name */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors truncate">
                        {testimonial.name}
                      </h3>

                      {/* Subtitle: Role */}
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-secondary mt-0.5 mb-4">
                        {testimonial.role}
                      </p>

                      {/* Review Quote */}
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                        "{testimonial.content}"
                      </p>
                    </div>

                  </div>
                </div>

              ))}
            </div>
          </div>

          {/* Carousel Controls, Status & Dots */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 max-w-3xl mx-auto px-2">
            <div></div>
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 transition-all shadow-xs hover:scale-105 active:scale-95"
                aria-label="Previous review"
              >
                <FaChevronLeft className="text-xs" />
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {items.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => handleDotClick(dotIdx)}
                    aria-label={`Go to review ${dotIdx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${activeDotIndex === dotIdx
                      ? 'w-7 bg-primary dark:bg-secondary'
                      : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                      }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 transition-all shadow-xs hover:scale-105 active:scale-95"
                aria-label="Next review"
              >
                <FaChevronRight className="text-xs" />
              </button>

              <button
                type="button"
                onClick={() => setIsUserPaused((prev) => !prev)}
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:border-primary dark:hover:border-secondary transition-all shadow-xs hover:scale-105 active:scale-95"
                aria-label={isUserPaused ? 'Resume auto scroll' : 'Pause auto scroll'}
                title={isUserPaused ? 'Resume auto scroll' : 'Pause auto scroll'}
              >
                {isUserPaused ? (
                  <FaPlay className="text-[10px] ml-0.5 text-primary dark:text-secondary" />
                ) : (
                  <FaPause className="text-[10px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Testimonials;
