import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import familyLawImg from '../../assets/img/services/family-law.png';
import familyLawConsultation from '../../assets/img/services/family_law_consultation.png';
import familyCourtGavel from '../../assets/img/services/family_court_gavel.png';
import familySupportLegal from '../../assets/img/services/family_support_legal.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { PiSealCheck, PiShieldCheck, PiCurrencyInr, PiUsers, PiClock, PiHouse } from 'react-icons/pi';

const FamilyLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How can I find the best divorce lawyer near me in Chennai?",
            answer: "Finding the best divorce lawyer near you in Chennai involves checking experience, client reviews, and specialization in family lawyer. Platforms like MLawyer help you instantly connect with verified divorce lawyers in Chennai for quick and reliable legal support."
        },
        {
            question: "What is the cost of hiring a family lawyer in Chennai?",
            answer: "The cost of hiring a family lawyer in Chennai depends on the complexity of the case and whether it is a mutual , contested , or annulment divorce. Mutual divorce cases are generally more affordable, while contested cases may involve higher legal fees due to court proceedings."
        },
        {
            question: "Can I consult a divorce lawyer online near me?",
            answer: "Yes, you can consult a divorce lawyer online near you through legal platforms like MLawyer. Online consultation allows you to get legal advice, understand your rights, and begin the divorce process without visiting a lawyer’s office."
        },
        {
            question: "How long does a divorce process take in Chennai?",
            answer: "The duration of a divorce case in Chennai depends on the type of divorce. Mutual divorce usually takes around 6 months, while contested divorce cases may take several months to years depending on the complexity and court proceedings."
        },
        {
            question: "What documents are required to file a divorce case in Chennai?",
            answer: "To file a divorce case, you typically need a marriage certificate, identity proof, address proof of both spouses, passport-size photographs, and supporting evidence if it is a contested divorce. A lawyer can guide you based on your case."
        },
        {
            question: "Why should I choose a local divorce lawyer near me in Chennai?",
            answer: "Choosing a local divorce lawyer near you in Chennai ensures better knowledge of local court procedures, faster case handling, and easier communication. This can help in achieving a smoother and quicker resolution of your case."
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
                <title>Best Family &amp; Divorce Lawyers Near Me in Chennai | Coimbatore</title>
                <meta
                    name="description"
                    content="Choose MLawyer for trusted family and divorce lawyers in Chennai and Coimbatore offering legal support for divorce, child custody, alimony, and family matters."
                />
                <meta
                    name="keywords"
                    content="family lawyers in chennai, divorce advocate in chennai, divorce lawyer chennai, family lawyer near me, divorce lawyer, family lawyer for divorce, best divorce lawyers in chennai"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/customer/family-lawyer" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Best Family &amp; Divorce Lawyers Near Me in Chennai | Coimbatore" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/family-lawyer" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Choose MLawyer for trusted family and divorce lawyers in Chennai and Coimbatore offering legal support for divorce, child custody, alimony, and family matters."
                />

                <meta name="twitter:title" content="Best Family &amp; Divorce Lawyers Near Me in Chennai | Coimbatore" />
                <meta
                    name="twitter:description"
                    content="Choose MLawyer for trusted family and divorce lawyers in Chennai and Coimbatore offering legal support for divorce, child custody, alimony, and family matters."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="family-lawyer-consultation" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Family Lawyer' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Family Lawyer
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={familyLawImg} alt="family-lawyer-in-chennai" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
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
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Family Lawyers in Chennai</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Family-related legal issues often involve both emotional stress and complex procedures, making
                                        professional guidance essential. Matters such as divorce, child custody, maintenance, and property
                                        disputes require careful handling to protect your rights and achieve a fair outcome. At Mlawyer, we
                                        help you connect with experienced family lawyers who approach every case with clarity, discretion,
                                        and a solution-focused mindset.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Our panel of skilled family law attorneys is committed to delivering practical legal support tailored to
                                        your situation. By working with trusted Online family lawyers in chennai, Coimbatore and other
                                        cities for reliable legal advice, you can benefit from structured guidance and informed advice,
                                        helping you navigate legal challenges with greater confidence and move toward a resolution that
                                        supports your long-term interests.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Legal Guidance You Can Expect</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        A divorce lawyer in chennai provides complete legal support by guiding clients through every stage
                                        of a case with clarity and professionalism. They begin with a detailed understanding of your
                                        situation, followed by careful evaluation of documents and legal options. From preparing petitions
                                        and ensuring proper documentation to advising on the right legal strategy, a divorce lawyer in
                                        chennai helps streamline the entire process.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        In addition to handling legal procedures, a divorce lawyer offers strong representation
                                        during negotiations and court proceedings. Whether resolving disputes through mediation or
                                        presenting your case before a judge, they focus on protecting your rights and achieving fair
                                        outcomes.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img src={familyLawConsultation} alt="Family Law Consultation" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <img src={familySupportLegal} alt="Legal Support for Family" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Detailed Legal Support for Every Type of Family Matter</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        We provide comprehensive support across all areas of family law to ensure that your legal needs are
                                        addressed effectively.
                                    </p>
                                    <div className="space-y-6 pl-4 border-l-2 border-primary/20">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Divorce and Separation</h4>
                                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                                A skilled divorce lawyer helps you through every stage, from filing to final settlement. They ensure proper documentation and strong representation.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Child Custody and Guardianship</h4>
                                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                                Legal experts assist in securing fair custody arrangements while prioritizing the child’s well-being.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Maintenance and Alimony</h4>
                                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                                A divorce lawyer helps determine fair financial support based on individual circumstances.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Long Divorce Cases Usually Take in India</h3>
                                    <div className="space-y-4">
                                        <div className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mutual Consent Divorce</h4>
                                            <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed">
                                                This is the fastest method and usually takes 6 to 18 months, depending on court procedures and compliance with legal requirements.
                                            </p>
                                        </div>
                                        <div className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contested Divorce</h4>
                                            <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed">
                                                In cases where both parties disagree, the process can take 2 to 5 years or more, depending on the complexity of the case and court timelines.
                                            </p>
                                        </div>
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
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Legal Overview of Family Law Regulations</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Family law in India is governed by different personal laws based on religion, along with certain
                                        common legal provisions. Key legal frameworks include:
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {[
                                            "Hindu Marriage Act, 1955",
                                            "Special Marriage Act, 1954",
                                            "Indian Divorce Act, 1869",
                                            "Women’s Protection from Domestic Violence Act, 2005",
                                            "Guardians and Wards Act, 1890"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span className="text-lg leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Proven Process for Efficient Case Handling</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { title: "Consultation", desc: "Connect with a legal expert to evaluate your case." },
                                            { title: "Case Evaluation", desc: "Analyze your situation & identify the best strategy." },
                                            { title: "Documentation", desc: "Ensure all required documents are prepared correctly." },
                                            { title: "Representation", desc: "Professional handling in court or negotiation." }
                                        ].map((step, idx) => (
                                            <div key={idx} className="p-5 bg-teal-50/50 dark:bg-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                                <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img src={familyCourtGavel} alt="Family Law Regulations" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 4 */}
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get Expert Legal Help Today</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Family disputes require careful handling and expert legal support. At Mlawyer, we are committed to
                                connecting you with trusted professionals who can guide you through every step of your legal
                                journey. Whether you need assistance with divorce, custody, or financial matters, finding the right divorce
                                lawyer is the first step toward resolution.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                In addition to family law, we also provide support in <Link to="/customer/property-lawyer" className="text-primary hover:underline font-semibold">property law</Link> matters such as ownership
                                disputes, documentation, and legal verification, as well as <Link to="/customer/legal-criminal-lawyer" className="text-primary hover:underline font-semibold">criminal law</Link> cases where timely legal
                                representation is crucial. Our platform ensures you are connected with the right legal expert based
                                on your specific needs.
                            </p>
                            <div className="pt-4 pb-2">
                                <Link to="/contact-us" className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    Consult a Lawyer Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 mt-16 mb-20">
                <div className="max-w-7xl mx-auto">
                    <PopIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                What Makes Mlawyer the Right Choice for Family Lawyers in Chennai
                            </h2>
                            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
                        </div>
                    </PopIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Trusted experts in family and divorce law cases", icon: <PiSealCheck /> },
                            { title: "Your Information Remains fully secure", icon: <PiShieldCheck /> },
                            { title: "Transparent and affordable legal fee structure", icon: <PiCurrencyInr /> },
                            { title: "Get support across all stages of your legal process", icon: <PiUsers /> },
                            { title: "Timely support with easy access to legal experts", icon: <PiClock /> },
                            { title: "Trusted legal services across Chennai, Madurai, and Coimbatore", icon: <PiHouse /> }
                        ].map((item, index) => (
                            <PopIn key={index} delay={index * 0.1}>
                                <div className="h-full p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="w-16 h-16 bg-teal-50 dark:bg-gray-700/50 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
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
        </div >
    );
};

export default FamilyLaw;

