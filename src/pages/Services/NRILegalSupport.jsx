import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import nriLawImg from '../../assets/img/services/nri-legal-support.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

const NRILegalSupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "What legal services do NRIs typically need?",
            answer: "NRIs need legal services for property matters, inheritance and succession, taxation, visa and immigration issues, investment guidance, employment contracts, and business-related matters in India. NRI legal support helps manage affairs in India from abroad."
        },
        {
            question: "How can an NRI manage property in India remotely?",
            answer: "NRIs can manage property through power of attorney (POA), online banking and transaction portals, and by working with a local legal representative. An NRI lawyer can guide you on property purchase, sale, rental, and dispute resolution without being physically present."
        },
        {
            question: "What are NRI taxation and investment considerations?",
            answer: "NRIs have specific tax obligations and investment restrictions in India. Key considerations include FEMA (Foreign Exchange Management Act) compliance, tax-resident status, remittance regulations, and investment opportunities. Professional legal guidance ensures compliance with Indian tax laws."
        },
        {
            question: "How does inheritance and succession work for NRIs?",
            answer: "Inheritance and succession for NRIs involves understanding Indian succession laws, succession certificates, will documentation, and asset distribution. An NRI lawyer helps navigate the complexities of inheriting property and assets in India while residing abroad."
        },
        {
            question: "What documents do NRIs need for legal matters in India?",
            answer: "NRIs may need documents such as passport copies, PAN card, visa status confirmation, power of attorney, will documentation, property papers, and bank statements for various legal and financial matters. Requirements vary based on the specific legal issue."
        },
        {
            question: "How can I get legal consultation as an NRI?",
            answer: "You can get legal consultation as an NRI through online platforms like MLawyer. Connect with lawyers experienced in NRI matters through phone, video, or chat consultations, making it convenient to get legal advice from anywhere in the world."
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
                <title>NRI Legal Support | Legal Services for NRI | MLawyer</title>
                <meta
                    name="description"
                    content="Get expert NRI legal support for property, inheritance, taxation, and investment matters in India. Online legal consultation from experienced NRI lawyers."
                />
                <meta
                    name="keywords"
                    content="NRI legal support, NRI lawyer, legal services for NRI, NRI property lawyer, NRI inheritance lawyer, NRI taxation"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/services/nri-legal-support" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="NRI Legal Support | Legal Services for NRI | MLawyer" />
                <meta property="og:url" content="https://www.mlawyer.in/services/nri-legal-support" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Get expert NRI legal support for property, inheritance, taxation, and investment matters in India. Online legal consultation from experienced NRI lawyers."
                />

                <meta name="twitter:title" content="NRI Legal Support | Legal Services for NRI | MLawyer" />
                <meta
                    name="twitter:description"
                    content="Get expert NRI legal support for property, inheritance, taxation, and investment matters in India. Online legal consultation from experienced NRI lawyers."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="NRI-Legal-Support" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'NRI Legal Support' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        NRI Legal Support
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={nriLawImg} alt="nri-legal-support" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-10 p-6 bg-teal-50 dark:bg-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of NRI Legal Support</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Property Purchase, Sale & Management",
                                "Inheritance & Succession Planning",
                                "Taxation & FEMA Compliance",
                                "Banking & Financial Matters",
                                "Family & Matrimonial Issues",
                                "Business & Investment Guidance"
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
                            NRI Legal Support provides specialized legal guidance for Non-Resident Indians who have business, property, or personal matters in India. NRI law addresses the unique legal challenges faced by Indians living abroad, including property management, inheritance, taxation, investment regulations, and family matters. With proper legal support, NRIs can effectively manage their Indian affairs from anywhere in the world.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key areas covered under NRI Legal Support:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Property Matters – Purchase, sale, rental, disputes, and remote management of Indian property",
                                    "Inheritance and Succession – Will documentation, succession planning, and asset distribution",
                                    "Taxation and Compliance – Understanding NRI taxation, FEMA compliance, and investment restrictions",
                                    "Banking and Financial – Opening NRE/NRO accounts, remittance guidelines, and investment options",
                                    "Family and Matrimonial – Divorce, custody, and family matter guidance under Indian law",
                                    "Business and Investment – Business registration, investment compliance, and commercial agreements"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            MLawyer helps you connect with experienced NRI lawyers for comprehensive <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">online legal consultation</Link></h3> and support on all matters related to your affairs in India. Whether you need guidance on property management, inheritance planning, taxation compliance, or family matters, our network of NRI-specialized attorneys can help you navigate the complexities of Indian law from abroad. Get connected with qualified lawyers across India who understand the unique needs of NRIs.
                        </div>
                    </div>
                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div >
    );
};

export default NRILegalSupport;
