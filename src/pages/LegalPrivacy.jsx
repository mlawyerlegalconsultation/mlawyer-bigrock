import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - MLawyer Legal Consultation</title>
                <meta name="description" content="Read MLawyer's Privacy Policy to understand how we collect, use, and protect your personal data." />
                <meta name="robots" content="index, follow" />
            </Helmet>
            
            <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-12">
                <div className="container mx-auto px-4 sm:px-10 max-w-4xl">
                    {/* Page Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* Introduction Section */}
                        <div className="mb-8">
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                We value your privacy and are committed to safeguarding the personal data you share on our platform, including the website and mobile application (hereinafter referred to as the "Application"), developed and operated by MLawyer Legal Consultation Private Limited (hereinafter referred to as the "Service Provider") as a Commercial Service. The Application is provided on an "AS IS" basis.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                The term 'Application' shall include all pages associated with or forming part of the website or mobile application. In the event we request information that may identify you while using the application, such information shall be used strictly in accordance with this Privacy Policy.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                This Privacy Policy sets out how MLawyer Legal Consultation Private Limited ("MLawyer") collects, uses, stores, shares and protects any information that you provide when you use this application.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                This Privacy Policy is applicable to the businesses, or services of MLawyer.
                            </p>
                        </div>

                        {/* Consent Section */}
                        <div className="mb-8">
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                By accessing the Application and/or using products or services provided by MLawyer, you agree and accept our Privacy Policy ("Privacy Policy"). This Platform is owned and operated by MLawyer (hereinafter referred to as "MLAWYER" or "MLawyer" or "We" or "Us" or "Our"). By using the application and/or having used or using the services offered by MLawyer, directly or indirectly, in the past, present or future, you expressly consent to our use and disclosure of your Personal Information and Sensitive Personal Information submitted to us in accordance with this Privacy Policy. You further acknowledge and accept that your consent herein shall also be applicable to your Personal Information and Sensitive Personal Information submitted to us, directly or indirectly, in the past.
                            </p>
                        </div>

                        {/* User Types Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">User Types</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                For the purposes of this Privacy Policy, and wherever the context so requires, the terms "you" or "your" shall, depending on the circumstances and use of our Services, refer to an End Customer, an Advocate, or a Visitor/Guest.
                            </p>
                            <ul className="space-y-3 mb-4 text-gray-700 dark:text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-primary dark:text-secondary font-bold flex-shrink-0">•</span>
                                    <span>
                                        <strong>End Customer:</strong> When you use the application to avail legal consultation services by browsing the list of verified advocates and engaging in video consultations, for which the applicable consultation fee is paid in advance.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary dark:text-secondary font-bold flex-shrink-0">•</span>
                                    <span>
                                        <strong>Advocate:</strong> When you register on the application by providing the required details and offer consultations to End Customers, for which you receive payment through the application upon successful completion of the consultation.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary dark:text-secondary font-bold flex-shrink-0">•</span>
                                    <span>
                                        <strong>Visitor/Guest:</strong> When you access the website or application without registering or logging in. This includes users who visit the platform to explore services or seek additional information before deciding to use the application.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Policy Overview Section */}
                        <div className="mb-8 bg-primary/5 dark:bg-gray-800 p-6 rounded-lg">
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-primary dark:text-secondary font-bold flex-shrink-0">•</span>
                                    <span>This Privacy Policy outlines how we collect, use, and protect your personal data, your privacy rights, and how applicable laws safeguard such data. You are advised to read this Privacy Policy carefully before using our Services.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary dark:text-secondary font-bold flex-shrink-0">•</span>
                                    <span>MLawyer Legal Consultation Private Limited ("MLAWYER") reserves the right to update or modify this Privacy Policy from time to time. Any changes will be reflected on this page, and you are encouraged to review it periodically. The revised policy shall become effective upon posting, and your continued use of the Application thereafter shall constitute your acceptance of the updated terms and consent to the continued processing of your personal data in accordance with the revised Privacy Policy.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Information Collection Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information Collection and Use</h2>
                            
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Personal Information</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Personal Information includes details such as your name, age, gender, enrolment number, Bar Council number, photograph, Permanent Account Number (PAN), and any other information required for identity verification. It also includes your contact details, such as permanent and current address, email address, mobile or telephone numbers, and any additional information you provide while using our application and its services.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Demographic Information</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Demographic Information includes details such as your postcode, preferences, interests, and other similar information that helps us understand user behavior and improve our services.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Transaction Information</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Transaction Information includes details of transactions carried out through our Platform, including the fulfillment of your orders. This may include, but is not limited to, the type or name of the service, description of the transaction, transaction amount, payment gateway charges, applicable taxes such as GST, and related payment details.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">User Information</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    User Information includes details relating to your use of the Platform, such as user activity and interactions. This may also include Sensitive Personal Information, such as financial details (including, but not limited to, credit card, debit card, and bank account information), which are collected and processed in a secure, tokenized form, as further described in our Terms and Conditions.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    All payment transactions on the Platform are processed through Easebuzz.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Other Information</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Other Information includes, but is not limited to, your IP address, device information, browser type, operating system, and standard web log data collected in connection with your use of our application and services.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Usage and Analytics Information</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Usage and Analytics Information includes statistics on page views, login and session data, traffic to and from our website (www.mlawyer.in), as well as usage data from our mobile applications on iOS and Android platforms. This may also include information relating to your interactions with advertisements, where applicable.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Additional Information</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    Additional Information includes any other information that we may consider necessary to enhance your experience on the Platform and to provide the highest possible level of security and service.
                                </p>
                            </div>
                        </div>

                        {/* Data Storage and Consent Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Storage and Consent</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                We store your Personal Information on secure servers. By providing your Personal Information, you expressly consent to the collection, transfer, storage, and processing of such information on our servers in accordance with this Privacy Policy.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                For the collection, processing (including use and storage), disclosure, or sharing of your Sensitive Personal Information as described in this Privacy Policy, we hereby provide you with notice and seek your consent for such activities for one or more of the purposes set out herein.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Wherever required under applicable laws in India, we will obtain your explicit and specific consent for particular purposes from time to time before processing your Sensitive Personal Information.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="mb-8 bg-primary/5 dark:bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please feel free to contact us. We are committed to working with you to resolve any privacy concerns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
