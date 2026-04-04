import React from 'react';
import { FaUserCheck, FaLock, FaClock, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';

const benefits = [
    {
        icon: <FaUserCheck />,
        title: "Verified Lawyers",
        description: "Every lawyer on our platform is verified with Bar Council credentials. Consult with confidence.",
        highlights: ["Bar Council verified", "Background checked", "Credential validated"]
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Affordable Pricing",
        description: "Get legal consultations starting at just ₹550. Save up to 70% compared to traditional consultations.",
        highlights: ["Starting ₹550", "No hidden fees", "Save up to 70%"]
    },
    {
        icon: <FaClock />,
        title: "Quick Access",
        description: "Book consultations in minutes. No waiting weeks for appointments. Get help when you need it.",
        highlights: ["Book in minutes", "Same day available", "Active Advocate network"]
    },
    {
        icon: <FaLock />,
        title: "100% Confidential",
        description: "Your consultations are private and secure. We never share your information with anyone.",
        highlights: ["End-to-end encrypted", "Private sessions", "Data protected"]
    }
];

const CustomerBenefits = () => {
    return (
        <section className="py-5 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                    <div>
                        <PopIn>
                            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold uppercase tracking-wider rounded-full text-sm mb-4">
                                Why Choose Us
                            </span>
                        </PopIn>
                        <PopIn delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white transition-colors duration-300">
                                Benefits for Clients
                            </h2>
                        </PopIn>
                    </div>
                    <PopIn delay={0.2}>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md lg:text-right">
                            Experience legal consultation like never before with our client-focused approach.
                        </p>
                    </PopIn>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <PopIn key={index} delay={index * 0.15} className="h-full">
                            <div className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${
                                index === 0 ? 'bg-primary text-white' : 
                                index === 1 ? 'bg-gray-100 dark:bg-gray-800' :
                                index === 2 ? 'bg-secondary/10 dark:bg-secondary/20' :
                                'bg-teal-50 dark:bg-gray-800'
                            }`}>
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                                    index === 0 ? 'bg-white/20 text-white' : 'bg-secondary text-white'
                                }`}>
                                    {benefit.icon}
                                </div>

                                {/* Content */}
                                <h3 className={`text-2xl font-bold mb-3 ${
                                    index === 0 ? 'text-white' : 'text-primary dark:text-white'
                                }`}>
                                    {benefit.title}
                                </h3>
                                <p className={`mb-6 leading-relaxed flex-1 ${
                                    index === 0 ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'
                                }`}>
                                    {benefit.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {benefit.highlights.map((highlight, hIndex) => (
                                        <span 
                                            key={hIndex}
                                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                                                index === 0 
                                                    ? 'bg-white/20 text-white' 
                                                    : 'bg-white dark:bg-gray-700 text-primary dark:text-white shadow-sm'
                                            }`}
                                        >
                                            <FaCheckCircle className={`text-xs ${index === 0 ? 'text-secondary' : 'text-secondary'}`} />
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Decorative element */}
                                <div className={`absolute top-6 right-6 w-20 h-20 rounded-full opacity-10 ${
                                    index === 0 ? 'bg-white' : 'bg-primary'
                                }`}></div>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerBenefits;
