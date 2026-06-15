import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import familyLawImg from '../../assets/img/services/family-lawyers-in-chennai.png';
import familyLawConsultation from '../../assets/img/services/best-divorce-lawyers-in-chennai.png';
import familyCourtGavel from '../../assets/img/services/family-law-attorneys.png';
import familySupportLegal from '../../assets/img/services/family-lawyer-near-me.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { PiSealCheck, PiShieldCheck, PiCurrencyInr, PiUsers, PiClock, PiHouse } from 'react-icons/pi';

const FamilyLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How do I choose the best family lawyers in Coimbatore?",
            answer: "Look for: Experience in family law, Positive client reviews, Transparent fee structure, Strong communication skills, Successful handling of similar cases"
        },
        {
            question: "Can a family lawyer Chennai handle child custody disputes?",
            answer: "Yes, a family lawyer Chennai is experienced at handling child custody disputes. They represent your interests at court, present relevant evidence, and ensure the child's best interests and welfare are given the highest priority during legal proceedings."
        },
        {
            question: "How can Mlawyer help me find a family lawyers Chennai?",
            answer: "Mlawyer is a trusted platform that connects you with the best family lawyer Chennai based on your specific legal needs. Simply visit our platform, describe your case, and get matched with a verified and experienced family lawyer Chennai who can guide you every step of the way."
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
                    content="family lawyers in chennai, divorce lawyer chennai, best divorce lawyers in chennai, divorce advocate in chennai, family lawyer near me, family lawyer for divorce, family law attorneys"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/family-lawyers" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Best Family &amp; Divorce Lawyers Near Me in Chennai | Coimbatore" />
                <meta property="og:url" content="https://www.mlawyer.in/family-lawyers" />
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
                        Family Lawyers in Chennai
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={familyLawImg} alt="family lawyers in chennai" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
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
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Family-related legal issues often involve both emotional stress and complex procedures, making professional guidance essential. Matters such as divorce, child custody, maintenance, and property disputes require careful handling to protect your rights and achieve a fair outcome. At Mlawyer, we help you connect with experienced chennai’s family lawyer who approach every case with clarity, discretion, and a solution-focused mindset.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Our panel of skilled family law attorneys is committed to delivering practical legal support tailored to your situation. By working with trusted Online family lawyers in Coimbatore, Chennai and other cities for reliable legal advice ,you can benefit from structured guidance and informed advice, helping you navigate legal challenges with greater confidence and move toward a resolution that supports your long-term interests.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Legal Guidance You Can Expect from a Family Lawyers Chennai</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        A divorce lawyer in chennai provides complete legal support by guiding clients through every stage of a case with clarity and professionalism. They begin with a detailed understanding of your situation, followed by careful evaluation of documents and legal options. From preparing petitions and ensuring proper documentation to advising on the right legal strategy, a family lawyer chennai helps streamline the entire process. Their expertise ensures compliance with applicable laws while reducing the chances of delays or errors.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        In addition to handling legal procedures, a divorce lawyer in chennai offers strong representation during negotiations and court proceedings. Whether resolving disputes through mediation or presenting your case before a judge, they focus on protecting your rights and achieving fair outcomes. They also provide ongoing support by keeping you informed, explaining each step clearly, and helping you make confident decisions throughout the legal journey.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img src={familyLawConsultation} alt="best divorce lawyers in chennai" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Why to Choose the Best Divorce Lawyers in Chennai? */}
                        <div className="bg-teal-50/30 dark:bg-gray-800/30 p-8 rounded-3xl border border-teal-100/50 dark:border-gray-700/50">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why to Choose the Best Divorce Lawyers in Chennai ?</h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    If you are facing marital issues, consulting a divorce lawyer at the right time can help you avoid unnecessary complications. Legal procedures can be overwhelming, but with the support of a qualified divorce lawyer chennai, you can navigate the process smoothly.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    A divorce lawyer assists with filing petitions, preparing documents, representing you in court, and negotiating settlements. Whether it is a mutual consent case or a contested matter, a professional divorce lawyer ensures that your interests are protected throughout the process.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <img src={familySupportLegal} alt="family lawyer near me" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Detailed Legal Support for Every Type of Family Matter</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        We provide comprehensive support across all areas of family law to ensure that your legal needs are addressed effectively.
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
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Domestic Disputes</h4>
                                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                                If you are facing domestic issues, a qualified divorce advocate in chennai can guide you through legal procedures and ensure protection under the law.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Property and Asset Division</h4>
                                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                                A divorce lawyer ensures fair distribution of assets and resolves disputes related to shared property.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Long Divorce Cases usually takes in India</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        The duration of a divorce case depends on the type of case and the level of dispute between the parties.
                                    </p>
                                    <div className="space-y-4 mb-4">
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
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        An experienced divorce lawyer helps in speeding up the process by ensuring proper documentation and avoiding unnecessary delays.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Legal Overview of Family Law Regulations and Rights in India</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Family law in India is governed by different personal laws based on religion, along with certain common legal provisions. Understanding these laws is important when dealing with family disputes.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 font-semibold">
                                        Key legal frameworks include:
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
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        A family lawyer for divorce helps you understand which law applies to your case and how it impacts your legal rights.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Proven Process for Efficient Legal Case Handling</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        We follow a structured approach to deliver efficient legal solutions:
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { title: "Consultation", desc: "Connect with a legal expert to evaluate your case and options." },
                                            { title: "Case Evaluation", desc: "Experts analyze your situation and identify the best strategy." },
                                            { title: "Documentation", desc: "A divorce lawyer ensures all required documents are prepared correctly." },
                                            { title: "Representation", desc: "Your case is handled professionally in court or through negotiation." },
                                            { title: "Resolution", desc: "We aim for fair and timely outcomes to help you move forward." }
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
                                <img src={familyCourtGavel} alt="family law attorneys" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* New Sections: Legal Support & Role/Benefits */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Why You Need Professional Legal Support</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Handling family disputes without proper legal guidance can lead to complications and delays. A family lawyer for divorce ensures that your case is managed professionally and efficiently.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    If you have searched for a <strong>Online family lawyer near me</strong>, you know how important it is to find reliable legal support quickly. Mlawyer simplifies this process by connecting you with experienced professionals who can handle your case effectively.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Working with skilled family law attorneys ensures that your case is handled with accuracy, reducing stress and improving your chances of a favorable outcome.
                                </p>
                            </div>
                            <div className="bg-teal-50/30 dark:bg-gray-800/30 p-8 rounded-3xl border border-teal-100/50 dark:border-gray-700/50">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Role and Benefits of an Experienced Divorce Lawyer in Legal Cases</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Choosing the right divorce lawyer provides several advantages:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Clear understanding of legal procedures",
                                        "Accurate documentation and filing",
                                        "Strong representation in court",
                                        "Reduced stress through expert handling",
                                        "Improved chances of favorable outcomes"
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-750 dark:text-gray-350">
                                            <PiSealCheck className="text-secondary text-2xl shrink-0" />
                                            <span className="text-lg leading-relaxed">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    A knowledgeable divorce lawyer ensures that every aspect of your case is handled efficiently and professionally.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 4 */}
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get Expert Legal Help Today – Family Lawyers in Chennai</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Family disputes require careful handling and expert legal support. At Mlawyer, we are committed to connecting you with trusted professionals who can guide you every step of your legal journey.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                With access to experienced family law attorneys, you can approach your case with confidence. Whether you need assistance with divorce, custody, or financial matters, finding the right divorce lawyer is the first step toward resolution.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                In addition to family law, we also provide support in <Link to="/property-lawyers" className="text-primary hover:underline font-semibold">property law</Link> matters such as ownership disputes, documentation, and legal verification, as well as <Link to="/legal-criminal-lawyers" className="text-primary hover:underline font-semibold">criminal law</Link> cases where timely legal representation is crucial. Our platform ensures you are connected with the right legal expert based on your specific needs.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                We also connect you with the best family lawyers in Coimbatore, offering trusted legal support for divorce, custody, property and criminal matters across the city. Take action today and get the legal support you need to protect your rights and secure your future.
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
