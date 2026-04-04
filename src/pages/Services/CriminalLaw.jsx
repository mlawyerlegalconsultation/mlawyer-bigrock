import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import criminalLawImg from '../../assets/img/services/criminal-law.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

const CriminalLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How can I find the best criminal lawyer near me in Chennai?",
            answer: "You can find the best criminal lawyer near you in Chennai by checking experience, specialization in criminal lawyer, and client reviews. Platforms like MLawyer help you connect with verified criminal lawyers quickly for immediate legal assistance."
        },
        {
            question: "What cases do criminal lawyers handle?",
            answer: "Criminal lawyers handle cases such as theft, assault, domestic violence, cybercrime, fraud, bail matters, and serious criminal offenses. They represent clients in court, protect legal rights, and build strong defense strategies."
        },
        {
            question: "Can I consult a criminal lawyer online near me?",
            answer: "Yes, you can consult a criminal lawyer online near you through platforms like MLawyer. You can discuss your case via phone, video call, or chat and receive legal guidance without visiting a lawyer’s office."
        },
        {
            question: "What is the cost of hiring a criminal lawyer in Chennai?",
            answer: "The cost of hiring a criminal lawyer in Chennai depends on the case type, complexity, and the lawyer’s experience. Fees may vary for consultation, bail applications, and full case representation."
        },
        {
            question: "How can a criminal lawyer help with bail in Chennai?",
            answer: "A criminal lawyer helps in filing bail applications, preparing necessary legal documents, and representing you in court. Their expertise improves the chances of getting bail quickly by following proper legal procedures and presenting strong arguments."
        },
        {
            question: "Why should I choose a local criminal lawyer near me in Chennai?",
            answer: "Choosing a local criminal lawyer near you in Chennai ensures better understanding of local courts, police procedures, and legal processes. This helps in faster case handling and more effective legal representation."
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
                <title>MlLawyer-Criminal Defence Lawyers Coimbatore | Legal Advocates near me</title>
                <meta
                    name="description"
                    content="Need criminal defence lawyers in Coimbatore? Connect with expert legal advocates and attorneys near you for quick response and case guidance."
                />
                <meta
                    name="keywords"
                    content="legal criminal lawyer,criminal attorney near me,best criminal lawyers in coimbatore,top criminal defense lawyers,criminal advocates in chennai"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/customer/legal-criminal-lawyer" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="MlLawyer-Criminal Defence Lawyers Coimbatore | Legal Advocates near me" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/legal-criminal-lawyer" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Need criminal defence lawyers in Coimbatore? Connect with expert legal advocates and attorneys near you for quick response and case guidance."
                />

                <meta name="twitter:title" content="MlLawyer-Criminal Defence Lawyers Coimbatore | Legal Advocates near me" />
                <meta
                    name="twitter:description"
                    content="Need criminal defence lawyers in Coimbatore? Connect with expert legal advocates and attorneys near you for quick response and case guidance."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="legal-criminal-lawyer" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Criminal Lawyer' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Criminal Lawyer
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={criminalLawImg} alt="legal-criminal-lawyer" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-10 p-6 bg-teal-50 dark:bg-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of Criminal Lawyer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "FIR Filing & Police Complaints",
                                "Bail (Anticipatory & Regular Bail)",
                                "Domestic Violence & Criminal Harassment",
                                "Cybercrime & Online Fraud Cases",
                                "Cheque Bounce"
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
                            Criminal Lawyer deals with offenses that impact society, the state, and overall public safety.It sets out what's considered a crime, decides on punishments, and outlines how investigations, trials, and prosecutions should work. This law is really important because it helps keep us safe and makes sure people who break the rules are held accountable. By understanding what criminal law is and how it works, we can better navigate the justice system and make sure everyone is treated fairly.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Types of Crimes:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Crimes Against a Person – like assault and homicide",
                                    "Offenses Against Property – e.g., theft, burglary",
                                    "Economic Offenses – e.g., fraud, embezzlement",
                                    "Public Order Offenses – e.g., rioting, unlawful assembly",
                                    "Cyber Crimes – e.g., hacking, identity theft"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Process Under Criminal Lawyer:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Filing of complaint or FIR",
                                    "Investigation by police",
                                    "Arrest (if required)",
                                    "Filing of charge sheet",
                                    "Trial in court",
                                    "Judgment (acquittal or conviction)",
                                    "Sentencing"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            MLawyer is an all-in-one platform to find criminal advocates in chennai and the best criminal lawyers in coimbatore, and other major cities. Looking for a <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">legal criminal lawyer</Link></h3> or a criminal attorney near me? Discover <h3 className="inline font-bold text-gray-900 dark:text-white text-lg">top criminal defense lawyers</h3> by browsing the MLawyer app.
                        </div>
                    </div>
                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div>
    );
};

export default CriminalLaw;

