import React from 'react';
import PopIn from '../../../components/animations/PopIn';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const stats = [
    { value: "₹550", label: "Starting Price", suffix: "+ GST" },
    { value: "₹0", label: "Travel Cost", suffix: "saved" },
    { value: "15", label: "Minutes", suffix: "avg. consult" },
    { value: "70%", label: "Savings", suffix: "vs traditional" }
];

const features = [
    "Expert legal consultation from verified advocates",
    "Video consultation options",
    "Secure communication",
    "Book appointments based on your schedule",
    "No travel required",
    "Instant booking confirmation"
];

const PricingComparison = () => {
    return (
        <section className="py-24 bg-primary dark:bg-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <PopIn>
                        <span className="inline-block px-4 py-2 bg-white/10 text-secondary font-semibold uppercase tracking-wider rounded-full text-sm mb-4">
                            Why MLawyer
                        </span>
                    </PopIn>
                    <PopIn delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Smart Legal Consultation
                        </h2>
                    </PopIn>
                    <PopIn delay={0.2}>
                        <p className="text-teal-100 max-w-2xl mx-auto text-lg">
                            Get expert legal advice without breaking the bank or wasting your valuable time.
                        </p>
                    </PopIn>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center items-start gap-8 md:gap-0 md:divide-x md:divide-white/20 mb-20">
                    {stats.map((stat, index) => (
                        <PopIn key={index} delay={0.1 * index}>
                            <div className="text-center px-8 md:px-12">
                                <div className="text-5xl md:text-7xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-secondary font-semibold text-lg mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-teal-200/70 text-sm">
                                    {stat.suffix}
                                </div>
                            </div>
                        </PopIn>
                    ))}
                </div>

                {/* Horizontal divider */}
                <div className="w-24 h-1 bg-secondary mx-auto mb-16"></div>

                {/* Features - Horizontal scrolling tags */}
                <PopIn delay={0.5}>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-8">What's Included</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                                >
                                    <FaCheck className="text-secondary text-sm" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </PopIn>
            </div>
        </section>
    );
};

export default PricingComparison;
