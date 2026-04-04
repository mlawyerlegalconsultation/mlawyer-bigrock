import React from 'react';
import {
    FaGooglePlay,
    FaAppStoreIos
} from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';
import lawyerData from '../../../data/lawyer.json';

const LawyerCTA = () => {
    const { cta } = lawyerData;
    return (
        <section className="py-24 bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <PopIn>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white transition-colors duration-300">{cta.title}</h2>
                    </PopIn>
                    <PopIn delay={0.1}>
                        <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">{cta.subtitle}</p>
                    </PopIn>

                    <PopIn delay={0.2}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                                <FaGooglePlay className="text-2xl" />
                                <div className="text-left">
                                    <div className="text-xs uppercase opacity-80">{cta.buttons.google.subText}</div>
                                    <div className="text-lg font-bold leading-none">{cta.buttons.google.mainText}</div>
                                </div>
                            </button>
                            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                                <FaAppStoreIos className="text-2xl" />
                                <div className="text-left">
                                    <div className="text-xs uppercase opacity-80">{cta.buttons.apple.subText}</div>
                                    <div className="text-lg font-bold leading-none">{cta.buttons.apple.mainText}</div>
                                </div>
                            </button>
                        </div>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};

export default LawyerCTA;
