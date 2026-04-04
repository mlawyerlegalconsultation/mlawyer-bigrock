import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FaUserPlus, FaCheckCircle, FaCalendarAlt, FaVideo, FaMoneyBillWave, FaShieldAlt, FaLock, FaHeadset, FaChartLine, FaUsers, FaClock } from 'react-icons/fa';
import { PiVideoCamera, PiUser } from "react-icons/pi";
import PopIn from '../../components/animations/PopIn';

const LawyerHowItWorks = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden max-w-6xl mx-auto shadow-2xl">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
                        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
                                    FOR LAWYERS
                                </div>
                                <PopIn delay={0.1}>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                        Grow Your Practice <br />
                                        <span className="text-secondary">Digitally.</span>
                                    </h1>
                                </PopIn>
                                <PopIn delay={0.2}>
                                    <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                        Join thousands of lawyers who are expanding their practice, reaching more clients, and earning more — all from the comfort of their home or office.
                                    </p>
                                </PopIn>
                                <PopIn delay={0.3}>
                                    <Link to="/lawyer-signup" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl shadow-lg transition-all duration-300">
                                        Start Your Free Application →
                                    </Link>
                                </PopIn>
                            </div>
                            <div className="flex-1 flex justify-center lg:justify-center items-center relative perspective-1000 mt-10 lg:mt-0">
                                <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                                    <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[80px] animate-pulse"></div>
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                                        className="relative w-40 h-40 md:w-56 md:h-56 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-2xl shadow-primary/30"
                                    >
                                        <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-spin-slow"></div>
                                        <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <PiVideoCamera className="text-4xl md:text-5xl animate-pulse" />
                                        </div>
                                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute inset-0 w-full h-full">
                                            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border-2 border-secondary overflow-hidden">
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center"><PiUser className="text-gray-500" /></div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step by Step for Lawyers */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-medium uppercase tracking-wider">The Process</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2 transition-colors duration-300">How to Get Started as a Lawyer</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-teal-50 dark:bg-gray-800 -z-0 transform translate-y-1/2 transition-colors duration-300"></div>

                        {[
                            { id: 1, icon: <FaUserPlus />, title: "Register Free", description: "Sign up with your basic details. No registration fees, no hidden charges." },
                            { id: 2, icon: <FaCheckCircle />, title: "Get Verified", description: "Submit your Bar Council ID and credentials. Our team verifies within 24-48 hours." },
                            { id: 3, icon: <FaCalendarAlt />, title: "Set Availability", description: "Define your consultation hours, fees, and practice areas on your dashboard." },
                            { id: 4, icon: <FaVideo />, title: "Consult Clients", description: "Accept bookings and conduct video/audio consultations through our secure platform." },
                            { id: 5, icon: <FaMoneyBillWave />, title: "Get Paid", description: "Receive payments directly to your bank account after each consultation." }
                        ].map((step, index) => (
                            <PopIn key={step.id} delay={index * 0.1}>
                                <div className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 border-teal-100 dark:border-gray-700 shadow-lg flex items-center justify-center text-2xl text-secondary mb-6 group-hover:scale-110 group-hover:border-secondary transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    <div className="bg-primary/5 dark:bg-white/10 text-primary dark:text-white text-xs font-bold px-3 py-1 rounded-full mb-3 transition-colors duration-300">
                                        STEP 0{step.id}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary dark:text-white mb-3 transition-colors duration-300">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                            </PopIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits for Lawyers */}
            <section className="py-20 bg-teal-50 dark:bg-gray-800/50 overflow-hidden transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-medium uppercase tracking-wider">Benefits</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2 transition-colors duration-300">Why Lawyers Choose MLawyer</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaUsers />, title: "Access to More Clients", description: "Connect with clients across India who are actively seeking legal help. No more waiting for walk-ins." },
                            { icon: <FaClock />, title: "Flexible Schedule", description: "Set your own availability. Work from anywhere, anytime. You're in complete control of your practice." },
                            { icon: <FaMoneyBillWave />, title: "Guaranteed Payments", description: "Get paid for every consultation directly to your bank. No payment chasing, no delays." },
                            { icon: <FaChartLine />, title: "Grow Your Reputation", description: "Build credibility with client reviews and ratings. Top-rated lawyers get more visibility." },
                            { icon: <FaShieldAlt />, title: "Zero Investment", description: "No office rent, no staff salary, no setup costs. Start your digital practice completely free." },
                            { icon: <FaVideo />, title: "Professional Tools", description: "HD video consultations, case management, scheduling tools — everything you need to succeed." }
                        ].map((benefit, index) => (
                            <PopIn key={index} delay={index * 0.1}>
                                <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-xl border border-transparent hover:border-teal-100 dark:hover:border-gray-600 transition-all duration-300 group h-full">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-2xl text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{benefit.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            </PopIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Safety */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-medium uppercase tracking-wider">Platform Security</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2 transition-colors duration-300">Your Practice, Protected</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <FaShieldAlt />, title: "Verified Clients", description: "All clients on our platform are verified. Consult with confidence knowing you're dealing with genuine users." },
                            { icon: <FaLock />, title: "Secure Consultations", description: "End-to-end encrypted video calls. Your consultations remain private and confidential." },
                            { icon: <FaHeadset />, title: "Dedicated Support", description: "Our lawyer success team is available to help you with onboarding, queries, and growing your practice." }
                        ].map((feature, index) => (
                            <PopIn key={index} delay={index * 0.1}>
                                <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-teal-100 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-2xl text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </PopIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <PopIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Expand Your Practice?
                        </h2>
                    </PopIn>
                    <PopIn delay={0.1}>
                        <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Join hundreds of lawyers who are already growing their client base and earning more with MLawyer. Registration is completely free.
                        </p>
                    </PopIn>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PopIn delay={0.2}>
                            <Link
                                to="/lawyer-signup"
                                className="px-8 py-4 font-bold rounded-xl transition-all duration-300 min-w-[200px] bg-secondary text-white shadow-lg hover:bg-secondary/90 hover:-translate-y-1"
                            >
                                Start Free Application
                            </Link>
                        </PopIn>
                        <PopIn delay={0.3}>
                            <Link
                                to="/pricing"
                                className="px-8 py-4 font-bold rounded-xl transition-all duration-300 min-w-[200px] bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:-translate-y-1"
                            >
                                View Pricing
                            </Link>
                        </PopIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LawyerHowItWorks;
