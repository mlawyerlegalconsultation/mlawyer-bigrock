import React from 'react';
import contactData from '../../../data/contact.json';
import { FiMessageSquare, FiLifeBuoy, FiArrowRight } from 'react-icons/fi';
import PopIn from '../../../components/animations/PopIn';

const iconMap = {
    MessageSquare: FiMessageSquare,
    LifeBuoy: FiLifeBuoy
};

const ContactCards = () => {
    const { contactInfo } = contactData;
    const displayCards = contactInfo.slice(0, 2); // Only first 2 cards

    return (
        <section className="py-12 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left side - Contact Cards */}
                    <div className="flex flex-col gap-6">
                        {displayCards.map((item, index) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <PopIn key={item.id} delay={index * 0.1}>
                                    <div className="group flex flex-col items-start p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300 border border-dashed border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 h-full">
                                        <div className="w-12 h-12 bg-teal-100 dark:bg-gray-700 text-primary dark:text-secondary rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {Icon && <Icon />}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow transition-colors">{item.description}</p>
                                        <a href={item.link} className="text-primary dark:text-secondary font-bold inline-flex items-center gap-2 group/link transition-colors underline decoration-primary/30 hover:decoration-primary">
                                            {item.contact}
                                            <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </PopIn>
                            );
                        })}
                    </div>

                    {/* Right side - Google Map */}
                    <PopIn delay={0.2}>
                        <div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1644303012345!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="MLawyer Office Location"
                            ></iframe>
                        </div>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};

export default ContactCards;
