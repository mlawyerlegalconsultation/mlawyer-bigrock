import React, { useRef, useEffect } from 'react';
import { PiUserCheck, PiCertificate, PiShieldCheck, PiWallet, PiChartLineUp, PiBriefcase, PiLockKey } from 'react-icons/pi';
import ClientImage from '../../../assets/img/customer.png';
import LawyerImage from '../../../assets/img/lawyerr.png';
import PopIn from '../../../components/animations/PopIn';

const WhyChoose = () => {
   const containerRef = useRef(null);
   const trackRef = useRef(null);
   useEffect(() => {
      const handleScroll = () => {
         if (!containerRef.current || !trackRef.current) return;
         const container = containerRef.current;
         const rect = container.getBoundingClientRect();
         const viewportHeight = window.innerHeight;
         const scrollDist = -rect.top;
         const totalScrollable = rect.height - viewportHeight;
         let progress = 0;
         if (scrollDist > 0) {
            progress = scrollDist / totalScrollable;
         }
         progress = Math.max(0, Math.min(progress, 1));
         const translate = progress * 50;
         trackRef.current.style.transform = `translateX(-${translate}%)`;
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <section ref={containerRef} className="relative h-[250vh]">
         <div className="sticky top-0 h-screen overflow-hidden">
            <div ref={trackRef} className="flex h-full w-[200vw] will-change-transform">
               <div className="w-screen h-full pt-28 pb-8 px-4 md:px-12 lg:p-20 flex flex-col justify-start lg:justify-center bg-white dark:bg-gray-900 transition-colors duration-300 relative">
                  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full lg:h-auto overflow-y-auto lg:overflow-visible no-scrollbar">
                     <div className="pb-8 lg:pb-0">
                        <span className="text-secondary font-bold tracking-wider uppercase mb-2 block animate-pulse text-lg md:text-xl">Why Choose MLawyer ?</span>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-xl transition-colors">Get reliable legal advice and expert opinion anytime with a trusted lawyer consultation app. Connect with experienced and <h1 className='inline'> best advocates across Chennai, Coimbatore </h1> and beyond for reliable legal guidance.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                           <PopIn delay={0}>
                              <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-2xl hover:shadow-md transition-shadow">
                                 <div className="text-primary dark:text-secondary text-2xl mb-2 md:mb-3"><PiUserCheck /></div>
                                 <h3 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Instant advocate availability</h3>
                                 <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Connect with experts in minutes.</p>
                              </div>
                           </PopIn>
                           <PopIn delay={0.2}>
                              <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-2xl hover:shadow-md transition-shadow">
                                 <div className="text-primary dark:text-secondary text-2xl mb-2 md:mb-3"><PiCertificate /></div>
                                 <h3 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Verified Credentials</h3>
                                 <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Every advocate is vetted and licensed.</p>
                              </div>
                           </PopIn>
                           <PopIn delay={0.4}>
                              <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-2xl hover:shadow-md transition-shadow">
                                 <div className="text-primary dark:text-secondary text-2xl mb-2 md:mb-3"><PiShieldCheck /></div>
                                 <h3 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Confidential consultations</h3>
                                 <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Your privacy is protected with the highest level of security</p>
                              </div>
                           </PopIn>
                           <PopIn delay={0.6}>
                              <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-2xl hover:shadow-md transition-shadow">
                                 <div className="text-primary dark:text-secondary text-2xl mb-2 md:mb-3"><PiWallet /></div>
                                 <h3 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Affordable options</h3>
                                 <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Affordable and transparent pricing for everyone</p>
                              </div>
                           </PopIn>
                        </div>
                     </div>
                     <div className="hidden lg:block h-125 w-full relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                           <img src={ClientImage} alt="best advocate in coimbatore" loading="lazy" className='rounded-xl' />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-screen h-full pt-28 pb-8 px-4 md:px-12 lg:p-20 flex flex-col justify-start lg:justify-center bg-primary text-white relative">
                  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full lg:h-auto overflow-y-auto lg:overflow-visible no-scrollbar">
                     <div className="order-2 lg:order-1 hidden lg:block rounded-3xl h-125 w-full relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                           <img src={LawyerImage} alt="Best Lawyer in Coimbatore" loading="lazy" className='rounded-xl' />
                        </div>
                     </div>
                     <div className="order-1 lg:order-2 pb-8 lg:pb-0">
                        <span className="text-secondary font-bold tracking-wider uppercase mb-2 block text-lg md:text-xl">Join the Network</span>
                        <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-xl">MLawyer offers a smart way for lawyers/advocates to connect with clients anywhere in the country and earn through secure online consultations</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                           <div className="bg-white/10 border border-white/10 p-4 md:p-6 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer group">
                              <div className="text-secondary text-2xl mb-2 md:mb-3"><PiWallet /></div>
                              <h3 className="font-bold text-white mb-1">Flexible income stream</h3>
                              <p className="text-sm text-white/60">Get paid for every consultation within 24 hours.</p>
                           </div>
                           <div className="bg-white/10 border border-white/10 p-4 md:p-6 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer group">
                              <div className="text-secondary text-2xl mb-2 md:mb-3"><PiBriefcase /></div>
                              <h3 className="font-bold text-white mb-1">Flexible Application</h3>
                              <p className="text-sm text-white/60">A complete digital office for modern legal practice.</p>
                           </div>
                           <div className="bg-white/10 border border-white/10 p-4 md:p-6 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer group">
                              <div className="text-secondary text-2xl mb-2 md:mb-3"><PiLockKey /></div>
                              <h3 className="font-bold text-white mb-1">Secure payments</h3>
                              <p className="text-sm text-white/60">Secure and guaranteed payments for your consultations.</p>
                           </div>
                           <div className="bg-white/10 border border-white/10 p-4 md:p-6 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer group">
                              <div className="text-secondary text-2xl mb-2 md:mb-3"><PiChartLineUp /></div>
                              <h3 className="font-bold text-white mb-1">Professional growth</h3>
                              <p className="text-sm text-white/60">Expand your practice by connecting with more clients.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhyChoose;
