import React from 'react';
import PopIn from '../../../components/animations/PopIn';
import lawyerData from '../../../data/lawyer.json';

// Import images
import lawyerImg from '../../../assets/img/lawyer_register.svg';
import heroImg from '../../../assets/img/lawyer_profile.svg';
import hiwHeroImg from '../../../assets/img/lawyer_verification.svg';
import lawyerHeroNewImg from '../../../assets/img/lawyer_live.svg';
import customerPayImg from '../../../assets/img/lawyer_earn.svg';


const images = {
    'lawyer.png': lawyerImg,
    'heroimage.png': heroImg,
    'how_it_works_hero.png': hiwHeroImg,
    'lawyer_hero_new.png': lawyerHeroNewImg,
    'customer_pay.svg': customerPayImg,
    'lawyer_register.svg': lawyerImg
};


const TimelineItem = ({ step, index, total }) => {
    const isEven = index % 2 === 0;
    
    return (
        <div className={`relative flex flex-col-reverse items-center justify-between w-full mb-16 lg:mb-24 last:mb-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            
             {/* LINE - Desktop Only (Center) */}
             <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 lg:-bottom-24 w-0.5 bg-secondary/20 dark:bg-gray-700 -translate-x-1/2"></div>
             
             {/* Text Side */}
            <div className={`w-full lg:w-[calc(50%-4rem)] relative z-10 mt-8 lg:mt-0 lg:mb-0 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                 <PopIn delay={0.1}>
                        <div className={`flex flex-col ${isEven ? 'lg:items-end' : 'lg:items-start'} items-start lg:items-auto text-left lg:text-auto`}>
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-secondary uppercase bg-teal-50 dark:bg-teal-900/30 rounded-full">
                                {step.desc}
                            </span>
                            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">{step.title}</h3>
                            <ul className={`space-y-3 ${isEven ? 'lg:items-end' : 'lg:items-start'} flex flex-col items-start lg:items-auto`}>
                                {step.items.map((item, i) => (
                                    <li key={i} className={`flex items-start gap-2.5 text-gray-600 dark:text-gray-400 ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2 lg:mt-2"></span>
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                </PopIn>
            </div>

            {/* Center Number Icon - Desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 lg:top-1/2 lg:-translate-y-1/2 z-20 hidden lg:flex">
                 <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-teal-50 dark:border-teal-900/30 text-primary dark:text-teal-400 font-bold text-lg flex items-center justify-center shadow-lg">
                     {step.number}
                 </div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-[calc(50%-4rem)] relative">
                <PopIn delay={0.2}>
                    <div className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-none bg-transparent dark:bg-white aspect-video lg:aspect-[4/3] group`}>
                         {/* Mobile Number Badge */}
                         <div className="lg:hidden absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur text-primary dark:text-teal-400 font-bold flex items-center justify-center shadow-lg z-20">
                            {step.number}
                        </div>
                        <img 
                            src={images[step.img] || images['lawyer_register.svg']} 
                            alt={step.title} 
                            loading="lazy"
                            className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </PopIn>
            </div>
        </div>
    );
}

const HowItWorksLawyer = () => {
    const { howItWorks } = lawyerData;
    return (
        <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <PopIn>
                    <div className="text-center mb-20">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-secondary uppercase bg-teal-50 dark:bg-teal-900/20 rounded-full">
                            Process
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-6 transition-colors duration-300">{howItWorks.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-300">{howItWorks.subtitle}</p>
                    </div>
                </PopIn>

                <div className="relative max-w-7xl mx-auto">
                    {howItWorks.steps.map((step, index) => (
                        <PopIn key={index} delay={index * 0.1}>
                            <TimelineItem
                                step={step}
                                index={index}
                                total={howItWorks.steps.length}
                            />
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksLawyer;
