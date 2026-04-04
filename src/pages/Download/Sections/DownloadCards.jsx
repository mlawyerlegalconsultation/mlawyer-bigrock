import React from 'react';
import downloadData from '../../../data/download.json';
import { FaApple, FaGooglePlay, FaCheck } from 'react-icons/fa';
import { motion } from 'motion/react';
import PopIn from '../../../components/animations/PopIn';

const DownloadCards = () => {
    const { customer, lawyer } = downloadData;

    return (
        <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Customer Card */}
                    <PopIn delay={0.1}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-teal-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative bg-gradient-to-br from-primary to-teal-700 rounded-3xl p-8 lg:p-12 overflow-hidden">
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full -ml-24 -mb-24"></div>
                                
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                        <span className="text-sm font-medium text-white">Customer App</span>
                                    </div>
                                    
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{customer.title}</h3>
                                    <p className="text-white/80 text-lg mb-8 leading-relaxed">{customer.description}</p>
                                    
                                    <ul className="space-y-3 mb-10">
                                        {customer.features.map((feature, index) => (
                                            <motion.li 
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * index }}
                                                className="flex items-center gap-3 text-white/90"
                                            >
                                                <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                                    <FaCheck className="text-secondary text-xs" />
                                                </span>
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a 
                                            href={customer.playStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg justify-center"
                                        >
                                            <FaGooglePlay className="text-xl" />
                                            <div className="text-left">
                                                <div className="text-[10px] uppercase font-semibold text-gray-500">Get it on</div>
                                                <div className="text-sm leading-none">Google Play</div>
                                            </div>
                                        </a>
                                        <a 
                                            href={customer.appStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 bg-transparent border-2 border-white/30 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all hover:-translate-y-1 justify-center"
                                        >
                                            <FaApple className="text-2xl" />
                                            <div className="text-left">
                                                <div className="text-[10px] uppercase font-semibold text-white/60">Download on the</div>
                                                <div className="text-sm leading-none">App Store</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopIn>

                    {/* Lawyer Card */}
                    <PopIn delay={0.3}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-amber-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 overflow-hidden">
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full -ml-24 -mb-24"></div>
                                
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                        <span className="text-sm font-medium text-white">Lawyer App</span>
                                    </div>
                                    
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{lawyer.title}</h3>
                                    <p className="text-white/80 text-lg mb-8 leading-relaxed">{lawyer.description}</p>
                                    
                                    <ul className="space-y-3 mb-10">
                                        {lawyer.features.map((feature, index) => (
                                            <motion.li 
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * index }}
                                                className="flex items-center gap-3 text-white/90"
                                            >
                                                <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                                    <FaCheck className="text-secondary text-xs" />
                                                </span>
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a 
                                            href={lawyer.playStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 bg-secondary text-white px-6 py-3.5 rounded-xl font-bold hover:bg-secondary/90 transition-all hover:-translate-y-1 shadow-lg justify-center"
                                        >
                                            <FaGooglePlay className="text-xl" />
                                            <div className="text-left">
                                                <div className="text-[10px] uppercase font-semibold text-white/70">Get it on</div>
                                                <div className="text-sm leading-none">Google Play</div>
                                            </div>
                                        </a>
                                        <a 
                                            href={lawyer.appStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 bg-transparent border-2 border-secondary/50 text-secondary px-6 py-3.5 rounded-xl font-bold hover:bg-secondary/10 transition-all hover:-translate-y-1 justify-center"
                                        >
                                            <FaApple className="text-2xl" />
                                            <div className="text-left">
                                                <div className="text-[10px] uppercase font-semibold text-secondary/70">Download on the</div>
                                                <div className="text-sm leading-none">App Store</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};

export default DownloadCards;
