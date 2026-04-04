import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGavel, FaPhoneAlt, FaShieldAlt, FaFileContract, FaBalanceScale, FaCheckCircle, FaUserTie, FaHandshake } from 'react-icons/fa';
import { MdVerified, MdSecurity } from 'react-icons/md';
import PopIn from '../../../components/animations/PopIn';

// Floating icon component
const FloatingIcon = ({ Icon, className, delay = 0, duration = 6, color = 'primary' }) => (
    <div
        className={`absolute pointer-events-none ${color === 'primary' ? 'text-primary/40' : 'text-secondary/50'} ${className}`}
        style={{
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`
        }}
    >
        <Icon />
    </div>
);

const Hero = () => {
    return (
        <section className="relative overflow-hidden py-16 bg-gradient-to-b from-teal-200 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            {/* Floating Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Left side icons */}
                <FloatingIcon Icon={() => <MdVerified className="text-5xl" />} className="top-[10%] left-[5%]" delay={0} duration={7} color="secondary" />
                <FloatingIcon Icon={() => <FaGavel className="text-4xl" />} className="top-[30%] left-[8%]" delay={1.5} duration={8} color="primary" />
                <FloatingIcon Icon={() => <FaPhoneAlt className="text-3xl" />} className="top-[55%] left-[3%]" delay={0.5} duration={6} color="secondary" />
                <FloatingIcon Icon={() => <FaFileContract className="text-4xl" />} className="top-[75%] left-[10%]" delay={2} duration={7} color="primary" />
                <FloatingIcon Icon={() => <FaHandshake className="text-5xl" />} className="top-[45%] left-[12%]" delay={3} duration={9} color="secondary" />
                
                {/* Right side icons */}
                <FloatingIcon Icon={() => <FaBalanceScale className="text-5xl" />} className="top-[15%] right-[6%]" delay={1} duration={8} color="primary" />
                <FloatingIcon Icon={() => <FaShieldAlt className="text-4xl" />} className="top-[35%] right-[4%]" delay={2.5} duration={7} color="secondary" />
                <FloatingIcon Icon={() => <FaCheckCircle className="text-3xl" />} className="top-[60%] right-[8%]" delay={0.8} duration={6} color="primary" />
                <FloatingIcon Icon={() => <FaUserTie className="text-4xl" />} className="top-[80%] right-[5%]" delay={1.8} duration={8} color="secondary" />
                <FloatingIcon Icon={() => <MdSecurity className="text-5xl" />} className="top-[50%] right-[12%]" delay={3.5} duration={9} color="primary" />
                
                {/* Top scattered icons */}
                <FloatingIcon Icon={() => <MdVerified className="text-3xl" />} className="top-[5%] left-[25%]" delay={2.2} duration={7} color="secondary" />
                <FloatingIcon Icon={() => <FaGavel className="text-3xl" />} className="top-[8%] right-[25%]" delay={1.2} duration={6} color="primary" />
                
                {/* Bottom scattered icons */}
                <FloatingIcon Icon={() => <FaBalanceScale className="text-3xl" />} className="bottom-[10%] left-[20%]" delay={0.3} duration={8} color="secondary" />
                <FloatingIcon Icon={() => <FaShieldAlt className="text-3xl" />} className="bottom-[15%] right-[22%]" delay={2.8} duration={7} color="primary" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <PopIn>
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white tracking-tight transition-colors">
                            Legal Issues? <br />
                            <span className="text-secondary dark:text-secondary">Connect with Experts in Minutes.</span>
                        </h1>
                    </PopIn>
                    <PopIn delay={0.1}>
                        <p className="text-xl text-primary/80 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transition-colors">
                            Don’t face legal challenges alone—connect with experienced advocates who understand your needs.
                        </p>
                    </PopIn>
                    <PopIn delay={0.2}>
                        <div className="flex justify-center">
                            <Link to="#" className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                                <FaSearch className="text-xl" />
                                Find Your Advocate Now
                            </Link>
                        </div>
                    </PopIn>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob transition-colors"></div>
                <div className="absolute top-1/3 right-10 w-64 h-64 bg-secondary/30 dark:bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 transition-colors"></div>
            </div>

            {/* Floating animation keyframes */}
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-15px) rotate(5deg);
                    }
                    50% {
                        transform: translateY(-8px) rotate(-3deg);
                    }
                    75% {
                        transform: translateY(-20px) rotate(3deg);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
