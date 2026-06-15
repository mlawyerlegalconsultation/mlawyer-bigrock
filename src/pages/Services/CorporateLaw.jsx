import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PopIn from '../../components/animations/PopIn';
import corporateLawImg from '../../assets/img/services/best-corporate-law-firms-in-chennai.png';
import corporateLawConsultation from '../../assets/img/services/corporate-law-consultation.png';
import corporateSupportLegal from '../../assets/img/services/legal-support-for-corporate.png';
import corporateCourtGavel from '../../assets/img/services/corporate-litigation.png';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { PiSealCheck, PiShieldCheck, PiCurrencyInr, PiUsers, PiClock, PiHouse } from 'react-icons/pi';

const companyTypes = [
    {
        title: 'Private Limited Company',
        description: 'Private limited companies are among the most preferred business structures for startups and growing businesses. They require incorporation under the Companies Act, annual filings, statutory compliance, and regular board meetings. Shareholders enjoy limited liability protection.'
    },
    {
        title: 'Public Limited Company',
        description: 'Public limited companies can raise capital from the public through shares and are subject to stricter compliance and disclosure obligations. These companies require regular reporting and strong corporate governance practices.'
    },
    {
        title: 'Limited Liability Partnership (LLP)',
        description: 'LLPs combine the operational flexibility of partnerships with limited liability benefits. LLPs require proper registration, partnership agreements, and periodic statutory compliance.'
    },
    {
        title: 'One Person Company (OPC)',
        description: 'An OPC allows individual entrepreneurs to establish a company with separate legal identity and limited liability protection while maintaining simplified management structures.'
    },
    {
        title: 'Partnership Firm',
        description: 'Partnership firms are governed by partnership agreements that define the rights, responsibilities, and profit-sharing arrangements among partners. Proper legal documentation is essential for avoiding disputes and ensuring operational clarity.'
    }
];

const disputeCases = [
    {
        title: 'Contract and Commercial Disputes',
        description: 'Disputes related to service agreements, vendor contracts, partnership arrangements, and commercial transactions are common among corporate companies. An experienced commercial lawyer can help businesses resolve such disputes through negotiation, arbitration, or litigation.'
    },
    {
        title: 'Shareholder Disputes',
        description: 'Conflicts between shareholders regarding management decisions, profit distribution, or ownership rights can significantly affect business operations and stability.'
    },
    {
        title: 'Employment and HR Disputes',
        description: 'Corporate employers may face legal matters related to employment contracts, workplace policies, employee termination, harassment claims, and labor law compliance.'
    },
    {
        title: 'Regulatory and Compliance Cases',
        description: 'Failure to comply with statutory requirements can lead to penalties, investigations, or legal proceedings. Proper corporate legal guidance helps businesses manage regulatory obligations effectively.'
    },
    {
        title: 'Intellectual Property Cases',
        description: 'Businesses require legal protection for trademarks, copyrights, patents, trade secrets, and confidential business information to protect their brand identity and assets.'
    }
];

const supportItems = [
    {
        title: 'Business Setup and Legal Structuring',
        description: 'We assist in company incorporation, entity selection, and legal structuring for startups and established businesses.'
    },
    {
        title: 'Contract Drafting and Legal Review',
        description: 'We prepare and review all types of business agreements to ensure clarity, compliance, and risk protection.'
    },
    {
        title: 'Compliance and Regulatory Support',
        description: 'We help companies stay compliant with corporate laws, statutory filings, and governance requirements.'
    },
    {
        title: 'Dispute Handling and Resolution',
        description: 'We manage shareholder disputes, partnership issues, and commercial conflicts through legal negotiation and representation.'
    },
    {
        title: 'Corporate Transactions and Advisory',
        description: 'We support mergers, acquisitions, restructuring, and provide ongoing legal advisory for business growth.'
    }
];

const laws = [
    'Limited Liability Partnership Act, 2008',
    'Indian Contract Act, 1872',
    'Competition Act, 2002',
    'Insolvency and Bankruptcy Code, 2016',
    'SEBI Regulations',
    'Income Tax and GST Laws'
];

const rolePoints = [
    'Business formation and corporate structuring',
    'Drafting and reviewing legal agreements',
    'Regulatory and statutory compliance',
    'Corporate governance and advisory services',
    'Commercial and contractual disputes',
    'Shareholder and partnership matters',
    'Business expansion, mergers, and acquisitions'
];

const faqs = [
    {
        question: 'Why should businesses hire corporate law firm in Chennai?',
        answer: 'Corporate law firm in Chennai,Coimbatore,Madurai and across Tamil Nadu help businesses manage legal compliance, commercial agreements, corporate disputes, mergers, and regulatory matters efficiently while protecting business interests.'
    },
    {
        question: 'How do corporate lawyers help in business compliance?',
        answer: 'Corporate lawyers ensure businesses comply with the Companies Act, taxation laws, labor regulations, and other statutory requirements to avoid legal penalties and operational issues.'
    },
    {
        question: 'How do I choose the right corporate attorney or advocate near me?',
        answer: 'Choose a corporate advocate or attorney near me based on experience, expertise in corporate law, industry knowledge, legal strategy, and ability to handle complex business legal matters effectively.'
    },
    {
        question: 'What services do top corporate law firms in Chennai provide?',
        answer: 'Top corporate law firms in Chennai assist businesses with company formation, contract drafting, mergers and acquisitions, regulatory compliance, corporate governance and dispute resolution.'
    }
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
        }
    }))
};

const CorporateLaw = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
            <Helmet>
                <title>Corporate Law Firms & Lawyers in Chennai | Advocates Near Me</title>
                <meta
                    name="description"
                    content="Trusted corporate law firms and corporate lawyers in Chennai offering legal support for employer compliance, salary disputes, contracts, and business matters."
                />
                <meta
                    name="keywords"
                    content="corporate law firms in chennai, corporate lawyers in chennai, corporate attorney near me, business lawyer chennai, advocates near me"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="document-type" content="Public" />
                <meta name="audience" content="all" />
                <meta name="googlebot" content="index,follow" />
                <meta name="geo.region" content="Chennai,Tamil Nadu" />
                <meta name="msnbot" content="index,follow" />
                <meta name="allow-search" content="yes" />
                <link rel="canonical" href="https://www.mlawyer.in/best-corporate-lawyers" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Corporate Law Firms & Lawyers in Chennai | Advocates Near Me" />
                <meta property="og:url" content="https://www.mlawyer.in/best-corporate-lawyers" />
                <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
                <meta
                    property="og:description"
                    content="Trusted corporate law firms and corporate lawyers in Chennai offering legal support for employer compliance, salary disputes, contracts, and business matters."
                />

                <meta name="twitter:title" content="Corporate Law Firms & Lawyers in Chennai | Advocates Near Me" />
                <meta
                    name="twitter:description"
                    content="Trusted corporate law firms and corporate lawyers in Chennai offering legal support for employer compliance, salary disputes, contracts, and business matters."
                />
                <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
                <meta name="twitter:image:alt" content="best corporate law firms in chennai" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Breadcrumb items={[{ label: 'Customer Services', link: '/customer' }, { label: 'Corporate Law' }]} />

            <div className="w-full px-6 pt-12 pb-2 mb-0 text-center">
                <PopIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Best Corporate Law Firms in Chennai
                    </h1>
                </PopIn>
                <PopIn delay={0.1}>
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden mb-4">
                        <img
                            src={corporateLawImg}
                            alt="best corporate law firms in chennai"
                            loading="lazy"
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                </PopIn>
            </div>

            <div className="w-full px-6">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="space-y-16">

                        {/* Intro Paragraphs */}
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Businesses require strong legal support to manage operations, compliance, commercial agreements, and corporate disputes effectively. <Link to="/" className="text-primary hover:underline font-bold">MLawyer</Link> provides professional corporate legal services for <Link to="/services/startup-lawyer" className="text-primary hover:underline font-semibold">startups</Link>, private companies, LLPs, partnerships, and established organizations across various industries. As one of the best corporate law firms in Chennai, we offer practical legal solutions tailored to business requirements.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our experienced <Link to="/best-corporate-lawyers" className="text-primary hover:underline font-semibold">corporate lawyers in Chennai</Link> assist in online for clients with company incorporation, contract drafting, mergers and acquisitions, shareholder disputes, employment matters, and regulatory compliance.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Role of Corporate Lawyers in Chennai in Handling Corporate Disputes</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Corporate lawyers provide legal support to businesses in managing corporate operations, compliance requirements, and commercial matters. They help companies make legally sound decisions while reducing business risks and handling disputes effectively.
                                    </p>
                                    <p className="text-lg text-gray-900 dark:text-white mb-3 font-semibold">
                                        Their role includes assisting businesses with:
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                        {rolePoints.map((item) => (
                                            <div key={item} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0" />
                                                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img src={corporateLawConsultation} alt="Corporate Law Consultation" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <img src={corporateSupportLegal} alt="Legal Support for Corporate" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Corporate Law Firm in Chennai</h2>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">Corporate Compliance and Companies Act Legal Support</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        Corporate legal matters in India are mainly governed by the Companies Act, 2013, which regulates company formation, management, compliance, shareholder rights, and corporate governance. Businesses must follow this Act to ensure lawful operations and avoid legal complications.
                                    </p>
                                    <p className="text-lg text-gray-900 dark:text-white mb-3 font-semibold">
                                        Other important laws related to corporate legal matters include:
                                    </p>
                                    <ul className="space-y-2 mb-4">
                                        {laws.map((law, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                                                <span className="text-md leading-relaxed">{law}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <Link to="/" className="text-primary hover:underline font-bold">MLawyer</Link> assists businesses in complying with these laws through professional corporate legal guidance and compliance support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 3 (Box Type) */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Type of Companies and Their Legal Requirement</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Different types of business entities operate under different legal structures and compliance requirements. Selecting the appropriate business structure is important for taxation, liability protection, management flexibility, and long-term growth.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {companyTypes.map((company, idx) => (
                                    <div key={idx} className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-700/50 dark:to-gray-700/30 rounded-2xl p-6 border border-teal-100 dark:border-gray-600 hover:shadow-md transition-all">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{company.title}</h4>
                                        <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed">{company.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center max-w-3xl mx-auto pt-4">
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our experienced corporate lawyers assist businesses in selecting suitable legal structures while ensuring full compliance with applicable corporate regulations.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 4 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Corporate Litigation and Commercial Dispute Cases</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        Corporate cases involve legal disputes or regulatory matters affecting companies, stakeholders, employees, and business operations. Each corporate case requires proper legal analysis, documentation, and strategic representation.
                                    </p>
                                    <div className="space-y-4">
                                        {disputeCases.map((caseItem) => (
                                            <div key={caseItem.title} className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{caseItem.title}</h4>
                                                <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {caseItem.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                                        Our experienced corporate lawyers provide comprehensive legal representation for handling different types of corporate cases professionally and efficiently.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img src={corporateCourtGavel} alt="Corporate Litigation" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 5 (Box Type) */}
                        <div className="space-y-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">How MLawyer Advocates Help You in Corporate Legal Matters</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    MLawyer provides complete legal assistance to businesses to ensure smooth operations and full compliance with corporate laws. Our focus is to deliver practical legal solutions that protect your business at every stage.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                                {supportItems.map((item, idx) => (
                                    <div key={idx} className="p-5 bg-teal-50/50 dark:bg-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                        <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Section 6 */}
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get Expert Legal Help Today</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Corporate disputes require careful handling and expert legal support. At <Link to="/" className="text-primary hover:underline font-semibold">Mlawyer</Link>, we are committed to connecting you with trusted professionals who can guide you through every step of your legal journey. Whether you need assistance with business setup, contracts, or compliance matters, finding the right <Link to="/best-corporate-lawyers" className="text-primary hover:underline font-semibold">corporate lawyer</Link> is the first step toward resolution.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                In addition to corporate law, we also provide support in <Link to="/property-lawyers" className="text-primary hover:underline font-semibold">property law</Link> matters such as ownership disputes, documentation, and legal verification, as well as <Link to="/legal-criminal-lawyers" className="text-primary hover:underline font-semibold">criminal law</Link> and <Link to="/family-lawyers" className="text-primary hover:underline font-semibold">family law</Link> cases where timely legal representation is crucial. Our platform ensures you are connected with the right legal expert based on your specific needs.
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
                                What Makes Mlawyer the Right Choice for Corporate Lawyers in Chennai
                            </h2>
                            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
                        </div>
                    </PopIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Trusted experts in corporate law and business disputes", icon: <PiSealCheck /> },
                            { title: "Your company information remains fully secure", icon: <PiShieldCheck /> },
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
        </div>
    );
};

export default CorporateLaw;
