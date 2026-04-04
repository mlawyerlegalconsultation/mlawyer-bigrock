import React from 'react';
import {
    FaCheckCircle,
    FaFileAlt,
    FaUserTie
} from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';
import lawyerData from '../../../data/lawyer.json';

const Requirements = () => {
    const { requirements } = lawyerData;
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    <PopIn>
                        <div className="bg-teal-50 dark:bg-gray-800 p-8 rounded-2xl border border-teal-100 dark:border-gray-700 shadow-sm transition-colors duration-300 h-full">
                            <h3 className="text-2xl font-bold text-primary dark:text-white mb-6 flex items-center gap-3 transition-colors duration-300">
                                <FaUserTie className="text-secondary" />
                                {requirements.eligibility.title}
                            </h3>
                            <ul className="space-y-4">
                                {requirements.eligibility.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </PopIn>

                    <PopIn delay={0.2}>
                        <div className="bg-teal-50 dark:bg-gray-800 p-8 rounded-2xl border border-teal-100 dark:border-gray-700 shadow-sm transition-colors duration-300 h-full">
                            <h3 className="text-2xl font-bold text-primary dark:text-white mb-6 flex items-center gap-3 transition-colors duration-300">
                                <FaFileAlt className="text-secondary" />
                                {requirements.documents.title}
                            </h3>
                            <ul className="space-y-4">
                                {requirements.documents.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 shrink-0 bg-white dark:bg-gray-700 p-1 rounded-full shadow-xs transition-colors duration-300">
                                            <FaCheckCircle className="text-secondary text-sm" />
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};

export default Requirements;
