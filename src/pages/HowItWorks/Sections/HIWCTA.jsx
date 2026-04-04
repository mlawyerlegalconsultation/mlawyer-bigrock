import React from 'react';
import { Link } from 'react-router-dom';
import PopIn from '../../../components/animations/PopIn';
import howItWorksData from '../../../data/howItWorks.json';

const HIWCTA = () => {
    const { cta } = howItWorksData;
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <PopIn>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {cta.title}
                    </h2>
                </PopIn>
                <PopIn delay={0.1}>
                    <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {cta.description}
                    </p>
                </PopIn>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {cta.buttons.map((button, index) => (
                        <PopIn key={index} delay={0.2 + (index * 0.1)}>
                            <Link
                                to={button.link}
                                className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 min-w-[200px] ${button.type === 'primary'
                                    ? 'bg-secondary text-white shadow-lg hover:bg-secondary/90 hover:-translate-y-1'
                                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:-translate-y-1'
                                    }`}
                            >
                                {button.text}
                            </Link>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HIWCTA;
