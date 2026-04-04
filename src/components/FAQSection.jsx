import React, { useState } from 'react';
import PopIn from './animations/PopIn';
import { FiChevronDown } from 'react-icons/fi';

const FAQSection = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full px-6 mt-16 max-w-5xl mx-auto pb-20">
            <PopIn>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>
            </PopIn>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <PopIn key={index} delay={index * 0.1}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                            >
                                <h1 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                                    {faq.question}
                                </h1>
                                <FiChevronDown
                                    className={`text-2xl text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${activeIndex === index
                                    ? 'max-h-[500px] opacity-100'
                                    : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <p className="px-6 pb-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed border-t border-gray-50 dark:border-gray-700 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </PopIn>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
