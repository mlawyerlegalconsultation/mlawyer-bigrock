import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  PiBriefcase,
  PiScales,
  PiPhoneCall,
  PiCheckCircleFill,
  PiArrowRight
} from 'react-icons/pi';
import PopIn from '../../components/animations/PopIn';
import { normalizeLawyerMock } from '../../data/advocatesData';
import { useLawyerMockDetails } from '../../hooks/useLawyerApi';
import advocateImg from '../../assets/img/advocate.png';

const AllAdvocates = () => {
  // Fetch mock lawyer data from API with default size=20
  const { 
    data: apiLawyers, 
    isLoading, 
    isFetching 
  } = useLawyerMockDetails(0, 20);

  // Map API data only (no static data fallback)
  const advocates = useMemo(() => {
    if (apiLawyers && Array.isArray(apiLawyers) && apiLawyers.length > 0) {
      return apiLawyers.map((item, idx) => normalizeLawyerMock(item, idx));
    }
    return [];
  }, [apiLawyers]);

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950 transition-colors duration-300">
      <Helmet>
        <title>Explore Verified Advocates & Legal Experts | MLawyer</title>
        <meta
          name="description"
          content="Browse through our panel of verified and experienced advocates across Corporate, Family, Criminal, Property, and Civil Law."
        />
        <link rel="canonical" href="https://www.mlawyer.in/advocates" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden bg-linear-to-b from-teal-50/80 via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold uppercase tracking-wider text-xs md:text-sm mb-4">
              <PiScales className="text-base" /> Bar Verified Legal Network
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Explore Our Advocates
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find and consult licensed legal experts across specialized fields. Transparent credentials, verified experience, and instant booking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Advocates Grid Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-10">
          {/* Results Summary Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800 max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Showing{' '}
                <span className="font-bold text-gray-900 dark:text-white">
                  {advocates.length}
                </span>{' '}
                Verified Advocates
              </span>
              {isFetching && (
                <span className="inline-flex items-center gap-1 text-xs text-primary dark:text-teal-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  Updating...
                </span>
              )}
            </div>

            <Link
              to="/download"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-primary dark:text-secondary hover:underline"
            >
              <span>Book Direct Consultation</span>
              <PiArrowRight className="text-sm" />
            </Link>
          </div>

          {/* Skeletons on Initial Loading */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="h-[340px] rounded-3xl p-6 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 animate-pulse flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3.5 bg-gray-200 dark:bg-gray-800 rounded w-20" />
                        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-36" />
                      </div>
                    </div>
                    <div className="space-y-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex flex-wrap gap-1.5">
                        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-md w-20" />
                        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-md w-16" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-xl" />
                        <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="h-11 bg-gray-200 dark:bg-gray-800 rounded-xl mt-4" />
                </div>
              ))}
            </div>
          )}

          {/* Advocates Grid */}
          {!isLoading && advocates.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {advocates.map((advocate, idx) => (
                <article
                  key={advocate.id || `advocate-${idx}`}
                  className="h-full group relative bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Bar: Profile Photo & Full Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full bg-teal-50/80 dark:bg-gray-800 p-1.5 ring-2 ring-teal-100 dark:ring-gray-700 shadow-sm flex items-center justify-center overflow-hidden">
                          <img
                            src={advocateImg}
                            alt={advocate.name}
                            className="w-full h-full rounded-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        {advocate.verified && (
                          <span
                            className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-900 rounded-full p-0.5 text-secondary text-lg shadow"
                            title="Bar Certified & Verified"
                          >
                            <PiCheckCircleFill className="text-secondary" />
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary mb-1">
                          Verified Advocate
                        </span>
                        <h2 className="font-bold text-base md:text-lg text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors truncate">
                          {advocate.name}
                        </h2>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-3 pt-3 border-t border-gray-100 dark:border-gray-800 text-sm">
                      {/* Specialization as Chip UI */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-5 h-5 rounded-md bg-teal-50 dark:bg-gray-800 flex items-center justify-center text-primary dark:text-teal-300 shrink-0">
                            <PiScales className="text-xs" />
                          </div>
                          <span className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-400 font-semibold">
                            Specialization
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1.5 min-h-[48px] items-start content-start">
                          {advocate.specializations?.map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-teal-50/90 dark:bg-gray-800 text-primary dark:text-teal-300 text-xs font-semibold border border-teal-100/70 dark:border-gray-700/70 shadow-2xs"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Experience & Mobile Grid */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {/* Experience */}
                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/60 p-2.5 rounded-xl border border-gray-100 dark:border-gray-800/60">
                          <div className="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-primary dark:text-secondary shrink-0 shadow-xs">
                            <PiBriefcase className="text-base" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] uppercase text-gray-400 dark:text-gray-400 block font-medium">
                              Experience
                            </span>
                            <span className="font-semibold text-xs text-gray-900 dark:text-white truncate block">
                              {advocate.experience}
                            </span>
                          </div>
                        </div>

                        {/* Mobile No */}
                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/60 p-2.5 rounded-xl border border-gray-100 dark:border-gray-800/60">
                          <div className="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-primary dark:text-teal-400 shrink-0 shadow-xs">
                            <PiPhoneCall className="text-base" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] uppercase text-gray-400 dark:text-gray-400 block font-medium">
                              Mobile No
                            </span>
                            <span className="font-semibold text-xs text-gray-900 dark:text-white font-mono tracking-tight block">
                              {advocate.mobile}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
                    <Link
                      to="/download"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-white dark:text-gray-950 text-xs md:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow group-hover:translate-x-0.5"
                    >
                      <span>Consult Now</span>
                      <PiArrowRight className="text-sm" />
                    </Link>
                    <Link
                      to="/download"
                      title="Call via MLawyer App"
                      className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                    >
                      <PiPhoneCall className="text-base" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom Banner */}
          <div className="max-w-6xl mx-auto mt-16 p-8 md:p-10 rounded-3xl bg-linear-to-r from-teal-900 via-primary to-teal-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-teal-200 mb-2">
                Fast & Confidential
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Need Immediate Legal Consultation?</h3>
              <p className="text-sm text-teal-100 max-w-xl">
                Get connected with verified advocates within minutes. Secure video calls, document reviews, and transparent advice.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                to="/download"
                className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-sm transition-all shadow hover:shadow-md"
              >
                Consult Now
              </Link>
              <Link
                to="/register-advocate"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-xs"
              >
                Join as Advocate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllAdvocates;


