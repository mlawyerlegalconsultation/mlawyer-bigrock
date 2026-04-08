import React from 'react';
import {
    FaUserFriends,
    FaHome,
    FaBalanceScale,
    FaFileSignature,
    FaRocket,
    FaCheckCircle,
    FaUserPlus,
    FaLongArrowAltRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PopIn from '../../../components/animations/PopIn';

const services = [
    {
        title: 'Divorce & Family Lawyer',
        description: (
            <>
                Get expert guidance from experienced{' '}
                <Link to="/customer/family-lawyer" className="text-primary hover:underline font-semibold">
                    family lawyers in Chennai
                </Link>
                . We ensure sensitive handling of family matters with complete confidentiality.
            </>
        ),
        icon: <FaUserFriends />,
        color: 'bg-rose-50 text-rose-600',
        points: ['Mutual divorce', 'Contested divorce', 'Child custody', 'Alimony and maintenance'],
        link: '/customer/family-lawyer'
    },
    {
        title: 'Property & Civil Lawyer',
        description: 'Resolve legal issues related to property disputes and ownership conflicts. Our legal experts provide clear and practical solutions to protect your rights.',
        icon: <FaHome />,
        color: 'bg-amber-50 text-amber-600',
        points: ['Property disputes', 'Land ownership conflicts', 'Civil cases', 'Recovery matters'],
        link: '/customer/online-legal-consultation'
    },
    {
        title: 'Criminal Lawyer',
        description: 'Consult top criminal lawyers in Chennai for bail applications and legal defense. We provide strong legal representation and strategic guidance.',
        icon: <FaBalanceScale />,
        color: 'bg-slate-900 text-slate-100 dark:bg-slate-800',
        points: ['Bail applications', 'FIR-related cases', 'Legal defense services'],
        link: '/customer/legal-criminal-lawyer'
    },
    {
        title: 'Legal Documentation',
        description: 'Get professionally drafted legal notices, agreements, and contracts. Ensure accuracy and legal compliance with expert services.',
        icon: <FaFileSignature />,
        color: 'bg-emerald-50 text-emerald-600',
        points: ['Legal notices', 'Agreements', 'Affidavits', 'Contracts']
    },
    {
        title: 'Business & Startup Legal Services',
        description: 'Comprehensive legal support for businesses, including registration and compliance. Build and grow your business with trusted legal guidance.',
        icon: <FaRocket />,
        color: 'bg-indigo-50 text-indigo-600',
        points: ['Company registration', 'GST filing', 'Legal compliance', 'Startup legal advisory'],
        link: '/customer/best-corporate-lawyers'
    }
];

const reasons = [
    'Experienced and verified lawyers',
    'Quick and easy online legal consultation',
    'Affordable and transparent pricing',
    'End-to-end legal support',
    '100% confidential and secure services'
];

const ChennaiLegalConsultation = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 -tr-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -bl-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <PopIn>
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Get Professional Legal Advice from <span className="text-primary">Trusted Lawyers in Chennai</span>
                        </h2>
                    </PopIn>
                    <PopIn delay={0.1}>
                        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            MLawyer is a leading legal services platform offering expert legal consultation for individuals and businesses in Chennai.
                            Whether you need assistance with divorce cases, property disputes, criminal matters, or legal documentation,
                            our experienced lawyers provide reliable and confidential legal support.
                        </p>
                        <p className="text-md text-primary font-medium dark:text-secondary italic">
                            Talk to a lawyer online, book instant consultations, and get the right legal solution without unnecessary delays.
                        </p>
                    </PopIn>
                </div>

                {/* Services Grid */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20"></div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest text-center">Our Legal Services</h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
                        {services.map((service, idx) => (
                            <PopIn key={idx} delay={idx * 0.1} className="w-full md:w-[45%] lg:w-[30%] min-w-[300px] flex">
                                <div className="group bg-white dark:bg-gray-900 p-8 rounded-3xl border border-slate-200 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 w-full flex flex-col items-center text-center">
                                    <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm mx-auto`}>
                                        {service.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                        {service.link ? (
                                            <Link to={service.link} className="hover:text-primary transition-colors">
                                                {service.title}
                                            </Link>
                                        ) : (
                                            service.title
                                        )}
                                    </h4>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                        {service.description}
                                    </div>
                                    <ul className="space-y-2 border-t border-slate-100 dark:border-gray-800 pt-6 w-full flex flex-col items-center">
                                        {service.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-500">
                                                <FaCheckCircle className="text-primary/60" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </PopIn>
                        ))}
                    </div>
                </div>

                {/* Why Choose & Register CTA */}
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Why Choose */}
                    <PopIn delay={0.4}>
                        <div className="bg-primary p-10 lg:p-12 rounded-[2.5rem] text-white h-full relative overflow-hidden flex flex-col justify-center">
                            {/* Decorative bubbles */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

                            <h3 className="text-3xl font-bold mb-8 relative z-10">Why Choose MLawyer ?</h3>
                            <div className="space-y-5 relative z-10">
                                {reasons.map((reason, rIdx) => (
                                    <div key={rIdx} className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all">
                                            <FaCheckCircle className="text-sm" />
                                        </div>
                                        <p className="text-lg font-medium text-white/90">{reason}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-white/70 italic text-sm border-t border-white/10 pt-6">
                                MLawyer simplifies legal access by connecting you with the right professionals at the right time.
                            </p>
                        </div>
                    </PopIn>

                    {/* Join as Lawyer */}
                    <PopIn delay={0.6}>
                        <div className="bg-white dark:bg-gray-900 p-10 lg:p-12 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 h-full flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                For Professionals
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Join MLawyer – Register as a Lawyer</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Grow Your Legal Practice with MLawyer. Our platform offers a powerful way to expand your reach, connect with genuine clients, and receive verified leads.
                            </p>
                            <div className="space-y-4 mb-10">
                                <p className="text-sm text-gray-500 flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                                    Connect with genuine clients needing expert advice.
                                </p>
                                <p className="text-sm text-gray-500 flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                                    Increase your consultation opportunities via digital channels.
                                </p>
                            </div>
                            <button className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-primary text-white font-bold py-4 px-8 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                                <FaUserPlus />
                                Get Started as an Advocate
                                <FaLongArrowAltRight />
                            </button>
                        </div>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};

export default ChennaiLegalConsultation;
