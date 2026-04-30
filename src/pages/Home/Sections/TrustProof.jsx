import React from 'react';
import { PiSealCheck, PiShieldCheck, PiClock, PiUsers, PiLockKey } from 'react-icons/pi';
import PopIn from '../../../components/animations/PopIn';
import { Link } from 'react-router-dom';

const trustItems = [
   {
      title: '500+ verified advocates',
      description: 'Licensed professionals ready to help across key practice areas.',
      icon: <PiUsers />,
      accentClassName: 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white'
   },
   {
      title: '10,000+ legal consultations completed',
      description: 'A strong track record of successful consultations and client support.',
      icon: <PiSealCheck />,
      accentClassName: 'bg-secondary/10 text-secondary'
   },
   {
      title: '24x7 support',
      description: 'Get assistance whenever you need it, day or night.',
      icon: <PiClock />,
      accentClassName: 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white'
   },
   {
      title: 'Secured Consultation',
      description: 'Protected sessions built for safe and reliable online advice.',
      icon: <PiShieldCheck />,
      accentClassName: 'bg-secondary/10 text-secondary'
   },
   {
      title: 'Client confidentiality',
      description: 'Your information stays private throughout the consultation process.',
      icon: <PiLockKey />,
      accentClassName: 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white'
   }
];

const TrustProof = () => {
   return (
      <section className="relative overflow-hidden py-14 md:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
         <div className="absolute inset-0 bg-linear-to-b from-teal-50/80 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950" />
         <div className="container mx-auto px-4 md:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
                  Trusted by clients every day
               </span>
               <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Built on verified experts, secure consultations, and consistent support
               </h2>
            </div>

            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 xl:grid-cols-5">
               {trustItems.map((item, index) => (
                  <PopIn key={item.title} delay={index * 0.08}>
                     <article className="h-full rounded-3xl border border-teal-100/80 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-5 md:p-6 shadow-[0_12px_40px_rgba(15,118,110,0.08)] dark:shadow-none hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,118,110,0.12)] transition-all duration-300">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 ${item.accentClassName}`}>
                           {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                           {item.title}
                        </h3>
                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                           {item.description}
                        </p>
                     </article>
                  </PopIn>
               ))}
            </div>

            <PopIn delay={0.25}>
               <div className="max-w-5xl mx-auto mt-12 pt-10 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">Explore Advocates by City</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">Find verified advocates near you</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                     <Link to="/cities/chennai" className="block bg-white dark:bg-gray-900 rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-800">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Chennai</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Find top advocates in Chennai for all practice areas.</p>
                     </Link>

                     <Link to="/cities/coimbatore" className="block bg-white dark:bg-gray-900 rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-800">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Coimbatore</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Search verified advocates in Coimbatore.</p>
                     </Link>

                     <Link to="/cities/madurai" className="block bg-white dark:bg-gray-900 rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-800">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Madurai</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Local legal support and consultations in Madurai.</p>
                     </Link>

                     <Link to="/cities/trichy" className="block bg-white dark:bg-gray-900 rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-800">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Trichy</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Trusted advocates serving Trichy clients.</p>
                     </Link>

                     <Link to="/cities/tirunelveli" className="block bg-white dark:bg-gray-900 rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-800">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Tirunelveli</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Find local legal expertise in Tirunelveli.</p>
                     </Link>
                  </div>
               </div>
            </PopIn>
         </div>
      </section>
   );
};

export default TrustProof;