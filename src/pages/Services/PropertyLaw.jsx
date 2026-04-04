import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import propertyLawImg from '../../assets/img/services/property-law.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

const PropertyLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How can I get online legal consultation near me in Chennai?",
            answer: "You can get online legal consultation near you in Chennai through platforms like MLawyer. Simply submit your legal query, choose your legal category, and connect with a verified lawyer via phone, video, or chat without visiting an office."
        },
        {
            question: "What is online legal consultation and how does it work?",
            answer: "Online legal consultation allows you to speak with a lawyer remotely through phone, video call, or chat. You share your legal issue, and a qualified lawyer provides guidance, helping you understand your rights and next steps from the comfort of your home."
        },
        {
            question: "Is online legal consultation safe and confidential?",
            answer: "Yes, online legal consultation is safe and confidential. Most platforms ensure secure communication and protect your personal information, maintaining privacy similar to in-person lawyer consultations."
        },
        {
            question: "What legal issues can I discuss with an online lawyer?",
            answer: "You can discuss various legal matters such as divorce, property disputes, criminal cases, business issues, legal notices, and documentation. Online consultation platforms connect you with lawyers across multiple legal domains."
        },
        {
            question: "What are the benefits of consulting a lawyer online near me?",
            answer: "Online legal consultation offers convenience, saves travel time, and provides quick access to expert legal advice. You can schedule consultations at your preferred time and get professional guidance without visiting a lawyer’s office."
        },
        {
            question: "How quickly can I get legal advice online in Chennai?",
            answer: "You can usually get legal advice online in Chennai within minutes to a few hours, depending on the platform and lawyer availability. Many services offer instant or same-day consultation for urgent legal issues."
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
                <title>Property Attorney | Lawyer in Chennai | Online legal consultation- MlLawyer</title>
                <meta
                    name="description"
                    content="Consult a trusted property lawyer in Chennai for expert legal advice. Get help with attorneys near you for property verification, disputes and registration."
                />
                <meta
                    name="keywords"
                    content="online legal consultation, best property lawyer near me, legal opinion for property, property lawyer chennai,property attorney near me"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/customer/online-legal-consultation" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Property Attorney | Lawyer in Chennai | online legal consultation- MlLawyer" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/online-legal-consultation" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Consult a trusted property lawyer in Chennai for expert legal advice. Get help with attorneys near you for property verification, disputes and registration."
                />

                <meta name="twitter:title" content="Property Attorney | Lawyer in Chennai | online legal consultation- MlLawyer" />
                <meta
                    name="twitter:description"
                    content="Consult a trusted property lawyer in Chennai for expert legal advice. Get help with attorneys near you for property verification, disputes and registration."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="Online-Legal-consultation-App" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Property Lawyer' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Property Lawyer
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={propertyLawImg} alt="online-legal-consultation" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-10 p-6 bg-teal-50 dark:bg-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of Property Lawyer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Property Purchase & Sale Agreements",
                                "Property Registration & Documentation",
                                "Property Partition (Family Property Division)",
                                "Inheritance & Succession of Property",
                                "Tenant–Landlord Disputes (Rent, Eviction, Lease Issues)"
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
                            Property Lawyer is basically a set of rules that decides who owns what, and what they can do with it. It's about the connection between people or companies and the things they own, like houses, cars, or land. This law makes sure that everyone knows who has the right to use, sell, or give away their property, and that these rights are respected and protected.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key areas covered under property Lawyer:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Ownership rights – who legally owns a property and their rights",
                                    "Transfer of property – sale, purchase, lease, gift, or mortgage of property",
                                    "Title and registration – legal documentation and verification of ownership",
                                    "Tenancy and lease agreements – rights and obligations of landlords and tenants",
                                    "Inheritance and succession – transfer of property after death",
                                    "Dispute resolution – handling conflicts over ownership, boundaries, or possession"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            MLawyer helps you reach the best property lawyer near me, or a property attorney near me, for <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">online legal consultation</Link></h3> and support on all property-related matters, including legal opinion for property such as title verification, document review, ownership disputes, and registration guidance. Explore a wide network including a <h3 className="inline font-bold text-gray-900 dark:text-white text-lg">property lawyer chennai</h3>, Coimbatore, Madurai, Trichy, and across Tamil Nadu and India.
                        </div>
                    </div>
                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div >
    );
};

export default PropertyLaw;

