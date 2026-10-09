import React from 'react';
import { FaSearch, FaCalendarCheck, FaVideo } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';

const steps = [
    {
        icon: <FaSearch />,
        title: "Find the Right Advocate for You",
        desc: "Browse detailed advocate profiles, review their areas of specialization and years of experience."
    },
    {
        icon: <FaCalendarCheck />,
        title: "Book Your Consultation",
        desc: "Choose between an immediate or scheduled consultation and receive instant confirmation."
    },
    {
        icon: <FaVideo />,
        title: "Get Expert Guidance",
        desc: "Enjoy secure and encrypted consultations, with the option to record sessions at a nominal cost for future reference."
    }
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">How It Works</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Get legal help in 3 simple steps</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto relative">
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-teal-100 dark:bg-gray-700 -z-0 rounded-full transition-colors"></div>
                    {steps.map((step, index) => (
                        <PopIn key={index} delay={index * 0.15}>
                            <div className="flex flex-col items-center text-center group h-full">
                                <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 border-4 border-teal-50 dark:border-gray-600 shadow-md flex items-center justify-center mb-6 group-hover:border-primary dark:group-hover:border-secondary group-hover:scale-105 transition-all duration-300 relative z-10">
                                    <span className="text-3xl text-primary dark:text-secondary group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                                        {step.icon}
                                    </span>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{step.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed px-2 transition-colors">
                                    {step.desc}
                                </p>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
