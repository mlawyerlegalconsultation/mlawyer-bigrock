import React from 'react';
import { PiTarget, PiEye } from 'react-icons/pi';
import aboutData from '../../../data/about.json';
import PopIn from '../../../components/animations/PopIn';

const iconMap = {
    "PiTarget": <PiTarget />,
    "PiEye": <PiEye />
};

const Mission = () => {
    const { missionVision } = aboutData;

    return (
        <section className="py-20 bg-teal-50/50 dark:bg-gray-900/50 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                     <span className="text-secondary font-medium uppercase tracking-wider">{missionVision.subtitle}</span>
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 transition-colors">{missionVision.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    <PopIn delay={0.1}>
                        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-lg border-t-4 border-secondary h-full relative overflow-hidden group transition-colors">
                           <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 dark:bg-secondary/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110"></div>
                            <div className="w-16 h-16 bg-secondary/10 dark:bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-3xl text-secondary">
                                {iconMap[missionVision.mission.icon] || <PiTarget />}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">{missionVision.mission.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                                {missionVision.mission.desc}
                            </p>
                        </div>
                    </PopIn>

                    <PopIn delay={0.2}>
                         <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-lg border-t-4 border-primary h-full relative overflow-hidden group transition-colors">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 dark:bg-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110"></div>
                            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-3xl text-primary font-bold">
                                {iconMap[missionVision.vision.icon] || <PiEye />}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">{missionVision.vision.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors">
                                {missionVision.vision.desc}
                            </p>
                        </div>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};

export default Mission;
