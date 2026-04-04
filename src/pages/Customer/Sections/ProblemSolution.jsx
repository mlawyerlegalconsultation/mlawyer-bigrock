import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';
import img1 from '../../../assets/img/customer_match.svg';
import img2 from '../../../assets/img/customer_pay.svg';
import img3 from '../../../assets/img/customer_consult.svg';

const images = [img1, img2, img3];

const ProblemSolution = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">The Problem We Solve</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Side - List */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            {[
                                "Instant matching with specialists",
                                "See fees upfront",
                                "Consult from anywhere"
                            ].map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border ${
                                        activeIndex === index 
                                            ? 'bg-teal-50 dark:bg-teal-900/30 border-teal-500 dark:border-teal-400 shadow-md transform scale-105' 
                                            : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                    }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`rounded-full p-2 transition-colors ${
                                            activeIndex === index 
                                                ? 'bg-teal-500 text-white' 
                                                : 'bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400'
                                        }`}>
                                            <FaCheck className="w-4 h-4" />
                                        </div>
                                        <span className={`text-lg font-medium transition-colors ${
                                            activeIndex === index 
                                                ? 'text-teal-900 dark:text-teal-100' 
                                                : 'text-gray-700 dark:text-gray-300'
                                        }`}>
                                            {item}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="h-full min-h-[400px] flex items-center justify-center relative">
                        {images.map((img, index) => (
                            <div 
                                key={index}
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                                    activeIndex === index 
                                        ? 'opacity-100 translate-x-0 scale-100' 
                                        : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
                                }`}
                            >
                                <img 
                                    src={img} 
                                    alt={`Solution visualization ${index + 1}`} 
                                    loading="lazy"
                                    className="h-80 w-full max-w-sm object-contain drop-shadow-xl dark:bg-white dark:p-4 dark:rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
