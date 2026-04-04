import React from 'react';
import PopIn from '../../../components/animations/PopIn';
import { Link } from 'react-router-dom';

const PricingHero = () => {
    return (
        <section className="relative pt-24 pb-16 bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            {/* Background blobs similar to original for consistency */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 dark:bg-teal-700/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white leading-tight mb-6">
                        Legal Advice Starts at Just <span className="text-secondary">₹550</span>
                    </h1>
                </PopIn>
                
                <PopIn delay={0.1}>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        Professional legal consultation at a fraction of traditional costs. No hidden fees. No subscriptions. Pay only when you consult.
                    </p>
                </PopIn>

                <PopIn delay={0.2}>
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl max-w-sm mx-auto border-2 border-secondary/20 mb-8 transform hover:scale-105 transition-transform duration-300">
                        <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm font-semibold mb-2">Starting at</p>
                        <div className="flex justify-center items-end gap-2 mb-2">
                             <span className="text-5xl font-bold text-primary dark:text-white">₹550</span>
                             <span className="text-lg text-gray-500 dark:text-gray-400 mb-2 font-medium">+ GST</span>
                        </div>
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                            Compare that to <span className="text-red-500 line-through">₹2,000-₹5,000</span> for traditional consultations
                        </p>
                         <Link to="/lawyers" className="block w-full py-3 px-6 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl shadow-lg transition-all duration-300">
                            Find Your Lawyer Now →
                        </Link>
                    </div>
                </PopIn>
            </div>
        </section>
    );
};

export default PricingHero;
