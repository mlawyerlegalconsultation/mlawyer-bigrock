import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import labourLawImg from '../../assets/img/services/labour-law.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

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
                <link rel="canonical" href="https://www.mlawyer.in/customer/labour-lawyer-advisor" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="MlLawyer-Employment & Industrial Labour Law Lawyers & Advisor near me"
                />
                <meta property="og:url" content="https://www.mlawyer.in/customer/labour-lawyer-advisor" />
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
                        Labour Lawyer
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={labourLawImg} alt="labour-lawyer-advisor" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-10 p-6 bg-teal-50 dark:bg-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of Labour Lawyer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Employment Contracts & Agreements",
                                "Wrongful Termination & Unlawful Dismissal",
                                "Salary, Wages & Bonus Disputes",
                                "Workplace Harassment & POSH Complaints",
                                "Employee Rights & Benefits (PF, ESI, Gratuity)"
                            ].map((area, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></div>
                                    <span className="text-gray-700 dark:text-gray-300">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Labour Lawyer, also called employment lawyer, governs the relationship between employers and employees.Labour law sets standards for safe and healthy working conditions, wages and remuneration and specifically addresses the rights and duties of employers and employees. Its purpose is to promote fair labour standards, equitable workplaces and to protect workers’ rights, health and dignity.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Labor legislation in India is governed by a number of statutes such as the Code on Wages 2019, Industrial Relations Code 2020, Occupational Safety Health and Working Conditions Code 2020 and Code on Social Security 2020.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Objectives of Labour Lawyer:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Protect workers’ rights and welfare",
                                    "Ensure fair wages and safe working conditions",
                                    "Promote industrial peace and harmony",
                                    "Regulate employer-employee relationships",
                                    "Provide mechanisms for dispute resolution"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Types of Labour Lawyer Issues:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Unfair dismissal or termination",
                                    "Non-payment or delayed wages",
                                    "Workplace harassment or discrimination",
                                    "Unsafe working conditions",
                                    "Contractual disputes"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Dispute Resolution Mechanisms:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Labour Courts",
                                    "Industrial Tribunals",
                                    "Conciliation and mediation processes",
                                    "Government labour departments"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            Mlawyer, the online legal consultation platform consists of a <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">labour lawyer</Link></h3> and <Link to="/download" className="text-primary hover:underline">labour law advisor</Link> to help with <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">industrial labour lawyer</Link></h3>, an employment labour lawyer, and more. If you are searching for labour lawyers near me, your search ends at Mlawyer. We help you connect you with an employment labour lawyer at an affordable consultation fee.
                        </div>
                    </div>
                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div>
    );
};

export default LabourLaw;

