import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import propertyLawImg from '../../assets/img/services/property-law.png';
import propertyTransaction from '../../assets/img/services/property_transaction.png';
import propertyDisputeCourt from '../../assets/img/services/property_dispute_court.png';
import propertyVerification from '../../assets/img/services/property_verification.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

const PropertyLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "Why should I hire property lawyers in Chennai?",
            answer: "Property lawyers in Chennai provide expert legal assistance for handling transactions and disputes, ensuring your property matters are legally secure and properly managed."
        },
        {
            question: "How can a lawyer help with a property case in Chennai?",
            answer: "A lawyer can handle a property case by reviewing documents, preparing legal strategies, and representing you to achieve a favorable outcome."
        },
        {
            question: "How do I choose the right property attorney near me?",
            answer: "Consider experience, knowledge of local property laws, and track record in handling similar cases when selecting a property attorney."
        },
        {
            question: "What should I do if I face a property dispute in Chennai within my family?",
            answer: "Gather all property documents and try to resolve the issue through discussion. If it doesn’t settle, consult a property lawyer to get a legal opinion and take necessary legal steps to protect your rights."
        },
        {
            question: "Do property lawyers in Chennai handle both cases and transactions?",
            answer: "Yes, property lawyers in Chennai assist with both property cases and transactions, ensuring complete legal support from start to finish."
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
                <title>Consult Property Lawyers and Advocates in Chennai | Coimbatore</title>
                <meta
                    name="description"
                    content="Find trusted property lawyers in Chennai and Coimbatore at MLawyer for property dispute, land issues, legal verification, and civil matters near you."
                />
                <meta
                    name="keywords"
                    content="property lawyers in chennai, real estate lawyer, property lawyer chennai, property lawyers"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/customer/property-law" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Consult Property Lawyers and Advocates in Chennai | Coimbatore" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/property-law" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Find trusted property lawyers in Chennai and Coimbatore at MLawyer for property dispute, land issues, legal verification, and civil matters near you."
                />

                <meta name="twitter:title" content="Consult Property Lawyers and Advocates in Chennai | Coimbatore" />
                <meta
                    name="twitter:description"
                    content="Find trusted property lawyers in Chennai and Coimbatore at MLawyer for property dispute, land issues, legal verification, and civil matters near you."
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
                        Property Lawyers in Chennai
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={propertyLawImg} alt="property lawyers in chennai" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="space-y-16">
                        
                        {/* Section 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Expert Property Lawyer Chennai for All Property Matters</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        In Chennai’s competitive property market, working with leading online property lawyers in Chennai, Coimbatore, Madurai, Trichy and across Tamil Nadu and India ensures you receive high-quality guidance tailored to your needs. Their expertise covers everything from title verification to dispute resolution, making them a valuable partner in any property-related matter.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-300">
                                        <li>Professional support for residential, commercial and land-related property issues</li>
                                        <li>Guidance on property buying, selling and ownership transfer processes</li>
                                        <li>Verification and preparation of all essential legal documents</li>
                                        <li>Clear legal opinion to ensure safe and risk-free transactions</li>
                                        <li>Assistance in resolving property disputes and title-related concerns</li>
                                        <li>Legal support for registration, agreements, and compliance procedures</li>
                                        <li>End-to-end legal aid to protect your property rights and investments</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-teal-50 dark:bg-gray-700/50 rounded-2xl border border-teal-100 dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of Property Lawyer</h3>
                                    <div className="grid md:grid-cols-1 gap-3">
                                        {[
                                            "Property Purchase & Sale Agreements",
                                            "Property Registration & Documentation",
                                            "Property Partition (Family Property Division)",
                                            "Inheritance & Succession of Property",
                                            "Tenant–Landlord Disputes (Rent, Eviction, Lease Issues)"
                                        ].map((area, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">{area}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img src={propertyTransaction} alt="Property Transaction" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <img src={propertyVerification} alt="Property Verification" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Property Law Services Under the Transfer of Property Act</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        The Transfer of Property Act, 1882 governs the legal process of transferring immovable property in India, including sale, lease, mortgage, and exchange. Our experienced property lawyers provide complete legal support to ensure every transaction is carried out in accordance with this Act, helping clients avoid disputes and legal complications.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        As a trusted legal services lawyer, we assist with drafting and reviewing agreements, verifying documents, and offering accurate legal guidance tailored to your property needs. Our approach ensures clarity, compliance, and smooth execution of all property-related matters with a strong focus on protecting your legal rights.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Real Estate Lawyer for Property Transactions and Disputes</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        A skilled real estate lawyer plays a vital role in simplifying complex property dealings. They provide expert support in handling contracts, negotiations, and compliance issues. Whether you are dealing with residential plots, commercial spaces, or joint ventures, a qualified lawyer ensures that all aspects of the transaction are legally compliant. From drafting agreements to resolving a property dispute, legal professionals ensure that your rights are protected at every step.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Services Offered by Property Lawyers</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { title: "Title Verification", desc: "Thorough checks to confirm ownership and legal issues." },
                                            { title: "Drafting Agreements", desc: "Ensuring all contracts are clear and legally valid." },
                                            { title: "Registration Help", desc: "Guidance through compliance and registration." },
                                            { title: "Dispute Resolution", desc: "Representing clients in ownership or boundary conflicts." }
                                        ].map((step, idx) => (
                                            <div key={idx} className="p-5 bg-teal-50/50 dark:bg-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                                <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Importance of Legal Property Verification</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Before purchasing any property, it is essential to verify its legal status. This includes checking ownership records, approvals, and compliance with zoning laws. Professional property lawyers conduct detailed verification processes to ensure that the property is free from legal complications.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Resolving Property Disputes Efficiently</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Disputes can arise due to various reasons, including unclear ownership, boundary issues, or contractual disagreements. Experienced property lawyers specialize in resolving such conflicts through negotiation, mediation, or litigation. Their approach focuses on achieving quick and effective solutions while minimizing stress for clients.
                                    </p>
                                </div>
                                
                                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Role of a Property Advocate in Legal Proceedings</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Filing legal cases and responding to claims",
                                            "Representing clients in court hearings",
                                            "Negotiating settlements",
                                            "Ensuring compliance with court orders"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span className="text-lg leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img src={propertyDisputeCourt} alt="Property Disputes and Court" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 4 */}
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Choose MLawyer for Best Property Lawyers in Chennai</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Every property transaction is unique, requiring customized legal solutions. Professional property lawyers understand this and provide personalized services based on individual needs. Whether you are a first-time buyer or a seasoned investor, they ensure that your legal requirements are met efficiently.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                MLawyer is a trusted choice among online property lawyers in Chennai, offering clear guidance and reliable support for all real estate transactions. The firm provides a precise property legal opinion, helping clients make informed decisions while ensuring every legal property matter is handled with accuracy and compliance.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                In addition to property services, MLawyer also offers support from a <a href="https://www.mlawyer.in/customer/best-corporate-lawyers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">corporate lawyer</a>, <a href="https://www.mlawyer.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">online lawyer consultation</a>, and resources on <a href="https://www.mlawyer.in/blog/importance-of-patta-chitta-complete-guide-for-property-owners" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ownership</a>, making it a convenient one-stop solution for complete legal assistance.
                            </p>
                            <div className="pt-4 pb-2">
                                <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    Consult a Property Lawyer
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div >
    );
};

export default PropertyLaw;

