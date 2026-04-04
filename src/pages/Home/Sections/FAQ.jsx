import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import PopIn from '../../../components/animations/PopIn';
import homeData from '../../../data/home.json';

const FAQ = () => {
    const { faq } = homeData;
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <section className="py-16 lg:py-5 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <PopIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            {faq.title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            {faq.subtitle}
                        </p>
                    </div>
                </PopIn>

                <div className="space-y-4">
                    {faq.questions.map((item, index) => (
                        <PopIn key={item.question} delay={index * 0.08}>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                                <button
                                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                                    onClick={() => handleToggle(index)}
                                >
                                    <span
                                        className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-primary dark:text-secondary' : 'text-gray-900 dark:text-white'}`}
                                    >
                                        {item.question}
                                    </span>
                                    <span
                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-primary dark:bg-secondary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300'}`}
                                    >
                                        {openIndex === index ? <FiMinus /> : <FiPlus />}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
