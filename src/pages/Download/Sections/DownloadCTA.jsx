import React from 'react';
import downloadData from '../../../data/download.json';
import { motion } from 'motion/react';
import PopIn from '../../../components/animations/PopIn';

const DownloadCTA = () => {
    const { cta } = downloadData;

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50/30 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <PopIn>
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
                        >
                            {cta.title}
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-600 dark:text-gray-300 mb-10 transition-colors"
                        >
                            {cta.subtitle}
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 shadow-lg transition-colors">
                                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center transition-colors">
                                    <span className="text-2xl font-bold text-primary dark:text-secondary">10K+</span>
                                </div>
                                <div className="text-left">
                                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Active</div>
                                    <div className="font-bold text-gray-900 dark:text-white transition-colors">Users</div>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 shadow-lg transition-colors">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl font-bold text-secondary">500+</span>
                                </div>
                                <div className="text-left">
                                    <div className="text-sm text-gray-500">Verified</div>
                                    <div className="font-bold text-gray-900">Lawyers</div>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-lg">
                                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl font-bold text-success">4.9</span>
                                </div>
                                <div className="text-left">
                                    <div className="text-sm text-gray-500">App</div>
                                    <div className="font-bold text-gray-900">Rating</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </PopIn>
            </div>
        </section>
    );
};

export default DownloadCTA;
