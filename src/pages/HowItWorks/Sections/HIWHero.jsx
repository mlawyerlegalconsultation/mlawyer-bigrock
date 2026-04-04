import React from 'react';
import { motion } from 'motion/react';
import { 
    PiMagnifyingGlass, PiCalendarCheck, PiVideoCamera, PiStarFill, 
    PiUser, PiMicrophone, PiPhoneDisconnect 
} from "react-icons/pi";
import PopIn from '../../../components/animations/PopIn';
import howItWorksData from '../../../data/howItWorks.json';

const HIWHero = () => {
    const { hero } = howItWorksData;
    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden max-w-6xl mx-auto shadow-2xl">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
                    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
                                {hero.badge}
                            </div>
                            <PopIn delay={0.1}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                    {hero.titlePrefix} <br />
                                    <span className="text-secondary">{hero.titleSuffix}</span>
                                </h1>
                            </PopIn>
                            <PopIn delay={0.2}>
                                <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                    {hero.description}
                                </p>
                            </PopIn>
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-center items-center relative perspective-1000 mt-10 lg:mt-0">
                            {/* Abstract Process Visual */}
                            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                                {/* Base Glow */}
                                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[80px] animate-pulse"></div>
                                
                                {/* Node 1: Search (Top Left) */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="absolute top-4 left-0 md:top-[10%] md:left-[0%] z-10"
                                >
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 md:p-4 rounded-2xl w-32 md:w-40 transform hover:scale-105 transition-transform duration-300 shadow-xl">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-2 md:mb-3 text-blue-200">
                                            <PiMagnifyingGlass className="text-lg md:text-xl" />
                                        </div>
                                        <h3 className="text-white font-bold text-xs md:text-sm">Find Expert</h3>
                                        <p className="text-white/60 text-[10px] md:text-xs mt-1">Search by specialty</p>
                                    </div>
                                </motion.div>

                                {/* Node 2: Book (Top Right) */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="absolute top-4 right-0 md:top-[10%] md:right-[0%] z-10"
                                >
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 md:p-4 rounded-2xl w-32 md:w-40 transform hover:scale-105 transition-transform duration-300 shadow-xl">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500/20 rounded-full flex items-center justify-center mb-2 md:mb-3 text-orange-200">
                                            <PiCalendarCheck className="text-lg md:text-xl" />
                                        </div>
                                        <h3 className="text-white font-bold text-xs md:text-sm">Book Slot</h3>
                                        <p className="text-white/60 text-[10px] md:text-xs mt-1">Instant scheduling</p>
                                    </div>
                                </motion.div>

                                {/* Center Hub: Connection */}
                                <motion.div 
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                                >
                                    <div className="relative w-28 h-28 md:w-40 md:h-40 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-2xl shadow-primary/30">
                                        <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-spin-slow"></div>
                                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <PiVideoCamera className="text-3xl md:text-4xl animate-pulse" />
                                        </div>
                                        {/* Satellite Avatars */}
                                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute inset-0 w-full h-full">
                                            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border-2 border-primary overflow-hidden">
                                                 <div className="w-full h-full bg-gray-200 flex items-center justify-center"><PiUser className="text-gray-500" /></div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Node 3: Result (Bottom) */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    className="absolute bottom-4 md:bottom-[5%] left-1/2 -translate-x-1/2 z-10"
                                >
                                    <div className="bg-white text-gray-900 p-3 md:p-4 rounded-2xl w-40 md:w-48 shadow-2xl flex items-center gap-3 md:gap-4">
                                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                            <PiStarFill className="text-lg md:text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xs md:text-sm">Problem Solved</h3>
                                            <div className="flex text-yellow-500 text-[10px] md:text-xs gap-0.5 mt-1">
                                                <PiStarFill /><PiStarFill /><PiStarFill /><PiStarFill /><PiStarFill />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HIWHero;
