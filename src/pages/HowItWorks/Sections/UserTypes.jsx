import React from 'react';
import { FaUserTie, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PopIn from '../../../components/animations/PopIn';
import ClientsImage from '../../../assets/img/clients.png';
import LawyerImage from '../../../assets/img/lawyer.png';
import howItWorksData from '../../../data/howItWorks.json';

const UserTypes = () => {
    const { userTypes } = howItWorksData;
    return (
        <section className="py-20 bg-teal-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <PopIn delay={0.1}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-teal-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/10"></div>
                                <img src={ClientsImage} alt="For Clients" loading="lazy" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="w-14 h-14 bg-primary/10 dark:bg-gray-700 rounded-full flex items-center justify-center text-primary dark:text-white text-2xl mb-6 transition-colors duration-300">
                                    <FaUser />
                                </div>
                                <h3 className="text-3xl font-bold text-primary dark:text-white mb-4 transition-colors duration-300">{userTypes.clients.title}</h3>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {userTypes.clients.items.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-gray-700 text-green-600 dark:text-green-400 flex items-center justify-center text-sm font-bold mt-0.5 min-w-[1.5rem] transition-colors duration-300">✓</span>
                                            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                                <Link to={userTypes.clients.buttonLink} className="inline-block w-full py-4 text-center bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors">
                                    {userTypes.clients.buttonText}
                                </Link>
                            </div>
                        </div>
                    </PopIn>
                    <PopIn delay={0.2}>
                        <div className="bg-primary text-white rounded-3xl shadow-xl relative overflow-hidden group h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-500 z-0"></div>
                            <div className="h-48 overflow-hidden relative z-0">
                                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10"></div>
                                <img src={LawyerImage} alt="For Lawyers" loading="lazy" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 opacity-90" />
                            </div>
                            <div className="p-10 flex flex-col flex-grow relative z-10">
                                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl mb-6">
                                    <FaUserTie />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">{userTypes.lawyers.title}</h3>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {userTypes.lawyers.items.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold mt-0.5 min-w-[1.5rem]">✓</span>
                                            <p className="text-teal-100">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                                <Link to={userTypes.lawyers.buttonLink} className="inline-block w-full py-4 text-center bg-white text-primary font-bold rounded-xl hover:bg-teal-50 transition-colors">
                                    {userTypes.lawyers.buttonText}
                                </Link>
                            </div>
                        </div>
                    </PopIn>
                </div>
            </div>
        </section>
    );
};
export default UserTypes;
