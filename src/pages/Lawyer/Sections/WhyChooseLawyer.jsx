import React from 'react';
import {
    FaMoneyBillWave,
    FaClock,
    FaChartLine,
    FaTools
} from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';
import lawyerData from '../../../data/lawyer.json';

const iconMap = {
    FaMoneyBillWave: <FaMoneyBillWave />,
    FaClock: <FaClock />,
    FaChartLine: <FaChartLine />,
    FaTools: <FaTools />
};

const FeatureItem = ({ iconName, title, items }) => (
    <div className="flex gap-5 items-start">
        <div className="shrink-0 mt-1 p-3 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-secondary text-2xl">
            {iconMap[iconName]}
        </div>
        <div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                         <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0 opacity-60"></span>
                         <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const WhyChooseLawyer = () => {
    const { whyChoose } = lawyerData;
    return (
        <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Sticky Header Section */}
                    <div className="lg:w-1/3 lg:shrink-0">
                        <div className="sticky top-32">
                            <PopIn delay={0.1}>
                                <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-secondary uppercase bg-teal-50 dark:bg-teal-900/20 rounded-full">
                                    Benefits
                                </div>
                            </PopIn>
                            <PopIn delay={0.2}>
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-6 leading-tight">
                                    {whyChoose.title}
                                </h2>
                            </PopIn>
                            <PopIn delay={0.3}>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                    {whyChoose.subtitle}
                                </p>
                            </PopIn>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-16">
                        {whyChoose.features.map((feature, index) => (
                            <PopIn delay={index * 0.1} key={index}>
                                <FeatureItem
                                    iconName={feature.icon}
                                    title={feature.title}
                                    items={feature.items}
                                />
                            </PopIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseLawyer;
