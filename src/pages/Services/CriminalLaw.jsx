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
                <title>Criminal Lawyers in Chennai | Criminal Defence - MLawyer</title>
                <meta
                    name="description"
                    content="MLawyer provides professional criminal law services in Chennai and across Tamil Nadu — bail, FIR matters, cybercrime, fraud, trial representation and appeals. Get experienced criminal advocates for strong legal defence."
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
                <meta property="og:title" content="Criminal Lawyers in Chennai | Criminal Defence - MLawyer" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/criminal-law" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="MLawyer provides professional criminal law services in Chennai — bail, FIR matters, cybercrime, fraud, trial representation and appeals."
                />

                <meta name="twitter:title" content="Criminal Lawyers in Chennai | Criminal Defence - MLawyer" />
                <meta
                    name="twitter:description"
                    content="MLawyer provides professional criminal law services in Chennai — bail, FIR matters, cybercrime, fraud, trial representation and appeals."
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

            <div className="w-full px-6 max-w-6xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700 space-y-12">

                    {/* Introduction Section */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Criminal law is a legal framework created to protect individuals, public safety, property, and the overall welfare of society by addressing unlawful activities and offenses. It helps maintain law and order by defining crimes, legal punishments, and judicial procedures.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our criminal lawyers in Chennai, Coimbatore, Madurai, Trichy and across Tamil Nadu provide professional legal assistance for various criminal cases, including bail matters, police complaints, cybercrime, fraud, and other criminal law issues.
                        </p>
                    </div>

                    {/* Experienced Criminal Defense Lawyers Section */}
                    <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experienced Criminal Defense Lawyers for Strong Legal Representation</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Facing allegations or legal complaints can create stress and uncertainty. This is why experienced criminal defense lawyers play an important role in protecting the rights of individuals involved in criminal cases. Professional legal representation ensures that every aspect of the case is examined carefully, including evidence, witness statements, police procedures, and legal documentation.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
                            Criminal defense lawyers assist clients in handling different types of legal matters such as:
                        </p>
                        <ul className="space-y-3 ml-6">
                            {[
                                "Bail and anticipatory bail petitions",
                                "Cybercrime and online fraud matters",
                                "Financial and property-related offenses",
                                "Domestic and family-related criminal disputes",
                                "Assault and harassment complaints",
                                "White-collar crimes",
                                "Cheque bounce and fraud allegations",
                                "Criminal litigation and trial representation",
                                "Appeals and revision petitions"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                                    <span className="text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            Legal professionals understand that every criminal case is different. A proper legal strategy depends on the facts, available evidence, and applicable criminal law provisions. By analyzing every detail carefully, lawyers work toward achieving the best possible legal outcome for clients.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            A professional litigation lawyer also ensures that all legal procedures are followed correctly while representing clients before different courts and legal authorities. This level of legal guidance becomes extremely important in sensitive criminal justice matters where accurate legal action is necessary.
                        </p>
                    </div>

                    {/* Trusted Criminal Advocate Section */}
                    <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Trusted Criminal Advocate in Chennai for Case Support</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Choosing the right online criminal advocate in Chennai can make a significant difference in the handling of a legal matter. A knowledgeable advocate provides strategic legal advice, explains court procedures clearly, and represents clients effectively during hearings and investigations.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Legal representation is not limited to court appearances alone. A criminal advocate in Chennai also helps clients prepare legal documents, file petitions, review evidence, communicate with legal authorities, and develop defense strategies based on the nature of the criminal cases involved.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
                            Professional legal support is important in situations involving:
                        </p>
                        <ul className="space-y-3 ml-6">
                            {[
                                "Police complaints and FIR-related matters",
                                "Arrest and detention issues",
                                "Bail applications",
                                "Criminal litigation support",
                                "Legal notices and responses",
                                "Trial court representation",
                                "Criminal appeals and revisions",
                                "Investigation-related legal assistance"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                                    <span className="text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            A criminal attorney lawyer ensures that clients understand their rights during police inquiries, investigations, and court processes. Proper legal guidance helps individuals manage criminal justice procedures effectively and avoid unnecessary legal complications.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            A legal criminal lawyer in online also identifies procedural gaps, inconsistencies in evidence, and possible defense arguments that can support the case. Strong preparation and legal knowledge are essential for achieving favorable outcomes in criminal law matters.
                        </p>
                    </div>

                    {/* Understanding Criminal Law Section */}
                    <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Understanding Criminal Law and Legal Procedures</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Criminal law deals with offenses that are considered violations against society or individuals under legal statutes. It covers a wide range of matters, including theft, fraud, assault, cybercrime, financial crimes, domestic violence, and other legal offenses.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Understanding criminal law requires detailed knowledge of legal procedures, evidence rules, investigation methods, and courtroom practices. Legal professionals help clients navigate these procedures while ensuring compliance with legal requirements.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
                            The legal process in criminal cases often includes:
                        </p>
                        <ol className="space-y-3 ml-6 list-decimal">
                            {[
                                "Filing of complaints or FIRs",
                                "Police investigation",
                                "Collection of evidence",
                                "Bail applications",
                                "Court hearings and trial proceedings",
                                "Witness examination",
                                "Judgment and sentencing",
                                "Appeals and legal remedies"
                            ].map((item, idx) => (
                                <li key={idx} className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                    {item}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Common Criminal Issues Section */}
                    <div className="space-y-8 border-t border-gray-200 dark:border-gray-700 pt-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Common Criminal Issues We Handle</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Criminal law involves various offenses that impact individuals, property, businesses, and public order. Our legal team provides representation and guidance across a broad range of criminal matters, ensuring each case is handled with proper legal analysis and attention to detail.
                        </p>

                        {/* Key Criminal Cases - Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            {[
                                {
                                    title: "Property and Financial Offenses",
                                    items: ["Theft", "Robbery", "Property disputes", "Financial irregularities", "Cheating cases"]
                                },
                                {
                                    title: "Cyber and Digital Crimes",
                                    items: ["Cybercrime", "Online fraud", "Identity theft", "Other technology-related offenses"]
                                },
                                {
                                    title: "Personal and Physical Offenses",
                                    items: ["Assault cases", "Criminal threats", "Harassment allegations", "Related complaints"]
                                },
                                {
                                    title: "Family and Domestic Criminal Matters",
                                    items: ["Domestic disputes involving criminal elements", "False allegations", "Sensitive family-related cases"]
                                },
                                {
                                    title: "Corporate and White-Collar Crimes",
                                    items: ["Business fraud", "Corporate misconduct", "Financial compliance-related criminal issues"]
                                },
                                {
                                    title: "False Cases and Wrongful Accusations",
                                    items: ["Handling fabricated complaints", "Misuse of legal provisions", "Wrongful criminal allegations"]
                                },
                                {
                                    title: "Police and Investigation Matters",
                                    items: ["Support during FIR registration", "Police inquiry", "Criminal investigation procedures"]
                                }
                            ].map((caseType, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-700/50 dark:to-gray-700/30 rounded-xl p-6 border border-teal-100 dark:border-gray-600">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{caseType.title}</h4>
                                    <ul className="space-y-2">
                                        {caseType.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                                <div className="w-1 h-1 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Approach Section */}
                    <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-8 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-gray-700/30 dark:to-gray-700/20 rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Legal Approach Followed by MLawyer</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Every criminal case at <Link to="https://www.mlawyer.in" className="text-primary hover:underline font-bold">MLawyer</Link> is carefully reviewed under applicable criminal law to ensure accurate legal handling and a strong defense strategy based on evidence, facts, and procedural correctness. We provide continuous legal guidance throughout the criminal justice process to protect client rights and interests.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Along with criminal matters, MLawyer also offers support through experienced <Link to="https://www.mlawyer.in/customer/property-lawyer" className="text-primary hover:underline font-bold">property advocates</Link>, handles family offense cases through our <Link to="https://www.mlawyer.in/customer/family-lawyer" className="text-primary hover:underline font-bold">family law experts</Link>, and provides assistance from skilled <Link to="https://www.mlawyer.in/customer/best-corporate-lawyers" className="text-primary hover:underline font-bold">corporate lawyers</Link>, ensuring complete and reliable legal services across multiple practice areas.
                        </p>
                    </div>

                </div>
            </div>
            <FAQSection faqs={faqs} />
        </div>
    );
};

export default CriminalLaw;

