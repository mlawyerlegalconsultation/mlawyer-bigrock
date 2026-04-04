import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleExact = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">FAQ for Clients</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Common questions answered</p>
                </div>
                <div className="space-y-4">
                    {[
                        { q: "How quickly can I connect with a Advocates ?", a: "Immediately for urgent issues, or schedule for a convenient time. Most requests are matched within 5-15 minutes." },
                        { q: "Are the Advocates verified?", a: "Yes, all advocates are credential-verified with valid bar council registration and practicing certificates." },
                        { q: "Is my information confidential?", a: "Absolutely. All consultations are protected by attorney-client privilege and encrypted communications." },
                        { q: "What payment methods do you accept?", a: "Credit/debit cards, UPI, net banking, and digital wallets." }
                    ].map((item, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                            <button 
                                className="w-full px-6 py-4 text-left bg-white dark:bg-gray-800 flex justify-between items-center focus:outline-none transition-colors"
                                onClick={() => toggleExact(index)}
                            >
                                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-primary dark:text-secondary' : 'text-gray-900 dark:text-white'}`}>{item.q}</span>
                                {openIndex === index ? <FaChevronUp className="text-primary dark:text-secondary" /> : <FaChevronDown className="text-gray-400 dark:text-gray-500" />}
                            </button>
                            <div 
                                className={`px-6 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                            >
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
