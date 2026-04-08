import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/img/Logo.png';

const Footer = () => {
    const navItems = ['Home', 'For Customers', 'For Lawyers', 'How It Works', 'Pricing', 'About Us', 'Blogs', 'Contact Us'];

    const getPath = (item) => {
        if (item === 'Home') return '/';
        if (item === 'For Customers') return '/customer';
        if (item === 'For Lawyers') return '/lawyer';
        return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <footer className="bg-primary/5 dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-16 pb-8 border-t border-primary/10 dark:border-gray-700 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <img src={logo} alt="MLawyer Logo" loading="lazy" className="h-14 w-auto object-contain bg-primary rounded-full p-2" />
                            <div className="text-primary dark:text-secondary font-bold text-3xl tracking-wide">MLawyer</div>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Your gateway to trusted legal experts—anytime, anywhere. Secure, professional and transparent.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebook />, href: 'https://www.facebook.com/profile.php?id=61584162641935', label: 'Facebook' },
                                { icon: <FaInstagram />, href: 'https://www.instagram.com/mlawyerlegalconsultation/?hl=en', label: 'Instagram' },
                                { icon: <FaXTwitter />, href: 'https://x.com/MLawyer26', label: 'Twitter' },
                                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-primary/20 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-white transition-all duration-300 text-primary dark:text-secondary"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    to={getPath(item)}
                                    className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Legal</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions" className="text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="/cookie-policy" className="text-gray-600 hover:text-secondary transition-colors">Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-primary/10 pt-8 mt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} MLawyer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
