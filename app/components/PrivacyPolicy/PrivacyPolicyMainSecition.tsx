
export default function PrivacyPolicyMainSecition() {
    return (
        <div className="min-h-screen bg-black py-12 section-padding-x">
            <div className="max-w-8xl mx-auto">
                {/* label */}
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-primary"></div>
                        <span className="font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1] tracking-normal capitalize text-[#8A8A8A]">
                            Privacy Policy
                        </span>
                    </div>
                </div>

                {/* Main Heading */}
                <h1
                    className="font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[110%] mb-8 lg:mb-12"
                    style={{
                        background: 'radial-gradient(circle at center, #656565 10%, #FFFFFF 80%, #656565 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Last Updated: [27/01/26]
                </h1>

                {/* Introduction */}
                <section className="mb-8">
                    <p className="body-text mb-4 text-left lg:text-justify leading-snug lg:leading-[150%]">
                        Balman Infotech Private Limited ("Company", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.balmaninfotech.net" target="_blank" rel="noopener noreferrer" className="underline decoration-solid">www.balmaninfotech.net</a> and use our services.
                    </p>
                    <p className="body-text mb-4 text-left lg:text-justify leading-snug lg:leading-[150%]">
                        This Privacy Policy is drafted in accordance with:
                    </p>
                    <ul className="list-disc list-outside pl-5 space-y-1 mb-6">
                        <li className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            Information Technology Act, 2000 (India)
                        </li>

                        <li className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
                        </li>

                        <li className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            General Data Protection Regulation (GDPR), where applicable
                        </li>

                        <li className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            Google Ads, Meta (Facebook/Instagram), and other advertising platform policies
                        </li>
                    </ul>

                </section>

                {/* 1. Company Information */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        1. Company Information
                    </h3>
                    <div className="space-y-1">
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%] font-bold">
                            BALMAN INFOTECH PRIVATE LIMITED
                        </p>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%] font-bold">
                            GSTIN: 03AAJCB0650RIZJ
                        </p>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%] font-bold">
                            Registered Address –
                        </p>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            4th Floor, Verma Tech Park, Plot No. 88, Sector 73, SAS Nagar Patiala – 140308, Punjab, India.
                        </p>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            <span className="font-bold">Phone -</span> +91-9814097251
                        </p>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            <span className="font-bold">Email –</span> <a href="mailto:contact@balmaninfotech.net" className="underline decoration-solid">contact@balmaninfotech.net</a>
                        </p>
                    </div>
                </section>

                {/* 2. Information We Collect */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        2. Information We Collect
                    </h3>
                    <p className="body-text mb-4 text-left lg:text-justify leading-snug lg:leading-[150%]">
                        We may collect the following types of information:
                    </p>

                    <div className="mb-6">
                        <h3 className="font-bold text-[14px] sm:text-[16px] lg:text-[18px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA]">
                            a) Personal Information
                        </h3>
                        <ul className="list-disc list-outside pl-5 space-y-1">
                            {[
                                'Name',
                                'Email address',
                                'Phone number',
                                'Company name',
                                'Billing and invoicing details',
                                'Any information voluntarily submitted through contact forms, emails, or enquiries',
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="mb-6">
                        <h3 className="font-bold text-[14px] sm:text-[16px] lg:text-[18px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA]">
                            b) Technical & Usage Information
                        </h3>
                        <ul className="list-disc list-outside pl-5 space-y-1">
                            {[
                                'IP address',
                                'Browser type and version',
                                'Device information',
                                'Operating system',
                                'Pages visited, time spent, and referral URLs',
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="mb-6">
                        <h3 className="font-bold text-[14px] sm:text-[16px] lg:text-[18px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA]">
                            c) Cookies & Tracking Technologies
                        </h3>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            We use cookies, pixels, and similar tracking technologies to analyse website traffic, improve performance, and deliver relevant advertisements.
                        </p>
                    </div>
                </section>

                {/* 3. How We Use Your Information */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        3. How We Use Your Information
                    </h3>
                    <p className="body-text mb-2 text-left lg:text-justify leading-snug lg:leading-[150%]">
                        We use your information to:
                    </p>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                        {[
                            'Provide and manage our services',
                            'Respond to enquiries and customer support requests',
                            'Improve website functionality and user experience',
                            'Run marketing and advertising campaigns (Google, Meta, etc.)',
                            'Comply with legal and regulatory obligations',
                            'Prevent fraud and ensure website security',
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                </section>

                {/* 4. Legal Basis for Processing (GDPR) */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        4. Legal Basis for Processing (GDPR)
                    </h3>
                    <p className="body-text mb-2 text-left lg:text-justify leading-snug lg:leading-[150%]">
                        For users located in the European Economic Area (EEA), we process personal data based on:
                    </p>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                        {[
                            'Your consent',
                            'Performance of a contract',
                            'Compliance with legal obligations',
                            'Legitimate business interests',
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                </section>

                {/* 5. Sharing of Information */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        5. Sharing of Information
                    </h3>
                    <p className="body-text mb-2 text-left lg:text-justify leading-snug lg:leading-[150%]">
                        We do not sell or rent your personal data. We may share information with:
                    </p>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                        {[
                            'Service providers (hosting, analytics, CRM, payment processors)',
                            'Advertising partners (Google, Meta, etc.)',
                            'Legal or regulatory authorities when required by law',
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        All third parties are obligated to protect your data and use it only for specified purposes.
                    </p>
                </section>

                {/* 6. Data Retention */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        6. Data Retention
                    </h3>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal requirements.
                    </p>
                </section>

                {/* 7. Data Security */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        7. Data Security
                    </h3>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        We implement reasonable technical and organizational security measures to protect your information. However, no electronic transmission or storage system is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                {/* 8. Your Rights */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        8. Your Rights
                    </h3>
                    <p className="body-text mb-2 text-left lg:text-justify leading-snug lg:leading-[150%]">
                        Depending on your location, you may have the right to:
                    </p>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                        {[
                            'Access your personal data',
                            'Request correction or deletion',
                            'Withdraw consent',
                            'Restrict or object to processing',
                            'Complain to a data protection authority',
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        Requests can be made by emailing <a href="mailto:contact@balmaninfotech.net" className="underline decoration-solid">contact@balmaninfotech.net</a>.
                    </p>
                </section>

                {/* 9. Cookies Policy Reference */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        9. Cookies Policy Reference
                    </h3>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        For detailed information about our use of cookies and how to manage preferences, please refer to our Cookie Policy (Kindly add the website page Link of <a href="/TermsAndConditions" className="underline decoration-solid">Terms and Conditions</a>).
                    </p>
                </section>

                {/* 10. Third-Party Links */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        10. Third-Party Links
                    </h3>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. Users should review their respective privacy policies.
                    </p>
                </section>

                {/* 11. Children’s Privacy */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        11. Children’s Privacy
                    </h3>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
                    </p>
                </section>

                {/* 12. International Data Transfers */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        12. International Data Transfers
                    </h3>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        Your information may be transferred to and processed in countries outside your country of residence. We ensure appropriate safeguards are in place in accordance with applicable laws.
                    </p>
                </section>

                {/* 13. Changes to This Privacy Policy */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        13. Changes to This Privacy Policy
                    </h3>
                    <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                    </p>
                </section>

                {/* 14. Contact Us */}
                <section className="mb-8">
                    <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
                        14. Contact Us
                    </h3>
                    <p className="body-text mb-4 text-left lg:text-justify leading-snug lg:leading-[150%]">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-1">
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%] font-semibold text-[#E8E8EA]">
                            Balman Infotech Private Limited
                        </p>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            <span className="font-semibold">Email: <a href="mailto:contact@balmaninfotech.net" className="underline decoration-solid">contact@balmaninfotech.net</a>
                            </span> </p>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            <span className="font-semibold">Phone: +91-9814097251 </span>
                        </p>
                        <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                            <span className="font-semibold">Address: 4th Floor, Verma Tech Power, Plot No. 88, Sector 73, SAS Nagar, Mohali-140308, Punjab, India </span>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}