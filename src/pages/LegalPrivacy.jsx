import React from 'react';
import { Helmet } from 'react-helmet-async';
import { openCookiePreferences } from '../components/CookieConsent';

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
                        <div className="text-xs uppercase font-semibold text-primary dark:text-secondary mb-1">
                            MLawyer Legal Consultation Private Limited
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Last Updated: October 13, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        {/* 1. Introduction */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                            <p className="mb-4 leading-relaxed">
                                MLawyer Legal Consultation Private Limited (&ldquo;MLawyer&rdquo;, &ldquo;Centre&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the Consultation Meet mobile application in Google Play Store and iOS App Store (the &ldquo;App&rdquo;), the website <a href="https://mlawyer.in" className="text-primary dark:text-secondary underline">mlawyer.in</a>, and related services (together, the &ldquo;Platform&rdquo;). The App connects customers/individuals/business entities/agencies (&ldquo;Clients&rdquo;) with independently practicing advocates across India (&ldquo;Advocates&rdquo;) for legal consultations.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                This Privacy Policy explains what personal data we collect, why we collect it, how we use and share it, how we protect it, and what rights you have over it. It applies to everyone (Advocates and Clients) who creates an account, submit their details book and consultation, pay for it and attends a consultation, or visits the Platform.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                By creating an account or using the Platform, you agree to the practices described here. Where the law requires your specific consent, we will ask for it separately. The users (Advocates and Clients) are requested to read the Privacy Policy and Terms &amp; Conditions document before they start using the Platform.
                            </p>
                        </div>

                        {/* 2. Our Role */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Our Role</h2>
                            <p className="mb-4 leading-relaxed">
                                MLawyer is a technology-enabled platform that facilitates online legal consultations between Clients and independent Advocates. Clients are required to pay a consultation fee through the Platform, out of which the applicable share shall be remitted to the respective Advocates towards their professional consultation services.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                Advocates are independent professionals. MLawyer does not provide legal advice and is not a law firm. The relationship between a Client and Advocate, including the legal opinion/advice/guidance given and the confidentiality of that opinion/advice/guidance, is governed by the Advocates Act, 1961, the guidelines of Bar Council of India, and the terms agreed between them. For that reason, we handle consultation content as described in Section 5 and do not read it except where this policy allows.
                            </p>
                        </div>

                        {/* 3. Information We Collect */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Information We Collect</h2>
                            
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.1 Information you give us</h3>
                            <div className="mb-4">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">From Clients:</h4>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Name, date of birth (optional), gender, mobile number, email address, and address (optional)</li>
                                    <li>Account login details (such as a one-time password verified through your mobile number)</li>
                                    <li>The legal matter you describe, or documents you upload (if any), or messages or complaints you send through the App</li>
                                    <li>Consultation booking details, such as preferred date and time and mode of payment details in the payment gateway (a third-party provider)</li>
                                </ul>

                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">From Advocates:</h4>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Name, mobile number, email address, address, city and state</li>
                                    <li>KYC Documents – Aadhaar (front &amp; back), PAN (front &amp; back), Utility Bill (Gas, Postpaid, Internet, Individual ITR)</li>
                                    <li>Law Degree</li>
                                    <li>Bar Council / enrolment number</li>
                                    <li>Practice areas &amp; years of experience</li>
                                    <li>Profile photo (professional), bio, and availability</li>
                                    <li>Bank account details (canceled cheque or bank account passbook in their name) for receiving payouts</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.2 Information we collect automatically</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Device information:</strong> device model, operating system version, App version, unique device identifiers, and push notification token</li>
                                <li><strong>Usage information:</strong> screens viewed, features used, session duration, and crash reports</li>
                                <li><strong>Log data:</strong> IP address, date and time of access, and error logs</li>
                                <li><strong>Approximate location:</strong> only if you allow it, to show nearby or relevant Advocates</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.3 Consultation content</h3>
                            <p className="mb-4 leading-relaxed">
                                When a consultation takes place, the Advocate and Client may exchange case details, audio, or video related to the case. We do not listen to or watch live consultations. The Client may opt for consultation recording by paying an additional fee. The recording shall be securely stored in the Platform&rsquo;s database and shall not be accessed or reviewed by any Platform personnel unless the Client raises a complaint or grievance. In such cases, the Support or Quality Team shall obtain the Client&rsquo;s prior consent through email, phone, or other official communication channels before accessing the recording for review and resolution, except where access is required by law.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.4 Payment information</h3>
                            <p className="mb-4 leading-relaxed">
                                Payments are processed by our payment gateway partners (named in Section 6). We do not store full card numbers (debit and credit cards), CVV, UPI code and net banking credentials. We keep a transaction record, including the amount paid or refunded, date and payment status.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3.5 Information from other sources</h3>
                            <p className="mb-4 leading-relaxed">
                                If you sign in with a third-party account (such as Google, Apple), we receive the basic profile information that you permit that service to share with us.
                            </p>
                        </div>

                        {/* 4. How We Use Your Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. How We Use Your Information</h2>
                            <p className="mb-3">We use personal data only for the purposes below:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>To provide the Platform:</strong> Creating and managing your account, matching Clients with Advocates, scheduling and joining consultations, and processing payments and payouts.</li>
                                <li><strong>To verify Advocates:</strong> Checking Bar Council enrolment and credentials before an Advocate can onboard to start using the Platform and accept consultations.</li>
                                <li><strong>To keep the Platform safe:</strong> Detecting fraud, impersonation, abuse, and misuse, and enforcing our Terms of Use.</li>
                                <li><strong>To communicate with you:</strong> Sharing confirmation bookings, reminders, payment receipts, security alerts, and service messages by App notification, SMS, email, or WhatsApp where you have opted in.</li>
                                <li><strong>To provide support:</strong> Responding to your queries, complaints, and grievances.</li>
                                <li><strong>To improve the Platform:</strong> Understanding how features are used and fixing errors. We use aggregated or de-identified data for this wherever possible.</li>
                                <li><strong>To comply with the law:</strong> Meeting the tax, accounting, regulatory, and court obligations.</li>
                            </ul>
                            <p className="mb-2 font-medium">We do not use consultation content to train AI or machine-learning models without your separate, specific consent.</p>
                            <p className="mb-4 font-medium">We do not sell your personal data.</p>
                        </div>

                        {/* 5. Sharing Your Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Sharing Your Information</h2>
                            <p className="mb-3">We share data only in the following situations:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Between Client and Advocate:</strong> When a consultation is booked, the Client&rsquo;s name and the details needed for the consultation are shared with the Advocate, and the Advocate&rsquo;s profile is shown to the Client. Contact details are shared only to the extent needed to carry out the consultation. We share the advocate details and KYC documents with our payment gateway partners as per the RBI guidelines and compliance for payout processing.</li>
                                <li><strong>Service providers:</strong> We use trusted vendors to run the Platform, such as cloud hosting, databases, SMS or WhatsApp messaging, push notifications, analytics, and Client support tools. These vendors may process data only on our instructions and must protect it.</li>
                                <li><strong>Payment partners:</strong> To process payments and payouts, as described in Section 6.</li>
                                <li><strong>Legal requirements:</strong> When required by law, a court order, or a lawful request from a government or regulatory authority, or to protect the rights, safety, or property of MLawyer, our users, or the public.</li>
                                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, financing, or sale of assets. We will inform you and ensure the receiving party keeps your data protected under this policy.</li>
                                <li><strong>With your consent:</strong> In any other case, only with your permission.</li>
                            </ul>
                        </div>

                        {/* 6. Payments */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Payments</h2>
                            <p className="mb-4 leading-relaxed">
                                We engaged with Easebuzz as our payment gateway provider and their privacy policies apply to the data they hold. Advocate payouts are made through Easebuzz and we receive transaction status from them, but do not hold your full card, UPI or bank credentials.
                            </p>
                        </div>

                        {/* 7. Cookies and Analytics */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookies and Analytics</h2>
                            <p className="mb-3">The website and App use cookies and similar technologies for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Essential:</strong> Keeping you signed in and keeping the Platform secure. These cannot be switched off.</li>
                                <li><strong>Analytics:</strong> Understanding how the Platform is used. We use analytics tools such as Google Analytics.</li>
                                <li><strong>Advertising and marketing (only where you consent):</strong> Measuring the effectiveness of our advertising.</li>
                            </ul>
                            <p className="mb-4 leading-relaxed">
                                You can control cookies through your browser settings. You can control App permissions, such as location, notifications, camera, and microphone, through your device settings.
                            </p>
                            <div className="mt-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Cookie Preferences</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Customize your cookie choices or review consented trackers.</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={openCookiePreferences}
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium text-xs shadow transition-colors cursor-pointer shrink-0"
                                >
                                    Manage Cookie Preferences
                                </button>
                            </div>
                        </div>

                        {/* 8. Sensitive Personal Data */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Sensitive Personal Data</h2>
                            <p className="mb-4 leading-relaxed">
                                Clients may disclose sensitive personal or legal information during consultations, including health, financial, family, or criminal-case details. Such information will be treated with strict confidentiality and made accessible only to the Advocate handling the consultation. Consultation recordings will be stored in our system only if the Client has expressly opted for the recording service. All recordings will remain confidential and may be accessed or used solely, with the Client&rsquo;s consent, when necessary to investigate or resolve complaints or support requests raised by either the Client or the Advocate.
                            </p>
                        </div>

                        {/* 9. Data Storage and Security */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Data Storage and Security</h2>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Personal data is stored on servers hosted by reputed providers in India or overseas. Where data is processed outside India, we comply with the conditions set by applicable law.</li>
                                <li>Data is encrypted in transit using HTTPS/TLS. Sensitive data is encrypted at rest.</li>
                                <li>Access to personal data is limited to authorised staff on a need-to-know basis, and access is logged.</li>
                                <li>We run periodic security reviews and keep our software updated.</li>
                            </ul>
                            <p className="mb-4 leading-relaxed">
                                No system is completely secure. If a personal data breach occurs that is likely to harm you, we will inform you and the Data Protection Board of India as required by the DPDP Act and Rules.
                            </p>
                        </div>

                        {/* 10. Data Retention */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Data Retention</h2>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Account data:</strong> Kept while your account is active.</li>
                                <li><strong>Consultation records and messages:</strong> Kept for 3–6 months (may vary) after the consultation, so that disputes, refunds, and complaints can be resolved, and then deleted or anonymised.</li>
                                <li><strong>Transaction and tax records:</strong> Kept for the period of one year (may vary) required by Indian tax and accounting law.</li>
                                <li><strong>Verification records for Advocates:</strong> Kept for as long as you are listed on the Platform and for a reasonable period afterwards to meet compliance requirements.</li>
                                <li><strong>Logs:</strong> Kept for 6 months for security purposes.</li>
                            </ul>
                            <p className="mb-4 leading-relaxed">
                                When we no longer need data for these purposes, we delete or anonymise it.
                            </p>
                        </div>

                        {/* 11. Your Rights */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Your Rights</h2>
                            <p className="mb-3">Under the DPDP Act, 2023, you have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Access:</strong> Request a summary of the personal data we hold about you and how it is processed.</li>
                                <li><strong>Erasure:</strong> Ask us to delete your personal data when it is no longer needed for the purpose it was collected, or when you withdraw consent (subject to legal retention requirements).</li>
                                <li><strong>Withdraw consent:</strong> Withdraw your consent at any time. Withdrawal does not affect processing done before it was withdrawn. Withdrawing consent may mean we can no longer provide some services to you.</li>
                                <li><strong>Grievance redressal:</strong> Raise a complaint with our Grievance team (see Section 15).</li>
                                <li><strong>Nominate:</strong> Nominate another person to exercise your rights if you die or become incapable of doing so.</li>
                            </ul>
                            <p className="mb-3 leading-relaxed">
                                To exercise these rights, email <a href="mailto:grievances@mlawyer.in" className="text-primary dark:text-secondary underline">grievances@mlawyer.in</a> or use the in-app option under Profile &gt; Privacy &gt; Request Data. We will verify your identity before acting on a request and aim to respond within 30 days, or sooner where the law requires.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                You can delete your account at any time from Profile &gt; Settings &gt; Delete/Deactivate Account. Some data will be retained as described in Section 10.
                            </p>
                        </div>

                        {/* 12. Children */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Children</h2>
                            <p className="mb-4 leading-relaxed">
                                The Platform is not intended for anyone under 18. If you are under 18, you may use the Platform only with the verifiable consent of a parent or lawful guardian. We do not knowingly process children’s data for purposes that are prohibited by law, such as tracking or targeted advertising directed at children. If you believe a child has provided us with personal data without consent, please contact us and we will delete it.
                            </p>
                        </div>

                        {/* 13. Links to Other Websites */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Links to Other Websites</h2>
                            <p className="mb-4 leading-relaxed">
                                The Platform may contain links to third-party websites or services, including payment pages and social media. We are not responsible for their privacy practices. Please read their privacy policies before sharing personal data with them.
                            </p>
                        </div>

                        {/* 14. Changes to This Policy */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Changes to This Policy</h2>
                            <p className="mb-4 leading-relaxed">
                                We may update this policy from time to time, for example when the law changes or we add new features or other reasons. We will post the updated version with a new “Last updated” date and, for material changes, notify you through the App or by email before the change takes effect. Continued use of the Platform after the effective date means you accept the updated policy.
                            </p>
                        </div>

                        {/* 15. Grievance Officer and Contact */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Grievance Officer and Contact</h2>
                            <p className="mb-2 leading-relaxed">
                                For questions, complaints, or requests about this policy or your personal data, contact our Grievances team at{' '}
                                <a href="mailto:grievances@mlawyer.in" className="text-primary dark:text-secondary underline font-medium">
                                    grievances@mlawyer.in
                                </a>.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                We will acknowledge your complaint within 4–5 business days and resolve it within the period required by applicable law.
                            </p>
                        </div>

                        {/* 16. Governing Law */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">16. Governing Law</h2>
                            <p className="mb-4 leading-relaxed">
                                This Privacy Policy is governed by the laws of India. Subject to any mandatory rights you have under law, the courts at Chennai will have jurisdiction over disputes arising from it.
                            </p>
                        </div>

                        {/* Company Details Footer Box */}
                        <div className="mt-8 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                                MLawyer Legal Consultation Private Limited
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                                No. 116, 6th Floor, Kasi Arcade, Flydesk, T. Nagar, Chennai, Tamil Nadu - 600 017
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                <span className="font-semibold">CIN:</span> U69100TN2025PTC186650
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold text-gray-600 dark:text-gray-300">Website:</span>{' '}
                                <a href="https://mlawyer.in" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-secondary underline font-medium">
                                    https://mlawyer.in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
