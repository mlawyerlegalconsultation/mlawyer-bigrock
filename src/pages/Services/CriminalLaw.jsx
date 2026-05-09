import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import criminalLawImg from '../../assets/img/services/criminal-law.png';
import criminalDefenseLawyer from '../../assets/img/services/criminal_defense_lawyer.png';
import criminalCourtTrial from '../../assets/img/services/criminal_court_trial.png';
import criminalLegalSupport from '../../assets/img/services/criminal_legal_support.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

const CriminalLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How can I find the best criminal lawyer near me in Chennai?",
            answer: "You can find the best criminal lawyer near you in Chennai by choosing an experienced advocate who handles criminal cases such as bail, FIR matters, fraud, cybercrime, and trial court representation."
        },
        {
            question: "How much time does it take to finish a criminal case?",
            answer: "The time required depends on case complexity, evidence, witnesses, and court procedures. Simple cases may take a few months to a year, while complex cases can take several years, especially if they go to appeals."
        },
        {
            question: "How are criminal cases in Chennai usually processed?",
            answer: "Criminal cases typically involve filing an FIR or complaint, police investigation, charge sheet, bail applications, court hearings, trial proceedings, and finally judgment or appeal depending on the outcome."
        },
        {
            question: "What factors affect the cost of criminal lawyers in Chennai?",
            answer: "Costs depend on case complexity, type of offense, stage of proceedings, duration, and the level of representation required (consultation, bail, trial, appeals)."
        },
        {
            question: "Can a criminal lawyer help during arrest or emergency situations?",
            answer: "Yes. A criminal lawyer can provide immediate assistance during arrest by applying for bail or anticipatory bail, guiding through police procedures, and protecting the client’s legal rights during investigations."
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
                <title>Criminal Lawyers in Chennai and Coimbatore | Legal Advocates</title>
                <meta
                    name="description"
                    content="Consult experienced criminal lawyers in Chennai and Coimbatore for criminal defence services, bail assistance, and trusted legal guidance near you."
                />
                <meta
                    name="keywords"
                    content="criminal lawyers in chennai, criminal advocate in chennai, criminal defense lawyers, criminal attorney lawyer, legal criminal lawyer"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/customer/criminal-law" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Criminal Lawyers in Chennai and Coimbatore | Legal Advocates" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/criminal-law" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Consult experienced criminal lawyers in Chennai and Coimbatore for criminal defence services, bail assistance, and trusted legal guidance near you."
                />

                <meta name="twitter:title" content="Criminal Lawyers in Chennai and Coimbatore | Legal Advocates" />
                <meta
                    name="twitter:description"
                    content="Consult experienced criminal lawyers in Chennai and Coimbatore for criminal defence services, bail assistance, and trusted legal guidance near you."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="criminal-lawyer" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Criminal Lawyer' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Criminal Lawyers in Chennai
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={criminalLawImg} alt="criminal lawyers in chennai" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
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
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experienced Criminal Defense Lawyers</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Criminal law is a legal framework created to protect individuals, public safety, property, and the overall welfare of society. It helps maintain law and order by defining crimes, legal punishments, and judicial procedures.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        Facing allegations or legal complaints can create stress and uncertainty. Professional legal representation ensures that every aspect of the case is examined carefully, including evidence, witness statements, police procedures, and legal documentation.
                                    </p>
                                    
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">We handle legal matters such as:</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Bail and anticipatory bail petitions",
                                            "Cybercrime and online fraud matters",
                                            "Financial and property-related offenses",
                                            "Domestic and family-related criminal disputes",
                                            "Assault and harassment complaints"
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
                                <img src={criminalDefenseLawyer} alt="Criminal Defense Lawyer" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <img src={criminalLegalSupport} alt="Criminal Legal Support" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Trusted Criminal Advocate in Chennai for Case Support</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Choosing the right online criminal advocate in Chennai can make a significant difference in the handling of a legal matter. A knowledgeable advocate provides strategic legal advice, explains court procedures clearly, and represents clients effectively during hearings and investigations.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Legal representation is not limited to court appearances alone. A criminal advocate in Chennai also helps clients prepare legal documents, file petitions, review evidence, communicate with legal authorities, and develop defense strategies.
                                    </p>
                                </div>

                                <div className="p-6 bg-teal-50 dark:bg-gray-800/50 rounded-2xl border border-teal-100 dark:border-gray-700">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Professional Legal Support For:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Police complaints and FIR-related matters",
                                            "Arrest, detention, and Bail applications",
                                            "Criminal litigation and trial representation",
                                            "Criminal appeals and revisions"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span className="text-lg leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Understanding Criminal Law and Legal Procedures</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        Understanding criminal law requires detailed knowledge of legal procedures, evidence rules, investigation methods, and courtroom practices. Legal professionals help clients navigate these procedures while ensuring compliance with legal requirements.
                                    </p>
                                    
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">The Legal Process Includes:</h4>
                                    <ol className="space-y-3 ml-2 list-decimal list-inside text-lg text-gray-600 dark:text-gray-300">
                                        <li>Filing of complaints or FIRs</li>
                                        <li>Police investigation and Collection of evidence</li>
                                        <li>Bail applications</li>
                                        <li>Court hearings, trial proceedings and Witness examination</li>
                                        <li>Judgment, sentencing, Appeals and legal remedies</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img src={criminalCourtTrial} alt="Criminal Court Trial" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 4 */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Common Criminal Issues We Handle</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our legal team provides representation and guidance across a broad range of criminal matters, ensuring each case is handled with proper legal analysis and attention to detail.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Property & Financial Offenses", items: ["Theft & Robbery", "Property disputes", "Financial irregularities", "Cheating cases"] },
                                    { title: "Cyber & Digital Crimes", items: ["Cybercrime", "Online fraud", "Identity theft", "Tech-related offenses"] },
                                    { title: "Personal & Physical Offenses", items: ["Assault cases", "Criminal threats", "Harassment allegations"] },
                                    { title: "Family & Domestic Matters", items: ["Domestic disputes", "False allegations", "Sensitive family cases"] },
                                    { title: "Corporate & White-Collar", items: ["Business fraud", "Corporate misconduct", "Compliance issues"] },
                                    { title: "Police & Investigations", items: ["FIR registration support", "Police inquiry", "Wrongful accusations"] }
                                ].map((caseType, idx) => (
                                    <div key={idx} className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-700/50 dark:to-gray-700/30 rounded-2xl p-6 border border-teal-100 dark:border-gray-600 hover:shadow-md transition-all">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{caseType.title}</h4>
                                        <ul className="space-y-2">
                                            {caseType.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                                                    <span className="text-md">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 5 */}
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Legal Approach Followed by MLawyer</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Every criminal case at MLawyer is carefully reviewed under applicable criminal law to ensure accurate legal handling and a strong defense strategy based on evidence, facts, and procedural correctness. We provide continuous legal guidance throughout the criminal justice process to protect client rights and interests.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Along with criminal matters, MLawyer also offers support through experienced <Link to="/customer/property-lawyer" className="text-primary hover:underline font-bold">property advocates</Link>, handles family offense cases through our <Link to="/customer/family-lawyer" className="text-primary hover:underline font-bold">family law experts</Link>, and provides assistance from skilled <Link to="/customer/best-corporate-lawyers" className="text-primary hover:underline font-bold">corporate lawyers</Link>, ensuring complete and reliable legal services across multiple practice areas.
                            </p>
                            <div className="pt-4 pb-2">
                                <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    Consult a Criminal Lawyer
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div>
    );
};

export default CriminalLaw;

