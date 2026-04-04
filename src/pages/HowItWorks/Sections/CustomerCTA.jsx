import React from 'react';
import { Link } from 'react-router-dom';
import PopIn from '../../../components/animations/PopIn';

const CustomerCTA = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <PopIn>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Solve Your Legal Matters?
                    </h2>
                </PopIn>
                <PopIn delay={0.1}>
                    <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join thousands of clients who trust MLawyer for quick, reliable, and affordable legal advice. Find your lawyer today.
                    </p>
                </PopIn>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <PopIn delay={0.2}>
                        <Link
                            to="/lawyers"
                            className="px-8 py-4 font-bold rounded-xl transition-all duration-300 min-w-[200px] bg-secondary text-white shadow-lg hover:bg-secondary/90 hover:-translate-y-1"
                        >
                            Find a Lawyer
                        </Link>
                    </PopIn>
                    <PopIn delay={0.3}>
                        <Link
                            to="/pricing"
                            className="px-8 py-4 font-bold rounded-xl transition-all duration-300 min-w-[200px] bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:-translate-y-1"
                        >
                            View Pricing
                        </Link>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};

export default CustomerCTA;
