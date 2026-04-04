import React from 'react';
import { FaLock, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';
import howItWorksData from '../../../data/howItWorks.json';

const iconMap = {
    FaShieldAlt: <FaShieldAlt />,
    FaLock: <FaLock />,
    FaHeadset: <FaHeadset />
};

const TrustSafety = () => {
    const { trustSafety } = howItWorksData;
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-secondary font-medium uppercase tracking-wider">{trustSafety.subtitle}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2 transition-colors duration-300">{trustSafety.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustSafety.features.map((feature, index) => (
                        <PopIn key={index} delay={index * 0.1}>
                            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-teal-100 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-2xl text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {iconMap[feature.icon]}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSafety;
