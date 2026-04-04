import React from 'react';
import PopIn from '../../../components/animations/PopIn';
import { FaShieldAlt, FaHandHoldingUsd, FaFileContract } from 'react-icons/fa';

const PricingHowItWorks = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto px-6 text-center">
                <PopIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-2">
                        How Our Pricing Works
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                         For Clients: Simple, Transparent, Fair
                    </p>
                </PopIn>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                     <PopIn delay={0.1}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaHandHoldingUsd className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">No Platform Fees</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We don't charge you for using the platform. Browse and connect for free.
                            </p>
                        </div>
                     </PopIn>

                     <PopIn delay={0.2}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaShieldAlt className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">No Membership</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                No hidden recurring costs. Access legal help whenever you need it without commitment.
                            </p>
                        </div>
                     </PopIn>

                     <PopIn delay={0.3}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaFileContract className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">No Subscriptions</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                You pay only the lawyer's consultation fee. That's it. What you see is what you pay.
                            </p>
                        </div>
                     </PopIn>
                </div>
            </div>
        </section>
    );
};

export default PricingHowItWorks;
