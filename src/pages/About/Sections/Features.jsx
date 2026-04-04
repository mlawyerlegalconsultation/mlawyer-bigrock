import React from 'react';
import { PiVideoCamera, PiSealCheck, PiCurrencyInr, PiHouse, PiShieldCheck, PiClock, PiUsers } from 'react-icons/pi';
import aboutData from '../../../data/about.json';
import PopIn from '../../../components/animations/PopIn';

const iconMap = {
    "PiVideoCamera": <PiVideoCamera />,
    "PiSealCheck": <PiSealCheck />,
    "PiCurrencyInr": <PiCurrencyInr />,
    "PiHouse": <PiHouse />,
    "PiShieldCheck": <PiShieldCheck />,
    "PiClock": <PiClock />,
};

const Features = () => {
    const { features, stats } = aboutData;

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">{features.title}</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.items.map((item, index) => (
                        <PopIn key={index} delay={index * 0.1}>
                            <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-14 h-14 bg-teal-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors duration-300">
                                    <div className="text-3xl text-secondary group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
                                        {iconMap[item.icon] || <PiSealCheck />}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </PopIn>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Features;
