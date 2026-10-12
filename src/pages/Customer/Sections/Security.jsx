import React from 'react';
import { FaUserCheck, FaLock, FaShieldAlt } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';

// Visual illustrations for the three pillars
import verifiedAdvocatesImg from '../../../assets/img/images/lawyer_verification.svg';
import confidentialConsultationImg from '../../../assets/img/images/customer_consult.webp';
import securePaymentsImg from '../../../assets/img/images/customer_pay.webp';

const securityPoints = [
    {
        title: "Verified Advocates",
        image: verifiedAdvocatesImg,
        icon: <FaUserCheck className="w-5 h-5 text-secondary" />,
        badge: "100% Verified"
    },
    {
        title: "Confidential Consultation",
        image: confidentialConsultationImg,
        icon: <FaLock className="w-5 h-5 text-secondary" />,
        badge: "Encrypted & Private"
    },
    {
        title: "Secure Payments",
        image: securePaymentsImg,
        icon: <FaShieldAlt className="w-5 h-5 text-secondary" />,
        badge: "Protected Escrow"
    }
];

const Security = () => {
    return (
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden transition-colors duration-300">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-overlay filter blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-overlay filter blur-3xl opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <PopIn>
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-secondary uppercase bg-teal-900/40 border border-teal-500/30 rounded-full">
                            Trust & Protection
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Security & Privacy</h2>
                        <p className="text-base md:text-lg text-gray-400">
                            Your confidentiality, privacy, and payments are fully protected at every step.
                        </p>
                    </PopIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {securityPoints.map((point, index) => (
                        <PopIn key={index} delay={index * 0.15}>
                            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-secondary/50 hover:bg-gray-800/90 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col h-full overflow-hidden group">
                                {/* Image Frame */}
                                <div className="p-6 pb-0">
                                    <div className="relative w-full h-52 bg-white rounded-xl p-4 flex items-center justify-center overflow-hidden shadow-inner group-hover:shadow-md transition-shadow">
                                        <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                                            {point.badge}
                                        </span>
                                        <img
                                            src={point.image}
                                            alt={point.title}
                                            loading="lazy"
                                            className="h-full w-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="p-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                                        {point.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                                        {point.title}
                                    </h3>
                                </div>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Security;
