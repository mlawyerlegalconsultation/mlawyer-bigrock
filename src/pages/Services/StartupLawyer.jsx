import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import startupLawImg from '../../assets/img/services/startup-legal-consultation.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

const StartupLawyer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "What legal services do startups need?",
            answer: "Startups need various legal services including business registration, incorporation, drafting terms of service, privacy policies, employment agreements, IP protection, funding documentation, and compliance with regulations. A startup lawyer helps navigate these complexities."
        },
        {
            question: "How can I protect my startup's intellectual property?",
            answer: "You can protect your startup's intellectual property through patents, trademarks, copyrights, and trade secrets. A startup lawyer can guide you on filing for patent protection, registering trademarks, and implementing IP strategies tailored to your business."
        },
        {
            question: "What's involved in startup incorporation and registration?",
            answer: "Startup incorporation involves registering your business as a legal entity, choosing a business structure (LLC, Corporation, etc.), filing necessary documents, obtaining an EIN, and complying with state and local regulations. A startup lawyer streamlines this process."
        },
        {
            question: "How do I handle investor agreements and funding rounds?",
            answer: "Investor agreements, term sheets, and funding documentation require careful legal review. A startup lawyer ensures investor terms are fair, protects your equity, clarifies rights and responsibilities, and ensures compliance with securities regulations."
        },
        {
            question: "What employment agreements should my startup have?",
            answer: "Your startup should have employment agreements, non-disclosure agreements (NDAs), non-compete clauses, equity grants agreements, and employee handbooks. These protect your business interests and clarify expectations with employees."
        },
        {
            question: "How quickly can I get legal advice for my startup?",
            answer: "You can get startup legal advice online within minutes to hours through platforms like MLawyer. Many startup lawyers offer quick consultations to help you understand your legal requirements and next steps."
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
                <title>Startup Lawyer | Business Legal Consultation | MLawyer</title>
                <meta
                    name="description"
                    content="Get expert startup legal consultation from experienced startup lawyers. Online legal advice for incorporation, IP protection, funding, and employment agreements."
                />
                <meta
                    name="keywords"
                    content="startup lawyer, startup legal services, business incorporation lawyer, IP protection, startup attorney, funding agreement lawyer"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/services/startup-lawyer" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Startup Lawyer | Business Legal Consultation | MLawyer" />
                <meta property="og:url" content="https://www.mlawyer.in/services/startup-lawyer" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Get expert startup legal consultation from experienced startup lawyers. Online legal advice for incorporation, IP protection, funding, and employment agreements."
                />

                <meta name="twitter:title" content="Startup Lawyer | Business Legal Consultation | MLawyer" />
                <meta
                    name="twitter:description"
                    content="Get expert startup legal consultation from experienced startup lawyers. Online legal advice for incorporation, IP protection, funding, and employment agreements."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="Startup-Legal-Consultation" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Startup Lawyer' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Startup Lawyer
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={startupLawImg} alt="startup-legal-consultation" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-10 p-6 bg-teal-50 dark:bg-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of Startup Lawyer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Business Incorporation & Registration",
                                "Intellectual Property Protection & Patenting",
                                "Investor & Funding Agreements",
                                "Employment Contracts & Agreements",
                                "Terms of Service & Privacy Policies",
                                "Regulatory Compliance & Permits"
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
                            Startup law provides the legal framework necessary to establish, operate, and scale a successful business. It encompasses all the legal aspects that startups need to consider, from formation and compliance to investor relations and intellectual property protection. Understanding startup law helps entrepreneurs avoid legal pitfalls and build a solid foundation for growth.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key areas covered under Startup Lawyer:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Business Formation – Choosing the right business structure and completing incorporation",
                                    "Intellectual Property – Protecting patents, trademarks, copyrights, and trade secrets",
                                    "Funding and Investment – Drafting term sheets, investment agreements, and funding documentation",
                                    "Employment and HR – Creating employment agreements, NDAs, and equity compensation plans",
                                    "Regulatory Compliance – Ensuring compliance with tax laws, data protection, and industry regulations",
                                    "Contracts and Agreements – Drafting terms of service, privacy policies, and vendor agreements"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            MLawyer connects you with experienced startup lawyers who provide expert <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">online legal consultation</Link></h3> and guidance for all your startup legal needs. From business formation and intellectual property protection to investor negotiations and compliance, our network of startup attorneys helps you make informed legal decisions and avoid costly mistakes. Get connected with qualified startup lawyers across India who understand the unique challenges of building a successful business.
                        </div>
                    </div>
                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div >
    );
};

export default StartupLawyer;
