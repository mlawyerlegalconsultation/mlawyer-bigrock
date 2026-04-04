import React from 'react';
import contactData from '../../../data/contact.json';
import { motion } from 'motion/react';
import PopIn from '../../../components/animations/PopIn';
import { FaEnvelope, FaPhoneAlt, FaComments, FaMapMarkerAlt, FaHeadset, FaPaperPlane, FaQuestionCircle, FaRegCommentDots } from 'react-icons/fa';
import { MdEmail, MdSupportAgent, MdChat, MdContactMail } from 'react-icons/md';

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

const ContactHero = () => {
    const { hero } = contactData;
    return (
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-teal-50/50 to-white dark:from-gray-900/50 dark:to-gray-900 transition-colors duration-300">
            {/* Floating Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Left side icons */}
                <FloatingIcon Icon={() => <FaEnvelope className="text-5xl" />} className="top-[10%] left-[5%]" delay={0} duration={7} color="secondary" />
                <FloatingIcon Icon={() => <FaPhoneAlt className="text-4xl" />} className="top-[30%] left-[8%]" delay={1.5} duration={8} color="primary" />
                <FloatingIcon Icon={() => <FaComments className="text-3xl" />} className="top-[55%] left-[3%]" delay={0.5} duration={6} color="secondary" />
                <FloatingIcon Icon={() => <FaMapMarkerAlt className="text-4xl" />} className="top-[75%] left-[10%]" delay={2} duration={7} color="primary" />
                <FloatingIcon Icon={() => <MdSupportAgent className="text-5xl" />} className="top-[45%] left-[12%]" delay={3} duration={9} color="secondary" />
                
                {/* Right side icons */}
                <FloatingIcon Icon={() => <FaHeadset className="text-5xl" />} className="top-[15%] right-[6%]" delay={1} duration={8} color="primary" />
                <FloatingIcon Icon={() => <MdEmail className="text-4xl" />} className="top-[35%] right-[4%]" delay={2.5} duration={7} color="secondary" />
                <FloatingIcon Icon={() => <FaPaperPlane className="text-3xl" />} className="top-[60%] right-[8%]" delay={0.8} duration={6} color="primary" />
                <FloatingIcon Icon={() => <MdChat className="text-4xl" />} className="top-[80%] right-[5%]" delay={1.8} duration={8} color="secondary" />
                <FloatingIcon Icon={() => <FaQuestionCircle className="text-5xl" />} className="top-[50%] right-[12%]" delay={3.5} duration={9} color="primary" />
                
                {/* Top scattered icons */}
                <FloatingIcon Icon={() => <MdContactMail className="text-3xl" />} className="top-[5%] left-[25%]" delay={2.2} duration={7} color="secondary" />
                <FloatingIcon Icon={() => <FaRegCommentDots className="text-3xl" />} className="top-[8%] right-[25%]" delay={1.2} duration={6} color="primary" />
                
                {/* Bottom scattered icons */}
                <FloatingIcon Icon={() => <FaEnvelope className="text-3xl" />} className="bottom-[10%] left-[20%]" delay={0.3} duration={8} color="secondary" />
                <FloatingIcon Icon={() => <FaHeadset className="text-3xl" />} className="bottom-[15%] right-[22%]" delay={2.8} duration={7} color="primary" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <PopIn>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-teal-100 dark:border-gray-700 mb-6 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        <span className="text-sm font-medium text-primary dark:text-gray-200">{hero.badge}</span>
                    </div>
                </PopIn>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 transition-colors"
                >
                    {hero.title}
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors"
                >
                    {hero.subtitle}
                </motion.p>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-10 left-10 w-64 h-64 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl transition-colors"
                ></motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl transition-colors"
                ></motion.div>
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

export default ContactHero;
