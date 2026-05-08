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
            <span>{children}</span>
        </li>
    );

    const SubBulletPoint = ({ children }) => (
        <li className="flex gap-3 mb-2 ml-6 text-gray-700 dark:text-gray-300">
            <span className="text-primary/70 dark:text-secondary/70 font-bold shrink-0">-</span>
            <span>{children}</span>
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
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Legal Facilitation Centre</h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        These Terms and Conditions ("Terms") govern the use of services provided by MLawyer Legal Consultation Private Limited referred or addressed as "Facilitation Centre", "Centre", "We", "Us" or "Our". By accessing or using the services of the Facilitation Centre, the "Customer", "Individual" or "User" referred or addressed as "Client", "You" agrees to be bound by these Terms.
                                    </p>
                                </div>

                                <SectionHeading>Nature of Services</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre acts solely as a facilitator to connect Clients with independent Advocates for legal consultation and/or opinion only.</BulletPoint>
                                    <BulletPoint>The Centre does not provide legal advice or guidance or legal opinions, nor does it employ or engage advocates to represent clients' cases in courts across the state or the country.</BulletPoint>
                                    <BulletPoint>All legal consultations and opinions are provided exclusively by the concerned advocates, who practice independently.</BulletPoint>
                                    <BulletPoint>The Centre shall not be held responsible or liable for any direct or indirect consequences, losses, or damages arising from the legal opinions and consultations provided by the Advocates.</BulletPoint>
                                </ul>

                                <SectionHeading>Role of the Facilitation Centre</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        The Centre's role is limited to:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>Receiving consultation requests from Clients, facilitating online appointments, video consultations between Clients and Advocates, providing basic administrative and online support for consultations.</SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>The Centre does not supervise, control, or influence the professional judgment or conduct of any Advocate.</BulletPoint>
                                    <BulletPoint>The Centre does not recruit any in-house lawyers or advocates for providing legal opinions to clients, nor does it represent clients in any legal matters or cases in courts across the state and country.</BulletPoint>
                                    <BulletPoint>For every consultation, the Centre collects the fee upfront and enables the Client to use the platform only for video consultation with the Advocate.</BulletPoint>
                                    <BulletPoint>The Facilitation Centre is not a party to such relationship and bears no responsibility for the advice, guidance, opinions or services rendered by the Advocate(s).</BulletPoint>
                                    <BulletPoint>The terms of engagement, scope of work and responsibilities relating to the legal consultation/opinion shall be mutually agreed upon between the Client and the Advocate.</BulletPoint>
                                </ul>

                                <SectionHeading>Advocate-Client Relationship</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Clients can browse through the list of Advocates and initiate video consultations via the app. The Centre shall not be responsible for any direct or off-platform communication between the Client and the Advocate, including but not limited to matters relating to cases, disputes, or payments.</BulletPoint>
                                    <BulletPoint>The client must not attempt to influence the advocate personally or engage in any form of inappropriate or sexual conduct. The client must also not discriminate against the advocate based on caste, religion, appearance, or professional expertise.</BulletPoint>
                                    <BulletPoint>The Client shall refrain from engaging in discussions with the Advocate that are defamatory, discriminatory, or inappropriate in nature, including but not limited to criticism or derogatory remarks relating to Indian law, political matters (domestic or international) and political leaders.</BulletPoint>
                                    <BulletPoint>The client must not request direct meetings with the advocate, ask for personal phone numbers, email address, social media profiles or make complaints or comments about the Facilitation Centre during the consultation.</BulletPoint>
                                    <BulletPoint>The Facilitation Centre shall not be responsible for any direct or indirect communication between the Client and the Advocate and shall not be held liable for any loss, damage, or consequences arising from such communication.</BulletPoint>
                                </ul>

                                <SectionHeading>App Usage & Client's Responsibilities</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Clients must be 18 years or older to use the application and consult advocates for legal opinions or guidance.</BulletPoint>
                                    <BulletPoint>The Client agrees to provide accurate information while using the platform.</BulletPoint>
                                    <BulletPoint>The Client shall use the services strictly for lawful, legal guidance/opinion purposes.</BulletPoint>
                                    <BulletPoint>The Client shall adhere to professional communication standards and comply with all applicable laws and regulations.</BulletPoint>
                                    <BulletPoint>The Client agrees to refrain from using any unethical or unprofessional language and to maintain appropriate decorum, including a decent dress code, during video consultations with Advocates.</BulletPoint>
                                    <BulletPoint>During the consultation, the client may choose to turn off their video and continue with voice communication by enabling the microphone, provided the advocate is informed in advance.</BulletPoint>
                                    <BulletPoint>Video consultations may be conducted in Tamil, English, or Hindi, based on the mutual preference and convenience of the Client and the Advocate.</BulletPoint>
                                    <BulletPoint>Clients may select a suitable plan or tariff, including optional add-on paid services such as session recordings. Where opted for, such recordings may be utilized by the Centre for the purpose of reviewing and resolving grievances rose by the Client, and for taking appropriate action as deemed necessary.</BulletPoint>
                                    <BulletPoint>Session recordings will be available in the Client's consultation history dashboard for reviewing the discussion held with the Advocate. These recordings will be automatically deleted after 7 calendar days. The platform may provide an option for Clients to download the recordings to their device for future reference.</BulletPoint>
                                    <BulletPoint>Session recordings may be securely retained by the platform for quality assurance. They will not be shared with clients and will only be used for grievance review and resolution.</BulletPoint>
                                    <BulletPoint>If the client opts for consultation with paid add-on services such as inclusion of police, friends, or family, the client must inform the advocate during the video consultation. The advocate will verify the details on their screen, and if no such add-on service is reflected, the advocate reserves the right to refuse the consultation.</BulletPoint>
                                    <BulletPoint>The client may request an extension of an ongoing consultation by paying the applicable additional fee and notifying the Advocate. Such extension shall be subject to the Advocate's availability and approval, provided they are not occupied with another scheduled consultation.</BulletPoint>
                                </ul>

                                <SectionHeading>Confidentiality</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Information shared by the Client with the Advocate is governed by professional confidentiality obligations under applicable law.</BulletPoint>
                                    <BulletPoint>The Centre does not have the provision to edit or alter any details provided by Clients on the app, and no changes will be made even if requested by the Client.</BulletPoint>
                                    <BulletPoint>The Centre shall take reasonable steps to protect basic personal information collected for facilitation purposes but shall not be liable for any disclosures made directly between the Client and Advocate, whether through the app or outside the app.</BulletPoint>
                                </ul>

                                <SectionHeading>Fees and Payments</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Consultation or facilitation fees, if any, charged by the Centre are strictly for facilitation and administrative/online services.</BulletPoint>
                                    <BulletPoint>Clients shall make payment of the applicable consultation fee in advance in order to engage with an Advocate. The fee structure is transparently provided on the platform, and Clients are responsible for selecting an appropriate plan.</BulletPoint>
                                    <BulletPoint>The fee includes consultation charges, payment gateway fees, and applicable GST. A notification will be sent through the app, enabling the Client to download the payment receipt from the Transaction History section.</BulletPoint>
                                    <BulletPoint>All payment transactions, including consultation fees, paid add-ons, refunds, and additions or withdrawals from 'My Balance', are securely processed through a third-party payment gateway provider. A transaction fee of 2% plus applicable GST will be charged on all transactions.</BulletPoint>
                                    <BulletPoint>The Centre shall not be responsible for any fee and consultation disputes between the Clients and the Advocates.</BulletPoint>
                                    <BulletPoint>The Client is strictly prohibited from making any direct or indirect payments to the Advocate via bank transfer, UPI, internet banking, or any other payment method outside the platform. The Centre disclaims all responsibility and liability for any such payments made directly to the Advocate.</BulletPoint>
                                    <BulletPoint>Advocates are strictly prohibited from requesting or accepting any payments from Clients outside the platform. In the event of such instances, Clients may report or lodge a grievance through the platform's grievance section. The Centre will review the matter and take appropriate action.</BulletPoint>
                                    <BulletPoint>The Centre does not have any partnerships with individuals, agencies, or franchises. Clients are strictly requested not to make any payments to any person or entity claiming to represent MLawyer Legal Consultation Private Limited.</BulletPoint>
                                    <BulletPoint>Clients may deposit a minimum amount (up to INR 5,000) into their 'My Balance' account maintained on the platform. Such balance may be used towards payment for consultations with Advocates and may also be withdrawn to the designated bank account.</BulletPoint>
                                </ul>

                                <SectionHeading>Refund Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>All consultation fees are strictly non-refundable under all circumstances, including where the client fails to attend the consultation, failed to join the consultation within the allotted 5-minute waiting period, the consultation extension was paid for without obtaining the advocate's consent, the consultation is deemed unsatisfactory, technical issues occur such as internet connectivity problems, audio/video disruptions, or device-related limitations.</BulletPoint>
                                    <BulletPoint>Refunds of consultation fees may be granted in limited circumstances, including where the advocate does not attend the scheduled consultation, cancellation of the consultation within the defined timeline, or where the services rendered are found to be unprofessional. Any such claims will be subject to verification based on session recordings, provided the client has opted for recording upon payment of the applicable fee.</BulletPoint>
                                    <BulletPoint>Approved refunds of consultation fees shall be credited to the Client's "My Balance" account. The credited amount may be used for future consultations or the Client can withdraw funds to their designated bank account, as provided and verified in their profile.</BulletPoint>
                                    <BulletPoint>Clients must verify their bank account and UPI ID details. Refunds will be credited only to the details provided, and the Centre is not responsible for any incorrect information submitted.</BulletPoint>
                                </ul>

                                <SectionHeading>Consultation Cancelation Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Clients do not have the option to reschedule a scheduled consultation.</BulletPoint>
                                    <BulletPoint>
                                        Cancellation requests are subject to the following refund policy:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>Cancellation made more than 48 hours prior to the scheduled consultation: 75% refund</SubBulletPoint>
                                            <SubBulletPoint>Cancellation made between 24 to 48 hours prior to the scheduled consultation: 50% refund</SubBulletPoint>
                                            <SubBulletPoint>Cancellation made within 24 hours of the scheduled consultation or after the scheduled time: No refund</SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>Any applicable refund amount shall be credited to the Client's "My Balance" account.</BulletPoint>
                                    <BulletPoint>Clients are expected to avoid frequent or repeated cancellations of scheduled consultations, as this may disrupt the availability and expectations of Advocates. The Centre reserves the right to suspend or terminate a Client's account in cases of excessive cancellations, unprofessional behavior, violation of the Centre's Terms and Conditions, or misuse of the platform.</BulletPoint>
                                </ul>

                                <SectionHeading>Limitation of Liability</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        The Facilitation Centre shall not be liable for any loss, damage, cost, or expense arising out of:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>Legal opinion or consultation provided by an Advocate</SubBulletPoint>
                                            <SubBulletPoint>Acts, omissions, or negligence of the Advocate</SubBulletPoint>
                                            <SubBulletPoint>Decisions taken by the Client based on such advice</SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>The Centre's liability, if any, shall be limited to the facilitation fee paid to the Centre.</BulletPoint>
                                </ul>

                                <SectionHeading>Grievances & Support</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Client may raise complaints regarding the Advocate's consultation or conduct. The Centre's designated legal advisors will examine the matter, irrespective of whether session recording has been opted for, and conduct an investigation with the concerned Advocate for resolution. The Centre cannot guarantee the resolution or timeline for resolution. If the issue is resolved, the Centre shall communicate the resolution to the Client along with the corresponding complaint ID.</BulletPoint>
                                    <BulletPoint>If the Client has opted for session recording by paying an additional fee, it will be easier for the Centre to investigate the issue and take appropriate action.</BulletPoint>
                                    <BulletPoint>Clients may raise app-related issues such as performance, OTP, or login problems. Our team will review and assist in resolving them at the earliest. Clients may also email their concerns to the address mentioned on the official website (www.mlawyer.in)</BulletPoint>
                                </ul>

                                <SectionHeading>No Guarantee or Warranty</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        The Centre does not guarantee:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>The accuracy or outcome of legal opinion given by the Advocates</SubBulletPoint>
                                            <SubBulletPoint>The competence, success, or performance of any Advocate</SubBulletPoint>
                                            <SubBulletPoint>Any specific result in legal proceedings</SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>Legal matters are subject to judicial discretion and applicable laws.</BulletPoint>
                                </ul>

                                <SectionHeading>Termination of Services</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Centre reserves the right to refuse or terminate facilitation services at its discretion without assigning reasons.</BulletPoint>
                                    <BulletPoint>Termination of facilitation shall not affect any independent agreement between the Client and the Advocate.</BulletPoint>
                                </ul>

                                <SectionHeading>Dispute Resolution</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Any dispute relating to facilitation services shall be subject to the jurisdiction of the competent courts where the Facilitation Centre is located.</BulletPoint>
                                    <BulletPoint>Disputes between Client and Advocate will be resolved independently without involving the Centre.</BulletPoint>
                                </ul>

                                <SectionHeading>Governing Law</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>These Terms shall be governed by and construed in accordance with the laws of India.</BulletPoint>
                                </ul>

                                <SectionHeading>Amendments</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre reserves the right to modify these Terms & Conditions at any time. Updated Terms & Conditions shall be effective upon display or communication.</BulletPoint>
                                </ul>

                                <SectionHeading>Acceptance</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre shall not be responsible for any breach or violation of the above conditions by any party. In the event of such breach or violation, the Facilitation Centre reserves the right to take appropriate measures or actions against the Client(s) responsible, in accordance with its policies and applicable laws.</BulletPoint>
                                    <BulletPoint>By availing the services of the Legal Facilitation Centre, the Client acknowledges that they have read, understood, and agreed to these Terms and Conditions.</BulletPoint>
                                </ul>
                            </div>
                        )}

                        {/* ADVOCATES TAB */}
                        {activeTab === 'advocates' && (
                            <div>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Legal Facilitation Centre</h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        These Terms and Conditions ("Terms") govern the use of services provided by MLawyer Legal Consultation Private Limited referred or addressed as "Facilitation Centre", "Centre", "We", "Us" or "Our". By accessing or using the services of the Facilitation Centre, the Advocate/ Lawyer ("Advocate", "Lawyer", "You") agrees to be bound by these Terms.
                                    </p>
                                </div>

                                <SectionHeading>Nature of Services</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre acts solely as a facilitator to connect Clients with independent Advocates for legal consultation and/or opinion only.</BulletPoint>
                                    <BulletPoint>The Centre does not provide legal advice or guidance or legal opinions, nor does it employ or engage advocates to represent Clients' cases in courts across the state or the country.</BulletPoint>
                                    <BulletPoint>All legal consultations and opinions are provided exclusively by the concerned Advocates, who practice independently.</BulletPoint>
                                    <BulletPoint>The Centre shall not be held responsible or liable for any direct or indirect consequences, losses, or damages arising from the legal opinions and consultations provided by the Advocates.</BulletPoint>
                                </ul>

                                <SectionHeading>Role of the Facilitation Centre</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        The Centre's role is limited to:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>Receiving consultation requests from Clients, facilitating online appointments, video consultations between Clients and Advocates, providing basic administrative and online support for consultations.</SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>The Centre does not supervise, control, or influence the professional judgment or conduct of any Advocate.</BulletPoint>
                                    <BulletPoint>The Centre does not recruit any in-house lawyers or advocates for providing legal opinions to clients, nor does it represent clients in any legal matters or cases in courts across the state and country.</BulletPoint>
                                    <BulletPoint>For every consultation, the Centre collects the fee upfront and enables the Client to use the platform only for video consultation with the Advocate.</BulletPoint>
                                    <BulletPoint>The Facilitation Centre is not a party to such relationship and bears no responsibility for the advice, guidance, opinions or services rendered by the Advocate(s).</BulletPoint>
                                    <BulletPoint>The terms of engagement, scope of work and responsibilities relating to the legal consultation/opinion shall be mutually agreed upon between the Client and the Advocate.</BulletPoint>
                                </ul>

                                <SectionHeading>Advocate-Client Relationship</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Clients can browse through the list of Advocates and initiate video consultations via the app. The Centre shall not be responsible for any direct or off-platform communication between the Advocate and the Client, including but not limited to matters relating to cases, disputes, or payments.</BulletPoint>
                                    <BulletPoint>The Advocates must not attempt to influence the Client personally or engage in any form of inappropriate or sexual conduct. The Advocate must also not discriminate against the Client based on caste, religion, appearance, or their profession.</BulletPoint>
                                    <BulletPoint>The Advocate must not request direct meetings with the Client, ask for personal phone numbers, email address, social media profiles or make complaints or comments about the Facilitation Centre during the consultation.</BulletPoint>
                                    <BulletPoint>The Facilitation Centre shall not be responsible for any direct or indirect communication between the Advocate and the Client and shall not be held liable for any loss, damage, or consequences arising from such communication.</BulletPoint>
                                </ul>

                                <SectionHeading>App Usage & Advocate's Responsibilities</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Advocate agrees to provide accurate, complete, and up-to-date information, including their Enrolment Number and Bar Council ID, while registering and using the platform.</BulletPoint>
                                    <BulletPoint>All information furnished by the Advocate shall be treated as confidential, and the Centre will undertake a verification process to authenticate the details provided.</BulletPoint>
                                    <BulletPoint>Any incorrect, false, or unverifiable information shall result in rejection of the registration.</BulletPoint>
                                    <BulletPoint>The Advocate shall be permitted to use the platform only upon successful completion of the verification process.</BulletPoint>
                                    <BulletPoint>No registration or sign-up fee is charged for using the platform.</BulletPoint>
                                    <BulletPoint>The Centre does not operate any franchise and is not affiliated with any third-party company or agency. The Centre shall not be responsible for any payments, communications, or disputes between the Advocate and any unauthorized or unrelated third-party individual or entity.</BulletPoint>
                                    <BulletPoint>Advocates are responsible for updating their availability by setting dates and time slots in the calendar to facilitate Client appointments.</BulletPoint>
                                    <BulletPoint>The Advocate shall use the services strictly for lawful purposes.</BulletPoint>
                                    <BulletPoint>The Advocate is responsible for complying with the Advocates Act, Bar Council Rules, and applicable professional standards.</BulletPoint>
                                    <BulletPoint>Advocate act in their individual professional capacity and not as agents or employees of the Centre.</BulletPoint>
                                    <BulletPoint>The Advocate shall adhere to professional communication standards and comply with all applicable laws and regulations.</BulletPoint>
                                    <BulletPoint>The Advocate agrees to refrain from using any unethical or unprofessional language and to maintain appropriate decorum, including a decent dress code, during video consultations with Clients.</BulletPoint>
                                    <BulletPoint>The Advocate shall refrain from engaging in discussions with the Client that are defamatory, discriminatory, or inappropriate in nature, including but not limited to criticism or derogatory remarks relating to Indian law, political matters (domestic or international), political leaders, religion, or caste.</BulletPoint>
                                    <BulletPoint>The Advocate shall not engage in any form of harassment, abusive conduct, or sexually explicit or suggestive communication with the Client.</BulletPoint>
                                    <BulletPoint>The Advocate must be properly dressed in professional attire, such as a shirt or T-shirt and trousers, during the video consultation with the Client. The Advocate shall not discuss, disclose, or make any statements relating to their personal life, marital status, or financial matters during the consultation. Furthermore, the Advocate shall refrain from engaging in any communication or conduct that may directly or indirectly approach, solicit, influence, or otherwise attempt to establish a personal or financial relationship with the Client outside the scope of the consultation.</BulletPoint>
                                    <BulletPoint>The Advocate shall attend all video consultations with their camera turned on to ensure that the Client can clearly see and identify them during the consultation. The Advocate will not be able to disable, turn off, or obstruct their front-facing camera during the consultation session.</BulletPoint>
                                    <BulletPoint>The Advocate may switch from the front-facing camera to the rear-facing (back) camera only with the prior consent or approval of the Client, and solely for purposes relevant to the consultation.</BulletPoint>
                                    <BulletPoint>The Advocate shall ensure that no inappropriate, offensive, or unprofessional content is displayed during the consultation. Under no circumstances shall the Advocate display, share, or expose any sensitive, obscene, explicit, vulgar, or otherwise inappropriate photos, videos, materials, or visuals through either the front or rear camera during the consultation.</BulletPoint>
                                    <BulletPoint>Any violation of the above may result in immediate suspension or termination of the Advocate's account by the Centre.</BulletPoint>
                                    <BulletPoint>Video consultations may be conducted in Tamil, English, or Hindi, based on the mutual preference and convenience of the Client and the Advocate.</BulletPoint>
                                    <BulletPoint>Advocates do not have the option to reschedule a scheduled consultation.</BulletPoint>
                                    <BulletPoint>The advocate must join instant or scheduled consultations within 5 minutes of the start time. In the event of failure to do so, the consultation will be automatically cancelled, no fee will be paid and it will be counted as a cancellation on the Advocate's record for the month.</BulletPoint>
                                </ul>

                                <SectionHeading>Confidentiality</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Information shared by the Advocate is governed by professional confidentiality obligations under applicable law.</BulletPoint>
                                    <BulletPoint>The advocate shall maintain strict confidentiality of all information provided by the client during the video consultation and shall not disclose such information to any individual or entity under any circumstances. Any breach of this obligation may result in suspension of the advocate's account until further notice.</BulletPoint>
                                    <BulletPoint>The Centre shall take reasonable steps to protect basic personal information collected for facilitation purposes but shall not be liable for disclosures made directly between Advocate and Client.</BulletPoint>
                                </ul>

                                <SectionHeading>Fees and Payments</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The consultation fee paid by the Client shall be apportioned such that 70% is payable to the Advocate, and the remaining 30% shall be retained by the Centre as a platform service fee.</BulletPoint>
                                    <BulletPoint>The consultation fee of 70% will be transferred to the Advocate's designated bank account within 24 hours to 48 hours, as provided in their profile section.</BulletPoint>
                                    <BulletPoint>The Centre shall not be responsible for any delay in or failure of payment to the Advocate arising from incorrect or incomplete bank account details provided by the Advocate.</BulletPoint>
                                    <BulletPoint>The Centre disclaims all liability for any delay in payments to the Advocate caused by unforeseen circumstances, banking system delays, server issues, or any other technical disruptions beyond its control.</BulletPoint>
                                    <BulletPoint>
                                        Tariff Details:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>
                                                Consultation:
                                                <ul className="space-y-1 mt-2 ml-4">
                                                    <SubBulletPoint>15-min Consultation: INR 550 + 18% GST + Payment gateway and applicable GST will be added</SubBulletPoint>
                                                    <SubBulletPoint>30-min Consultation: INR 900 + 18% GST+ Payment gateway and applicable GST will be added</SubBulletPoint>
                                                </ul>
                                            </SubBulletPoint>
                                            <SubBulletPoint>
                                                Paid Add-ons:
                                                <ul className="space-y-1 mt-2 ml-4">
                                                    <SubBulletPoint>Consultation including Police or Family or Friends, Group or Colleagues or Advocate(s): INR 100 + 18% GST + + Payment gateway and applicable GST will be added</SubBulletPoint>
                                                </ul>
                                            </SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>The Client may choose to record the consultation session upon payment of an additional fee. Access to the recording shall be limited to the Client and will not be shared with the Advocate. The fee for session recording shall not be payable to the Advocate. The Centre may use such recordings solely for quality assurance and for the review and resolution of any grievances or complaints raised by the client.</BulletPoint>
                                    <BulletPoint>70% of the consultation fee, as per the invoice, shall be transferred to the advocate's designated bank account, subject to deduction of payment gateway charges along with applicable GST. A payment voucher/receipt will be issued to the advocate via the app in the Transaction History section.</BulletPoint>
                                    <BulletPoint>The Centre shall not be responsible for any fee disputes between the Advocate and the Client. The Client may request an extension of an ongoing consultation by paying the applicable additional fee and notifying the Advocate. Such extension shall be subject to the Advocate's availability and approval, provided they are not occupied with another scheduled consultation.</BulletPoint>
                                    <BulletPoint>If the Advocate fails to attend a scheduled Client consultation, no payment shall be made, and the instance shall be treated as a cancellation.</BulletPoint>
                                    <BulletPoint>The Advocate is strictly prohibited from demanding or requesting any direct or indirect payments from the Client via bank transfer, UPI, internet banking, or any other payment method outside the platform. The Centre disclaims all responsibility and liability for any such payments made directly by the Client to the Advocate.</BulletPoint>
                                    <BulletPoint>Advocates are strictly prohibited requesting or accepting any payments from the Clients outside the platform. In the event of such instances, Client may report or lodge a grievance through the platform's grievance section. The Centre will review the matter and take appropriate action.</BulletPoint>
                                </ul>

                                <SectionHeading>Cancelation, Account Suspension & Termination Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Advocates are permitted to cancel up to two (2) scheduled appointments with Clients per calendar month.</BulletPoint>
                                    <BulletPoint>The platform shall issue notifications to the advocate in the event of cancellations. Upon exceeding two (2) cancellations (i.e., on the third cancellation), the advocate's account shall be suspended until the applicable penalty is paid. During the suspension period, the advocate shall not be permitted to access instant consultations or schedule availability, and all upcoming consultations shall be automatically cancelled on a rolling 24-hour basis.</BulletPoint>
                                    <BulletPoint>Advocates are expected to avoid frequent or repeated cancellations of scheduled consultations, as this may disrupt the expectations of Clients. The Centre reserves the right to suspend or terminate Advocate's account in cases of excessive cancellations, violation of the Centre's Terms and Conditions, or misuse of the platform.</BulletPoint>
                                    <BulletPoint>As per the Centre's policy, the Client may raise a complaint or grievance against the Advocate in situations including, but not limited to, rude, unprofessional, or discriminatory behavior; lack of sufficient domain knowledge; failure to maintain appropriate dress code; engaging in activities such as smoking or consuming alcohol during the consultation; inappropriate backgrounds (including explicit or offensive content); or engaging in inappropriate discussions.</BulletPoint>
                                    <BulletPoint>All such complaints will be thoroughly investigated by the Centre's support team. If the advocate is found to have engaged in unethical conduct, no consultation fee shall be paid to the Advocate, and the fee will be refunded to the Client. A warning notification will also be issued to the Advocate via the app.</BulletPoint>
                                    <BulletPoint>Upon exceeding two (2) warnings within a month, the Advocate's account shall be suspended for a period of 15 calendar days, and all upcoming consultations shall be automatically cancelled on a rolling 24-hour basis.</BulletPoint>
                                    <BulletPoint>If the advocate wishes to resume consultations before the suspension period ends, a penalty fee, as determined by the Centre, must be paid to reactivate the account. If the advocate chooses not to pay the penalty, the suspension will remain in effect for the full 15 calendar days, during which the advocate will not be able to consult clients but may continue to access and explore the application.</BulletPoint>
                                </ul>

                                <SectionHeading>Grievance Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>In the event an Advocate receives frequent complaints from Clients, the Centre shall initiate a detailed investigation through its support team and reserves the right to suspend the Advocate's account until further notice, based on the outcome of such investigation.</BulletPoint>
                                    <BulletPoint>An Advocate may file a complaint against a Client in cases where the Client fails to maintain decorum, uses abusive or profane language, engages in criticism or discriminatory behavior, or violates the Centre's Terms and Conditions.</BulletPoint>
                                    <BulletPoint>The Centre will review such complaints and cannot guarantee the resolution or timeline for resolution. If the issue is resolved, the Centre shall communicate the resolution to the Advocate along with the corresponding complaint ID.</BulletPoint>
                                    <BulletPoint>Advocates may raise support requests related to app usage, consultations, payments, or other services. The Centre will respond to such queries within three (3) to four (4) business days; however, response times may vary depending on the nature and complexity of the request.</BulletPoint>
                                </ul>

                                <SectionHeading>Refund Policy</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Refunds shall be applicable only in cases where the Advocate does not cancel or miss the scheduled Client consultation.</BulletPoint>
                                    <BulletPoint>
                                        In the event of cancellation initiated by the Client, the following terms shall apply:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>More than forty-eight (48) hours prior to the scheduled consultation: The Centre shall retain 25% of the consultation fee and refund the remaining 75% to the Client. The Advocate shall be paid 70% of the fee retained by the Centre, subject to a deduction of payment gateway charges and applicable GST, which shall be borne by the Advocate.</SubBulletPoint>
                                            <SubBulletPoint>Between twenty-four (24) to forty-eight (48) hours prior to the scheduled consultation: The Centre shall retain 50% of the consultation fee and refund the remaining 50% to the Client. The Advocate shall be paid 70% of the fee retained by the Centre, subject to a deduction of payment gateway charges and applicable GST, which shall be borne by the Advocate.</SubBulletPoint>
                                            <SubBulletPoint>Within twenty-four (24) hours of the scheduled consultation or after the scheduled time: The Centre shall retain 100% of the consultation fee, and no refund shall be provided to the Client. The Advocate shall be paid 70% of the fee retained by the Centre, subject to a deduction of payment gateway charges and applicable GST, which shall be borne by the Advocate.</SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>In the event that a scheduled consultation is cancelled or not attended by the advocate, no payment shall be made to the advocate for such consultation, and the cancellation will be counted.</BulletPoint>
                                    <BulletPoint>Any amount payable to the Advocate shall be credited to the Advocate's designated bank account as provided and verified in their profile on the platform.</BulletPoint>
                                </ul>

                                <SectionHeading>No Guarantee or Warranty</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        The Centre does not guarantee:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>The accuracy or outcome of legal advice</SubBulletPoint>
                                            <SubBulletPoint>The competence, success, or performance of any Advocate</SubBulletPoint>
                                            <SubBulletPoint>Any specific result in legal proceedings</SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>Legal matters are subject to judicial discretion and applicable laws.</BulletPoint>
                                </ul>

                                <SectionHeading>Limitation of Liability</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>
                                        The Facilitation Centre shall not be liable for any loss, damage, cost, or expense arising out of:
                                        <ul className="space-y-2 mt-2 ml-4">
                                            <SubBulletPoint>Legal opinion or consultation provided by the Advocate</SubBulletPoint>
                                            <SubBulletPoint>Acts, omissions, or negligence of the Advocate</SubBulletPoint>
                                            <SubBulletPoint>Decisions taken by the Advocate based on such advice</SubBulletPoint>
                                        </ul>
                                    </BulletPoint>
                                    <BulletPoint>The Centre's liability, if any, shall be limited to the facilitation fee paid to the Centre.</BulletPoint>
                                </ul>

                                <SectionHeading>Termination of Services</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Centre reserves the right to refuse or terminate facilitation services at its discretion without assigning reasons.</BulletPoint>
                                    <BulletPoint>Termination of facilitation shall not affect any independent agreement between the Advocate and the Client.</BulletPoint>
                                </ul>

                                <SectionHeading>Dispute Resolution</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>Any dispute relating to facilitation services shall be subject to the jurisdiction of the competent courts where the Facilitation Centre is located.</BulletPoint>
                                    <BulletPoint>Disputes between Advocate and Advocate shall be resolved independently without involving the Centre.</BulletPoint>
                                </ul>

                                <SectionHeading>Governing Law</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>These Terms shall be governed by and construed in accordance with the laws of India.</BulletPoint>
                                </ul>

                                <SectionHeading>Amendments</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre reserves the right to modify these Terms & Conditions at any time. Updated Terms & Conditions shall be effective upon display or communication.</BulletPoint>
                                </ul>

                                <SectionHeading>Acceptance</SectionHeading>
                                <ul className="space-y-3 mb-6">
                                    <BulletPoint>The Facilitation Centre shall not be responsible for any breach or violation of the above conditions by any party. In the event of such breach or violation, the Facilitation Centre reserves the right to take appropriate measures or actions against the Advocate(s) responsible, in accordance with its policies and applicable laws.</BulletPoint>
                                    <BulletPoint>By availing the services of the Legal Facilitation Centre, the Advocate acknowledges that they have read, understood, and agreed to these Terms and Conditions.</BulletPoint>
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
