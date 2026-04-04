import React from 'react';
import { FaSearch, FaUserTie, FaCalendarCheck, FaComments, FaStar } from 'react-icons/fa';
import PopIn from '../../../components/animations/PopIn';

const HowItWorks = () => {
    const iconComponents = {
        FaSearch: <FaSearch />,
        FaUserTie: <FaUserTie />,
        FaCalendarCheck: <FaCalendarCheck />,
        FaComments: <FaComments />,
        FaStar: <FaStar />
    };
    const steps = [
        {
            icon: "FaSearch",
            title: "Describe Your Legal Issue",
            desc: "Select your legal need or describe your issue and get connected to the right professional."
        },
        {
            icon: "FaUserTie",
            title: "Find the Right Advocate for You",
            desc: "Browse detailed advocate profiles, review their areas of specialization, years of experience, and client ratings"
        },
        {
            icon: "FaCalendarCheck",
            title: "Book Your Consultation",
            desc: "Choose between an immediate or scheduled consultation and receive instant confirmation."
        },
        {
            icon: "FaComments",
            title: "Get Expert Guidance",
            desc: "Enjoy secure and encrypted consultations, with the option to record sessions at a nominal cost for future reference."
        },
        {
            icon: "FaStar",
            title: "Rate and Review",
            desc: "Rate and review your consultation by sharing feedback on the advocate's expertise, communication, and service."
        }
    ];
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">How It Works</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Get legal help in 5 simple steps</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-teal-100 dark:bg-gray-600 -z-10 rounded-full transition-colors"></div>
                    {steps.map((step, index) => (
                        <PopIn key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 border-4 border-teal-50 dark:border-gray-600 shadow-md flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300 relative z-10 transition-colors">
                                    <span className="text-3xl text-primary dark:text-secondary">{iconComponents[step.icon]}</span>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">{step.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed px-2 transition-colors">
                                    {step.desc}
                                </p>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
