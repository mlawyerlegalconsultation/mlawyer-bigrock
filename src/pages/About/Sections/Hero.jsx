import React from 'react';
import aboutData from '../../../data/about.json';
import { motion } from 'motion/react';
import {
    PiUser, PiCheckCircleFill, PiScales, PiGavel,
    PiMagnifyingGlass, PiHouse, PiChatCircleText, PiBell
} from "react-icons/pi";
/* import PopIn from '../../../components/animations/PopIn'; */
/* import HeroImg from '../../../assets/img/heroimage.png'; */

const Hero = () => {
    const { hero } = aboutData;
    return (
        <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm border border-teal-100 dark:border-gray-700 mb-2 animate-fade-in-up transition-colors">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            <span className="text-sm font-medium text-primary dark:text-gray-200">{hero.badge}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white tracking-tight transition-colors">
                            <span className="text-primary dark:text-secondary">{hero.title.split(' for ')[0]}</span>
                            <br className="hidden lg:block" />
                            <span className="text-secondary dark:text-secondary"> for {hero.title.split(' for ')[1]}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary/70 dark:text-gray-300 leading-relaxed max-w-2xl transition-colors">
                            {hero.subtitle}
                        </p>
                    </div>
                    <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-center perspective-1000">
                        {/* Composition Container */}
                        <div className="relative w-[250px] sm:w-[280px] aspect-[9/18] mt-10 lg:mt-0">

                            {/* Floating Card: Top Right - Lawyer Profile */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute -top-8 -right-8 sm:-right-12 z-30 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-teal-900/30 border border-gray-100 dark:border-white/10 flex items-center gap-3 w-40 backdrop-blur-md"
                            >
                                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-500/20 flex items-center justify-center text-primary dark:text-teal-300">
                                    <PiUser className="text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-gray-800 dark:text-white">Lawyer</span>
                                    <div className="h-1.5 w-12 bg-gray-200 dark:bg-gray-600 rounded-full mt-1"></div>
                                </div>
                                <div className="absolute -top-2 -right-2 bg-primary dark:bg-teal-600 text-white p-1 rounded-full border-2 border-white dark:border-gray-800 shadow-md">
                                    <PiCheckCircleFill />
                                </div>
                            </motion.div>

                            {/* Floating Card: Left - Group/MLawyer */}
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                                className="absolute top-[15%] -left-12 sm:-left-20 z-30 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-teal-900/30 border border-gray-100 dark:border-white/10 w-44 backdrop-blur-md"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-bold text-gray-800 dark:text-white">MLawyer</span>
                                    <div className="bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 p-1 rounded-full"><PiCheckCircleFill /></div>
                                </div>
                                <div className="flex -space-x-2 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center border-2 border-white dark:border-gray-700 text-orange-600 dark:text-orange-400"><PiUser /></div>
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center border-2 border-white dark:border-gray-700 text-blue-600 dark:text-blue-400"><PiUser /></div>
                                </div>
                                <div className="flex justify-between text-[9px] text-gray-500 dark:text-gray-400 font-medium">
                                    <span>Criminal Law</span>
                                    <span>Property Law</span>
                                </div>
                            </motion.div>

                            {/* Floating Card: Right - Civil Law Scale */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                                className="absolute bottom-[25%] -right-8 sm:-right-16 z-30 bg-primary dark:bg-teal-600 text-white p-3 sm:p-4 rounded-2xl shadow-xl shadow-primary/20 dark:shadow-teal-900/50 flex items-center gap-3 sm:gap-4 pr-6 border border-transparent dark:border-white/10"
                            >
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <PiScales className="text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <div className="text-sm sm:text-lg font-bold">Civil Law</div>
                                    <div className="text-[10px] sm:text-xs opacity-80">Consultation</div>
                                </div>
                            </motion.div>

                            {/* Floating Checkmarks */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute bottom-12 -left-4 sm:-left-10 z-20"
                            >
                                <div className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg dark:shadow-teal-900/30 text-primary dark:text-teal-400 border border-transparent dark:border-white/10">
                                    <PiCheckCircleFill className="text-2xl sm:text-3xl" />
                                </div>
                            </motion.div>

                            {/* Phone Mockup */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 w-full h-full bg-white dark:bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 dark:border-gray-700 shadow-2xl shadow-gray-400/50 dark:shadow-teal-900/40 overflow-hidden flex flex-col"
                            >
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>

                                {/* Status Bar area */}
                                <div className="h-8 bg-gray-50 dark:bg-gray-800 w-full shrink-0 border-b border-gray-100 dark:border-gray-800"></div>

                                {/* App Header */}
                                <div className="px-5 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shrink-0">
                                    <div className="font-bold text-lg text-gray-800 dark:text-white flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-teal-500/20 flex items-center justify-center text-primary dark:text-teal-400">
                                            <PiGavel />
                                        </div>
                                        <span>MLawyer</span>
                                    </div>
                                    <div className="relative">
                                        <PiBell className="text-gray-400 dark:text-gray-500 text-xl" />
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Search Bar */}
                                <div className="px-5 pb-4 shrink-0 bg-white dark:bg-gray-900">
                                    <div className="bg-gray-100 dark:bg-gray-800/80 rounded-xl p-3 flex items-center gap-3 text-gray-400 dark:text-gray-500 text-sm border border-transparent dark:border-white/5">
                                        <PiMagnifyingGlass />
                                        <span>Search lawyers...</span>
                                    </div>
                                </div>

                                {/* List Content */}
                                <div className="flex-1 overflow-hidden px-5 flex flex-col gap-4 pb-4 bg-white dark:bg-gray-900">
                                    {/* Item 1 */}
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-gray-700/50 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0 flex items-center justify-center">
                                            <PiUser className="text-gray-400 dark:text-gray-500" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-gray-800 dark:text-gray-100 text-sm truncate">Adv. Sarah Jenkins</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Property Law</div>
                                        </div>
                                        <div className="bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 p-1.5 rounded-full text-xs">
                                            <PiCheckCircleFill />
                                        </div>
                                    </div>

                                    {/* Item 2 (Active) */}
                                    <div className="bg-primary/5 dark:bg-teal-500/10 rounded-2xl p-3 shadow-md border border-primary/20 dark:border-teal-500/30 flex items-center gap-3 transform scale-105 origin-left">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 dark:bg-teal-500/20 overflow-hidden shrink-0 flex items-center justify-center">
                                            <PiUser className="text-primary dark:text-teal-400 text-xl" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-primary dark:text-teal-400 text-sm truncate">Adv. Raj Malhotra</div>
                                            <div className="text-xs text-primary/70 dark:text-teal-400/70">Civil Law</div>
                                        </div>
                                        <div className="bg-primary dark:bg-teal-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-medium shadow-sm shadow-primary/30 dark:shadow-teal-900/50">
                                            Connect
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-gray-700/50 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0 flex items-center justify-center">
                                            <PiUser className="text-gray-400 dark:text-gray-500" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-gray-800 dark:text-gray-100 text-sm truncate">Adv. Priya Sharma</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Criminal Law</div>
                                        </div>
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className="mt-auto flex justify-between items-center text-2xl text-gray-300 dark:text-gray-600 pt-4 border-t border-gray-100 dark:border-gray-800 px-2">
                                        <PiHouse className="text-primary dark:text-teal-500" />
                                        <PiMagnifyingGlass />
                                        <PiChatCircleText />
                                        <PiUser />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-teal-100/40 to-secondary/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 opacity-30">
                <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default Hero;
