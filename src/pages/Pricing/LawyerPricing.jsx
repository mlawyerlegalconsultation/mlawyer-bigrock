import React from 'react';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import { FaCheck, FaTimes, FaArrowRight, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa';

const LawyerPricing = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 dark:bg-teal-700/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <PopIn>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white leading-tight mb-6">
                            Join Free. Practice Free. <span className="text-secondary">Earn More.</span>
                        </h1>
                    </PopIn>

                    <PopIn delay={0.1}>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                            Zero registration fee. Zero monthly charges. Zero hidden costs. Start your digital practice today without spending a rupee.
                        </p>
                    </PopIn>

                    <PopIn delay={0.2}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl max-w-sm mx-auto border-2 border-secondary/20 mb-8 transform hover:scale-105 transition-transform duration-300">
                            <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm font-semibold mb-2">To Get Started</p>
                            <div className="flex justify-center items-end gap-2 mb-2">
                                <span className="text-6xl font-bold text-secondary">₹0</span>
                            </div>
                            <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">
                                Yes, you read that right. <span className="text-secondary font-bold">Completely FREE.</span>
                            </p>
                            <Link to="/lawyer-signup" className="block w-full py-3 px-6 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                Start Free Application <FaArrowRight />
                            </Link>
                        </div>
                    </PopIn>
                </div>
            </section>

            {/* How Lawyer Pricing Works */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <PopIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
                                How Lawyer Pricing Works
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                It's Simple: <span className="text-secondary font-bold">You Don't Pay, You Get Paid</span>
                            </p>
                        </div>
                    </PopIn>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Traditional Practice Costs */}
                        <PopIn delay={0.1}>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <FaTimes className="text-9xl text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2 relative z-10">Traditional Practice</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">No Upfront Investment Required</p>

                                <div className="space-y-4 mb-8 relative z-10">
                                    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                            <FaTimes className="text-red-500" /> Office rent
                                        </span>
                                        <span className="font-semibold text-red-500">₹15,000-₹30,000/month</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                            <FaTimes className="text-red-500" /> Staff salary
                                        </span>
                                        <span className="font-semibold text-red-500">₹10,000-₹25,000/month</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                            <FaTimes className="text-red-500" /> Utilities
                                        </span>
                                        <span className="font-semibold text-red-500">₹3,000-₹5,000/month</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                            <FaTimes className="text-red-500" /> Furniture & setup
                                        </span>
                                        <span className="font-semibold text-red-500">₹50,000-₹2,00,000</span>
                                    </div>
                                </div>
                            </div>
                        </PopIn>

                        {/* MLawyer Way */}
                        <PopIn delay={0.2}>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-secondary overflow-hidden shadow-xl h-full relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -mr-4 -mt-4"></div>
                                <div className="absolute top-0 right-0 p-4 text-secondary opacity-10">
                                    <FaCheck className="text-9xl" />
                                </div>

                                <h3 className="text-2xl font-bold text-secondary mb-2 relative z-10">With MLawyer</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Everything You Need, Zero Cost</p>

                                <div className="space-y-4 mb-8 relative z-10">
                                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                            <FaCheck className="text-green-500" /> Registration
                                        </span>
                                        <span className="font-semibold text-green-600">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                            <FaCheck className="text-green-500" /> Profile creation
                                        </span>
                                        <span className="font-semibold text-green-600">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                            <FaCheck className="text-green-500" /> Verification
                                        </span>
                                        <span className="font-semibold text-green-600">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                            <FaCheck className="text-green-500" /> Platform access
                                        </span>
                                        <span className="font-semibold text-green-600">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                                        <span className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                            <FaCheck className="text-green-500" /> All tools & features
                                        </span>
                                        <span className="font-semibold text-green-600">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 bg-green-50 dark:bg-green-900/20 -mx-2 px-4 py-3 rounded-xl">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Total Investment</span>
                                        <span className="font-bold text-2xl text-secondary">₹0</span>
                                    </div>
                                </div>
                            </div>
                        </PopIn>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
                <div className="container mx-auto px-6 text-center">
                    <PopIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-2">
                            Why Lawyers Love MLawyer
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                            Focus on what you do best — practicing law
                        </p>
                    </PopIn>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <PopIn delay={0.1}>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaUsers className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Access to Clients</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Get connected with clients actively seeking legal help. No more waiting for walk-ins.
                                </p>
                            </div>
                        </PopIn>

                        <PopIn delay={0.2}>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaShieldAlt className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Secure Payments</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Get paid directly to your account. We handle payment processing securely.
                                </p>
                            </div>
                        </PopIn>

                        <PopIn delay={0.3}>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaChartLine className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Grow Your Practice</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Build your reputation with reviews and ratings. Expand your client base digitally.
                                </p>
                            </div>
                        </PopIn>
                    </div>

                    <PopIn delay={0.4}>
                        <div className="mt-12">
                            <Link to="/lawyer-signup" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl shadow-lg transition-all duration-300">
                                Start Your Free Application <FaArrowRight />
                            </Link>
                        </div>
                    </PopIn>
                </div>
            </section>
        </div>
    );
};

export default LawyerPricing;
