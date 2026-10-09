import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  PiGiftBold,
  PiShieldCheckBold,
  PiScalesBold,
  PiPlusCircleBold,
  PiSealCheckBold,
  PiVideoCameraBold,
  PiSlidersHorizontalBold,
  PiCreditCardBold,
  PiBriefcaseBold,
  PiLockKeyBold,
  PiSparkleBold,
  PiCaretLeftBold,
  PiCaretRightBold,
  PiCheckCircleFill,
  PiArrowRightBold
} from 'react-icons/pi';
import PopIn from '../../../components/animations/PopIn';

// First 5 Points: Core Platform Benefits
const firstFiveItems = [
  {
    id: '01',
    title: 'No Registration Fees',
    tagline: 'Zero upfront fees for everyone',
    description:
      'Advocates and clients can register and use the MLawyer platform without any registration or sign-up fees.',
    icon: PiGiftBold,
    highlight: 'Zero Upfront Cost'
  },
  {
    id: '02',
    title: 'Secure & Advanced Technology',
    tagline: 'State-of-the-art mobile infrastructure',
    description:
      'A sophisticated mobile app designed to facilitate secure legal consultations, protected payments, and reliable communication between clients and advocates.',
    icon: PiShieldCheckBold,
    highlight: 'Encrypted & Reliable'
  },
  {
    id: '03',
    title: 'Fair & Common Consultation Fees',
    tagline: 'Uniform, transparent fee structure',
    description:
      'Access legal consultations at common and transparent fees, irrespective of an advocate’s experience, specialization, or domain expertise.',
    icon: PiScalesBold,
    highlight: 'Transparent Pricing'
  },
  {
    id: '04',
    title: 'Multiple Consultation Add-ons',
    tagline: 'Tailored services for diverse needs',
    description:
      'Enhance your consultation experience with a range of optional add-on services designed to meet different client requirements.',
    icon: PiPlusCircleBold,
    highlight: 'Flexible Add-ons'
  },
  {
    id: '05',
    title: 'Verified Legal Professionals',
    tagline: 'Rigorous Bar Council verification',
    description:
      'Connect with verified advocates whose professional credentials and Bar Council enrolment details are validated before they are listed on the platform.',
    icon: PiSealCheckBold,
    highlight: '100% Vetted Advocates'
  }
];

// Next 5 Points: Consultation Experience & Privacy
const nextFiveItems = [
  {
    id: '06',
    title: 'Convenient Online Consultations',
    tagline: 'High-definition video consultations',
    description:
      'Consult with advocates through secure video consultations from the comfort of your home or office—without the need for travel.',
    icon: PiVideoCameraBold,
    highlight: 'No Travel Needed'
  },
  {
    id: '07',
    title: 'Flexible Consultation Options',
    tagline: 'Pick durations that suit your case',
    description:
      'Choose from different consultation durations and services based on your legal requirements and preferences.',
    icon: PiSlidersHorizontalBold,
    highlight: 'Customizable Slots'
  },
  {
    id: '08',
    title: 'Transparent & Secure Payments',
    tagline: 'Safe, instant online transactions',
    description:
      'Make payments through a secure online payment process with clear consultation charges and applicable add-on fees.',
    icon: PiCreditCardBold,
    highlight: 'Secure Payment Gateway'
  },
  {
    id: '09',
    title: 'Wide Range of Legal Expertise',
    tagline: 'Comprehensive legal specializations',
    description:
      'Find advocates across multiple areas of legal practice, making it easier to connect with the right professional for your requirements.',
    icon: PiBriefcaseBold,
    highlight: 'Multi-Domain Legal Aid'
  },
  {
    id: '10',
    title: 'Privacy-Focused Consultations',
    tagline: 'Strict confidentiality guaranteed',
    description:
      'Consultation workflows are designed with privacy and confidentiality in mind, helping clients discuss their legal matters in a secure environment.',
    icon: PiLockKeyBold,
    highlight: '100% Confidential'
  }
];

const WhyChooseMLawyer = () => {
  // Section 1 State (Items 1-5)
  const [index1, setIndex1] = useState(0);
  const [paused1, setPaused1] = useState(false);

  // Section 2 State (Items 6-10)
  const [index2, setIndex2] = useState(0);
  const [paused2, setPaused2] = useState(false);

  // Auto-cycle Section 1 every 2 seconds
  useEffect(() => {
    if (paused1) return;
    const timer = setInterval(() => {
      setIndex1((prev) => (prev + 1) % firstFiveItems.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [paused1]);

  // Auto-cycle Section 2 every 2 seconds
  useEffect(() => {
    if (paused2) return;
    const timer = setInterval(() => {
      setIndex2((prev) => (prev + 1) % nextFiveItems.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [paused2]);

  const active1 = firstFiveItems[index1];
  const ActiveIcon1 = active1.icon;

  const active2 = nextFiveItems[index2];
  const ActiveIcon2 = active2.icon;

  return (
    <div className="flex flex-col">
      {/* SECTION 1: Why Choose MLawyer (Points 1 - 5) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50/40 via-white to-slate-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal-200/20 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section 1 Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <PopIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm border border-primary/20 dark:border-teal-700/30 text-primary dark:text-teal-300 font-semibold text-xs uppercase tracking-wider mb-4">
                <PiSparkleBold className="text-secondary text-sm" />
                <span>Why Choose MLawyer</span>
              </div>
            </PopIn>
            <PopIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                Why Choose <span className="text-secondary">MLawyer</span>?
              </h2>
            </PopIn>
          </div>

          {/* Section 1 Content: Left Titles (1-5) | Right Details (1-5) */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto"
            onMouseEnter={() => setPaused1(true)}
            onMouseLeave={() => setPaused1(false)}
          >
            {/* Left: Titles List (1 to 5) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between px-2 pb-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <span>Core Advantages</span>
                <span className="flex items-center gap-1.5 text-secondary normal-case font-medium">
                  <span className={`w-2 h-2 rounded-full ${paused1 ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
                  {paused1 ? 'Paused on hover' : 'Auto-cycles 2s'}
                </span>
              </div>

              {firstFiveItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === index1;

                return (
                  <button
                    key={item.id}
                    onClick={() => setIndex1(index)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between gap-3 relative overflow-hidden group border cursor-pointer ${isActive
                        ? 'bg-primary text-white dark:bg-teal-950 dark:border-teal-700 shadow-lg shadow-teal-900/15 border-primary scale-[1.01]'
                        : 'bg-white/80 dark:bg-gray-800/80 hover:bg-teal-50/80 dark:hover:bg-gray-750 text-gray-800 dark:text-gray-200 border-gray-100 dark:border-gray-700/60 shadow-xs'
                      }`}
                  >
                    {/* Active 2s Progress Bar */}
                    {isActive && !paused1 && (
                      <motion.div
                        key={`prog1-${index1}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'linear' }}
                        className="absolute bottom-0 left-0 h-1 bg-secondary"
                      />
                    )}

                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-colors ${isActive
                            ? 'bg-secondary text-gray-900 font-bold'
                            : 'bg-primary/10 text-primary dark:bg-gray-700 dark:text-gray-200 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-gray-900'
                          }`}
                      >
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <span
                          className={`text-xs font-mono font-bold block mb-0.5 ${isActive ? 'text-secondary' : 'text-gray-400 dark:text-gray-500'
                            }`}
                        >
                          POINT {item.id}
                        </span>
                        <h3
                          className={`text-sm sm:text-base font-bold truncate ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'
                            }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-md shrink-0 transition-opacity ${isActive
                          ? 'bg-white/15 text-secondary'
                          : 'text-gray-400 group-hover:text-primary dark:group-hover:text-secondary'
                        }`}
                    >
                      #{item.id}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Detailed Showcase Card (1 to 5) */}
            <div className="lg:col-span-7">
              <motion.div
                key={`card1-${index1}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-teal-100 dark:border-gray-700/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden min-h-[420px] flex flex-col justify-between"
              >
                {/* Top Ambient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-teal-400" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-xs uppercase tracking-wider">
                      <span>Point {active1.id} of 05</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                      <PiCheckCircleFill className="text-sm" />
                      {active1.highlight}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary to-teal-800 text-secondary flex items-center justify-center text-3xl sm:text-4xl shadow-lg shadow-teal-950/15 shrink-0">
                      <ActiveIcon1 />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider block mb-1">
                        {active1.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                        {active1.id}. {active1.title}
                      </h3>
                    </div>
                  </div>

                  <div className="bg-teal-50/50 dark:bg-gray-900/60 rounded-2xl p-5 sm:p-6 border border-teal-100/70 dark:border-gray-700/50 mb-6">
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                      {active1.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Steppers & Navigation */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    {firstFiveItems.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setIndex1(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === index1
                            ? 'w-6 bg-secondary'
                            : 'w-2 bg-gray-200 dark:bg-gray-700 hover:bg-teal-300 dark:hover:bg-gray-500'
                          }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIndex1((prev) => (prev === 0 ? firstFiveItems.length - 1 : prev - 1))}
                      aria-label="Previous advantage"
                      className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <PiCaretLeftBold className="text-lg" />
                    </button>
                    <button
                      onClick={() => setIndex1((prev) => (prev + 1) % firstFiveItems.length)}
                      aria-label="Next advantage"
                      className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <PiCaretRightBold className="text-lg" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Seamless Consultation & Privacy (Points 6 - 10) */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 via-teal-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden border-t border-teal-100/60 dark:border-gray-800">
        {/* Background Glows */}
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-teal-200/20 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section 2 Content: Left Details (6-10) | Right Titles (6-10) */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto"
            onMouseEnter={() => setPaused2(true)}
            onMouseLeave={() => setPaused2(false)}
          >
            {/* Left: Detailed Showcase Card (6 to 10) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                key={`card2-${index2}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-teal-100 dark:border-gray-700/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden min-h-[420px] flex flex-col justify-between"
              >
                {/* Top Ambient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-teal-400 to-primary" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-xs uppercase tracking-wider">
                      <span>Point {active2.id} of 10</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                      <PiCheckCircleFill className="text-sm" />
                      {active2.highlight}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-800 to-primary text-secondary flex items-center justify-center text-3xl sm:text-4xl shadow-lg shadow-teal-950/15 shrink-0">
                      <ActiveIcon2 />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider block mb-1">
                        {active2.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                        {active2.id}. {active2.title}
                      </h3>
                    </div>
                  </div>

                  <div className="bg-teal-50/50 dark:bg-gray-900/60 rounded-2xl p-5 sm:p-6 border border-teal-100/70 dark:border-gray-700/50 mb-6">
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                      {active2.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Steppers & Navigation */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    {nextFiveItems.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setIndex2(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === index2
                            ? 'w-6 bg-secondary'
                            : 'w-2 bg-gray-200 dark:bg-gray-700 hover:bg-teal-300 dark:hover:bg-gray-500'
                          }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIndex2((prev) => (prev === 0 ? nextFiveItems.length - 1 : prev - 1))}
                      aria-label="Previous advantage"
                      className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <PiCaretLeftBold className="text-lg" />
                    </button>
                    <button
                      onClick={() => setIndex2((prev) => (prev + 1) % nextFiveItems.length)}
                      aria-label="Next advantage"
                      className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <PiCaretRightBold className="text-lg" />
                    </button>
                    <Link
                      to="/download"
                      className="ml-2 inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-white hover:bg-teal-900 dark:bg-secondary dark:text-gray-900 dark:hover:bg-amber-400 font-bold text-sm rounded-xl transition-all shadow-sm"
                    >
                      <span>Get App</span>
                      <PiArrowRightBold />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Titles List (6 to 10) */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-3">
              <div className="flex items-center justify-between px-2 pb-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <span>Features & Privacy</span>
                <span className="flex items-center gap-1.5 text-secondary normal-case font-medium">
                  <span className={`w-2 h-2 rounded-full ${paused2 ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
                  {paused2 ? 'Paused on hover' : 'Auto-cycles 2s'}
                </span>
              </div>

              {nextFiveItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === index2;

                return (
                  <button
                    key={item.id}
                    onClick={() => setIndex2(index)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between gap-3 relative overflow-hidden group border cursor-pointer ${isActive
                        ? 'bg-primary text-white dark:bg-teal-950 dark:border-teal-700 shadow-lg shadow-teal-900/15 border-primary scale-[1.01]'
                        : 'bg-white/80 dark:bg-gray-800/80 hover:bg-teal-50/80 dark:hover:bg-gray-750 text-gray-800 dark:text-gray-200 border-gray-100 dark:border-gray-700/60 shadow-xs'
                      }`}
                  >
                    {/* Active 2s Progress Bar */}
                    {isActive && !paused2 && (
                      <motion.div
                        key={`prog2-${index2}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'linear' }}
                        className="absolute bottom-0 left-0 h-1 bg-secondary"
                      />
                    )}

                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-colors ${isActive
                            ? 'bg-secondary text-gray-900 font-bold'
                            : 'bg-primary/10 text-primary dark:bg-gray-700 dark:text-gray-200 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-gray-900'
                          }`}
                      >
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <span
                          className={`text-xs font-mono font-bold block mb-0.5 ${isActive ? 'text-secondary' : 'text-gray-400 dark:text-gray-500'
                            }`}
                        >
                          POINT {item.id}
                        </span>
                        <h3
                          className={`text-sm sm:text-base font-bold truncate ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'
                            }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-md shrink-0 transition-opacity ${isActive
                          ? 'bg-white/15 text-secondary'
                          : 'text-gray-400 group-hover:text-primary dark:group-hover:text-secondary'
                        }`}
                    >
                      #{item.id}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseMLawyer;
