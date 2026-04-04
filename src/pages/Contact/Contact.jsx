import React, { useEffect } from 'react';
import ContactHero from './Sections/ContactHero';
import ContactCards from './Sections/ContactCards';
import ContactFAQ from './Sections/ContactFAQ';

import Seo from '../../components/Seo';

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Seo
                title="Contact MLawyer | 24/7 Support & Queries"
                description="Have questions or need assistance? Reach out to our support team anytime. We're here to help you."
                keywords="contact MLawyer, customer support, legal app help, MLawyer address, support email, legal assistance helpdesk"
            />
            <ContactHero />
            <ContactCards />
            <ContactFAQ />

            {/* CTA Section */}
            <section className="py-20 bg-primary dark:bg-gray-800 text-white transition-colors duration-300">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to get started?</h2>
                    <p className="text-xl text-white/80 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors">
                        Download our app today and get legal assistance at your fingertips.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-primary dark:text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 cursor-pointer">
                            Download Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
