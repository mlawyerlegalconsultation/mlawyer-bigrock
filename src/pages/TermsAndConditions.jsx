import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const TermsAndConditions = () => {
    const [activeTab, setActiveTab] = useState('clients');

    const TabButton = ({ id, label }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-6 py-3 font-semibold transition-all duration-300 border-b-2 ${
                activeTab === id
                    ? 'text-primary dark:text-secondary border-primary dark:border-secondary'
                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-primary dark:hover:text-secondary'
            }`}
        >
            {label}
        </button>
    );

    const SectionHeading = ({ children }) => (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8 first:mt-0">{children}</h2>
    );

    const BulletPoint = ({ children }) => (
        <li className="flex gap-3 mb-3 text-gray-700 dark:text-gray-300">
            <span className="text-primary dark:text-secondary font-bold shrink-0">•</span>
            <div className="flex-1">{children}</div>
        </li>
    );

    const SubBulletPoint = ({ children }) => (
        <li className="flex gap-3 mb-2 ml-6 text-gray-700 dark:text-gray-300">
            <span className="text-primary/70 dark:text-secondary/70 font-bold shrink-0">-</span>
            <div className="flex-1">{children}</div>
        </li>
    );

    return (
        <>
            <Helmet>
                <title>Terms & Conditions - MLawyer Legal Consultation</title>
                <meta name="description" content="Read MLawyer's Terms and Conditions for clients and advocates using our legal consultation platform." />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-12">
                <div className="container mx-auto px-4 sm:px-10 max-w-4xl">
                    {/* Page Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700 mb-12">
                        <TabButton id="clients" label="For Clients" />
                        <TabButton id="advocates" label="For Advocates" />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* CLIENTS TAB */}
                        {activeTab === 'clients' && (
                            <div>
                                <div className="mb-8">
                                    <div className="text-xs uppercase font-semibold text-primary dark:text-secondary mb-1">
                                        MLawyer Legal Consultation Private Limited &bull; MLawyer App – For Customers/Clients
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Legal Facilitation Centre</h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        These Terms and Conditions (&ldquo;Terms&rdquo;) govern the use of services provided by MLawyer Legal Consultation Private Limited referred or addressed as &ldquo;Legal Facilitation Centre&rdquo;, &ldquo;Facilitation Centre&rdquo;, &ldquo;Centre&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;. By accessing or using the services of the Facilitation Centre, the &ldquo;Customer&rdquo;, &ldquo;Individual&rdquo; or &ldquo;User&rdquo; referred or addressed as &ldquo;Client&rdquo;, &ldquo;You&rdquo; agrees to be bound by these Terms.
                                    </p>
                                </div>

                                <SectionHeading>Role of the Facilitation Centre</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Centre&rsquo;s role is strictly limited to receiving consultation requests from Clients, facilitating payment collection through authorized third-party payment gateways, arranging online appointments and video consultations between Clients and Advocates, and providing basic administrative and technical support in connection with such consultations.</BulletPoint>
                                    <BulletPoint>The Centre does not supervise, control, or influence the professional judgment or conduct of any Advocate.</BulletPoint>
                                    <BulletPoint>The Centre doesn&rsquo;t recommend or prioritize or suggest any Advocates to Clients for consultation through any mode.</BulletPoint>
                                    <BulletPoint>All Advocates listed on the platform undergo verification of their professional credentials and the information provided in their profiles.</BulletPoint>
                                    <BulletPoint>Advocate listings are displayed in a systematically shuffled order to ensure fair and equal visibility, so that no particular advocate receives preferential placement or consistently appears ahead of others.</BulletPoint>
                                    <BulletPoint>The Centre does not recruit any in-house lawyers or Advocates for providing legal opinions to Clients, nor does it represent Clients in any legal matters or cases in courts across the state and country.</BulletPoint>
                                    <BulletPoint>The Centre reserves the right to recruit or engage legal professionals, quality analysts, and other relevant personnel to support quality assurance, verify Advocates&rsquo; credentials, review complaints raised by Clients or Advocates, monitor service standards, and facilitate appropriate feedback, dispute resolution, and grievance redressal.</BulletPoint>
                                    <BulletPoint>For every consultation, the Centre collects the fee upfront and enables the Client to use the platform only for audio &amp; video consultation with the Advocate.</BulletPoint>
                                    <BulletPoint>All payments are processed through the Centre&rsquo;s authorized third-party payment gateway partners. The Centre does not access, collect, or store Clients&rsquo; credit card, debit card, UPI, or internet banking credentials.</BulletPoint>
                                    <BulletPoint>The Centre shall not be responsible for any unauthorized access, hacking, theft, or security breach occurring within third-party payment gateway systems during payment transactions, except to the extent arising from the Centre&rsquo;s own acts, omissions, negligence, or failure to comply with applicable data protection obligations.</BulletPoint>
                                    <BulletPoint>The Facilitation Centre is not a party to such relationship and bears no responsibility for the advice, guidance, opinions or services rendered by the Advocates.</BulletPoint>
                                    <BulletPoint>During a consultation, the Advocate and Client may exchange case-related information, documents, audio, video, or other relevant materials. The Centre does not monitor, listen to, or view live consultations. Such consultation content remains accessible only to the participating Advocate and Client, except where access is expressly permitted under the Platform&rsquo;s privacy policy, applicable complaint or grievance procedures, or legal requirements.</BulletPoint>
                                    <BulletPoint>In the event of any unauthorized disclosure, data breach, or leakage of Client information attributable to an Advocate, arising from an unknown source, or resulting from circumstances beyond the Centre&rsquo;s reasonable control, the Centre shall not be held liable for any resulting loss, damage, claims, or compensation sought by the Client.</BulletPoint>
                                    <BulletPoint>The terms of engagement, scope of work and responsibilities relating to the legal consultation/opinion shall be mutually agreed upon between the Client and the Advocate.</BulletPoint>
                                </ul>

                                <SectionHeading>Centre-Client Relationship</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Facilitation Only:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Facilitation Centre acts solely as a technology-enabled facilitator to connect clients across India with independently practicing advocates for legal consultations and/or legal opinions through the MLawyer mobile application only.</SubBulletPoint>
                                                <SubBulletPoint>Any facilitation or administrative fees charged by MLawyer Legal Consultation Private Limited (the &ldquo;Centre&rdquo;) are solely towards the use and maintenance of the technology platform, consultation facilitation, payment processing and administration, and other related online support services.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">No Direct Legal Services:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre does not itself provide legal services and shall not be responsible for the independent professional advice, opinions, or recommendations provided by Advocates to Clients.</SubBulletPoint>
                                                <SubBulletPoint>The Centre does not evaluate, supervise, review, judge, or modify the professional advice or opinions expressed by Advocates during consultations, nor does it interfere with their independent professional judgment.</SubBulletPoint>
                                                <SubBulletPoint>The Centre does not employ or engage Advocates to provide legal services on its behalf, nor does it represent clients or undertake their representation before any court, tribunal, or other legal or judicial authority in India or overseas.</SubBulletPoint>
                                                <SubBulletPoint>The Centre does not provide legal representation to Clients before any court, tribunal, or judicial authority in Chennai or elsewhere in Tamil Nadu, any other State or Union Territory in India, or outside India.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Independent Professional Practice:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>All legal consultations, advice, opinions, and guidance shall be provided exclusively by the respective Advocates in their independent professional capacity.</SubBulletPoint>
                                                <SubBulletPoint>Each Advocate shall bear sole professional responsibility for the legal advice, opinions, guidance, and consultations provided to Clients.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be responsible for the substance, accuracy, adequacy, or consequences of any such legal advice, opinion, or guidance provided by an Advocate.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Advance Payment and Fee Structure:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients must pay the applicable consultation fee in advance through the platform before engaging an Advocate for a consultation.</SubBulletPoint>
                                                <SubBulletPoint>The available consultation plans, tariffs, and optional paid add-on services will be displayed on the platform.</SubBulletPoint>
                                                <SubBulletPoint>Clients are responsible for reviewing and selecting their preferred plan before making payment.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Fee Inclusions and Payment Receipts:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The displayed fee shall specify the applicable consultation charges, payment gateway charges, and GST, as applicable.</SubBulletPoint>
                                                <SubBulletPoint>Following a successful transaction, the Client will receive an in-app notification and may download the payment receipt from the Transaction History section of the application.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Payment Processing and Transaction Charges:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Payments for consultations, paid add-on services and refunds shall be processed through the third-party payment gateway or payment service provider integrated with the platform.</SubBulletPoint>
                                                <SubBulletPoint>A payment gateway fee and applicable GST shall apply to eligible transactions where such charges are disclosed to the Client before the transaction is completed.</SubBulletPoint>
                                                <SubBulletPoint>Any applicable deductions, processing charges, refund adjustments, or withdrawal charges shall be governed by the platform&rsquo;s published fee schedule and applicable law.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Consultation and Fee Disputes:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients are encouraged to raise any concerns relating to consultation delivery, service quality, fees, or payments through the platform&rsquo;s grievance redressal mechanism.</SubBulletPoint>
                                                <SubBulletPoint>The Centre may review such complaints and facilitate appropriate resolution within its role as a technology and facilitation platform.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Prohibition on Payments outside the Platform:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients must make all payments for consultations and platform-enabled add-on services exclusively through the authorized payment mechanisms provided within the application.</SubBulletPoint>
                                                <SubBulletPoint>Clients are strictly prohibited from making direct or indirect payments to Advocates through bank transfers, UPI, internet banking, cash, or any other method outside the platform for services arranged through MLawyer.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be responsible for payments made outside the platform, except to the extent that liability arises under applicable law.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Prohibition on Advocates Accepting Off-Platform Payments:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates listed on the platform must not solicit or accept payments outside the application for consultations or related services booked through MLawyer.</SubBulletPoint>
                                                <SubBulletPoint>Clients may report any suspected violation through the platform&rsquo;s grievance section.</SubBulletPoint>
                                                <SubBulletPoint>The Centre may investigate reported incidents and take appropriate action in accordance with its policies, including restricting or suspending an Advocate&rsquo;s platform access where warranted.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">No Unauthorized Representatives or Franchises:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre does not authorize any individual, agency, intermediary, or franchise to collect payments on its behalf unless expressly confirmed through an official, verifiable channel.</SubBulletPoint>
                                                <SubBulletPoint>Clients are advised not to transfer money to anyone claiming to represent MLawyer Legal Consultation Private Limited outside the authorized payment mechanisms provided on the platform.</SubBulletPoint>
                                                <SubBulletPoint>In the event that a Client makes any payment to an unauthorized individual, agency, intermediary, or third party falsely claiming to represent MLawyer as a franchise, dealer, or authorized representative, the Centre shall not be responsible for any resulting loss or damage, provided such payment was not authorized, received, or facilitated by the Centre. Clients shall not be entitled to claim reimbursement, compensation, or damages from the Centre for such unauthorized transactions.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Third-Party Links and Services:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Platform may contain links to third-party websites, applications, or services, including payment gateways and social media platforms.</SubBulletPoint>
                                                <SubBulletPoint>Clients are advised to review the applicable privacy policies and terms before sharing any personal information with them.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be responsible for the privacy practices, content, or data-handling policies of such third parties.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Client-Advocate Relationship</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Clients can browse through the list of Advocates and initiate video consultations via the app. The Centre shall not be responsible for any direct or off-platform communication between the Client and the Advocate, including but not limited to matters relating to cases, disputes, or payments.</BulletPoint>
                                    <BulletPoint>(1) The Client must not attempt to influence the Advocate personally or engage in any form of inappropriate or sexual conduct. The Client must also not discriminate against the Advocate based on caste, religion, appearance, or professional expertise.</BulletPoint>
                                    <BulletPoint>(2) The Client shall refrain from engaging in discussions with the Advocate that are defamatory, discriminatory, or inappropriate in nature, including but not limited to criticism or derogatory remarks relating to Indian law, caste, color of the skin, celebrities, political matters (domestic or international) and political leaders.</BulletPoint>
                                    <BulletPoint>(3) The Client must not request direct meetings with the Advocate, ask for personal phone numbers, email address, social media profiles or make complaints or comments about the Facilitation Centre during the consultation.</BulletPoint>
                                    <BulletPoint>The provisions under Clauses (1), (2), and (3) shall apply equally to Advocates and Clients. In the event of any violation by a Client, the Centre reserves the right to issue a warning through email, SMS, or telephone communication, or temporarily suspend or permanently deactivate the Client&rsquo;s profile on the Platform.</BulletPoint>
                                    <BulletPoint>The Facilitation Centre shall not be responsible for any direct or indirect communication between the Client and the Advocate and shall not be held liable for any loss, damage, or consequences arising from such communication.</BulletPoint>
                                </ul>

                                <SectionHeading>Client Responsibilities, Consultation Guidelines and Recording Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Eligibility:</strong> Clients must be at least 18 years of age to register on and use the application for legal consultations, advice, or opinions provided by independently practicing Advocates.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Accurate Information:</strong> Clients must provide accurate, complete, and up-to-date information while registering for and using the platform. Clients are responsible for the accuracy of the information and documents they submit.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Lawful Use:</strong> Clients shall use the platform solely for lawful purposes relating to legal consultations, advice, and opinions. Any use of the application for unlawful, fraudulent, misleading, or otherwise prohibited activities is strictly prohibited.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Professional Conduct and Decorum:</strong> Clients shall maintain professional, courteous, and respectful communication with Advocates throughout the consultation. Smoking, consumption of alcohol, and any abusive, threatening, offensive, unethical, or otherwise inappropriate language are strictly prohibited during consultations. Clients shall maintain proper decorum and ensure that their attire is decent and appropriate for a professional consultation, particularly during video consultations.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Video and Audio Consultation Options:</strong> Clients and Advocates are expected to participate in consultations using both video and audio facilities. Audio-only consultations are permitted with the prior consent of both parties. However, where technical difficulties, internet connectivity issues, device malfunctions, or other unforeseen circumstances affect video functionality, the consultation may proceed through audio only, provided the other party is informed of the circumstances. This provision applies equally to both Clients and Advocates.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Supported Languages:</strong> Video consultations may be conducted in Tamil, English, Telugu, Malayalam, Hindi, or any other language spoken in India, subject to the mutual agreement, language proficiency, and convenience of both the Client and the Advocate.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Consultation Plans and Optional Add-on Services:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients may select their preferred consultation duration, applicable tariff, and any available optional paid add-on services, including session recording and the participation of permitted third parties, such as police personnel, friends, or family members, where such services are offered on the platform.</SubBulletPoint>
                                                <SubBulletPoint>Clients are responsible for reviewing the selected consultation plan, applicable charges, and add-on services before completing payment.</SubBulletPoint>
                                                <SubBulletPoint>
                                                    <div>
                                                        <strong className="text-gray-900 dark:text-white">Standard Consultations:</strong>
                                                        <ul className="space-y-1 mt-1 ml-4">
                                                            <SubBulletPoint>15-minute consultation: INR 599 plus applicable payment gateway charges and related GST.</SubBulletPoint>
                                                            <SubBulletPoint>30-minute consultation: INR 1,099 plus applicable payment gateway charges and related GST.</SubBulletPoint>
                                                        </ul>
                                                    </div>
                                                </SubBulletPoint>
                                                <SubBulletPoint>
                                                    <div>
                                                        <strong className="text-gray-900 dark:text-white">Paid Add-on:</strong>
                                                        <ul className="space-y-1 mt-1 ml-4">
                                                            <SubBulletPoint>Additional participants: INR 150 plus applicable payment gateway charges and related GST for including permitted participants such as police personnel, family members, friends, groups, colleagues, or other Advocates, where appropriate for the consultation.</SubBulletPoint>
                                                        </ul>
                                                    </div>
                                                </SubBulletPoint>
                                                <SubBulletPoint>The Centre reserves the right to revise or modify consultation tariffs, plans, and applicable fees from time to time. Any revised tariffs or plans shall be published and communicated through the MLawyer mobile application and, where applicable, the Centre&rsquo;s official website. The revised tariffs shall apply to bookings made after the effective date of such changes.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Session Recording and Availability:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Where a Client opts for a paid session-recording service; the consultation may be recorded in accordance with the platform&rsquo;s applicable terms, privacy policy, and consent requirements.</SubBulletPoint>
                                                <SubBulletPoint>The recording will be made available in the Client&rsquo;s consultation history dashboard for review and reference, subject to technical availability and applicable restrictions.</SubBulletPoint>
                                                <SubBulletPoint>Recordings available through the dashboard will be automatically deleted after seven (7) calendar days. Where the platform provides a download facility, Clients may download their recordings during the period of availability for personal reference, subject to applicable terms and restrictions.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Recording Retention for Quality Assurance and Grievance Resolution:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Where recording is enabled with the required consent, the Centre may securely retain a copy of the session recording for quality assurance, complaint investigation, grievance review, and resolution, or for taking appropriate action where necessary.</SubBulletPoint>
                                                <SubBulletPoint>Such retained recordings shall be accessed only by authorized personnel for legitimate purposes and handled in accordance with applicable privacy and data-protection requirements.</SubBulletPoint>
                                                <SubBulletPoint>They shall not be routinely shared with Advocates or unauthorized individuals or entities. Any disclosure required by law or necessary for a lawful investigation or proceeding shall be handled in accordance with applicable legal requirements.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Third-Party Participation and Add-on Verification:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>If a Client purchases an add-on service permitting the participation of police personnel, friends, family members, or other advocates, the Client must inform the Advocate at the commencement of the consultation.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate may verify the purchased add-on through the details displayed on the consultation interface.</SubBulletPoint>
                                                <SubBulletPoint>If any selected add-on, excluding the session recording add-on, is not displayed or cannot be verified, the Advocate may suspend or decline to proceed with the consultation until the discrepancy is resolved. Any resulting refund shall be governed by the Platform&rsquo;s applicable refund policy.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Extension of Consultation Duration:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>A Client may request an extension of an ongoing consultation by notifying the Advocate and paying the applicable additional fee through the platform.</SubBulletPoint>
                                                <SubBulletPoint>Any extension is subject to the Advocate&rsquo;s consent, availability, and approval.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate may decline the extension if they have another scheduled consultation, professional commitment, or other reason that prevents them from continuing.</SubBulletPoint>
                                                <SubBulletPoint>An extension shall be considered confirmed only after the Advocate approves the request and the applicable payment is successfully completed.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Participation by Family Members or Other Representatives:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>If a Client who has booked and paid for a consultation is unable to attend, a family member or friend may participate on the Client&rsquo;s behalf, provided the Advocate is informed in advance and obtains consent for such participation. The Advocate reserves the right to decline or discontinue the consultation if any person participates or speaks on behalf of the Client without the Advocate&rsquo;s prior consent.</SubBulletPoint>
                                                <SubBulletPoint>However, where a Client is physically or mentally challenged and requires assistance, a family member or friend may participate in the consultation on the Client&rsquo;s behalf, provided the Advocate is informed in advance. The Advocate shall not refuse or discontinue the consultation solely on the grounds that the Client requires such assistance. In the event of any such refusal or discontinuation without a valid reason, the Client may raise a complaint or grievance with the Centre. The Centre&rsquo;s support team shall review the complaint, assess the circumstances, and take appropriate action to resolve the matter at the earliest.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Confidentiality, Client Information and Data Protection</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Professional Confidentiality:</strong> Information shared by the Client with the Advocate during a consultation shall be subject to the professional confidentiality obligations applicable to the Advocate under relevant Indian laws and professional rules.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Accuracy of Client Information:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre does not undertake to edit, modify, or alter information or details submitted by Clients through the application.</SubBulletPoint>
                                                <SubBulletPoint>Clients are responsible for ensuring that their information is accurate and complete before submission.</SubBulletPoint>
                                                <SubBulletPoint>Any correction or update request, if permitted by the platform, shall be handled in accordance with the Centre&rsquo;s applicable policies and legal obligations.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Protection of Personal Information:</strong> The Centre shall take reasonable and appropriate measures to safeguard the personal information it collects and processes for platform facilitation, verification, payment administration, customer support, and related legitimate purposes, in accordance with applicable data-protection laws and its Privacy Policy.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Information shared between Clients and Advocates:</strong> The Centre is not responsible for independent communications or disclosures made directly between Clients and Advocates outside the Centre&rsquo;s control. However, any information collected, processed, stored, or disclosed by the Centre through the platform shall be handled in accordance with applicable law and the Centre&rsquo;s Privacy Policy.
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Consultation Cancellation and Refund Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">General Non-Refundable Policy:</strong> Consultation fees are generally non-refundable once a booking has been confirmed, except in the limited circumstances expressly specified in this policy or where a refund is required under applicable law.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Refunds will ordinarily not be granted in the following circumstances:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Failure to Attend and No-Show Policy:</strong> If the Client fails to attend or join the scheduled consultation at the appointed date and time, the consultation shall be deemed a Client No-Show, and no refund shall be due or payable.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Failure to join within the Waiting Period:</strong> The Client fails to join within the permitted five (5)-minute waiting period from the scheduled consultation start time.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Unauthorized Consultation Extension:</strong> The Client pays for an extension without obtaining the Advocate&rsquo;s prior consent and confirmation.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Client Dissatisfaction:</strong> The Client is dissatisfied with the legal advice, opinion, or outcome of the consultation, provided the Advocate has delivered the agreed service professionally.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Client-Side Technical Issues:</strong> The consultation is disrupted or prevented by the Client&rsquo;s internet connectivity, device limitations, software issues, or other technical problems beyond the Centre&rsquo;s reasonable control.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Consultation Extension:</strong> Where a Client pays for a consultation extension that the Advocate declines to provide, the Centre shall verify the matter through the session recording, if available, or by contacting both parties via email or telephone. If the issue is attributable to the Client, no refund shall be provided. If attributable to the Advocate, the extension fee shall be refunded to the Client&rsquo;s original payment source, subject to applicable processing timelines.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Participation by Family Members or Other Representatives:</strong> If a Client who has booked and paid for a consultation is unable to attend, a family member or friend may participate on the Client&rsquo;s behalf, provided the Advocate is informed in advance and obtains consent for such participation. The Advocate reserves the right to decline or discontinue the consultation if any person participates or speaks on behalf of the Client without the Advocate&rsquo;s prior consent. In such cases, no refund shall be provided to the Client.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Client-Initiated Cancellation and Refund Policy:</strong> Cancellation requests are subject to the following refund terms, based on the time the cancellation request is successfully submitted through the MLawyer application relative to the scheduled consultation start time:
                                            <ul className="space-y-1 mt-2 ml-4">
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Cancellation more than 48 hours before the scheduled consultation:</strong> The Client shall be eligible for a refund of 75% of the applicable consultation fee.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Cancellation between 24 and 48 hours before the scheduled consultation:</strong> The Client shall be eligible for a refund of 50% of the applicable consultation fee.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Cancellation less than 24 hours before the scheduled consultation or after the scheduled consultation time:</strong> No refund shall be provided.</SubBulletPoint>
                                            </ul>
                                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                                All eligible refunds shall be processed in accordance with the Centre&rsquo;s applicable refund procedures and payment gateway processing timelines.
                                            </p>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Exceptional Circumstances for Refunds:</strong> A refund may be considered in the following circumstances, subject to verification and the applicable refund procedure:
                                            <ul className="space-y-1 mt-2 ml-4">
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Advocate Non-Attendance:</strong> The Advocate fails to join or attend the scheduled consultation within the applicable waiting period.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Mutual Non-Attendance:</strong> Where both the Client and the Advocate fail to attend or join the scheduled consultation, the consultation fee paid by the Client shall be refunded to the Client&rsquo;s original payment account or payment method used for the transaction, excluding any payment gateway fees incurred in connection with the transaction.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Participation by Family Members or Other Representatives:</strong> If a Client is physically or mentally challenged and requires assistance, a family member or friend may participate in the consultation on the Client&rsquo;s behalf, provided the Advocate is informed in advance. The Advocate shall not refuse or discontinue the consultation solely because the Client requires such assistance. Any deliberate refusal or discontinuation by the Advocate without a valid reason shall be treated as an Advocate-initiated cancellation and refund shall be provided to the Client.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Eligible Cancellation:</strong> The Client cancels the consultation within the cancellation period specified by the platform.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Unprofessional Conduct or Service:</strong> Credible evidence indicates that the Advocate acted unprofessionally or failed to deliver the agreed consultation service.</SubBulletPoint>
                                            </ul>
                                            <p className="mt-3 text-gray-700 dark:text-gray-300">
                                                The Centre may review available booking records, attendance logs, payment records, complaint details, and session recordings where recording was enabled with the required consent. The absence of a recording shall not, by itself, prevent a complaint from being reviewed.
                                            </p>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Refund Processing:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Approved refunds shall ordinarily be processed to the original payment method or source account used by the Client for the transaction through the Platform. All payments and refunds shall be processed through the Centre&rsquo;s designated or authorized third-party payment gateway partner(s), subject to their applicable processing procedures and timelines.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall initiate the refund within the applicable processing period following approval. Once initiated, the amount is generally expected to be credited within six (6) to eight (8) bank working days, subject to the payment gateway, issuing bank, card network, UPI provider, or other financial institution involved in the transaction. The refund money will/may not include the payment gateway fee that was paid at the time of booking.</SubBulletPoint>
                                                <SubBulletPoint>The stated timeline is an estimate and may vary depending on the payment method, banking holidays, technical issues, or the processing procedures of the relevant financial institution. The Centre shall provide reasonable assistance in tracking delayed refunds where the necessary transaction details are available.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Consultation Cancellation and Rescheduling Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">No Rescheduling:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients are not permitted to reschedule or change the date or time of a confirmed consultation.</SubBulletPoint>
                                                <SubBulletPoint>If a Client is unable to attend a scheduled consultation, the Client may cancel the booking in accordance with the cancellation and refund policy set out below and makes a new booking separately.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Repeated Cancellations and Account Restrictions:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients are expected to make bookings responsibly and avoid frequent or repeated cancellations; as such cancellations may disrupt Advocates&rsquo; schedules, availability, and opportunities to serve other Clients.</SubBulletPoint>
                                                <SubBulletPoint>The Centre reserves the right to review instances of excessive or repeated cancellations, unprofessional conduct, violations of the Centre&rsquo;s Terms and Conditions, or misuse of the platform.</SubBulletPoint>
                                                <SubBulletPoint>Depending on the nature, frequency, and severity of the conduct, the Centre may issue a warning, restrict booking privileges, temporarily suspend, or terminate the Client&rsquo;s account in accordance with its policies and applicable law.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Limitation of Liability</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre acts solely as a technology-enabled intermediary that facilitates connections between Clients and independently practicing Advocates. The Centre does not provide legal advice, opinions, or representation directly.</BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            To the maximum extent permitted under applicable law, the Facilitation Centre shall not be liable for any loss, damage, claim, cost, or expense arising out of or in connection with:
                                            <ul className="space-y-1 mt-2 ml-4">
                                                <SubBulletPoint>Any legal advice, opinion, consultation, or information provided by an Advocate;</SubBulletPoint>
                                                <SubBulletPoint>Any act, omission, error, misrepresentation, or negligence of an Advocate;</SubBulletPoint>
                                                <SubBulletPoint>Any action, decision, or omission by a Client based on the advice or opinion received from an Advocate; or</SubBulletPoint>
                                                <SubBulletPoint>Any dispute between a Client and an Advocate concerning the consultation or the legal advice provided.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>Clients shall not be entitled to claim any compensation, damages, reimbursement, or other losses from the Centre arising out of or in connection with any direct or indirect impact on their personal or professional reputation, credibility, goodwill, or standing resulting from legal consultations provided by independent Advocates through the Platform. This includes, without limitation, any publicity, advertisements, reviews, comments, publications, social media posts, or other forms of communication made, published, circulated, or disseminated by Advocates or third parties in relation to such consultations.</BulletPoint>
                                    <BulletPoint>To the extent that the Facilitation Centre is found liable under applicable law, its aggregate liability shall, to the maximum extent legally permissible, be limited to the facilitation fee actually received and retained by the Centre for the specific consultation giving rise to the claim.</BulletPoint>
                                    <BulletPoint>By registering with and using the Platform, Clients acknowledge and accept the inherent risks associated with obtaining legal consultations through a technology-enabled platform and agree that the Centre shall not be held liable for any such claims, losses, or consequences, except to the extent arising from the Centre&rsquo;s own acts, omissions, negligence, or violation of applicable laws.</BulletPoint>
                                    <BulletPoint>Nothing in this clause shall exclude or limit any liability that cannot lawfully be excluded or limited under applicable law, or any statutory rights or remedies available to a Client.</BulletPoint>
                                </ul>

                                <SectionHeading>Complaints, Grievance Redressal and Technical Support</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Complaints Regarding Advocates:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients may submit complaints regarding an Advocate&rsquo;s consultation, professional conduct, or any other concern arising from a consultation booked through the MLawyer platform.</SubBulletPoint>
                                                <SubBulletPoint>The Centre&rsquo;s designated legal advisors or quality assurance team or the authorized personnel will review the complaint and, where appropriate, seek clarification from the concerned Advocate and conduct an internal investigation to facilitate resolution.</SubBulletPoint>
                                                <SubBulletPoint>Complaints may be reviewed irrespective of whether the Client has opted for the session-recording facility. However, the availability of a session recording, where lawfully made and retained with the required consent, may assist the Centre in assessing the complaint and determining appropriate follow-up action. The absence of a recording shall not, by itself, prevent the Centre from reviewing a complaint.</SubBulletPoint>
                                                <SubBulletPoint>The Centre will make reasonable efforts to facilitate a fair review and communicate the outcome to the Client, where appropriate, along with the corresponding complaint reference ID. However, the Centre does not guarantee a particular outcome or a specific resolution timeframe, as the process may depend on the nature of the complaint, the information available, and the response of the concerned parties.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">App-Related Issues and Technical Support:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients may report technical issues relating to the MLawyer application, including application performance, OTP verification, login difficulties, payment-related technical errors, or other platform-access problems.</SubBulletPoint>
                                                <SubBulletPoint>The Centre&rsquo;s support team will review such reports and make reasonable efforts to assist in resolving them as soon as reasonably practicable.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Contacting Support:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>
                                                    Clients may submit complaints, queries, or technical-support requests through the relevant support or grievance feature available in the MLawyer application, where provided, or by emailing the contact address published on the official website:{' '}
                                                    <a href="https://www.mlawyer.in" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-secondary underline">
                                                        www.mlawyer.in
                                                    </a>.
                                                </SubBulletPoint>
                                                <SubBulletPoint>Clients must send all support-related communications to the appropriate email address designated by the Centre.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be responsible for any delay, loss, or failure to respond resulting from emails sent to an incorrect or unauthorized email address.</SubBulletPoint>
                                                <SubBulletPoint>Clients are encouraged to include their booking ID, transaction reference, or complaint ID, where applicable, to help the team review the matter efficiently.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Session Recording:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>If a Client opts for session recording by paying the applicable additional fee and the recording is lawfully made and available, it may assist the Centre in reviewing complaints relating to the consultation.</SubBulletPoint>
                                                <SubBulletPoint>Recording availability does not guarantee a particular finding or outcome. All recordings shall be handled in accordance with the Centre&rsquo;s applicable recording, privacy, consent, retention, and data-protection policies.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Disclaimer Regarding Legal Advice and Outcomes</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre operates solely as a technology-enabled intermediary connecting Clients with independently practicing Advocates. The Centre&rsquo;s scope of work is limited to facilitating preliminary, high-level discussions and access to legal guidance, opinions, and advice provided exclusively by the respective Advocates, whether during the first, second, or any subsequent consultation.</BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            The Centre does not itself provide legal advice, opinions, or representation and does not guarantee:
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Accuracy or completeness of legal advice:</strong> The Centre does not warrant or guarantee the accuracy, completeness, suitability, or outcome of any legal advice, opinion, or consultation provided by an Advocate.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Advocate&rsquo;s professional services:</strong> The Centre does not guarantee any Advocate&rsquo;s competence, performance, availability, or ability to achieve a particular result. Each Advocate is independently responsible for the legal services and professional advice they provide, subject to applicable law and professional obligations.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Legal proceedings or outcomes:</strong> The Centre does not guarantee any particular outcome, judgment, order, settlement, or result in any legal proceeding or dispute.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>Clients are solely responsible for evaluating the legal advice, opinions, and recommendations received from Advocates and for deciding how to proceed with their respective legal matters. Where necessary, Clients are encouraged to seek further legal advice, clarification, or a second opinion from another Advocate, either through the MLawyer Platform or independently outside the Platform.</BulletPoint>
                                    <BulletPoint>Legal matters are governed by applicable laws, facts, evidence, procedural requirements, and the discretion of the relevant courts, tribunals, or authorities. Accordingly, no consultation or legal opinion should be construed as a guarantee of a particular legal outcome.</BulletPoint>
                                    <BulletPoint>Nothing in this disclaimer shall exclude or limit any rights or remedies available to Clients under applicable law.</BulletPoint>
                                </ul>

                                <SectionHeading>Suspension and Termination of Facilitation Services</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre reserves the right to refuse, suspend, restrict, or terminate access to its facilitation services or the MLawyer platform, where reasonably necessary, in accordance with its Terms and Conditions and applicable law. Such action may be taken in cases involving suspected misuse, fraudulent activity, and violation of platform policies, unlawful conduct, security concerns, or other legitimate operational or compliance reasons. Where appropriate and legally permissible, the Centre may provide notice and an opportunity to address the concern.</BulletPoint>
                                    <BulletPoint>Suspension or termination of facilitation services shall not, by itself, terminate or invalidate any separate agreement or professional relationship between the Client and the Advocate. Any rights, obligations, or liabilities arising from such an independent agreement shall remain subject to its terms and applicable law.</BulletPoint>
                                    <BulletPoint>Termination shall not affect any accrued rights, pending refund obligations, unresolved complaints, or other responsibilities that survive termination under these Terms and Conditions or applicable law.</BulletPoint>
                                </ul>

                                <SectionHeading>Governing Jurisdiction and Dispute Resolution</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Disputes Relating to Facilitation Services:</strong> Any dispute arising out of or relating to the facilitation services provided by the Centre or the use of the MLawyer platform shall be governed by applicable Indian law and shall be subject to the jurisdiction of the competent courts in Chennai.
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Disputes between Clients and Advocates:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Disputes arising directly between a Client and an Advocate concerning legal advice, consultation, professional conduct, or any independent professional engagement shall ordinarily be addressed between the concerned parties through the appropriate legal or professional channels.</SubBulletPoint>
                                                <SubBulletPoint>The Centre acts as a technology-enabled intermediary and does not assume responsibility for resolving disputes arising from the independent professional relationship between a Client and an Advocate. However, the Centre may review complaints relating to platform use, facilitate communication, or take appropriate action under its Terms and Conditions were warranted.</SubBulletPoint>
                                                <SubBulletPoint>Nothing in this clause shall prevent a Client or Advocate from exercising any statutory rights or pursuing remedies before a competent court, regulatory authority, or professional body, as applicable.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Amendments to Terms and Conditions</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre reserves the right to amend, update, or modify these Terms and Conditions from time to time to reflect changes in its services, operational practices, platform features, or applicable laws and regulations.</BulletPoint>
                                    <BulletPoint>Any revised Terms and Conditions shall become effective upon publication on the MLawyer application or official website, or upon communication to users through appropriate means, as applicable. Where required by law, the Centre shall provide prior notice or obtain the user&rsquo;s consent before implementing such changes.</BulletPoint>
                                    <BulletPoint>Users are responsible for reviewing the updated Terms and Conditions periodically. Continued use of the MLawyer platform after the revised Terms and Conditions become effective shall constitute acceptance of the changes, to the extent permitted by applicable law.</BulletPoint>
                                    <BulletPoint>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Subject to applicable law, any dispute arising out of or in connection with these Terms or the use of the MLawyer platform shall be subject to the jurisdiction of the competent courts in Chennai.</BulletPoint>
                                    <BulletPoint>If a user does not agree to the revised Terms and Conditions, the user may discontinue use of the platform, subject to any outstanding obligations and applicable legal requirements.</BulletPoint>
                                </ul>

                                <SectionHeading>Breach of Terms and Conditions</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre shall not be responsible for any breach or violation of these Terms and Conditions by a Client, Advocate, or any other party, except to the extent that liability cannot be excluded under applicable law. Each party shall remain responsible for its own acts, omissions, and compliance with applicable laws and obligations.</BulletPoint>
                                    <BulletPoint>In the event of an actual or suspected breach of these Terms and Conditions, the Facilitation Centre reserves the right to investigate the matter and take appropriate action against the responsible Client or other user, in accordance with its policies and applicable law. Such action may include issuing a warning, restricting access to specific features, suspending or terminating the account, cancelling bookings, or taking other lawful measures, as appropriate to the nature and severity of the violation.</BulletPoint>
                                </ul>

                                <SectionHeading>Acknowledgement and Acceptance</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        By accessing or using the MLawyer Application or availing the services of the Facilitation Centre, I, <span className="font-semibold underline">________________</span>, acknowledge that I have read, understood, and agreed to be bound by these Terms and Conditions, including all applicable policies, rules, and guidelines prescribed by MLawyer Legal Consultation Private Limited (CIN: U69100TN2025PTC186650), and undertake to comply with them, as amended from time to time.
                                    </BulletPoint>
                                </ul>
                            </div>
                        )}

                        {/* ADVOCATES TAB */}
                        {activeTab === 'advocates' && (
                            <div>
                                <div className="mb-8">
                                    <div className="text-xs uppercase font-semibold text-primary dark:text-secondary mb-1">
                                        MLawyer Legal Consultation Private Limited &bull; MLawyer Pro App – For Advocates
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Legal Facilitation Centre</h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        These Terms and Conditions (&ldquo;Terms&rdquo;) govern the use of services provided by MLawyer Legal Consultation Private Limited referred or addressed as &ldquo;Legal Facilitation Centre&rdquo;, &ldquo;Facilitation Centre&rdquo;, &ldquo;Centre&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;. By accessing or using the services of the Facilitation Centre, the &ldquo;Advocate/Lawyer&rdquo; (&ldquo;Advocate&rdquo;, &ldquo;Lawyer&rdquo;, &ldquo;You&rdquo;) agrees to be bound by these Terms.
                                    </p>
                                </div>

                                <SectionHeading>Centre-Advocate Relationship</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Facilitation Only:</strong> The Facilitation Centre acts solely as a technology-enabled facilitator to connect clients across India with independently practicing advocates for legal consultations and/or legal opinions, legal guidance through the MLawyer mobile application only.
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">No Direct Legal Services:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre does not itself provide legal advice, guidance, opinions, or other legal services.</SubBulletPoint>
                                                <SubBulletPoint>The Centre does not employ or engage Advocates to provide legal services on its behalf, nor does it represent clients or undertake their representation before any court, tribunal, or other legal or judicial authority in India or overseas.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Independent Professional Practice:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>All legal consultations, advice, opinions, and guidance shall be provided exclusively by the respective Advocates in their independent professional capacity.</SubBulletPoint>
                                                <SubBulletPoint>Each Advocate shall bear sole professional responsibility for the legal advice, opinions, guidance, and consultations provided to Clients.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall independently decide whether to accept consultation requests received through the MLawyer platform and exercise their independent professional judgment without any direction, influence, or intervention from the Centre.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be responsible for the substance, accuracy, adequacy, or consequences of any such legal advice, opinion, or guidance provided by an Advocate.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Contacting Support:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>
                                                    Advocates may submit complaints, queries, or technical-support requests through the relevant support or grievance feature available in the MLawyer application, where provided, or by emailing the contact address published on the official website:{' '}
                                                    <a href="https://www.mlawyer.in" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-secondary underline">
                                                        www.mlawyer.in
                                                    </a>.
                                                </SubBulletPoint>
                                                <SubBulletPoint>Advocates must send all support-related communications to the appropriate email address designated by the Centre.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be responsible for any delay, loss, or failure to respond resulting from emails sent to an incorrect or unauthorized email address.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Limitation of Liability – Professional Reputation and Third-Party Communications:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates shall not be entitled to claim any compensation, damages, reimbursement, or other losses from the Centre arising out of or in connection with any direct or indirect impact on their professional reputation, credibility, goodwill, or standing resulting from legal consultations provided to Clients through the Platform. This includes, without limitation, any publicity, advertisements, reviews, comments, publications, social media posts, or other forms of communication made, published, circulated, or disseminated by Clients or any third parties in relation to such consultations.</SubBulletPoint>
                                                <SubBulletPoint>By registering with and using the Platform, Advocates acknowledge and accept the inherent risks associated with providing consultations through a technology-enabled platform and agree that the Centre shall not be held liable for any such claims, losses, or consequences.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Limitation of the Centre&rsquo;s Responsibility:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre acts as a technology and consultation facilitation platform and does not control communications independently undertaken by Clients and Advocates outside the platform.</SubBulletPoint>
                                                <SubBulletPoint>Subject to applicable law, the Centre shall not be responsible for losses, damages, disputes, commitments, or consequences arising solely from independent off-platform communications or transactions between a Client and an Advocate.</SubBulletPoint>
                                                <SubBulletPoint>Nothing in this clause excludes any obligation or liability that cannot lawfully be excluded, including any applicable statutory duty of the Centre.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Third-Party Links and Services:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Platform may contain links to third-party websites, applications, or services, including payment gateways and social media platforms.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be responsible for the privacy practices, content, or data-handling policies of such third parties. Users are advised to review the applicable privacy policies and terms before sharing any personal information with them.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">No Unauthorized Representatives or Franchises:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>There is no joining or registration fee for Advocates to register with the MLawyer Pro mobile application. The Centre does not authorize any individual, agency, intermediary, or franchise to collect payments on its behalf unless expressly communicated and verified through an official channel.</SubBulletPoint>
                                                <SubBulletPoint>Advocates are advised not to transfer money to anyone claiming to represent MLawyer Legal Consultation Private Limited outside the authorized payment mechanisms provided on the platform.</SubBulletPoint>
                                                <SubBulletPoint>In the event that an Advocate makes any payment to an unauthorized individual, agency, intermediary, or third party falsely claiming to represent MLawyer as a franchise, dealer, or authorized representative, the Centre shall not be responsible for any resulting loss or damage, provided such payment was not authorized, received, or facilitated by the Centre.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall not be entitled to claim reimbursement, compensation, or damages from the Centre for such unauthorized transactions.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Role of the Facilitation Centre</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Limited Role of the Centre:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre&rsquo;s role shall be strictly limited to providing and maintaining a technology-enabled platform that facilitates the receipt of consultation requests from Clients, online appointment scheduling, and video consultations between Clients and independently practicing Advocates.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall also facilitate the disbursement of the applicable consultation fees to the respective Advocates after 48 hours following the successful completion of the consultation, subject to any pending complaints, refund requests, disputes, or other applicable adjustments.</SubBulletPoint>
                                                <SubBulletPoint>Additionally, the Centre may provide basic administrative and technical support necessary to facilitate the smooth functioning of the Platform and the consultations conducted through it.</SubBulletPoint>
                                                <SubBulletPoint>The Centre does not provide legal advice, legal opinions, representation, or any other professional legal services directly to Clients. All legal consultations and professional services are provided independently by the respective Advocates in their individual professional capacity.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Advocate Profile Verification and Activation:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Once an Advocate submits their profile in MLawyer Pro mobile app, the verification and activation process is expected to take approximately 2–3 business days.</SubBulletPoint>
                                                <SubBulletPoint>However, the process may take longer depending on the completeness of the submitted information, document verification requirements, and other compliance procedures.</SubBulletPoint>
                                                <SubBulletPoint>The Centre reserves the right to verify and authenticate the Advocate&rsquo;s profile, enrolment details, and professional credentials with the Bar Council of India or the respective State Bar Council, wherever necessary.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate will be notified of their profile verification and activation status through their registered email address, SMS/text message, or in-app push notification, as applicable.</SubBulletPoint>
                                                <SubBulletPoint>As part of the applicable regulatory, KYC, banking, and payment compliance requirements, the Advocate&rsquo;s relevant profile details and supporting information may be securely shared with the Centre&rsquo;s officially partnered or authorized third-party payment gateway provider for verification, payment processing, settlement, and payout purposes, in accordance with applicable Reserve Bank of India (RBI) guidelines and other applicable laws and regulations.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Independent Professional Practice:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre does not supervise, direct, control, or influence the professional judgment, legal opinions, advice, recommendations, or conduct of any Advocate.</SubBulletPoint>
                                                <SubBulletPoint>Each Advocate shall independently exercise their professional judgment and remain responsible for the legal advice and opinions provided to Clients.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Separate Advocate–Client Relationship:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The legal consultation and any resulting advocate-client relationship are between the Client and the respective Advocate.</SubBulletPoint>
                                                <SubBulletPoint>The Centre is not a party to that professional relationship and does not assume responsibility for the substance, accuracy, adequacy, legality, or outcome of any legal advice, opinion, guidance, or professional service provided by the Advocate, subject to applicable law.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Mutual Terms of Legal Engagement:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The scope of the consultation, the nature of the legal advice or opinion sought, and the respective professional responsibilities of the Client and the Advocate shall be determined by mutual agreement between them, subject to applicable law and professional conduct rules.</SubBulletPoint>
                                                <SubBulletPoint>The Centre&rsquo;s role remains limited to facilitating the consultation through its platform and providing associated administrative and technical support.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Client–Advocate Communication and Professional Conduct</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Platform-Based Consultations:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients may browse the profiles of listed Advocates and schedule or initiate video consultations through the MLawyer application, subject to the applicable booking procedures and platform terms.</SubBulletPoint>
                                                <SubBulletPoint>Advocate listings are displayed in a systematically shuffled order to ensure fair and equal visibility, so that no particular advocate receives preferential placement or consistently appears ahead of others.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Direct and Off-Platform Communication:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates and Clients are expected to use the platform for consultations facilitated through MLawyer.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be responsible for communications, transactions, commitments, or arrangements independently initiated or conducted outside the platform, including communications relating to legal cases, disputes, additional services, or payments, except to the extent that liability cannot be excluded under applicable law.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Professional Conduct and Prohibition of Misconduct:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Every Advocate shall maintain professional decorum and strictly comply with applicable laws, regulations, and professional conduct rules.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall not engage in harassment, intimidation, coercion, unwanted personal advances, sexual harassment, sexual misconduct, discrimination, or any other inappropriate behavior towards Clients.</SubBulletPoint>
                                                <SubBulletPoint>Discrimination based on caste, religion, appearance, occupation, or any other legally protected characteristic is strictly prohibited.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate shall not engage in, display, or perform any unauthorized, inappropriate, offensive, or unethical conduct during a consultation, including, but not limited to, inappropriate hand gestures, abusive or unethical language, or displaying, sharing, or exposing Clients to obscene, sexually explicit, nude, or otherwise inappropriate photographs, videos, or content.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate shall maintain strict confidentiality of all Client information, case details, documents, discussions, and consultation records and shall not disclose, share, publish, or communicate such information to any individual, company, agency, or third party, including the Centre, without the Client&rsquo;s prior written consent or where disclosure is required by applicable law.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate shall strictly refrain from threatening, blackmailing, coercing, or intimidating any Client by demanding money, personal favours, or any other benefit, or threatening to disclose, publish, or leak the Client&rsquo;s personal information, case details, documents, or consultation discussions. Any such conduct shall constitute a serious violation of the Platform&rsquo;s policies and may result in immediate suspension or permanent removal from the Platform, without prejudice to any further legal action available to the affected Client.</SubBulletPoint>
                                                <SubBulletPoint>The same standards of professional conduct, respect, and non-discrimination shall equally apply to Clients in their interactions with Advocates. Where a Client engages in prohibited, abusive, discriminatory, threatening, or inappropriate behavior, the Advocate shall, wherever reasonably practicable, issue a verbal warning to the Client.</SubBulletPoint>
                                                <SubBulletPoint>If the Client continues such conduct despite the warning, the Advocate shall have the right to immediately terminate the consultation and submit a formal complaint through the Platform.</SubBulletPoint>
                                                <SubBulletPoint>Upon receiving a complaint, the Centre may initiate an appropriate investigation, including obtaining explanations or supporting information from the parties concerned, and take suitable action in accordance with its policies and applicable laws. Any refund, where applicable, shall be determined based on the findings of the investigation and the applicable Refund Policy.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Prohibition on Soliciting Personal Contact Details or Meetings:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Unless reasonably necessary for the legal engagement, voluntarily agreed upon by the Client, and permitted under applicable law and professional conduct rules, Advocates shall not solicit a Client&rsquo;s personal telephone number, private email address, social media details, or other personal contact information, or request in-person meetings outside the platform.</SubBulletPoint>
                                                <SubBulletPoint>Any permitted communication or meeting must remain consistent with the Client&rsquo;s consent, applicable law, and professional obligations. Advocates shall not use consultation sessions to solicit unrelated personal relationships or engage in conduct unrelated to legitimate professional purposes.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Professional Feedback and Complaints:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates shall not intimidate, threaten, or improperly pressure Clients in relation to feedback, complaints, or concerns about the Centre or its services.</SubBulletPoint>
                                                <SubBulletPoint>Nothing in this clause shall prevent an Advocate from making a legitimate complaint, raising a concern, or communicating a good-faith opinion through appropriate channels.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>App Usage & Advocate&rsquo;s Responsibilities</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Advocate Eligibility and Registration:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Every Advocate registering on the MLawyer Pro mobile app must hold a recognized law degree, possess valid Bar Council enrolment, and have a minimum of three (3) years of professional legal practice experience.</SubBulletPoint>
                                                <SubBulletPoint>The Centre reserves the right to verify the Advocate&rsquo;s qualifications, enrolment, identity, and experience before approving or continuing registration.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate must upload a recent photograph of them as their profile picture. The use of another person&rsquo;s photograph, unauthorized images, or unrelated pictures is strictly prohibited. The profile photograph will be subject to verification, and any mismatch, unrecognized, or unauthorized image may result in verification failure and rejection of the Advocate&rsquo;s profile.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Registration Information and KYC Verification:</strong> The Advocate must provide accurate, complete, and up-to-date information during registration and throughout the use of the Platform, including:
                                            <ul className="space-y-1 mt-2 ml-4">
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Full Name:</strong> First Name, Middle Name, and Last Name.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Contact Details:</strong> Registered Mobile Number and Email Address.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Professional Details:</strong> Bar Council ID / Enrolment ID / Registration Number.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Bank Account Proof:</strong> Cancelled Cheque or Bank Account Passbook in the Advocate&rsquo;s name.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">PAN Card:</strong> Clear copies of both front and back sides.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Aadhaar Card:</strong> Clear copies of both front and back sides.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Address Proof:</strong> Any one of the following documents in the Advocate&rsquo;s name: Electricity Bill, Gas Bill, Postpaid Telephone Bill, Internet Bill, or Individual Income Tax Return (ITR).</SubBulletPoint>
                                            </ul>
                                            <p className="mt-3 text-gray-700 dark:text-gray-300">
                                                The requested information and documents are required for identity verification, KYC checks, and payment processing, subjected to the designated payment gateway compliance and regulatory requirements. The Centre reserves the right to verify and authenticate the submitted information and documents. Any false, inaccurate, incomplete, or unverifiable information may result in rejection, suspension, or termination of registration.
                                            </p>
                                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                                All personal information and documents shall be handled confidentially and processed in accordance with applicable data protection laws.
                                            </p>
                                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                                Relevant verified information will be shared with the Centre&rsquo;s authorized payment gateway or payment service provider strictly to the extent necessary for KYC verification, payout processing, and compliance with applicable legal and regulatory requirements.
                                            </p>
                                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                                The Advocate shall be permitted to use the Platform only after successfully completing the verification and approval process.
                                            </p>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Independent Professional Status:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates use the Platform in their individual professional capacity as independent legal practitioners and are not employees, agents, contractors or legal representatives of the Centre.</SubBulletPoint>
                                                <SubBulletPoint>The Centre facilitates technology-enabled consultations between Clients and Advocates but does not direct or control the independent professional judgment of Advocates. Each Advocate remains responsible for the legal advice, opinions, and professional services provided to Clients.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall comply with the Advocates Act, applicable Bar Council of India Rules, professional conduct and etiquette requirements, and all other applicable laws and regulations.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Availability and Appointment Management:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates are responsible for maintaining accurate availability by updating their calendars with the relevant dates and time slots to facilitate Client appointments.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall attend all scheduled and instant consultations within five (5) minutes of the applicable start time. Failure to join within this period may result in automatic cancellation of the consultation, non-payment of the consultation fee to the Advocate, and the cancellation being recorded against the Advocate for the relevant month, in accordance with the Platform&rsquo;s applicable cancellation policy.</SubBulletPoint>
                                                <SubBulletPoint>Advocates are not permitted to reschedule confirmed consultations through the Platform.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Lawful Use and Professional Communication:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates shall use the Platform strictly for lawful purposes and maintain professional, respectful, and appropriate communication throughout all consultations.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall not use unethical, abusive, threatening, vulgar, discriminatory, defamatory, or otherwise unprofessional language. They shall maintain appropriate professional decorum and attire during video consultations.</SubBulletPoint>
                                                <SubBulletPoint>Discussions shall remain relevant to the Client&rsquo;s legal concerns. Advocates shall not engage in irrelevant, abusive, or derogatory remarks concerning Indian law, political matters, political leaders, religion, caste, or other sensitive subjects. Nothing in this clause prohibits legitimate legal analysis, professional discussion, or advice concerning such subjects where relevant to the Client&rsquo;s matter.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Confidentiality and Protection of Client Information:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates shall maintain strict confidentiality of all Client information including personal details, case-related facts, legal matters, and any other sensitive or confidential information disclosed during consultations.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall not disclose, share, transfer, publish, or otherwise make such information accessible to any third party, including other Advocates, individuals, agencies, or organizations, without the Client&rsquo;s consent.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Participation by Family Members or Other Representatives:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>If a Client who has booked and paid for a consultation is unable to attend, a family member or friend may participate on the Client&rsquo;s behalf, provided the Advocate is informed in advance and obtains consent for such participation. The Advocate reserves the right to decline or discontinue the consultation if any person participates or speaks on behalf of the Client without the Advocate&rsquo;s consent. In such cases, no refund shall be provided to the Client.</SubBulletPoint>
                                                <SubBulletPoint>However, where a Client is physically or mentally challenged and requires assistance, a family member or friend may participate in the consultation on the Client&rsquo;s behalf, provided the Advocate is informed in advance. The Advocate shall not refuse or discontinue the consultation solely because the Client requires such assistance. Any deliberate refusal or discontinuation by the Advocate without a valid reason shall be treated as an Advocate-initiated cancellation, counted towards the Advocate&rsquo;s applicable cancellation limit, and no consultation payment shall be payable to the Advocate.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Consultation Completion and Client Satisfaction Confirmation:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>At the conclusion of each consultation session, the Advocate shall confirm with the Client whether the consultation was satisfactory and whether the Client&rsquo;s queries and concerns have been adequately addressed.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate shall also seek the Client&rsquo;s confirmation that the consultation may be considered successfully completed and closed by mutual agreement.</SubBulletPoint>
                                                <SubBulletPoint>Any concerns or dissatisfaction expressed by the Client shall be addressed through the Platform&rsquo;s designated complaint and grievance redressal process, where applicable.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Prohibition of Harassment and Personal Solicitation:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates shall not engage in harassment, intimidation, coercion, unwanted personal advances, sexual harassment, sexually explicit or suggestive communication, or any other inappropriate conduct towards Clients.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall not use consultations to solicit personal, romantic, sexual, or unrelated financial relationships with Clients. They shall not unnecessarily discuss or disclose their personal life, marital status, or financial affairs, or attempt to influence Clients for personal benefit outside the legitimate scope of the consultation.</SubBulletPoint>
                                                <SubBulletPoint>Any additional communication or contact outside the Platform must be consistent with the Client&rsquo;s consent, applicable law, and professional conduct obligations.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Professional Attire and Video Consultation Requirements:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates must appear in decent, appropriate professional attire, such as a collared shirt, t-shirt (collared or round neck) or other suitable professional clothing, during video consultations.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate must keep the front-facing camera switched on and unobstructed throughout the consultation to enable the Client to see and identify the Advocate.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate shall not disable, switch off, or obstruct the camera during the session.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate may switch to the rear-facing camera only with the Client&rsquo;s prior consent and where reasonably necessary for the consultation.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall not display, share, or expose obscene, sexually explicit, vulgar, offensive, or otherwise inappropriate photographs, videos, materials, or visuals through either camera or any other consultation-sharing feature.</SubBulletPoint>
                                                <SubBulletPoint>Audio-only consultations are permitted with the prior consent of both parties. However, where technical difficulties, internet connectivity issues, device malfunctions, or other unforeseen circumstances affect video functionality, the consultation may proceed through audio only, provided the other party is informed of the circumstances. This provision applies equally to both Clients and Advocates.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Language of Consultation:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Video consultations may be conducted in Tamil, English, Telugu, Malayalam, Hindi, or any other language spoken in India, according to the mutual preference and convenience of the Client and the Advocate.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate shall communicate in the agreed language to the best of their ability and maintain professional standards throughout the consultation.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Consultation Plans and Optional Add-on Services Preferences:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Clients may independently select their preferred consultation duration, applicable tariff, and any available optional paid add-on services, including session recording and the participation of permitted third parties, such as police personnel, friends, or family members, subject to the availability and applicable platform terms.</SubBulletPoint>
                                                <SubBulletPoint>Advocates shall not recommend, influence, solicit, or otherwise encourage Clients to select any particular consultation duration, tariff, payment plan, or paid add-on service. Such selections shall remain entirely at the Client&rsquo;s discretion.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Account Non-Transferability and Deactivation</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>In the event of your unavailability, incapacity, death, or any other unforeseen circumstances (including health-related issues), no other person, including your family members, friends, or colleagues, shall be permitted to use your account or access the Platform to provide consultations to Clients on your behalf.</BulletPoint>
                                    <BulletPoint>You or your authorized family member/legal representative may notify the Centre by email, along with valid supporting documentation, requesting the suspension or deactivation of your account. Upon verification, the Centre may disable or deactivate your account from the Platform.</BulletPoint>
                                </ul>

                                <SectionHeading>Suspension and Termination for Violations</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Any violation of these Terms and Conditions, applicable laws, professional conduct rules, or Platform policies may result in appropriate action by the Centre, including a warning, temporary suspension, restriction of Platform access, or termination of the Advocate&rsquo;s account.</BulletPoint>
                                    <BulletPoint>Serious misconduct, harassment, inappropriate sexual conduct, fraudulent documentation, or other significant violations may result in immediate suspension or termination, subject to applicable law and any applicable review process.</BulletPoint>
                                    <BulletPoint>The Centre reserves the right to investigate complaints, verify relevant information, and take proportionate action in accordance with its policies and applicable legal obligations.</BulletPoint>
                                </ul>

                                <SectionHeading>Confidentiality, Client Information and Data Protection</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Professional Confidentiality:</strong> Information shared by the Client with the Advocate during a consultation shall be subject to the professional confidentiality obligations applicable to the Advocate under relevant Indian laws and professional rules.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Accuracy of Advocate Information:</strong> The Centre does not undertake to edit, modify, or alter information or details submitted by the Advocate through the application. Advocates are responsible for ensuring that their information is accurate and complete before submission. Any correction or update request, if permitted by the platform, shall be handled in accordance with the Centre&rsquo;s applicable policies and legal obligations.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Protection of Personal Information:</strong> The Centre shall take reasonable and appropriate measures to safeguard the personal information it collects and processes for platform facilitation, verification, payment administration, lawyer support, and related legitimate purposes, in accordance with applicable data-protection laws and its Privacy Policy.
                                    </BulletPoint>
                                    <BulletPoint>
                                        <strong className="text-gray-900 dark:text-white">Information Shared Between Clients and Advocates:</strong> The Centre is not responsible for independent communications or disclosures made directly between Clients and Advocates outside the Centre&rsquo;s control. However, any information collected, processed, stored, or disclosed by the Centre through the platform shall be handled in accordance with applicable law and the Centre&rsquo;s Privacy Policy.
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Consultation Plans, Payouts and Payment Policies</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Consultation Tariff and Paid Add-ons:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>
                                                    <div>
                                                        <strong className="text-gray-900 dark:text-white">Standard Consultations:</strong>
                                                        <ul className="space-y-1 mt-1 ml-4">
                                                            <SubBulletPoint>15-minute consultation: INR 599 plus applicable payment gateway charges and related GST.</SubBulletPoint>
                                                            <SubBulletPoint>30-minute consultation: INR 1,099 plus applicable payment gateway charges and related GST.</SubBulletPoint>
                                                        </ul>
                                                    </div>
                                                </SubBulletPoint>
                                                <SubBulletPoint>
                                                    <div>
                                                        <strong className="text-gray-900 dark:text-white">Paid Add-on:</strong>
                                                        <ul className="space-y-1 mt-1 ml-4">
                                                            <SubBulletPoint>Additional participants: INR 150 plus applicable payment gateway charges and related GST for including permitted participants such as police personnel, family members, friends, groups, colleagues, or other Advocates, where appropriate for the consultation.</SubBulletPoint>
                                                        </ul>
                                                    </div>
                                                </SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Consultation Recording:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Client may opt to record a consultation by paying the additional recording fee displayed on the Platform, subject to the applicable consent and privacy requirements.</SubBulletPoint>
                                                <SubBulletPoint>Access to the recording shall be restricted and not ordinarily be provided to the Advocate through the Platform. The recording fee shall be retained by the Centre, and no share of that fee shall be payable to the Advocate.</SubBulletPoint>
                                                <SubBulletPoint>The Centre may access and use recordings only for disclosed and legitimate purposes, including quality assurance, investigation of grievances or complaints, and dispute resolution, subject to applicable law, privacy requirements, and the relevant consent obtained from the participants.</SubBulletPoint>
                                                <SubBulletPoint>The Centre reserves the right to revise or modify consultation tariffs, plans, and applicable fees from time to time. Any revised tariffs or plans shall be published and communicated through the MLawyer mobile application and, where applicable, the Centre&rsquo;s official website. The revised tariffs shall apply to bookings made after the effective date of such changes.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Consultation Extensions:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>A Client may request an extension of an ongoing consultation by paying the applicable additional fee through the Platform and notifying the Advocate. Any extension shall be subject to the Advocate&rsquo;s consent and availability and shall not interfere with another scheduled consultation.</SubBulletPoint>
                                                <SubBulletPoint>Where a Client pays for a consultation extension that the Advocate declines to provide, the Centre shall verify the matter through the session recording, if available, or by contacting both parties via email or telephone. If the issue is attributable to the Client, no refund shall be provided. If attributable to the Advocate, the extension fee shall be refunded to the Client&rsquo;s original payment source, subject to applicable processing timelines.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Consultation Fee Sharing:</strong> The consultation fee payable for each completed consultation shall be apportioned as follows: 70% to the Advocate and 30% to the Centre as its platform service fee. The applicable calculation base, including the treatment of GST, payment gateway charges, and other applicable deductions, shall be disclosed in the relevant fee or payout details.
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Advocate Payouts:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Advocate&rsquo;s eligible share shall ordinarily be transferred to the designated bank account registered on the Platform within 3 to 4 calendar days, subject to successful payment settlement, verification, and applicable bank holidays and regulatory requirements.</SubBulletPoint>
                                                <SubBulletPoint>Applicable payment gateway charges and related GST (if any) shall be deducted from the Advocate&rsquo;s payout where specified in the applicable fee and payout terms. A payment receipt shall be made available in the Transaction History section of the Advocate&rsquo;s app.</SubBulletPoint>
                                                <SubBulletPoint>The Advocate is responsible for ensuring that their registered bank account details are accurate, complete, and up to date. The Centre shall not be responsible for payment delays or failures directly attributable to incorrect or incomplete details supplied by the Advocate.</SubBulletPoint>
                                                <SubBulletPoint>The Centre shall not be liable for delays caused by banking systems, payment service providers, server failures, technical disruptions, or other circumstances beyond its reasonable control, subject to applicable law.</SubBulletPoint>
                                                <SubBulletPoint>In the event of any refund arising from a Client&rsquo;s dissatisfaction, alleged misconduct, or other consultation-related concerns, the Advocate shall be notified of the refund request and the reasons for the same.</SubBulletPoint>
                                                <SubBulletPoint>
                                                    <div>
                                                        <strong className="text-gray-900 dark:text-white">Client Cancellation Terms:</strong> In the event of cancellation initiated by the Client, the following terms shall apply:
                                                        <ul className="space-y-1 mt-1 ml-4">
                                                            <SubBulletPoint><strong className="text-gray-900 dark:text-white">More than forty-eight (48) hours prior:</strong> The Centre shall retain 25% of the consultation fee and refund the remaining 75% to the Client. The Advocate shall be paid 70% of the fee retained by the Centre, subject to a deduction of payment gateway charges and applicable GST, which shall be borne by the Advocate.</SubBulletPoint>
                                                            <SubBulletPoint><strong className="text-gray-900 dark:text-white">Between twenty-four (24) to forty-eight (48) hours prior:</strong> The Centre shall retain 50% of the consultation fee and refund the remaining 50% to the Client. The Advocate shall be paid 70% of the fee retained by the Centre, subject to a deduction of payment gateway charges and applicable GST, which shall be borne by the Advocate.</SubBulletPoint>
                                                            <SubBulletPoint><strong className="text-gray-900 dark:text-white">Within twenty-four (24) hours or after scheduled time:</strong> The Centre shall retain 100% of the consultation fee, and no refund shall be provided to the Client. The Advocate shall be paid 70% of the fee retained by the Centre, subject to a deduction of payment gateway charges and applicable GST, which shall be borne by the Advocate.</SubBulletPoint>
                                                        </ul>
                                                    </div>
                                                </SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Cancellation, Non-Attendance and Payment Policy:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Advocate Cancellation or Non-Attendance:</strong> If a scheduled consultation is cancelled by the Advocate or the Advocate fails to attend the scheduled consultation, no payment shall be made to the Advocate for that consultation. Such cancellation or non-attendance shall be counted against the Advocate for the purpose of monitoring the Advocate&rsquo;s cancellation record.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Client Non-Attendance:</strong> If the Client fails to attend the scheduled consultation, despite the Advocate being available and present at the scheduled time, the Advocate shall be entitled to receive the applicable consultation payment. No refund shall be issued to the Client in such circumstances.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Mutual Non-Attendance:</strong> If neither the Client nor the Advocate attends the scheduled consultation, the full consultation amount shall be refunded to the Client. No payment shall be made to the Advocate, and such non-attendance shall not be counted as a cancellation against the Advocate.</SubBulletPoint>
                                                <SubBulletPoint><strong className="text-gray-900 dark:text-white">Failed to Join in 5 Minutes:</strong> Advocates shall attend all scheduled and instant consultations within five (5) minutes of the applicable start time. Failure to join within this period may result in automatic cancellation of the consultation, non-payment of the consultation fee to the Advocate, and the cancellation being recorded against the Advocate for the relevant month, in accordance with the Platform&rsquo;s applicable cancellation policy. Any refund due to the Client shall be processed in accordance with the applicable Client refund policy.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Prohibition on Off-Platform Payments:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates are strictly prohibited from requesting, demanding, soliciting, or accepting direct or indirect payments from Clients outside the MLawyer Platform for consultations or services arranged through the Platform. Prohibited payment methods include bank transfers, UPI, internet banking, cash, and any other payment channel outside the authorized Platform payment mechanism.</SubBulletPoint>
                                                <SubBulletPoint>The Centre will not be responsible for payments voluntarily made by the Client directly to an Advocate outside the Platform, except to the extent that liability arises under applicable law.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Fee Disputes:</strong> The Centre facilitates consultation bookings and payments through the Platform. Any dispute concerning the substance of legal services or the professional engagement shall primarily be addressed between the Client and the Advocate, as appropriate. The Centre may review payment-related complaints concerning its own platform services and take action within its role and responsibilities under applicable law.
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Advocate Cancellation, Complaints, Warnings, and Suspension Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Cancellation of Scheduled Consultations by Advocates:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>An Advocate may cancel up to two (2) scheduled consultations per calendar month without triggering the cancellation-related suspension mechanism set out in this clause.</SubBulletPoint>
                                                <SubBulletPoint>The Centre may issue in-app notifications to the Advocate regarding each cancellation. Upon the third (3rd) cancellation within the same calendar month, the Advocate&rsquo;s account shall be suspended until the applicable penalty, as determined and communicated by the Centre, is paid and the account is reactivated.</SubBulletPoint>
                                                <SubBulletPoint>During the suspension period, the Advocate shall not be permitted to accept instant consultations or publish, modify, or activate availability for new consultations. Any upcoming consultations affected by the suspension shall be cancelled automatically on a rolling basis, commencing 24 hours before their respective scheduled times, and the affected Clients shall be notified accordingly.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Repeated Cancellations and Account Termination:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Advocates are expected to honor their scheduled or instant consultations and avoid frequent or repeated cancellations that may inconvenience Clients or disrupt the proper functioning of the platform.</SubBulletPoint>
                                                <SubBulletPoint>Notwithstanding the foregoing cancellation allowance, the Centre reserves the right to suspend or terminate an Advocate&rsquo;s account in cases involving repeated or excessive cancellations, violations of these Terms and Conditions, fraudulent activity, misuse of the platform, or other conduct that materially affects Clients or the integrity of the platform. Any such action shall be taken in accordance with the Centre&rsquo;s applicable policies.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Complaints and Grievances Against Advocates:</strong> A Client may submit a complaint or grievance against an Advocate through the platform or the Centre&rsquo;s designated support channels. Grounds for complaint may include, without limitation:
                                            <ul className="space-y-1 mt-2 ml-4">
                                                <SubBulletPoint>Rude, abusive, unprofessional, harassing, or discriminatory behavior;</SubBulletPoint>
                                                <SubBulletPoint>An apparent lack of relevant knowledge or preparation concerning the legal subject matter of the consultation;</SubBulletPoint>
                                                <SubBulletPoint>Failure to maintain an appropriate professional appearance or dress standard during the consultation;</SubBulletPoint>
                                                <SubBulletPoint>Smoking, consuming alcohol, or engaging in other inappropriate activities during the consultation;</SubBulletPoint>
                                                <SubBulletPoint>Displaying an inappropriate background containing explicit, offensive, or otherwise unsuitable material; or</SubBulletPoint>
                                                <SubBulletPoint>Engaging in irrelevant, offensive, inappropriate, or otherwise unprofessional discussions during the consultation.</SubBulletPoint>
                                            </ul>
                                            <p className="mt-3 text-gray-700 dark:text-gray-300">
                                                Advocates shall have the right to raise complaints or grievances against Clients who fail to comply with the applicable policies, guidelines, or professional conduct requirements. The Quality Assurance Team shall review the session recordings, where recording has been expressly opted for by the Client, to assess the complaint and take appropriate action.
                                            </p>
                                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                                Where no session recording is available, the Quality Assurance Team shall address the matter directly with the Client, raise the relevant concerns, conduct an appropriate investigation by obtaining necessary clarifications from the parties, and issue warnings or take other appropriate action based on its findings.
                                            </p>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Investigation and Consequences of Substantiated Complaints:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre&rsquo;s designated support team shall review complaints and investigate the relevant circumstances, which may include examining available consultation records, communications, and other relevant evidence, subject to applicable law and the Centre&rsquo;s privacy and data-handling policies.</SubBulletPoint>
                                                <SubBulletPoint>Where, following such review, a complaint is found to be substantiated and the Advocate is determined to have engaged in unethical, unprofessional, or otherwise prohibited conduct, the Centre may take appropriate action in accordance with these Terms and Conditions.</SubBulletPoint>
                                                <SubBulletPoint>Where the applicable policy requires a refund due to such substantiated misconduct, the consultation fee attributable to the affected consultation shall not be payable to the Advocate, and the Client shall be eligible for a refund of the applicable consultation fee, subject to the Centre&rsquo;s refund policy and applicable law.</SubBulletPoint>
                                                <SubBulletPoint>The Centre may also issue a formal warning notification to the Advocate through the application and record the warning for the purpose of monitoring repeated violations.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Suspension Following Repeated Warnings:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>If an Advocate receives more than two (2) formal warnings within a single calendar month, meaning a third (3rd) warning during that month, the Advocate&rsquo;s account shall be suspended for fifteen (15) calendar days in accordance with this policy.</SubBulletPoint>
                                                <SubBulletPoint>During the suspension period, the Advocate shall not be permitted to accept or conduct consultations, access instant consultation requests, or activate availability for new appointments. Upcoming consultations affected by the suspension shall be cancelled automatically on a rolling basis, commencing 24 hours before their respective scheduled times, and the affected Clients shall be notified.</SubBulletPoint>
                                                <SubBulletPoint>An Advocate seeking reinstatement before the expiry of the fifteen (15)-day suspension period may request early reactivation by paying the applicable reinstatement penalty, as determined and communicated by the Centre. Early reactivation shall be subject to the Centre&rsquo;s approval and completion of any applicable reinstatement requirements.</SubBulletPoint>
                                                <SubBulletPoint>If the Advocate does not pay the applicable penalty or early reactivation is not approved, the suspension shall remain in effect for the full fifteen (15) calendar days. During this period, the Advocate may access and browse the application for permitted non-consultation purposes but shall not be permitted to provide consultations or accept new consultation appointments.</SubBulletPoint>
                                                <SubBulletPoint>The Centre reserves the right to impose further restrictions, extend its review, or terminate the Advocate&rsquo;s account in cases of repeated misconduct, serious violations, or continued non-compliance, subject to applicable law and the Centre&rsquo;s policies.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Client Complaints, Quality Assessment and Warning Procedure:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>The Centre may receive complaints from Clients against Advocates concerning consultations conducted through the Platform, including, but not limited to, the Advocate&rsquo;s domain expertise, failure or inability to understand, address, or adequately respond to the Client&rsquo;s queries, professional misconduct, inappropriate behavior, or any violation of the applicable Terms and Conditions.</SubBulletPoint>
                                                <SubBulletPoint>Upon receipt of such complaints, the Centre&rsquo;s Quality Assessment Team shall review the matter by examining the consultation recording, where available and where recording has been expressly opted for by the Client, and/or by communicating with the concerned Client and Advocate to obtain their respective explanations and assess the circumstances of the complaint.</SubBulletPoint>
                                                <SubBulletPoint>Based on the findings of such assessment, the Centre shall determine whether the complaint is attributable to the Advocate or the Client or arises from other circumstances. Where the fault, misconduct, or violation is reasonably established to be attributable to the Advocate, the Centre may issue an appropriate warning to the Advocate and take further action in accordance with the Platform&rsquo;s applicable policies and Terms and Conditions.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Suspension and Termination of Facilitation Services</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre reserves the right to refuse, suspend, restrict, or terminate access to its facilitation services or the MLawyer platform, where reasonably necessary, in accordance with its Terms and Conditions and applicable law. Such action may be taken in cases involving suspected misuse, fraudulent activity, and violation of platform policies, unlawful conduct, security concerns, or other legitimate operational or compliance reasons. Where appropriate and legally permissible, the Centre may provide notice and an opportunity to address the concern.</BulletPoint>
                                    <BulletPoint>Suspension or termination of facilitation services shall not, by itself, terminate or invalidate any separate agreement or professional relationship between the Client and the Advocate. Any rights, obligations, or liabilities arising from such an independent agreement shall remain subject to its terms and applicable law.</BulletPoint>
                                    <BulletPoint>Termination shall not affect any accrued rights, pending refund obligations, unresolved complaints, or other responsibilities that survive termination under these Terms and Conditions or applicable law.</BulletPoint>
                                </ul>

                                <SectionHeading>Governing Jurisdiction and Dispute Resolution</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Disputes Relating to Facilitation Services:</strong> Any dispute arising out of or relating to the facilitation services provided by the Centre or the use of the MLawyer platform shall be governed by applicable Indian law and shall be subject to the jurisdiction of the competent courts in Chennai.
                                        </div>
                                    </BulletPoint>
                                    <BulletPoint>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">Disputes between Clients and Advocates:</strong>
                                            <ul className="space-y-2 mt-2 ml-4">
                                                <SubBulletPoint>Disputes arising directly between a Client and an Advocate concerning legal advice, consultation, professional conduct, or any independent professional engagement shall ordinarily be addressed between the concerned parties through the appropriate legal or professional channels.</SubBulletPoint>
                                                <SubBulletPoint>The Centre acts as a technology-enabled intermediary and does not assume responsibility for resolving disputes arising from the independent professional relationship between a Client and an Advocate. However, the Centre may review complaints relating to platform use, facilitate communication, or take appropriate action under its Terms and Conditions were warranted.</SubBulletPoint>
                                                <SubBulletPoint>Nothing in this clause shall prevent a Client or Advocate from exercising any statutory rights or pursuing remedies before a competent court, regulatory authority, or professional body, as applicable.</SubBulletPoint>
                                            </ul>
                                        </div>
                                    </BulletPoint>
                                </ul>

                                <SectionHeading>Amendments to Terms and Conditions</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre reserves the right to amend, update, or modify these Terms and Conditions from time to time to reflect changes in its services, operational practices, platform features, or applicable laws and regulations.</BulletPoint>
                                    <BulletPoint>Any revised Terms and Conditions shall become effective upon publication on the MLawyer application or official website, or upon communication to users through appropriate means, as applicable. Where required by law, the Centre shall provide prior notice or obtain the user&rsquo;s consent before implementing such changes.</BulletPoint>
                                    <BulletPoint>Users are responsible for reviewing the updated Terms and Conditions periodically. Continued use of the MLawyer platform after the revised Terms and Conditions become effective shall constitute acceptance of the changes, to the extent permitted by applicable law.</BulletPoint>
                                    <BulletPoint>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Subject to applicable law, any dispute arising out of or in connection with these Terms or the use of the MLawyer platform shall be subject to the jurisdiction of the competent courts in Chennai.</BulletPoint>
                                    <BulletPoint>If a user does not agree to the revised Terms and Conditions, the user may discontinue use of the platform, subject to any outstanding obligations and applicable legal requirements.</BulletPoint>
                                </ul>

                                <SectionHeading>Breach of Terms and Conditions</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre shall not be responsible for any breach or violation of these Terms and Conditions by a Client, Advocate, or any other party, except to the extent that liability cannot be excluded under applicable law. Each party shall remain responsible for its own acts, omissions, and compliance with applicable laws and obligations.</BulletPoint>
                                    <BulletPoint>In the event of an actual or suspected breach of these Terms and Conditions, the Facilitation Centre reserves the right to investigate the matter and take appropriate action against the responsible Client or other user, in accordance with its policies and applicable law. Such action may include issuing a warning, restricting access to specific features, suspending or terminating the account, cancelling bookings, or taking other lawful measures, as appropriate to the nature and severity of the violation.</BulletPoint>
                                </ul>

                                <SectionHeading>Acknowledgement and Acceptance</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        By accessing or using the MLawyer Application or availing the services of the Facilitation Centre, I, <span className="font-semibold underline">________________</span>, acknowledge that I have read, understood, and agreed to be bound by these Terms and Conditions, including all applicable policies, rules, and guidelines prescribed by MLawyer Legal Consultation Private Limited (CIN: U69100TN2025PTC186650), and undertake to comply with them, as amended from time to time.
                                    </BulletPoint>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;
