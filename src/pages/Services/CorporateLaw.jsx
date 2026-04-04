import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import corporateLawImg from '../../assets/img/services/corporate-law.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

const CorporateLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How can I find the best corporate lawyer near me in Chennai?",
            answer: "You can find the best corporate lawyer near you in Chennai by checking experience in business law, client reviews, and expertise in handling corporate matters. Platforms like MLawyer help you connect with verified corporate lawyers for quick and reliable legal support."
        },
        {
            question: "What does a corporate lawyer do?",
            answer: "A corporate lawyer handles legal matters related to businesses, including company registration, contract drafting, compliance, mergers and acquisitions, and dispute resolution. They ensure that business operations follow legal regulations and minimize risks."
        },
        {
            question: "Can I consult a corporate lawyer online near me?",
            answer: "Yes, you can consult a corporate lawyer online near you through platforms like MLawyer. You can discuss your business legal issues via phone, chat, or video call and receive expert advice without visiting an office."
        },
        {
            question: "What is the cost of hiring a corporate lawyer in Chennai?",
            answer: "The cost of hiring a corporate lawyer in Chennai depends on the type of service required, such as company registration, legal documentation, or dispute handling. Fees may vary based on complexity and the lawyer’s experience."
        },
        {
            question: "Why do businesses need a corporate lawyer?",
            answer: "Businesses need a corporate lawyer to ensure legal compliance, manage contracts, handle disputes, and support business growth. A corporate lawyer helps reduce legal risks and ensures smooth business operations."
        },
        {
            question: "Why should I choose a local corporate lawyer near me in Chennai?",
            answer: "Choosing a local corporate lawyer near you in Chennai ensures better understanding of local laws and regulations, faster communication, and efficient handling of legal matters for your business."
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
                <title>MlLawyer-Best Corporate Lawyers App | Business Lawyer and Attorney</title>
                <meta
                    name="description"
                    content="Simplify your business legal needs with the best corporate lawyers app. Connect with skilled attorneys for contracts, compliance, and legal assistance."
                />
                <meta
                    name="keywords"
                    content="best corporate lawyers,best business attorney,best business lawyer,corporate lawyer app"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/customer/best-corporate-lawyers" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="MlLawyer-Best Corporate Lawyers App | Business Lawyer and Attorney" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/best-corporate-lawyers" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Simplify your business legal needs with the best corporate lawyers app. Connect with skilled attorneys for contracts, compliance, and legal assistance."
                />

                <meta name="twitter:title" content="MlLawyer-Best Corporate Lawyers App | Business Lawyer and Attorney" />
                <meta
                    name="twitter:description"
                    content="Simplify your business legal needs with the best corporate lawyers app. Connect with skilled attorneys for contracts, compliance, and legal assistance."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="best-corporate-lawyer" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Corporate Lawyer' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Corporate Lawyer
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={corporateLawImg} alt="best-corporate-lawyers" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-10 p-6 bg-teal-50 dark:bg-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of Corporate Lawyer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Company Incorporation & Business Registration",
                                "Startup Legal Advisory & Structuring",
                                "Contracts & Agreements (Drafting & Review)",
                                "Shareholder & Partnership Agreements",
                                "Intellectual Property (Trademarks, Copyrights, Patents)"
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
                            Corporate Lawyer (also known as company lawyer) governs the formation, management, operation, and dissolution of companies. It regulates the legal relationships between a company, its shareholders, directors, employees, and other stakeholders, ensuring transparency, accountability, and lawful business conduct.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Objectives of Corporate Lawyer:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Regulate Business Entities – Ensure companies operate within legal boundaries",
                                    "Protect Stakeholders – Safeguard interests of shareholders, creditors, and employees",
                                    "Promote Transparency – Enforce disclosure and accountability",
                                    "Facilitate Economic Growth – Provide a stable legal environment for businesses"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Types of Companies:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Private Limited Company",
                                    "Public Limited Company",
                                    "One Person Company (OPC)",
                                    "Limited Liability Partnership (LLP)",
                                    "Section 8 Company (Non-profit)"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Corporate Legal Processes:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Company registration",
                                    "Drafting Memorandum & Articles of Association",
                                    "Compliance filings and audits",
                                    "Board and shareholder meetings",
                                    "Corporate restructuring or liquidation"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            Searching for the <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">best corporate lawyers</Link></h3> or the best business attorney? Install the MLawyer app and connect with a best business lawyer that suits your requirements. MLawyer is a reliable <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">corporate lawyer app</Link></h3> for all business-related legal advice.
                        </div>
                    </div>
                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div>
    );
};

export default CorporateLaw;

