import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import labourLawImg from '../../assets/img/services/labour-lawyer-advisor.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { PiSealCheck, PiShieldCheck, PiCurrencyInr, PiUsers, PiClock, PiHouse } from 'react-icons/pi';

const LabourLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How can I find the best labour lawyer near me in Chennai?",
            answer: "You can find the best labour lawyer near you in Chennai by checking experience in employment lawyer, handling of workplace disputes, and client reviews. Platforms like MLawyer help you connect with verified labour lawyers for quick and reliable legal support."
        },
        {
            question: "What does a labour lawyer advisor do?",
            answer: "A labour lawyer advisor provides legal guidance on employment laws, workplace disputes, employee rights, contracts, and compliance. They assist both employees and employers in resolving issues related to wages, termination, workplace policies, and industrial disputes."
        },
        {
            question: "Can I consult a labour lawyer online near me?",
            answer: "Yes, you can consult a labour lawyer online near you through platforms like MLawyer. You can discuss workplace issues via phone, chat, or video call and receive legal advice without visiting a lawyer’s office."
        },
        {
            question: "What cases do labour lawyers handle?",
            answer: "Labour lawyers handle cases such as wrongful termination, unpaid salary, workplace harassment, employment contracts, PF/ESI issues, and labour law compliance. They also assist in resolving disputes between employers and employees."
        },
        {
            question: "What is the cost of hiring a labour lawyer in Chennai?",
            answer: "The cost of hiring a labour lawyer in Chennai depends on the complexity of the case, the type of legal service, and the lawyer’s experience. Consultation fees are usually affordable, while full case representation may vary based on the issue."
        },
        {
            question: "Why should I choose a local labour lawyer near me in Chennai?",
            answer: "Choosing a local labour lawyer near you in Chennai ensures better understanding of local labour lawyer, quicker case handling, and easier communication. This helps in resolving workplace disputes efficiently and protecting your rights."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
            <Helmet>
                <title>MlLawyer-Employment &amp; Industrial Labour Law Lawyers &amp; Advisor near me</title>
                <meta
                    name="description"
                    content="Find employment and labour law lawyers near you. Get expert advice on workplace issues, industrial disputes, and legal support from trusted advisors."
                />
                <meta
                    name="keywords"
                    content="labour lawyer,labour law advisor,industrial labour law,labour lawyers near me,employment labour lawyer"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/labour-lawyer-advisor" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="MlLawyer-Employment & Industrial Labour Law Lawyers & Advisor near me"
                />
                <meta property="og:url" content="https://www.mlawyer.in/labour-lawyer-advisor" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Find employment and labour law lawyers near you. Get expert advice on workplace issues, industrial disputes, and legal support from trusted advisors."
                />

                <meta
                    name="twitter:title"
                    content="MlLawyer-Employment & Industrial Labour Law Lawyers & Advisor near me"
                />
                <meta
                    name="twitter:description"
                    content="Find employment and labour law lawyers near you. Get expert advice on workplace issues, industrial disputes, and legal support from trusted advisors"
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="labour-law-advisor" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Labour Lawyer' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Labour Lawyer & Advisor
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full rounded-xl overflow-hidden mb-4">
                        <img src={labourLawImg} alt="labour-lawyer-advisor" loading="lazy" className="w-full h-auto object-cover max-h-[350px] md:max-h-[450px] lg:max-h-[500px] rounded-xl" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="space-y-10">

                        {/* Intro Paragraphs */}
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Labour law, also called employment law, governs the relationship between employers and employees. It sets standards for safe and healthy working conditions, wages and remuneration, and specifically addresses the rights and duties of employers and employees. Its purpose is to promote fair labour standards, equitable workplaces, and to protect workers’ rights, health, and dignity.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Labor legislation in India is governed by a number of statutes such as the Code on Wages 2019, Industrial Relations Code 2020, Occupational Safety Health and Working Conditions Code 2020, and Code on Social Security 2020. At Mlawyer, we help you connect with verified employment and labor lawyers who provide reliable guidance.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 1: Core Areas of Labour Lawyer */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Areas of Labour and Employment Law Support</h2>
                                <p className="text-lg text-gray-650 dark:text-gray-300 leading-relaxed">
                                    Our panel of expert labour lawyers provides complete legal assistance across all major areas of employment law:
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    { title: "Employment Contracts & Agreements", desc: "Drafting, reviewing, and negotiating employment agreements, NDA clauses, and service terms." },
                                    { title: "Wrongful Termination & Dismissal", desc: "Legal representation and advice for unlawful dismissal, redundancy, and exit disputes." },
                                    { title: "Salary, Wages & Bonus Disputes", desc: "Assistance in recovery of unpaid wages, bonuses, gratuity, and overtime compensation." },
                                    { title: "Workplace Harassment & POSH", desc: "Guidance on POSH guidelines, handling harassment claims, and ensuring workplace safety." },
                                    { title: "Employee Rights & Benefits", desc: "Ensuring compliance and resolving issues related to PF (Provident Fund), ESI, and gratuity." }
                                ].map((item, idx) => (
                                    <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
                                        <div className="w-full p-6 bg-teal-55/10 dark:bg-gray-800/40 rounded-xl border border-teal-100/50 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-gray-700/50 flex items-center justify-center shrink-0">
                                                <PiSealCheck className="text-secondary text-3xl" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                                                <p className="text-md text-gray-650 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 2: Objectives */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Objectives of Labour Law Regulations</h3>
                                <p className="text-lg text-gray-650 dark:text-gray-300 leading-relaxed">
                                    Labour laws are designed to achieve balance, safety, and fairness in the workplace:
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    "Protect workers’ rights and welfare",
                                    "Ensure fair wages and safe working conditions",
                                    "Promote industrial peace and harmony",
                                    "Regulate employer-employee relationships",
                                    "Provide mechanisms for dispute resolution"
                                ].map((item, idx) => (
                                    <div key={idx} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] flex">
                                        <div className="w-full p-5 bg-teal-55/10 dark:bg-gray-800 rounded-xl border border-teal-100 dark:border-gray-700 hover:shadow-md transition-shadow flex items-start gap-3">
                                            <PiSealCheck className="text-secondary text-2xl shrink-0 mt-0.5" />
                                            <span className="text-md text-gray-750 dark:text-gray-300 leading-relaxed">{item}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 3: Types of Issues */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Common Labour and Employment Issues We Handle</h3>
                                <p className="text-lg text-gray-655 dark:text-gray-300 leading-relaxed">
                                    Employees and employers face various issues requiring professional legal intervention:
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    "Unfair dismissal or termination",
                                    "Non-payment or delayed wages",
                                    "Workplace harassment or discrimination",
                                    "Unsafe working conditions",
                                    "Contractual disputes"
                                ].map((item, idx) => (
                                    <div key={idx} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] flex">
                                        <div className="w-full p-5 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl border border-gray-150 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col justify-between">
                                            <div className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span className="text-md font-semibold text-gray-900 dark:text-white leading-relaxed">{item}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 4: Dispute Resolution */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dispute Resolution Mechanisms</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Employment disputes can be resolved through various statutory and legal mechanisms:
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    { title: "Labour Courts", desc: "Specialized courts that adjudicate disputes regarding individual employee grievances." },
                                    { title: "Industrial Tribunals", desc: "Hear collective disputes, wages restructuring, and industrial-level disagreements." },
                                    { title: "Conciliation & Mediation", desc: "Alternative dispute resolution (ADR) to settle differences amicably out of court." },
                                    { title: "Labour Departments", desc: "Government departments enforcing labor standards and addressing complaints." }
                                ].map((step, idx) => (
                                    <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex">
                                        <div className="w-full p-5 bg-teal-55/10 dark:bg-gray-800 rounded-xl border border-teal-100/30 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-secondary mb-2 block">0{idx + 1}</span>
                                                <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 5: Get Expert Legal Help */}
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get Expert Labour Legal Help Today</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                If you are searching for a trusted <strong>labour lawyer near me</strong> or need a qualified <strong>labour law advisor</strong> to resolve employment matters, Mlawyer connects you with leading professionals immediately.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our platform enables seamless connection with employment and labor law advocates who provide reliable counsel and representation in court. Take proactive steps to protect your rights, resolve disputes, and ensure legal compliance.
                            </p>
                            <div className="pt-4 pb-2">
                                <Link to="/download" className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    Consult a Labour Lawyer
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Trust Section */}
            <div className="w-full px-6 mt-16 mb-20">
                <div className="max-w-7xl mx-auto">
                    <PopIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                What Makes Mlawyer the Right Choice for Labour Lawyers
                            </h2>
                            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
                        </div>
                    </PopIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Trusted experts in labour and employment law cases", icon: <PiSealCheck /> },
                            { title: "Your personal information remains fully secure", icon: <PiShieldCheck /> },
                            { title: "Transparent and affordable legal fee structure", icon: <PiCurrencyInr /> },
                            { title: "Get support across all stages of your legal process", icon: <PiUsers /> },
                            { title: "Timely support with easy access to legal experts", icon: <PiClock /> },
                            { title: "Trusted legal services across Chennai, Madurai, and Coimbatore", icon: <PiHouse /> }
                        ].map((item, index) => (
                            <PopIn key={index} delay={index * 0.1} className="w-full h-full">
                                <div className="h-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="w-16 h-16 bg-teal-50 dark:bg-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                                        <div className="text-4xl text-secondary group-hover:text-primary transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                                        {item.title}
                                    </h4>
                                </div>
                            </PopIn>
                        ))}
                    </div>
                </div>
            </div>

            <FAQSection faqs={faqs} />
        </div>
    );
};

export default LabourLaw;
