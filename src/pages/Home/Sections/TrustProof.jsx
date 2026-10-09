import React from 'react';
import {
   PiSealCheck,
   PiShieldCheck,
   PiClock,
   PiUsers,
   PiLockKey,
   PiPhoneCall,
   PiBriefcase,
   PiScales,
   PiCheckCircleFill,
   PiArrowRight
} from 'react-icons/pi';
import PopIn from '../../../components/animations/PopIn';
import { Link } from 'react-router-dom';
import { dummyAdvocates } from '../../../data/advocatesData';
import advocateImg from '../../../assets/img/advocate.png';

const trustItems = [
   {
      title: '500+ verified advocates',
      description: 'Access trusted legal experts across a wide range of practice areas.',
      icon: <PiUsers />,
      accentClassName: 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white'
   },
   {
      title: '1000+ consultations completed',
      description: 'Trusted by clients for effective legal consultations and dedicated support.',
      icon: <PiSealCheck />,
      accentClassName: 'bg-secondary/10 text-secondary'
   },
   {
      title: '24x7 support',
      description: 'Access reliable support whenever you need it.',
      icon: <PiClock />,
      accentClassName: 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white'
   },
   {
      title: 'Secured Consultation',
      description: 'Reliable online legal consultations, wherever you are.',
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
                  Trusted by Clients & Advocates
               </span>
               <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Verified advocates, affordable pricing and secured consultations
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



            {/* Explore Our Advocates Section */}
            <div className="max-w-6xl mx-auto mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
               <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 font-semibold text-xs uppercase tracking-wider mb-3">
                     <PiScales className="text-base text-secondary" /> Verified Legal Counsel
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                     Explore Our Advocates
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                     Grow your legal practice with MLawyer. Join a network of verified advocates, reach more clients online, and offer consultations on your own schedule.
                  </p>
               </div>

               {/* Advocates Grid - 3 Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dummyAdvocates.map((advocate) => (
                     <article
                        key={advocate.id}
                        className="group relative bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                     >
                        <div>
                           {/* Top Bar: Profile Photo & Full Name */}
                           <div className="flex items-center gap-4 mb-4">
                              <div className="relative shrink-0">
                                 <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-teal-50/80 dark:bg-gray-800 p-1.5 ring-2 ring-teal-100 dark:ring-gray-700 shadow-sm flex items-center justify-center overflow-hidden">
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
                                 <h4 className="font-bold text-base md:text-lg text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors truncate">
                                    {advocate.name}
                                 </h4>
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
                                    <span className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-400 font-semibold">Specialization</span>
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
                                       <span className="text-[10px] uppercase text-gray-400 dark:text-gray-400 block font-medium">Experience</span>
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
                                       <span className="text-[10px] uppercase text-gray-400 dark:text-gray-400 block font-medium">Mobile No</span>
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

               {/* Action Buttons: View All & Consult Now */}
               {/* <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                     to="/advocates"
                     className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-white dark:text-gray-950 font-bold text-sm md:text-base shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                     <span>View All</span>
                     <PiArrowRight className="text-base" />
                  </Link>
                  <Link
                     to="/download"
                     className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-gray-950 font-bold text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-sm hover:shadow-md"
                  >
                     <span>Consult Now</span>
                     <PiArrowRight className="text-base" />
                  </Link>
               </div> */}

               {/* Bottom Banner to Join or Browse More */}
               <div className="mt-12 p-6 md:p-8 rounded-3xl bg-linear-to-r from-teal-900 to-primary text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                     <h4 className="text-lg md:text-xl font-bold mb-1">Are you a practicing Advocate?</h4>
                     <p className="text-sm text-teal-100 max-w-xl">
                        Join verified legal experts on MLawyer. Expand your digital client base and consult on your own schedule.
                     </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                     <Link
                        to="/register-advocate"
                        className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-xs md:text-sm transition-all shadow hover:shadow-md"
                     >
                        Register as Advocate
                     </Link>
                     <Link
                        to="/advocates"
                        className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs md:text-sm border border-white/20 transition-all backdrop-blur-xs"
                     >
                        View All Advocates
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TrustProof;