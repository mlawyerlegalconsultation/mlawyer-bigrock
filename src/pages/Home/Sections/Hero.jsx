import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaUserCheck, FaRupeeSign, FaStar } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';
import Image1 from '../../../assets/img/c1.png';
import Image2 from '../../../assets/img/c2.png';
import Image3 from '../../../assets/img/c3.png';
import { useRole } from '../../../context/RoleContext';

const heroImages = [Image1, Image2, Image3];

const iconMap = {
    FaShieldAlt: <FaShieldAlt />,
    FaRupeeSign: <FaRupeeSign />,
    FaStar: <FaStar />
};

const heroContent = {
    badge: 'Trusted Legal Platform',
    titlePrefix: 'Your Legal Partner',
    titleSuffix: 'Just a Tap Away',
    subtitle:
        'MLawyer - An online lawyer consultation booking platform that connects you with verified advocates instantly for expert legal opinions through video consultations.',
    ctaClient: 'I Need Legal Help',
    ctaLawyer: "I'm an Advocate",
    trustText: '',
    stats: [
        { label: 'Verified Experts', icon: 'FaShieldAlt' },
        { label: 'Cost Effective', icon: 'FaRupeeSign' },
        { label: '4.9/5 Rating', icon: 'FaStar' }
    ]
};

const Hero = () => {
    const hero = heroContent;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { setUserRole } = useRole();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden py-5 bg-gradient-to-b from-teal-200 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-10 relative z-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-12 relative">
                    <div className="lg:w-1/2 pl-[40px] space-y-8 z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm border border-teal-100 dark:border-gray-700 mb-4 animate-fade-in-up transition-colors">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            <span className="text-sm font-medium text-primary dark:text-gray-200">{hero.badge}</span>
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white tracking-tight transition-colors">
                            {hero.titlePrefix}<br />
                            <span className="text-secondary dark:text-secondary">
                                {hero.titleSuffix}
                            </span>
                        </h1>
                        <p className="text-lg text-primary/80 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors">
                            MLawyer - An <span className='inline font-semibold'><Link to="/download">online lawyer consultation booking</Link></span> platform that connects you with verified advocates instantly for expert legal opinions through video consultations
                        </p>
                        <p className='text-primary/80 dark:text-gray-300'>Available on Android and iOS. Scan here to install the app right away.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <PopIn delay={0.1}>
                                <Link to="#" className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                    <FaUserCheck className="text-xl" />
                                    {hero.ctaClient}
                                </Link>
                            </PopIn>
                            <PopIn delay={0.2}>
                                <Link to="/lawyer" onClick={() => setUserRole("lawyer")} className="px-8 py-4 bg-white dark:bg-gray-800 text-primary dark:text-gray-200 font-bold rounded-xl shadow-md border border-teal-100 dark:border-gray-700 hover:shadow-xl hover:border-primary/30 dark:hover:border-gray-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                    <FaShieldAlt className="text-xl text-secondary" />
                                    {hero.ctaLawyer}
                                </Link>
                            </PopIn>
                        </div>
                        <div>
                            <p className="text-sm text-primary/70 dark:text-gray-400 mb-4 font-medium uppercase tracking-wider transition-colors">{hero.trustText}</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
                                {hero.stats.map((stat, index) => (
                                    <div key={index} className="flex items-center gap-2 text-primary font-medium">
                                        <div className={`p-2 ${index === 2 ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary hover:text-secondary'} rounded-lg`}>
                                            {iconMap[stat.icon]}
                                        </div>
                                        <span>{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center relative z-10">
                        <PopIn delay={0.2}>
                        <div className="relative w-full max-w-lg lg:max-w-2xl">
                            {heroImages.map((image, index) => (
                                <img
                                    key={index}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    fetchPriority={index === 0 ? "high" : "low"}
                                    src={image}
                                    alt={`online lawyer consultation booking`}
                                    style={{
                                        position: index === 0 ? 'relative' : 'absolute',
                                        top: 0,
                                        left: 0,
                                    }}
                                    className={`w-full md:h-[600px] max-w-lg lg:max-w-2xl rounded-lg transition-all duration-700 ease-in-out ${
                                        currentImageIndex === index 
                                            ? 'opacity-100 scale-100 z-10' 
                                            : 'opacity-0 scale-95 z-0'
                                    }`}
                                />
                            ))}
                        </div>
                        </PopIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
