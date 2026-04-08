import React from 'react';
import { FaHome, FaHeartBroken, FaGavel, FaBriefcase, FaShoppingCart, FaUserInjured } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PopIn from '../../../components/animations/PopIn';

const Services = () => {
    const iconMap = {
        FaHeartBroken: <FaHeartBroken />,
        FaHome: <FaHome />,
        FaGavel: <FaGavel />,
        FaBriefcase: <FaBriefcase />,
        FaShoppingCart: <FaShoppingCart />,
        FaUserInjured: <FaUserInjured />
    };
    const servicesList = [
        {
            icon: "FaHeartBroken",
            title: "Family Lawyer",
            link: "family-lawyer",
            items: [
                "Divorce & Separation",
                "Child Custody & Visitation Rights",
                "Alimony / Maintenance",
                "Domestic Violence Cases",
                "Dowry & Harassment Issues"
            ]
        },
        {
            icon: "FaHome",
            title: "Property Lawyer",
            link: "online-legal-consultation",
            items: [
                "Property Purchase & Sale Agreements",
                "Property Registration & Documentation",
                "Property Partition (Family Property Division)",
                "Inheritance & Succession of Property",
                "Tenant–Landlord Disputes (Rent, Eviction, Lease Issues)"
            ]
        },
        {
            icon: "FaGavel",
            title: "Criminal Lawyer",
            link: "legal-criminal-lawyer",
            items: [
                "FIR Filing & Police Complaints",
                "Bail (Anticipatory & Regular Bail)",
                "Domestic Violence & Criminal Harassment",
                "Cybercrime & Online Fraud Cases",
                "Cheque Bounce"
            ]
        },
        {
            icon: "FaBriefcase",
            title: "Corporate Lawyer",
            link: "best-corporate-lawyers",
            items: [
                "Company Incorporation & Business Registration",
                "Startup Legal Advisory & Structuring",
                "Contracts & Agreements (Drafting & Review)",
                "Shareholder & Partnership Agreements",
                "Intellectual Property (Trademarks, Copyrights, Patents)"
            ]
        },
        {
            icon: "FaShoppingCart",
            title: "Consumer Rights Lawyer",
            link: "consumer-right-lawyer-app",
            items: [
                "Consumer Complaints & Legal Notices",
                "Compensation & Damages Claims",
                "Warranty & Guarantee Disputes",
                "Defective Products & Product Liability",
                "Deficiency in Services"
            ]
        },
        {
            icon: "FaUserInjured",
            title: "Labour Lawyer",
            link: "labour-lawyer-advisor",
            items: [
                "Employment Contracts & Agreements",
                "Wrongful Termination & Unlawful Dismissal",
                "Salary, Wages & Bonus Disputes",
                "Workplace Harassment & POSH Complaints",
                "Employee Rights & Benefits (PF, ESI, Gratuity)"
            ]
        }
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Comprehensive Legal Services</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Expert assistance across all areas of law.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <PopIn key={index} delay={index * 0.05}>
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-teal-100 dark:hover:border-teal-700 transition-all duration-300 h-full group flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary dark:text-secondary text-xl flex-shrink-0">
                                        {iconMap[service.icon]}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">{service.title}</h3>
                                </div>
                                <ul className="space-y-2 flex-grow transition-all duration-300 block">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/customer/${service.link}`}
                                    className="mt-6 text-primary dark:text-secondary font-semibold text-sm hover:underline transition-colors inline-block"
                                >
                                    Read More
                                </Link>
                            </div>
                        </PopIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
