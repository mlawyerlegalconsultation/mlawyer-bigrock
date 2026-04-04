import React from 'react';
import { Link } from 'react-router-dom';
import aboutData from '../../../data/about.json';
import PopIn from '../../../components/animations/PopIn';

const AboutCTA = () => {
    const { cta } = aboutData;

    return (
        <section className="py-24 bg-primary dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <PopIn>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {cta.title}
                        </h2>
                        <p className="text-teal-100 dark:text-gray-300 text-lg md:text-xl leading-relaxed transition-colors">
                            {cta.subtitle}
                        </p>
                        <div className="pt-4">
                            <Link to={cta.btnLink} className="inline-block px-10 py-4 bg-secondary text-white font-bold rounded-xl shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                                {cta.btnText}
                            </Link>
                        </div>
                    </div>
                </PopIn>
            </div>
        </section>
    );
};

export default AboutCTA;
