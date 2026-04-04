import React, { useEffect } from 'react';
import { FaShieldAlt, FaGavel, FaPhoneAlt, FaFileContract, FaBalanceScale, FaCheckCircle, FaUserTie, FaHandshake } from 'react-icons/fa';
import { MdVerified, MdSecurity } from 'react-icons/md';
import PopIn from '../../../components/animations/PopIn';

// Floating icon component
const FloatingIcon = ({ Icon, className, delay = 0, duration = 6, color = 'primary' }) => (
    <div
        className={`absolute pointer-events-none ${color === 'primary' ? 'text-primary/40 dark:text-white/20' : 'text-secondary/50 dark:text-secondary/40'} ${className}`}
        style={{
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`
        }}
    >
        <Icon />
    </div>
);

const WaitlistHero = () => {
    useEffect(() => {
        const loadTallyEmbeds = () => {
            if (window.Tally && typeof window.Tally.loadEmbeds === 'function') {
                window.Tally.loadEmbeds();
            }
        };

        if (!window.Tally) {
            const script = document.createElement('script');
            script.src = 'https://tally.so/widgets/embed.js';
            script.async = true;
            script.onload = loadTallyEmbeds;
            document.head.appendChild(script);
        } else {
            loadTallyEmbeds();
        }
    }, []);

    return (
        <section className="relative overflow-hidden py-16 bg-linear-to-b from-teal-200 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm border border-teal-100 dark:border-gray-700 mb-4 animate-fade-in-up transition-colors duration-300">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            <span className="text-sm font-medium text-primary dark:text-white transition-colors duration-300">Join Our Community</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white tracking-tight transition-colors duration-300">
                            Be Part of the <br />
                            <span className="text-secondary">Legal Revolution</span>
                        </h1>
                    </PopIn>

                    <PopIn delay={0.1}>
                        <p className="text-lg font-semibold text-secondary dark:text-secondary mt-4 transition-colors duration-300">
                            ✓ Join the 2,000+ members who have already signed up
                        </p>
                    </PopIn>

                    <div className="mt-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                        <iframe
                            data-tally-src="https://tally.so/embed/q4W4x7?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="868"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Join The Waitlist"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob transition-colors duration-300"></div>
                <div className="absolute top-1/3 right-10 w-64 h-64 bg-secondary/30 dark:bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 transition-colors duration-300"></div>
            </div>
        </section>
    );
};

export default WaitlistHero;
