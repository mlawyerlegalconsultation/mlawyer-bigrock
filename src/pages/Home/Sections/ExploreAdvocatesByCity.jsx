import React from 'react';
import { PiMapPinBold, PiArrowRightBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import PopIn from '../../../components/animations/PopIn';

const cities = [
  {
    name: 'Chennai',
    image: '/cities/chennai.png',
    link: '/advocates'
  },
  {
    name: 'Coimbatore',
    image: '/cities/coimbatore.png',
    link: '/advocates'
  },
  {
    name: 'Madurai',
    image: '/cities/madurai.png',
    link: '/advocates'
  },
  {
    name: 'Trichy',
    image: '/cities/trichy.png',
    link: '/advocates'
  },
  {
    name: 'Tirunelveli',
    image: '/cities/tirunelveli.png',
    link: '/advocates'
  }
];

const ExploreAdvocatesByCity = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-teal-50/30 to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden border-t border-teal-100/60 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <PopIn delay={0}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 font-semibold text-xs uppercase tracking-wider mb-3">
              <PiMapPinBold className="text-secondary text-sm" /> Regional Legal Network
            </span>
          </PopIn>
          <PopIn delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
              Explore Advocates by City
            </h2>
          </PopIn>
          <PopIn delay={0.2}>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with verified legal professionals and experienced advocates across major cities in Tamil Nadu.
            </p>
          </PopIn>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto">
          {cities.map((city, index) => (
            <PopIn key={city.name} delay={index * 0.06} className={index === 4 ? 'col-span-2 sm:col-span-1' : ''}>
              <Link
                to={city.link}
                className="group relative block h-56 sm:h-64 lg:h-72 rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-teal-100/60 dark:border-gray-800"
              >
                {/* City Landmark Image */}
                <img
                  src={city.image}
                  alt={`${city.name} legal advocates`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent group-hover:from-gray-950/95 transition-all duration-300" />

                {/* Location Badge on Top */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 shadow-xs">
                    <PiMapPinBold className="text-secondary text-xs" />
                    <span>Tamil Nadu</span>
                  </span>
                </div>

                {/* Bottom Content: City Name */}
                <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 z-10">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-secondary transition-colors drop-shadow-sm">
                    {city.name}
                  </h3>
                </div>
              </Link>
            </PopIn>
          ))}
        </div>

        {/* Catchy line under cards: Available in all cities across India */}
        <div className="mt-10 md:mt-12 text-center">
          <PopIn delay={0.35}>
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-teal-100 dark:border-gray-800 shadow-[0_8px_30px_rgba(15,118,110,0.08)] dark:shadow-none hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-sm md:text-base text-gray-900 dark:text-white">
                Available Across All Cities in India
              </span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">•</span>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">
                Connect with verified advocates anywhere, anytime
              </span>
              <Link
                to="/advocates"
                className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-primary dark:text-teal-300 hover:text-secondary dark:hover:text-secondary transition-colors ml-1"
              >
                <span>Find Advocates</span>
                <PiArrowRightBold className="text-xs" />
              </Link>
            </div>
          </PopIn>
        </div>
      </div>
    </section>
  );
};

export default ExploreAdvocatesByCity;
