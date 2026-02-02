const TopSection = () => {
  return (
    <div className="min-h-screen bg-[#010101] py-12 section-padding-x">
      <div className="max-w-8xl mx-auto">
        {/* Label */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary"></div>

            <span className="font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]   leading-[1]  tracking-normal capitalize  text-[#8A8A8A] ">
              Terms And Conditions
            </span>
          </div>
        </div>

        {/* Main Heading with Radial Gradient */}
        <h1
          className="font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[110%] mb-8 lg:mb-12"
          style={{
            background:
              "radial-gradient(circle at center, #FFFFFF 20%, #656565 60%, #656565 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Balman Infotech - Terms and Conditions, Disclaimer and Cookie Policy
        </h1>

        {/* Cookie Consent Notice Section */}
        <section className="mb-8">
          <h2 className="heading mb-4 lg:mb-6 text-left lg:text-justify">
            Cookie Consent Notice
          </h2>

          <p className="body-text mb-4 text-left lg:text-justify leading-snug lg:leading-[150%]">
            By continuing to browse this website or by clicking{" "}
            <strong> {"Accept"},</strong> you consent to the use and storage of
            cookies on your device in accordance with this cookie policy.
            Cookies help us to improve the website functionality, analyse
            traffic, personalise content, provide relevant advertising, and
            enable social media features.
          </p>

          <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
            You may accept all cookies or manage your preferences individually
            through our cookie settings. For detailed information on how we use
            cookies, please review our cookie policy below.
          </p>
        </section>

        {/* Cookie Policy Section */}
        <section className="mb-8">
          <h2 className="heading mb-6 lg:mb-8 text-left lg:text-justify">
            Cookie Policy
          </h2>

          {/* What are Cookies */}
          <div className="mb-8">
            <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              What are Cookies?
            </h3>
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              Cookies are small text files placed on your website when you visit
              a website. They are widely used to make websites work efficiently
              and provide reporting information.
            </p>
          </div>

          {/* How do we use Cookies */}
          <div className="mb-8">
            <h3 className="font-bold text-[18px] sm:text-[19px] lg:text-[20px] leading-snug lg:leading-[150%] mb-4 text-[#E8E8EA] text-left lg:text-justify">
              How do we use Cookies?
            </h3>
            <p className="body-text mb-2 text-left lg:text-justify leading-snug lg:leading-[150%]">
              We use cookies to -
            </p>

            {/* Bullet Points */}
            <ul className="space-y-2">
              <li className="body-text flex items-start text-left lg:text-justify leading-snug lg:leading-[150%]">
                <span className="mr-3">·</span>
                <span>Improve website performance and functionality.</span>
              </li>
              <li className="body-text flex items-start text-left lg:text-justify leading-snug lg:leading-[150%]">
                <span className="mr-3">·</span>
                <span>Analyse website behaviour and traffic.</span>
              </li>
              <li className="body-text flex items-start text-left lg:text-justify leading-snug lg:leading-[150%]">
                <span className="mr-3">·</span>
                <span>
                  Provide relevant marketing and advertising (including Google
                  and Meta Platforms).
                </span>
              </li>
              <li className="body-text flex items-start text-left lg:text-justify leading-snug lg:leading-[150%]">
                <span className="mr-3">·</span>
                <span>Enable social media sharing features.</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          {/* Types of Cookies we use - Heading */}
          <h3 className="font-semibold text-[18px] sm:text-[19px] lg:text-[20px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
            Types of Cookies we use
          </h3>

          <div className="space-y-1">
            <div>
              <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                <span className="font-bold text-base">Essential Cookies</span>
                <span className="font-medium text-base">
                  {" "}
                  - Required for the basic functionality of the website.
                </span>
              </p>
            </div>

            {/* Analytics Cookies */}
            <div>
              <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                <span className="font-bold text-base">Analytics Cookies</span>
                <span className="font-medium text-base">
                  {" "}
                  - Help us understand how visitors interact with our website.
                </span>
              </p>
            </div>

            {/* Marketing Cookies */}
            <div>
              <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                <span className="font-bold text-base">Marketing Cookies</span>
                <span className="font-medium text-base">
                  {" "}
                  - Used to deliver relevant advertisements and track campaign
                  performance.
                </span>
              </p>
            </div>

            {/* Preference Cookies */}
            <div>
              <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
                <span className="font-bold text-base">Preference Cookies</span>
                <span className="font-medium text-base">
                  {" "}
                  - Remember your settings and preferences.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold text-[18px] sm:text-[19px] lg:text-[20px] leading-snug lg:leading-[150%] mb-4 mt-8 text-[#E8E8EA] text-left lg:text-justify">
            Third-Party Cookies
          </h3>

          <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
            We may allow third-party service providers such as Google, Meta, and
            analytics partners to place cookies on your device. These cookies
            are governed by the respective third-party privacy policies.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="heading mb-4 lg:mb-6 text-left lg:text-justify">
            Disclaimer
          </h2>

          <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
            The website, and all the information, tools and materials contained
            herein (the {"Site"}) are provided by Balman Infotech Private
            Limited for general informational purposes only. The Site is not
            intended for distribution to, or use by, or any person or entity in
            any jurisdiction where such distribution or use would be contrary to
            applicable law or regulation or would subject Balman Infotech
            Private Limited to any registration, licensing, or compliance
            requirement within such jurisdiction. Users accessing the site from
            outside India do so at their own initiative and are responsible for
            compliance with local laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="heading mb-2 text-left lg:text-justify">
            Terms and Conditions
          </h2>

          {/* Company Information Heading */}
          <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
            1. Company Information
          </h3>

          {/* Company Details */}
          <div className="space-y-1">
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              <span className="font-bold">BALMAN INFOTECH PRIVATE LIMITED</span>
            </p>

            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              <span className="font-bold">GSTIN: 03AAJCB0650RIZJ</span>
            </p>

            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              <span className="font-bold">Registered Address -</span>
            </p>

            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              4th Floor, Verma Tech Park, Plot No. 88, Sector 73, SAS Nagar
              Patiala - 140308, Punjab, India.
            </p>

            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              <span className="font-bold">Phone -</span> +91-9814097251
            </p>

            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              <span className="font-bold">Email -</span>{" "}
              <a
                href="mailto:contact@balmaninfotech.net"
                className="underline decoration-solid"
              >
                contact@balmaninfotech.net
              </a>
            </p>

            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              <span className="font-bold">Website –</span>{" "}
              <a
                href="https://www.balmaninfotech.net"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-solid"
              >
                https://www.balmaninfotech.net
              </a>
            </p>

            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              Throughout these Terms and Conditions,{" "}
              <span className="font-bold">{"Company"}</span>,{" "}
              <span className="font-bold">{"we"}</span>,{" "}
              <span className="font-bold">{"us"}</span>, or{" "}
              <span className="font-bold">{"our"}</span> refers to{" "}
              <span className="font-bold">Balman Infotech Private Limited</span>
              .
            </p>
          </div>
          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              2. Services
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              We provide branding, marketing, website design and development,
              mobile application development, digital marketing, social media
              marketing, customer support services, and finance & account
              management services (collectively, the {"Services"}).
            </p>
          </section>
          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              3. Agreement to Terms
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              These Terms and Conditions constitute a legally binding agreement
              between you (whether personally or on behalf of an entity) and
              Balman Infotech Private Limited regarding your access to and use
              of the Site and Services. By accessing or using the Site, you
              confirm that you have read, understood and agreed to be bound by
              these terms. However, if you do not agree, you must discontinue
              use immediately. The Site is intended for users who are at least
              18 years of age. Persons under 18 years of age are not permitted
              to use the site.{" "}
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              4.Modifications to Terms
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              We reserve the right to modify these terms at any time. Updates
              will be reflected by revising the “Last Updated” date. Continued
              use of the Site after changes constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              5. Termination
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              Unless otherwise stated, the Site and all content, including text,
              graphics, logos, designs, software, audio, video and trademarks
              (collectively, “Content”) are the exclusive property of Balman
              Infotech Private Limited or its Licensors and are protected under
              Indian and International intellectual property laws. You are
              granted a limited, non-transferrable, non-commercial license to
              access and use the site. However, any unauthorised reproduction,
              distribution and commercial use is strictly prohibited.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* User Obligations Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              6. User Obligations
            </h3>

            {/* Introduction Text */}
            <p className="body-text mb-2 text-left lg:text-justify leading-snug lg:leading-[150%]">
              You agree not to:
            </p>

            {/* Bulleted List */}
            <ul className="body-text mb-2 list-disc pl-6 text-left lg:text-justify leading-snug lg:leading-[150%]">
              <li>Use the Site for unlawful purposes</li>
              <li>Violate intellectual property or privacy rights</li>
              <li>Upload malicious software or harmful content</li>
              <li>Misrepresent your identity or affiliation</li>
            </ul>

            {/* Additional Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              Employees, freelancers, contractors, or former associates are
              prohibited from misusing company data or making defamatory or
              misleading statements against the Company. Any breach may result
              in legal action under applicable Indian laws.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              7. Termination of Use
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              We reserve the right to suspend or terminate access to the Site or
              Services, without notice, for any violation of these Terms or
              applicable laws.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              8. Service Availability
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              We do not guarantee uninterrupted or error-free access to the
              Site. Temporary interruptions may occur due to maintenance,
              technical issues, or external factors.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              9. Limitation of Liability
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              The Site and Services are provided on an “as is” and “as
              available” basis. To the maximum extent permitted by law, Balman
              Infotech Private Limited disclaims all warranties, express or
              implied. We shall not be liable for any indirect, incidental,
              consequential, or special damages arising from your use of the
              Site or Services.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              10. Indemnification
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              You agree to indemnify and hold harmless Balman Infotech Private
              Limited, its directors, employees, and affiliates from any claims,
              damages, liabilities, or expenses arising out of your use of the
              Site or breach of these Terms.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              11. Third-Party Links
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              The Site may contain links to third-party websites. We do not
              control or endorse these websites and are not responsible for
              their content, policies, or practices.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              12. Data Storage & Security
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              We maintain reasonable technical and organisational safeguards to
              protect user data. However, no system is completely secure, and we
              do not guarantee absolute data security.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              13. Governing Law & Jurisdiction
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              These Terms shall be governed by and construed in accordance{" "}
              <strong>
                with the laws of India. Courts located in Punjab, India, shall
                have exclusive jurisdiction over any disputes.
              </strong>
              Where applicable, international users acknowledge the
              applicability of relevant data protection laws, including GDPR,
              subject to legal limitations.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Services Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              14. Severability
            </h3>

            {/* Services Description */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              If any provision of these Terms is held unenforceable, the
              remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-2 mt-4">
            {/* Contact Information Heading */}
            <h3 className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-snug lg:leading-[150%] mb-2 text-[#E8E8EA] text-left lg:text-justify">
              15. Contact Information
            </h3>

            {/* Introduction Text */}
            <p className="body-text mb-2 text-left lg:text-justify leading-snug lg:leading-[150%]">
              For questions or concerns regarding these Terms, please contact:
            </p>

            {/* Company Name */}
            <p className="font-semibold text-base leading-snug lg:leading-[150%] text-[#E8E8EA] mb-1 text-left lg:text-justify">
              Balman Infotech Private Limited
            </p>

            {/* Contact Details */}
            <p className="body-text text-left lg:text-justify leading-snug lg:leading-[150%]">
              <span className="font-semibold">Email:</span>{" "}
              contact@balmaninfotech.net
              <br />
              <span className="font-semibold">Phone:</span> +91-9814097251
              <br />
              <span className="font-semibold">Address:</span> 4th Floor, Verma
              Tech Power, Plot No. 88, Sector 73, SAS Nagar, Mohali-140308,
              Punjab, India
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default TopSection;
