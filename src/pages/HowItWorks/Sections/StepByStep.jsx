import React from 'react';
import { FaSearch, FaUserCheck, FaCalendarAlt, FaCreditCard, FaVideo, FaStar, FaArrowRight } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';
import howItWorksData from '../../../data/howItWorks.json';

const iconMap = {
    FaSearch: <FaSearch />,
    FaUserCheck: <FaUserCheck />,
    FaCalendarAlt: <FaCalendarAlt />,
    FaCreditCard: <FaCreditCard />,
    FaVideo: <FaVideo />,
    FaStar: <FaStar />
};

const StepByStep = () => {
    const { stepByStep } = howItWorksData;
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold uppercase tracking-wider rounded-full text-sm mb-4">
                        {stepByStep.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white transition-colors duration-300">
                        {stepByStep.title}
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary transform -translate-x-1/2"></div>

                    {stepByStep.steps.map((step, index) => (
                        <PopIn key={step.id} delay={index * 0.15}>
                            <div className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                {iconMap[step.icon]}
                                            </div>
                                            <h3 className="text-xl font-bold text-primary dark:text-white transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Number Circle */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-primary items-center justify-center text-white font-bold text-lg shadow-xl ring-4 ring-white dark:ring-gray-800 z-10">
                                    {step.id}
                                </div>

                                {/* Mobile Number */}
                                <div className="md:hidden absolute -left-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                    {step.id}
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        </PopIn>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StepByStep;
