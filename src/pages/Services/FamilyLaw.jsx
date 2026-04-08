import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import familyLawImg from '../../assets/img/services/family-law.png';
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
            question: "What is the cost of hiring a divorce lawyer in Chennai?",
            answer: "The cost of hiring a divorce lawyer in Chennai depends on the complexity of the case and whether it is a mutual or contested divorce. Mutual divorce cases are generally more affordable, while contested cases may involve higher legal fees due to court proceedings."
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
                <title>Consult Family Lawyer | Divorce Lawyers in Chennai - MlLawyer</title>
                <meta
                    name="description"
                    content="Connect with expert divorce lawyers in Chennai for trusted legal help. Consult experienced family lawyers near you for quick advice and affordable fees."
                />
                <meta
                    name="keywords"
                    content="family lawyer near me,divorce lawyer,family lawyers in chennai,family lawyer consultation,best divorce lawyers in chennai"
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
                <meta property="og:title" content="Consult Family Lawyer | Divorce Lawyers in Chennai - MlLawyer" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/family-lawyer" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Connect with expert divorce lawyers in Chennai for trusted legal help. Consult experienced family lawyers near you for quick advice and affordable fees."
                />

                <meta name="twitter:title" content="Consult Family Lawyer | Divorce Lawyers in Chennai - MlLawyer" />
                <meta
                    name="twitter:description"
                    content="Connect with expert divorce lawyers in Chennai for trusted legal help. Consult experienced family lawyers near you for quick advice and affordable fees."
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
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-10 p-6 bg-teal-50 dark:bg-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of Family Lawyer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Divorce & Separation",
                                "Child Custody & Visitation Rights",
                                "Alimony / Maintenance",
                                "Domestic Violence Cases",
                                "Dowry & Harassment Issues"
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
                            Family Lawyer is that branch of law which deals with the legal aspects of relationship and other family matters, in the domestic or social sphere. Marriage registration, Divorce, Child Custody, Child Maintenance, Adoption, Maintenance or Alimony and Domestic Violence are some of the family matters dealt under the family lawyer.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Family Lawyer typically handles:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Marriage – legal requirements, registration, and validity of marriage",
                                    "Divorce and separation – legal procedures for ending a marriage",
                                    "Child custody and visitation – determining who will care for children after separation",
                                    "Child support and maintenance – financial support obligations for spouses and children",
                                    "Adoption and guardianship – legal process of adopting a child and appointing guardians",
                                    "Inheritance and succession – distribution of family property after death",
                                    "Domestic violence protection – legal safety against family abuse."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            Need the best divorce lawyers in chennai? MLawyer helps you connect with experienced <h3 className="inline font-bold text-gray-900 dark:text-white text-lg">family lawyers in chennai</h3>, Coimbatore and other cities for reliable legal advice and family lawyer consultation. Easily reach a qualified <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">divorce lawyer</Link></h3> or a family lawyer near me for trusted legal support via the app.
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

