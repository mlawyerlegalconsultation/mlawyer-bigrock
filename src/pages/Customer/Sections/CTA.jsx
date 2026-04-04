import React from 'react';
import { Link } from 'react-router-dom';
import { FaApple, FaAndroid } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';

const CTA = () => {
    return (
        <section className="py-20 bg-primary dark:bg-gray-800 text-white relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 dark:opacity-10 rounded-full -translate-y-1/2 translate-x-1/3 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary opacity-10 dark:opacity-20 rounded-full translate-y-1/3 -translate-x-1/3 transition-opacity"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <PopIn>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Legal Help?</h2>
                    <p className="text-xl text-teal-100 dark:text-gray-300 mb-10 max-w-2xl mx-auto transition-colors">
                        Download MLawyer now and connect with expert advocates instantly.
                    </p>
                </PopIn>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <PopIn delay={0.1}>
                        <Link to="#" className="px-8 py-4 bg-white dark:bg-gray-200 text-primary dark:text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-gray-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
                            <FaAndroid className="text-2xl" />
                            <div className="text-left">
                                <div className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-600">Get it on</div>
                                <div className="text-lg leading-none">Google Play</div>
                            </div>
                        </Link>
                    </PopIn>
                    <PopIn delay={0.2}>
                        <Link to="#" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
                            <FaApple className="text-2xl" />
                            <div className="text-left">
                                <div className="text-xs uppercase font-semibold text-teal-100 dark:text-gray-300">Download on the</div>
                                <div className="text-lg leading-none">App Store</div>
                            </div>
                        </Link>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};

export default CTA;
