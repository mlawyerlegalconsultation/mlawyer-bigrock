import React from 'react';
import { FaUserShield, FaGavel, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';

const twoPath = {
    client: {
        title: 'Get Expert Legal Consultations',
        features: [
            'Find specialized advocates instantly',
            'Transparent pricing, no surprises',
            'Secure video consultations',
            'Active support & confidentiality'
        ],
        cta: 'Find an Advocate'
    },
    lawyer: {
        title: 'Grow Your Practice Digitally',
        features: [
            'Set your own schedule',
            'Reach clients anywhere',
            'Zero office overhead',
            'Earn while you consult'
        ],
        cta: 'Join as an Advocate'
    }
};

const TwoPath = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-primary/5 dark:bg-gray-800 p-10 rounded-3xl border border-primary/10 dark:border-gray-700 flex flex-col items-start hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-sm mb-6 text-primary dark:text-secondary group-hover:scale-110 transition-transform duration-300">
                                <FaUserShield size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{twoPath.client.title}</h2>
                            <div className="space-y-4 mb-10 flex-1 w-full">
                                {twoPath.client.features.map((item, index) => (
                                    <PopIn key={index} delay={0.2 + (index * 0.1)}>
                                        <div className="flex items-center text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-700/60 p-3 rounded-xl">
                                            <span className="bg-primary/10 dark:bg-gray-600 text-primary dark:text-secondary p-1 rounded-full mr-3">
                                                <FaCheckCircle size={14} />
                                            </span>
                                            {item}
                                        </div>
                                    </PopIn>
                                ))}
                            </div>
                            <PopIn delay={0.5}>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 cursor-pointer">
                                {twoPath.client.cta} <FaArrowRight />
                            </button>
                            </PopIn>
                        </div>
                        <div className="bg-primary text-white p-10 rounded-3xl flex flex-col items-start hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                            <div className="relative bg-white/10 p-4 rounded-2xl shadow-sm mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                <FaGavel size={32} />
                            </div>
                            <h2 className="relative text-3xl font-bold mb-6">{twoPath.lawyer.title}</h2>
                            <div className="relative space-y-4 mb-10 flex-1 w-full">
                                {twoPath.lawyer.features.map((item, index) => (
                                    <PopIn key={index} delay={0.2 + (index * 0.1)}>
                                        <div className="flex items-center text-white/90 bg-white/10 p-3 rounded-xl border border-white/10">
                                            <span className="bg-secondary/20 text-secondary p-1 rounded-full mr-3">
                                                <FaCheckCircle size={14} />
                                            </span>
                                            {item}
                                        </div>
                                    </PopIn>
                                ))}
                            </div>
                            <PopIn delay={0.5}>
                            <button className="relative w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg cursor-pointer">
                                {twoPath.lawyer.cta} <FaArrowRight />
                            </button>
                            </PopIn>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default TwoPath;
