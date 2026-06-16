import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import criminalLawImg from '../../assets/img/services/criminal-lawyers-in-chennai.png';
import criminalDefenseLawyer from '../../assets/img/services/criminal-defense-lawyer.png';
import criminalCourtTrial from '../../assets/img/services/criminal-court-trial.png';
import criminalLegalSupport from '../../assets/img/services/criminal-legal-support.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { PiSealCheck, PiShieldCheck, PiCurrencyInr, PiUsers, PiClock, PiHouse } from 'react-icons/pi';

const CriminalLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How can I find the best criminal lawyer near me in Chennai?",
            answer: "You can find the best criminal lawyer near you in Chennai by choosing an experienced advocate who handles criminal cases such as bail, FIR matters, fraud, cybercrime, and trial court representation. A skilled lawyer ensures proper legal guidance and strong defense strategy."
        },
        {
            question: "How much time does it take to finish a criminal case?",
            answer: "The time required to complete a criminal case depends on the nature and complexity of the case, evidence involved, number of witnesses, and court procedures. On average, simple cases may take a few months to 1 year, while more complex criminal cases can take 2 to 5 years or longer. The duration may also increase if the case goes for appeal or higher court proceedings."
        },
        {
            question: "How are criminal cases in Chennai usually processed?",
            answer: "Criminal cases in Chennai typically involve filing of FIR, police investigation, collection of evidence, bail applications, court hearings, trial proceedings, and finally judgment or appeal depending on the case outcome."
        },
        {
            question: "What factors affect the cost of criminal lawyers in Chennai?",
            answer: "The cost of criminal lawyers in Chennai depends on factors such as case complexity, type of criminal offense, court stage, duration of proceedings, and the level of legal representation required."
        },
        {
            question: "Can a criminal lawyer help during arrest or emergency situations?",
            answer: "Yes, a criminal lawyer can provide immediate assistance during arrest situations by applying for bail or anticipatory bail and guiding clients through police procedures and legal rights during investigation."
        },
        {
            question: "Are Criminal Lawyers in Coimbatore available for online legal consultations?",
            answer: "Many Criminal Lawyers in Coimbatore offer online consultations, allowing clients to discuss their cases and receive legal guidance remotely."
        },
        {
            question: "Can a Criminal Defence Lawyer in Chennai assist with bail matters?",
            answer: "Yes. They can help prepare and file bail applications and represent clients during bail hearings."
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
                <link rel="canonical" href="https://www.mlawyer.in/legal-criminal-lawyers" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Criminal Lawyers in Chennai and Coimbatore | Legal Advocates" />
                <meta property="og:url" content="https://www.mlawyer.in/legal-criminal-lawyers" />
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
                    <div className="w-full rounded-xl overflow-hidden mb-4">
                        <img src={criminalLawImg} alt="criminal lawyers in chennai" loading="lazy" className="w-full h-auto object-cover max-h-[350px] md:max-h-[450px] lg:max-h-[500px] rounded-xl" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="space-y-10">

                        {/* Intro Paragraphs */}
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Criminal law is a legal framework created to protect individuals, public safety, property, and the overall welfare of society by addressing unlawful activities and offenses. It helps maintain law and order by defining crimes, legal punishments, and judicial procedures.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our criminal lawyers in Coimbatore, Chennai, Madurai, Trichy and across Tamil Nadu provide professional legal assistance for various criminal cases, including bail matters, police complaints, cybercrime, fraud, and other criminal law issues.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Experienced Criminal Defense Lawyers for Strong Legal Representation</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Facing allegations or legal complaints can create stress and uncertainty. This is why experienced criminal defence lawyer in chennai, play an important role in protecting the rights of individuals involved in criminal cases. Professional legal representation ensures that every aspect of the case is examined carefully, including evidence, witness statements, police procedures, and legal documentation.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        When dealing with criminal charges or investigations, having a skilled criminal lawyer in Chennai offers valuable legal support at every stage. A criminal defense advocate examines all relevant facts, police reports, and evidence to identify procedural gaps and recommend the best defense strategy.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Proper legal assistance can help protect your rights, safeguard your freedom, and ensure that your case is handled in accordance with the legal system.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 flex items-center justify-center">
                                <img src={criminalDefenseLawyer} alt="Criminal Defense Lawyer" className="w-full h-auto max-h-[450px] rounded-xl object-contain" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Criminal Defense Cases List Grid */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Criminal Defense Representation & Legal Assistance</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Criminal defense lawyers assist clients in handling different types of legal matters such as:
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
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
                                    <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
                                        <div className="w-full p-5 bg-teal-50/40 dark:bg-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700 hover:shadow-md transition-shadow flex items-start gap-3">
                                            <PiSealCheck className="text-secondary text-2xl shrink-0 mt-0.5" />
                                            <span className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 order-2 lg:order-1">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Trusted Criminal Advocate in Chennai for Case Support</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Choosing the right online criminal lawyers chennai can make a significant difference in the handling of a legal matter. A knowledgeable advocate provides strategic legal advice, explains court procedures clearly, and represents clients effectively during hearings and investigations.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Legal representation is not limited to court appearances alone. A criminal lawyer chennai also helps clients prepare legal documents, file petitions, review evidence, communicate with legal authorities, and develop defense strategies based on the nature of the criminal cases involved.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 flex items-center justify-center">
                                <img src={criminalLegalSupport} alt="Criminal Legal Support" className="w-full h-auto max-h-[400px] rounded-xl object-contain" />
                            </div>
                        </div>

                        {/* Section 2 Part B: Criminal Law Case Strategy */}

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Navigating Criminal Investigations and Defense Strategy</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                A criminal attorney lawyer ensures that clients understand their rights during police inquiries, investigations, and court processes. Proper legal guidance helps individuals manage criminal justice procedures effectively and avoid unnecessary legal complications.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                A legal criminal lawyer in online also identifies procedural gaps, inconsistencies in evidence, and possible defense arguments that can support the case. Strong preparation and legal knowledge are essential for achieving favorable outcomes in criminal law matters.
                            </p>
                        </div>


                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Critical Situations Support Grid */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Critical situations requiring professional legal support</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our criminal advocates offer timely assistance and solid defense representation in the following scenarios:
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
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
                                    <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex">
                                        <div className="w-full p-5 bg-teal-50/40 dark:bg-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col justify-between">
                                            <div className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span className="text-md font-semibold text-gray-900 dark:text-white leading-relaxed">{item}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Understanding Criminal Law and Legal Procedures</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Criminal law deals with offenses that are considered violations against society or individuals under legal statutes. It covers a wide range of matters, including theft, fraud, assault, cybercrime, financial crimes, domestic violence, and other legal offenses.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Understanding criminal law requires detailed knowledge of legal procedures, evidence rules, investigation methods, and courtroom practices. Legal professionals help clients navigate these procedures while ensuring compliance with legal requirements.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 flex items-center justify-center">
                                <img src={criminalCourtTrial} alt="Criminal Court Trial" className="w-full h-auto max-h-[450px] rounded-xl object-contain" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Judicial Process Step Grid */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Standard Criminal Judicial Process in India</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    The legal process in criminal cases typically follows these procedural stages:
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    { step: "01", title: "Filing of complaints/FIRs", desc: "Initiating the legal record of the alleged criminal offense." },
                                    { step: "02", title: "Police investigation", desc: "Gathering facts, searching scenes, and questioning key witnesses." },
                                    { step: "03", title: "Collection of evidence", desc: "Securing documents, forensics, and physical materials." },
                                    { step: "04", title: "Bail applications", desc: "Requesting release from custody while awaiting trial." },
                                    { step: "05", title: "Court hearings & trial", desc: "Presenting arguments and evidence before a judge." },
                                    { step: "06", title: "Witness examination", desc: "Cross-examining witnesses to substantiate facts." },
                                    { step: "07", title: "Judgment & sentencing", desc: "Pronouncing guilt or innocence and the legal penalty." },
                                    { step: "08", title: "Appeals & remedies", desc: "Challenging court orders at higher judicial levels." }
                                ].map((item, idx) => (
                                    <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex">
                                        <div className="w-full p-5 bg-teal-50/50 dark:bg-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-secondary mb-2 block">{item.step}</span>
                                                <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 4 */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Common Criminal Issues We Handle</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Criminal law involves various offenses that impact individuals, property, businesses, and public order. Our legal team provides representation and guidance across a broad range of criminal matters, ensuring each case is handled with proper legal analysis and attention to detail.
                                </p>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Key Criminal Cases We Deal With</h4>
                                <p className="text-md text-gray-500 dark:text-gray-400">
                                    We regularly assist clients in matters such as:
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    {
                                        title: "Property and Financial Offenses",
                                        items: [
                                            "Theft",
                                            "Robbery",
                                            "Property disputes",
                                            "Financial irregularities",
                                            "Cheating cases."
                                        ]
                                    },
                                    {
                                        title: "Cyber and Digital Crimes",
                                        items: [
                                            "Cybercrime",
                                            "Online fraud",
                                            "Identity theft",
                                            "Other technology-related offenses"
                                        ]
                                    },
                                    {
                                        title: "Personal and Physical Offenses",
                                        items: [
                                            "Assault cases",
                                            "Criminal threats",
                                            "Harassment allegations",
                                            "Related complaints"
                                        ]
                                    },
                                    {
                                        title: "Family and Domestic Criminal Matters",
                                        items: [
                                            "Domestic disputes involving criminal elements including false allegations",
                                            "Sensitive family-related cases."
                                        ]
                                    },
                                    {
                                        title: "Corporate and White-Collar Crimes",
                                        items: [
                                            "Business fraud",
                                            "Corporate misconduct",
                                            "Financial compliance-related criminal issues"
                                        ]
                                    },
                                    {
                                        title: "False Cases and Wrongful Accusations",
                                        items: [
                                            "Handling fabricated complaints",
                                            "Misuse of legal provisions",
                                            "Wrongful criminal allegations"
                                        ]
                                    },
                                    {
                                        title: "Police and Investigation Matters",
                                        items: [
                                            "Support during FIR registration",
                                            "Police inquiry",
                                            "Criminal investigation procedures"
                                        ]
                                    }
                                ].map((caseType, idx) => (
                                    <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
                                        <div className="w-full bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-700/50 dark:to-gray-700/30 rounded-2xl p-6 border border-teal-100 dark:border-gray-600 hover:shadow-md transition-all flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{caseType.title}</h4>
                                                <ul className="space-y-2">
                                                    {caseType.items.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                                                            <span className="text-md leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
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
                                Every criminal case at <Link to="/" className="text-primary hover:underline font-bold">MLawyer</Link> is carefully reviewed under applicable criminal law to ensure accurate legal handling and a strong defense strategy based on evidence, facts, and procedural correctness. We provide continuous legal guidance throughout the criminal justice process to protect client rights and interests.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Along with criminal matters, <Link to="/" className="text-primary hover:underline font-bold">MLawyer</Link> also offers support through experienced <Link to="/property-lawyers" className="text-primary hover:underline font-bold">property advocates</Link>, handles <Link to="/family-lawyers" className="text-primary hover:underline font-bold">family offense</Link> cases, and provides assistance from skilled <Link to="/best-corporate-lawyers" className="text-primary hover:underline font-bold">corporate lawyers</Link>, ensuring complete and reliable legal services across multiple practice areas.
                            </p>
                             <div className="pt-4 pb-2">
                                <Link to="/download" className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    Consult a Criminal Lawyer
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
                                What Makes Mlawyer the Right Choice for Criminal Lawyers in Chennai
                            </h2>
                            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
                        </div>
                    </PopIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Trusted experts in criminal law and defense cases", icon: <PiSealCheck /> },
                            { title: "Your personal information remains fully secure", icon: <PiShieldCheck /> },
                            { title: "Transparent and affordable legal fee structure", icon: <PiCurrencyInr /> },
                            { title: "Get support across all stages of your legal process", icon: <PiUsers /> },
                            { title: "Timely support with easy access to legal experts", icon: <PiClock /> },
                            { title: "Trusted legal services across Chennai, Madurai, and Coimbatore", icon: <PiHouse /> }
                        ].map((item, index) => (
                            <PopIn key={index} delay={index * 0.1} className="w-full h-full">
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
        </div>
    );
};

export default CriminalLaw;
