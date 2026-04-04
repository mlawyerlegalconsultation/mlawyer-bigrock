import React from 'react';
import { FaLock, FaFileShield, FaUserShield } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';

const Security = () => {
    const iconMap = {
        FaLock: <FaLock />,
        FaFileShield: <FaFileShield />,
        FaUserShield: <FaUserShield />,
        FaShieldAlt: <FaShieldAlt />
    };
    const features = [
        { icon: "FaLock", title: "Secure Communication", desc: "All conversations are confidentialy." },
        { icon: "FaFileShield", title: "Verified advocate profiles", desc: "All advocates are credential-verified" },
        { icon: "FaUserShield", title: "Anonymous Consultations", desc: "Use the platform without revealing identity" },
        { icon: "FaShieldAlt", title: "Data Protection Compliant", desc: "We follow strict privacy regulations" }
    ];
    return (
        <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Security & Privacy</h2>
                    <p className="text-lg text-gray-400">Your confidentiality is guaranteed</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <PopIn key={index} delay={index * 0.1}>
                            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:bg-gray-700/50 transition-colors duration-300 text-center h-full flex flex-col items-center">
                                <div className="text-4xl text-secondary mb-4">
                                    {iconMap[feature.icon]}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Security;
