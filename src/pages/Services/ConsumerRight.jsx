import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import consumerLawImg from '../../assets/img/services/consumer-law.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';

const ConsumerRight = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const faqs = [
        {
            question: "How can I find a consumer rights lawyer near me in Chennai?",
            answer: "You can find a consumer rights lawyer near you in Chennai through platforms like MLawyer. Simply submit your complaint and connect with experienced lawyers who specialize in consumer protection cases such as defective products, fraud, or service issues."
        },
        {
            question: "What is a consumer rights lawyer and how can they help?",
            answer: "A consumer rights lawyer helps individuals resolve issues related to defective products, unfair trade practices, misleading advertisements, and poor services. They guide you in filing complaints, seeking compensation, and representing you in consumer courts."
        },
        {
            question: "Can I file a consumer complaint online through a lawyer?",
            answer: "Yes, you can file a consumer complaint online with the help of a lawyer. Online legal platforms allow you to submit your issue, get legal advice, and initiate complaint procedures without visiting a consumer court physically."
        },
        {
            question: "What types of consumer cases can a lawyer handle?",
            answer: "Consumer lawyers handle cases such as online shopping fraud, delayed delivery, defective products, insurance claim rejection, banking disputes, and service deficiencies. These issues are protected under consumer lawyers in India."
        },
        {
            question: "What is the cost of hiring a consumer rights lawyer in Chennai?",
            answer: "The cost depends on the complexity of the case, the claim amount, and the lawyer’s experience. Basic consultations are usually affordable, while full legal representation may involve additional fees based on the case."
        },
        {
            question: "Why should I consult a consumer lawyer online near me?",
            answer: "Consulting a consumer lawyer online near you offers convenience, faster response, and expert legal guidance without travel. It helps you take quick action against unfair practices and protect your legal rights efficiently."
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
                <title>MlLawyer-Consumer Court  Advocate | Lawyers  Near Me | Consumer Right lawyer app</title>
                <meta
                    name="description"
                    content="Use our consumer rights app to connect with advocates near you. View court lawyer fees, get legal advice, and resolve complaints with expert support."
                />
                <meta
                    name="keywords"
                    content="consumer court lawyers near me,consumer court lawyer fees,consumer court advocate,consumer right lawyer app"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Coimbatore" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/customer/consumer-right-lawyer-app" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="MlLawyer-Consumer Court  Advocate | Lawyers  Near Me | Consumer Right lawyer app" />
                <meta property="og:url" content="https://www.mlawyer.in/customer/consumer-right-lawyer-app" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Use our consumer rights app to connect with advocates near you. View court lawyer fees, get legal advice, and resolve complaints with expert support."
                />

                <meta name="twitter:title" content="MlLawyer-Consumer Court  Advocate | Lawyers  Near Me | Consumer Right lawyer app" />
                <meta
                    name="twitter:description"
                    content="Use our consumer rights app to connect with advocates near you. View court lawyer fees, get legal advice, and resolve complaints with expert support."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="consumer-right-lawyer-app" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Consumer Right lawyer' }]} />
            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Consumer Rights Lawyer
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img src={consumerLawImg} alt="consumer-right-lawyer-app" loading="lazy" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="mb-10 p-6 bg-teal-50 dark:bg-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-4">Core Areas of Consumer Rights Lawyer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Consumer Complaints & Legal Notices",
                                "Compensation & Damages Claims",
                                "Warranty & Guarantee Disputes",
                                "Defective Products & Product Liability",
                                "Deficiency in Services"
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
                            Consumer rights are laws designed to protect buyers and ensure they are treated fairly when purchasing products or services.These rights safeguard consumers against unfair trade practices, defective products, misleading advertisements, and exploitation by sellers or service providers. In India, consumer rights are primarily protected under the Consumer Protection Act 2019, which provides a comprehensive framework for addressing consumer grievances and disputes.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Common Consumer Issues:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Defective or substandard products",
                                    "False or misleading advertisements",
                                    "Overcharging or hidden costs",
                                    "Poor or deficient services",
                                    "Unfair contract terms"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Objectives of Consumer Rights Lawyer:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Protect consumers from exploitation",
                                    "Ensure fair trade practices",
                                    "Promote transparency in business transactions",
                                    "Provide simple and speedy grievance redressal"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                        <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                            Want clarity on your consumer rights? MLawyer connects you with best consumer court lawyers for expert legal support, helping you easily find consumer court lawyers near me and access the most reliable <h3 className="inline font-bold text-gray-900 dark:text-white text-lg"><Link to="/download" className="text-primary hover:underline">consumer right lawyer app</Link></h3> for quick guidance and resolution. The <h3 className="inline font-bold text-gray-900 dark:text-white text-lg">consumer court lawyer fees</h3> are affordable in our app, allowing you to choose the right <Link to="/download" className="text-primary hover:underline">consumer court advocate</Link> for legal opinions.
                        </div>
                    </div>
                </div>

            </div>
            <FAQSection faqs={faqs} />
        </div>
    );
};

export default ConsumerRight;

