import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';
import lawyerData from '../../../data/lawyer.json';

const LawyerFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { faq } = lawyerData;
    const toggleExact = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <PopIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{faq.title}</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">{faq.subtitle}</p>
                    </div>
                </PopIn>
                <div className="space-y-4">
                    {faq.questions.map((item, index) => (
                        <PopIn key={index} delay={index * 0.1}>
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                                <button
                                    className="w-full px-6 py-4 text-left bg-white dark:bg-gray-800 flex justify-between items-center focus:outline-none transition-colors duration-300"
                                    onClick={() => toggleExact(index)}
                                >
                                    <span className={`font-semibold text-lg transition-colors duration-300 ${openIndex === index ? 'text-primary dark:text-secondary' : 'text-gray-900 dark:text-white'}`}>{item.q}</span>
                                    {openIndex === index ? <FaChevronUp className="text-primary dark:text-secondary" /> : <FaChevronDown className="text-gray-400" />}
                                </button>
                                <div
                                    className={`px-6 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                                >
                                    {item.a}
                                </div>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LawyerFAQ;
