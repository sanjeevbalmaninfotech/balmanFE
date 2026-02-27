// lib/servicesData.ts

import { ServiceData } from "../types/servicesPage";

export const servicesData: Record<string, ServiceData> = {
  branding: {
    id: "branding",
    mainHeading: "Branding by Balman Infotech",
    subHeadings: ["Helping You Build a Strong and  Memorable Brand"],
    descriptions: [
      "What makes you remember a company? What makes you think of the red colour when you hear Zomato? How do you remember the virtue of being fit when Nike is mentioned? All of this happened due to strong branding done by the company. Rooting your company with fixed values, voice and vision, branding is what decides how the market and the consumer perceives you. Balman Infotech wants to do exactly that. We work with both domestic and foreign clients to develop brands that are not simply aesthetically pleasing but also clear, consistent, and built for long-term growth. Our customised branding solutions are made to fit your company's objectives, audience expectations, and future scalability, regardless of whether you are a start-up, SME, or corporation.",
    ],
    //"C:\repos\balmanFE\public\service\branding.jpeg"  "C:\Users\Dell\Downloads\digitalmarketing.jpeg"
    image:
      "/service/branding.jpeg",
    leftSideServices: [
      { label: "Organic Growth", path: "/services/organic-growth" },
      { label: "Digital Marketing", path: "/services/digital-marketing" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Customer Support", path: "/services/customer-support" },
      { label: "Software Development", path: "/services/custom-software-development" }
    ],
    mainCta: {
      text: "Talk to an Expert",
      href: "/ContactUs",
    },

    accordionData: {
      heading: "Branding Solutions by Balman Infotech",
      description:
        "We create quick, responsive, conversion-focused websites that effectively engage users and represent your business. The services that we offer include:",
      accordion: [
        {
          title: "Brand Strategy & Positioning ",
          content:
            "To guarantee clarity and consistency over all touchpoints, we establish the core of your brand. \n Our brand strategy services include:",
          items: [
            "Brand discovery & research",
            "Market and competitor analysis",
            "Brand positioning & differentiation",
            "Brand purpose, mission & vision",
            "Target audience definition",
          ],
        },
        {
          title: "Brand Identity Design",
          content:
            "We design graphic identities that capture the essence of your brand.\n Our brand identity services include",
          items: [
            "Logo design & visual systems",
            "Colour palette & typography",
            "Brand style guidelines",
            "Iconography & visual elements",
            "Brand consistency frameworks",
          ],
        },
        {
          title: "Brand Messaging and Voice",
          content:
            "Your writing is just as important as your appearance. We create messages that connect and foster confidence.",
          items: [
            "Brand tone & voice development",
            "Key messaging frameworks",
            "Taglines & brand statements",
            "Website & communication copy direction",
            "Internal brand communication guidelines",
          ],
        },
        {
          title: "Rebranding",
          content:
            "We assist companies that are changing or repositioning in aligning their brand identity with their new objectives.",
          items: ["Relaunching the brand with a newer and modern outlook",
            "Internal Brand Alignment",
            "Redesign website and other digital assets"],
        },
        {
          title: "Brand Consistency",
          content:
            "We make sure your brand is applied uniformly on every platform. \n Our brand application services include:",
          items: ["Website & digital branding alignment",
            "Social media brand guidelines",
            "Marketing collateral branding",
            "Presentation & document branding",
            "Customer touchpoint consistency",],
        },
      ],
    },
    whySection: {
      title: "Why Is Branding Important?",
      description:
        "Branding is no longer only about colours and logos in today's cutthroat industry. Customers identify, trust, and choose you based on your brand.\n What happens if you already have a brand but it isn't working? \n  Growth can be hampered by ambiguity, inadequate differentiation, erratic communication, and a weak emotional bond. At Balman Infotech, we assist companies in creating brands that are not just aesthetically pleasing but also brands that stand out, communicate clearly, and flourish with assurance.",
      listTitle: "",
      // points: ["", "", ""],
      footerText:
        "At Balman Infotech, we focus on digital marketing strategies that directly impact business growth, not vanity metrics.",
    },
    whyChooseUs: {
      heading: "Why Choose Balman as Your Branding Partner?",
      items: [
        "Skilled and experienced software, web, and app developers",
        "Secure and scalable development methods",
        "Technical solutions that focus on Efficiency",
        "Open and honest reporting and communication",
        "Long-term upkeep and assistance",
        "Experienced across multiple industries",
      ],
    },
    processSection: {
      mainHeading: "Branding Process",
      mainDescription: "",
      steps: [
        {
          step: "01",
          title: "Understanding and Discovering Brands",
          description:
            "We are aware of your company's objectives, target market, and audience.",
        },
        {
          step: "02",
          title: "Direction and Brand Strategy",
          description:
            "We establish messaging, personality, positioning, and strategic direction.",
        },
        {
          step: "03",
          title: "Development of Creativity",
          description:
            "We create communications systems and visual identities that complement the plan.",
        },
        {
          step: "04",
          title: "Evaluation and Improvement",
          description:
            "We preserve brand consistency while refining concepts in response to feedback.",
        },
        {
          step: "05",
          title: "Launch & Implementation of the Brand",
          description:
            "We provide brand guidelines and assist with platform implementation.",
        },
      ],
    },
    industries: {
      heading: "Industries We Serve",
      items: [
        "E-commerce",
        "Healthcare",
        "Real Estate",
        "Hospitality",
        "Education",
        "IT & SaaS",
        "Startups & SMEs",
      ],
    },
    faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Is branding a one-time activity?",
          answer:
            "Branding evolves as businesses grow. Periodic refinement ensures relevance and consistency.",
        },
        {
          question: "How long does a branding project take?",
          answer:
            "Timelines vary, but most branding projects take 4-8 weeks depending on scope.",
        },

        {
          question: "Will branding help business growth?",
          answer:
            "Yes. Strong branding improves recognition, trust, conversions, and long-term loyalty.",
        },
        {
          question: "Is branding a one-time activity?",
          answer:
            "Branding evolves as businesses grow. Periodic refinement ensures relevance and consistency.",
        },
      ],
    },
    ctaButtons: [
      {
        text: "Request a Free Brand Audit",
        href: "/brand-audit",
      },
      {
        text: "Talk to an Expert",
        href: "/ContactUs",
      },
    ],
  },

  "digital-marketing": {
    id: "digital-marketing",
    mainHeading: "Digital Marketing Balman Infotech",
    subHeadings: ["Strategic Digital Growth"],
    descriptions: [
      "Balman Infotech is a full-service digital marketing agency helping businesses build strong online visibility, generate qualified leads and scale revenue in complex markets. Our digital marketing strategies combine data, creativity and AI-powered insights to deliver measurable growth for local and international businesses. Whether you are a Start-up, SME or Enterprise, our customized digital marketing solutions are designed to attract the right audience and convert them into loyal customers.",
    ],
    image:
      "/service/digitalmarketing.jpeg",
    leftSideServices: [
      { label: "Organic Growth", path: "/services/organic-growth" },
      { label: "Branding Services", path: "/services/branding" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Customer Support", path: "/services/customer-support" },
      { label: "Software Development", path: "/services/custom-software-development" }
    ],
    mainCta: {
      text: "Talk to one of our Marketing Experts",
      href: "/ContactUs",
    },

    accordionData: {
      heading:
        "Complete Digital Marketing Solutions Designed By Balman Infotech to Grow your Business",
      description: "",
      accordion: [
        {
          title: "Search Engine Optimization (SEO)",
          content:
            "We improve your website visibility on search engines to drive long-term, high-quality organic traffic. \n Our SEO services include –",
          items: ["Website audit and competitor analysis",
            "Keyword research and strategy",
            "On-Page and Technical SEO",
            "Content Optimization",
            "Link Building and authority growth",],
        },
        {
          title: "Pay Per Click Advertising (PPC)",
          content:
            "Our PPC experts create and manage high-performing paid ad campaigns that deliver instant visibility and leads. \n Our PPC Services include –",
          items: [
            "Google Ads and Bing Ads",
            "Keyword Targeting and bid optimization",
            "Landing Page optimization",
            "Ad Copy creation and A/B Testing",
            "Conversion Tracking and ROI analysis"
          ]
        },
        {
          title: "Social Media Marketing (SMM)",
          content:
            "We help brands build strong relationships with their audience through strategic social media marketing. \n Our Social Media Services include –",
          items: ["Social Media Strategy and Planning",
            "Content Creation and Scheduling",
            "Paid Social Advertising",
            "Performance Tracking and Reporting",
            "Audience Engagement and Growth"],
        },
        {
          title: "Content Marketing",
          content:
            "Content is the foundation of online growth and success. We create content that attracts, educates and converts. \n Our Content Marketing Services include –",
          items: ["Blog writing",
            "Website and landing page content",
            "Video content strategy",
            "Infographics and visual content",
            "Content Distribution and Promotion"],
        },
        {
          title: "Email Marketing and Marketing Automation",
          content:
            "We design personalized email campaigns that nurture leads and increase customer lifetime value. \n  Our Email marketing services include.",
          items: ["Email Campaign Strategy",
            "Automation workflows",
            "Lead nurturing sequences",
            "Newsletter design",
            "Performance tracking",],
        },
        {
          title: "Conversion Rate Optimization",
          content:
            "Driving Traffic is only half the job. We optimize your website and landing pages to convert visitors into customers. \n Our CRO Services include -",
          items: ["User Behaviour analysis",
            "Funnel Optimization",
            "A/B Testing",
            "Landing Page Optimization",
            "Conversion Tracking",],
        },
      ],
    },
    whySection: {
      title: "Why is Digital Marketing important for Business Growth Today?",
      description:
        "Customers no longer rely on traditional marketing alone. They research, compare and make decisions online. However, if your brand is not visible across digital channels, you are losing opportunities every day.",
      listTitle: "Digital Marketing helps your business –",
      points: [
        "Reach the right audience at the correct time",
        "Increase brand awareness and trust",
        "Generate consistent leads and sales",
        "Measure performance with real data",
        "Scale marketing efforts cost-effectively",
      ],
      footerText:
        "At Balman Infotech, we focus on digital marketing strategies that directly impact business growth, not vanity metrics.",
    },

    processSection: {
      mainHeading: "Our Digital Marketing Work Process",
      mainDescription:
        "At Balman Infotech, we follow structural as well as transparent process to deliver consistent results.",
      steps: [
        {
          step: "01",
          title: "Business and Market Understanding",
          description:
            "We understand your business goals, audience, competitors and industry landscape.",
        },
        {
          step: "02",
          title: "Strategy and Channel Planning",
          description:
            "We select the right online channel and create a customized marketing roadmap.",
        },
        {
          step: "03",
          title: "Campaign Setup and Optimization",
          description:
            "We launch and optimize campaigns across SEO, PPC, social media and content platforms.",
        },
        {
          step: "04",
          title: "Performance Tracking and AnalyticsP",
          description:
            "We monitor traffic, leads, conversions, and ROI using advanced analytics tools.",
        },
        {
          step: "05",
          title: "Continuous Improvement & Scaling",
          description:
            "We refine strategies, scale winning campaigns and adapt to market changes.",
        },
      ],
    },
    industries: {
      heading: "Industries We Work With",
      items: [
        "E-commerce",
        "Healthcare",
        "Real Estate",
        "Hospitality",
        "Education",
        "IT and SaaS",
        "Startups and SMEs",
      ],
    },
    faqs: {
      heading: "Digital Marketing FAQs",
      items: [
        {
          question: "How long do digital marketing return takes to show up?",
          answer:
            "PPC and Social can show immediate results, while SEO and Content Marketing typically take 3-6 months for meaningful growth.",
        },
        {
          question: "Will digital marketing help increase sales?",
          answer:
            "Yes, with smart mix of on-brand quality, conversions and retargeting.",
        },
        {
          question:
            "Do you offer local and international digital marketing services?",
          answer:
            "Yes, we run both local and international digital marketing campaigns.",
        },
        {
          question: "Is digital marketing a one-time activity?",
          answer:
            "No, digital marketing requires continuous optimization and adaptation to platform updates and campaigns.",
        },
      ],
    },
    whyChooseUs: {
      heading: "Why Choose Balman Infotech as your Online Marketing Partner?",
      items: [
        "Dedicated Account Manager",
        "ROI-focused approach",
        "Transparent reporting and insights",
        "Experienced Marketing professionals",
        "Customized digital marketing strategies",
        "AI-powered tools with human expertise",
      ],
    },
    ctaButtons: [
      {
        text: "Schedule a Consultation",
        href: "/ContactUs",
      },
      {
        text: "Talk to an Expert",
        href: "/ContactUs",
      },
    ],
  },

  "web-development": {
    id: "web-development",
    mainHeading: "Web Development Balman Infotech",
    subHeadings: [
      "Build Scalable and User Friendly Websites, Apps and Softwares",
    ],
    descriptions: [
      "Balman Infotech strives to support businesses in their technological advancements with our end-to-end support in website, app and software development catering to your business needs. We help businesses design and develop technology solutions that will help both, local and international clients scale and increase their operational efficiency. Our tailored development solutions are made to fit your company's objectives, user requirements, and future scalability, regardless of whether you are a start-up, SME, or enterprise.",
    ],
    image: "/service/webdevelopment.jpeg",
    leftSideServices: [
      { label: "Organic Growth", path: "/services/organic-growth" },
      { label: "Digital Marketing", path: "/services/digital-marketing" },
      { label: "Branding Services", path: "/services/branding" },
      { label: "Customer Support", path: "/services/customer-support" },
      { label: "Software Development", path: "/services/custom-software-development" }
    ],
    mainCta: {
      text: "Talk to a Development Expert",
      href: "/ContactUs",
    },
    industries: {
      heading: "Industries We Serve",
      items: [
        "E-commerce",
        "Healthcare",
        "Real Estate",
        "Hospitality",
        "Education",
        "IT & SaaS",
        "Startups & SMEs",
      ],
    },
    whyChooseUs: {
      heading: "Why Choose Balman as Your Web Development Partner?",
      items: [
        "Skilled and experienced software, web, and app developers",
        "Secure and scalable development methods",
        "Technical solutions that focus on Efficiency",
        "Open and honest reporting and communication",
        "Long-term upkeep and assistance",
        "Experienced across multiple industries",
      ],
    },

    whySection: {
      title:
        "Why is Staying Digitally Updated Important for Businesses in Today’s Time?",
      description: "In this time and age, your online presence of the brand is mostly the first and the most important touchpoint for the user. How your brand is represented digitally builds accessibility and also represents a premium service. A lack of digital presence not only hampers loss of a huge market share to the competitors who are online, but also hampers easy access and trust on a brand. But what if you have a digital presence already but are still getting poor results? Slow performance, low conversion rates, security threats, and diminished trust are all consequences of a badly constructed website or application. However, a well-thought-out and scalable digital solution can turn into your most powerful growth engine. Connect with Balman for websites, apps and softwares that are not a cash burning machine but your biggest drivers towards growth and expansion.",
      points: [],
      footerText: "",
    },

    accordionData: {
      heading: "Web, App & Software Development Solutions by Balman Infotech",
      description:
        "We create quick, responsive, conversion-focused websites that effectively engage users and represent your business. The services that we offer include:",
      accordion: [
        {
          title: "Mobile App Development",
          content:
            "We create user-friendly mobile apps that provide consistent experiences across platforms.",
          items: [],
        },
        {
          title: "Custom Software Development ",
          content:
            "We provide secure, scalable software solutions based on your operational requirements and business procedures.",
        },
        {
          title: "UI/UX Design & Front-End Development",
          content:
            "Excellent experience is necessary for outstanding functionality. We create user-friendly, captivating, and conversion-focused interfaces.",
          items: [],
        },
        {
          title: "Maintenance, Support & Scaling",
          content:
            "Digital products require constant maintenance. We make sure your systems are scalable, safe, and up to date.",
          items: [],
        },
        {
          title: "Email Marketing and Marketing Automation",
          content:
            "We design personalized email campaigns that nurture leads and increase customer lifetime value. Our Email marketing services include.",
          items: [],
        },
      ],
    },

    processSection: {
      mainHeading: "Our Web, App & Software Development Process",
      mainDescription:
        "We use an organised and open development process at Balman Infotech.",
      steps: [
        {
          step: "01",
          title: "Business Analysis and Requirements",
          description:
            "We get  aware of your objectives, users, technical specifications, and scalability requirements.",
        },
        {
          step: "02",
          title: "Architecture Design and Planning",
          description:
            "We specify the development roadmap, system architecture, and technology stack.",
        },
        {
          step: "03",
          title: "Design & Development",
          description:
            "In structured development phases, we create functionality and design interfaces.",
        },
        {
          step: "04",
          title: "Quality Assurance and Checking",
          description:
            "We test usability, compatibility, security, and performance.",
        },
        {
          step: "05",
          title: "Support & Scaling",
          description:
            "We launch, oversee, manage, and expand your digital product as your company expands.",
        },
      ],
      // cta: {
      //   text: "Talk to a Development Expert",
      //   href: "/ContactUs",
      // },
    },
    faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Do you build scalable and secure applications?",
          answer:
            "Yes, scalability and security are built into our development process from the start.",
        },
        {
          question: "Can you work with international clients?",
          answer: "Yes, we develop digital products for international clients.",
        },
        {
          question: "Do you provide post-launch support?",
          answer:
            "Yes, we offer ongoing maintenance, updates, and performance optimization.",
        },
        {
          question: "Is development a one-time service?",
          answer:
            "No, digital products require regular updates and maintenance.",
        },
      ],
    },
    ctaButtons: [
      {
        text: "Schedule a Consultation",
        href: "/ContactUs",
      },
      {
        text: "Talk to an Expert",
        href: "/ContactUs",
      },
    ],
  },

  "organic-growth": {
    id: "organic-growth",
    mainHeading: "Organic Growth by Balman Infotech",
    subHeadings: [
      "Sustainable Organic Growth That Builds Authority, Traffic and Revenue",
    ],
    descriptions: [
      "Balman Infotech helps businesses achieve long-term business growth through strategic SEO, Content, Digital PR and Performance Optimization. Unlike short-term paid tactics, organic growth focuses on building trust, visibility, and consistent results without depending on ads.\n Our Organic Growth Strategies are designed to increase search visibility, attract the right audience and convert traffic into measurable business outcomes, locally and globally.",
    ],
    image: "/service/growth.jpeg",
    leftSideServices: [

      { label: "Digital Marketing", path: "/services/digital-marketing" },
      { label: "Branding Services", path: "/services/branding" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Customer Support", path: "/services/customer-support" },
      { label: "Software Development", path: "/services/custom-software-development" }
    ],
    mainCta: {
      text: "Speak with a Growth Strategist",
      href: "/ContactUs",
    },
    industries: {
      heading: "Industries We Specialize In",
      items: [
        "E-Commerce ",
        "	Healthcare ",
        "	Real-estate ",
        "	Hospitality ",
        "	IT & Saas ",
        "Education ",
        "Start-ups and SME's ",
      ],
    },
    whyChooseUs: {
      heading: "Why Choose Balman Infotech for Organic Growth?",
      items: [
        "SEO + Content + Authority Expertise",
        "ROI-driven organic planning",
        "Transparent reporting and milestones",
        "Ai-powered insights with human strategy",
        "Long-term, sustainable growth focus",
        "AI-powered tools with human expertise",
      ],
    },
    whySection: {
      title: "Understanding Organic Growth and Its Impact",
      description:
        "Organic Growth refers to increasing your brand’s visibility, traffic and revenue naturally through search engines, content and brand authority, without relying heavily on paid ads.",
      listTitle: "Our Organic Growth Helps Your Businesses",
      points: [
        "Build long-term brand credibility",
        "Reduce customer acquisition cost",
        "Generate consistent, high-quality leads",
        "Improve search engine trust and authority",
        "Scale sustainably over time",
      ],
      footerText:
        "At Balman Infotech, we focus on organic strategies that compound results month after month.",
      // cta: {
      //   text: "Speak with a Growth Strategist",
      //   href: "/ContactUs",
      // },
    },

    accordionData: {
      heading: "Our Organic Growth Services – Built for Long-term success",
      description: "",
      accordion: [
        {
          title: "Organic SEO Growth Strategy",
          content:
            "We create comprehensive SEO growth strategies focused on rankings, traffic quality and conversions. \n Includes:",
          items: ["Technical SEO Foundation", "Keyword and intent mapping", "On-Page and content optimization", "Authority and Trust Building"],
        },
        {
          title: "Content Lead Growth",
          content:
            "High-quality content is the backbone of content growth. We build a tropical authority that search engines as well as users trust. \n Content Growth services include –",
          items: ["SEO Blogs and Pillar Content",
            "Service and Landing Page optimization",
            "Topical Cluster creation",
            "Content refresh and optimization"]
        },
        {
          title: "Authority Building and Digital PR",
          content:
            "We strengthen your brand's online authority through ethical off-page strategies that \n include:",
          items: ["High-quality backlink acquisition",
            "Brand Mentions and Citations",
            "Reputation and Trust Building",
            "Digital PR Campaigns"],
        },
        {
          title: "Local Organic Growth",
          content:
            "For locally based businesses, we drive organic visibility through Local SEO. \n Our Local Organic Growth Services include",
          items: ["Google My Business Profile Optimization",
            "Local Keyword Targeting",
            "Local Content strategy",
            "Reviews and citation management",],
        },
        {
          title: "Organic Conversion Optimization",
          content:
            "Traffic alone doesn't grow business. We optimize your users’ journey to convert visitors into leads and customers. \n Includes:",
          items: ["UX and Behaviour analysis", "Conversion Funnel Optimization", "Landing Page improvements", "CRO recommendations",],
        },
      ],
    },
    aiSection: {
      mainHeading: "How do we use AI for organic growth?",
      description:
        "Search engines now rely heavily on AI-driven algorithms and AI-overviews. At Balman Infotech, we align organic growth strategies with modern AI-based search behaviour.",
      subSections: [
        {
          subHeading: "",
          description: "",
          bulletPoints: [
            {
              title: "AI-based Search Intent and Topic analysis",
              description:
                "We analyse what users and AI-powered search engines expect to see for each topic. Content Optimized for AI overviews and featured snippets",
              //subPoints: ["",]
            },
            {
              title: "We structure content for:",
              description:
                "Various platforms like Google AI Overviews, Featured Snippets, Voice Search, Semantic and entity-based SEO",
            },
            {
              title: "Predictive Growth Insights",
              description:
                "AI tools help us forecast content opportunities and ranking trends before competitors.",
            },
            {
              title: "Human Strategy + AI Intelligence",
              description:
                "AI supports research and optimization, while our experts guide strategy, creativity and trust-building.",
            },
          ],
        },
      ],
    },

    processSection: {
      mainHeading: "Our Organic Growth Work Process",
      mainDescription:
        "We follow a proven, scalable framework to deliver consistent organic results.",
      steps: [
        {
          step: "01",
          title: "Business and Growth Audit",
          description:
            "We analyse your website, brand authority, competitors and growth gaps.",
        },
        {
          step: "02",
          title: "Growth Strategy and Roadmap",
          description:
            "We build a customized organic growth plan aligned with the business goals.",
        },
        {
          step: "03",
          title: "SEO and Content Execution",
          description:
            "We implement SEO fixes, create authority content, and optimize existing assets.",
        },
        {
          step: "04",
          title: "Authority and Trust Building",
          description: "We strengthen backlinks, mentions and brand signals.",
        },
        {
          step: "05",
          title: "Performance Tracking and Optimization",
          description:
            "We track traffic, rankings, conversions, and continuously refine strategies.",
        },
      ],
      cta: {
        text: "Scale Your Growth Today",
        href: "/ContactUs",
      },
    },
    faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "How long does organic growth take?",
          answer:
            "Organic growth typically shows strong results within 3-6 months and compounds over time.",
        },
        {
          question: "Does organic growth include SEO?",
          answer:
            "Yes, SEO is a core component, along with content, authority, and conversion Optimization. ",
        },
        {
          question: "Is organic growth better than paid marketing?",
          answer:
            "Organic-growth delivers long-term ROI, while paid marketing delivers immediate results. However, the best strategy often combines both.",
        },
        {
          question: "Can Organic growth reduce ad spend?",
          answer:
            "Yes, as organic visibility improves, dependency on paid ads decreases.",
        },
      ],
    },
    ctaButtons: [
      {
        text: "Schedule a Consultation",
        href: "/ContactUs",
      },
      {
        text: "Talk to an Expert",
        href: "/ContactUs",
      },
    ],
  },

  "customer-support": {
    id: "customer-support",
    mainHeading: "Customer Support by Balman Infotech",
    subHeadings: [
      "Providing Exceptional Customer Services Tailored to Your Brand’s Needs",
    ],
    image: "/service/customer.jpeg",
    descriptions: [
      "Balman Infotech Serves your company with the best 24/7 Customer Support Services across calls, mails and chats. Our highly trained customer support executives make sure to deliver customer satisfaction and retention for local and international businesses. Whether you are a Start-up, SME or Enterprise, our customized customer support solutions are designed scale your operation without compromising the brand tone and voice.",
    ],

    leftSideServices: [
      { label: "Organic Growth", path: "/services/organic-growth" },
      { label: "Digital Marketing", path: "/services/digital-marketing" },
      { label: "Branding Services", path: "/services/branding" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Software Development", path: "/services/custom-software-development" }
    ],
    mainCta: {
      text: "Talk to our Experts",
      href: "/ContactUs",
    },

    industries: {
      heading: "Industries We Support",
      items: [
        "E-commerce",
        "Healthcare",
        " Healthcare",
        "Real-estate",
        " Education",
        "IT and SAAS",
        "Startups and SMEs",
      ],
    },
    whyChooseUs: {
      heading: "Why Choose Balman Infotech as your Customer Support Partner?",
      items: [
        "24/7 Customer Support Team",
        "Highly trained Team",
        "Quicker reaction and resolution times",
        "Open reporting and insights",
        "Operations for scalable support",
        "Better Customer Retention ",
      ],
    },
    whySection: {
      title:
        "Why are Customer Support Services important for Business Growth Today?",
      description:
        "Customers are no longer accustomed to long waiting times and non chalant behaviour from a brand. They need answers, quick and solution oriented. They need to feel heard and they need someone answerable for their queries at all time, absence of which results in revenue drainage, wastage of the Customer Acquisition Cost and an overall bad image of the brand.",
      listTitle: "Customer Support helps your business -",
      points: [
        "Improve Brand Image and trust",
        "Increase in Customer Satisfaction",
        "Increase in Customer Retention",
        "Convert support interactions into growth opportunities",
      ],
      footerText:
        "At Balman Infotech, we focus on customer support strategies that directly impact business growth and customer retention.",
      cta: {
        text: "Talk to our Experts",
        href: "/ContactUs",
      },
    },
    accordionData: {
      heading:
        "Complete Customer Support Solutions Designed By Balman Infotech to Grow your Business",
      description: "",
      accordion: [
        {
          title: "Customer Support through Multiple Channels",
          content:
            "Using multiple channels to support your customer helps in preventing customer frustration and ease of contact in case they have a complaint or a query. \n Channels thrush which we provide Customer Support – ",
          items: ["Email support",
            "Live chat support",
            "WhatsApp & messaging apps",
            "Social media support",
            "Phone support",],
        },
        {
          title: "Inbound and Outbound Calls Services",
          content:
            "Inbound Calling services mean when the customers call the brand to satisfy a query, put forward a complaint, but Outbound Calling means when a customer support executive reaches out to a customer. Balman Infotech provides both of these services through our highly trained executives that make sure your brand is heard loud and clear. \n These Services include – ",
          items: ["Query resolution & troubleshooting",
            "Order & account assistance",
            "Follow-ups and callbacks",
            "Feedback collection",
            "Customer retention outreach",]
        },
        {
          title: "Technical Customer Support",
          content:
            "For companies that rely on tech products and services, we offer trained technical customer support executives. \n Services from our Technical Customer support will include – ",
          items: ["Explanation of the usage of the product or the service",
            "Guidance on how to use the Software/App",
            "Issue escalation"],
        },
        {
          title: "Customer Satisfaction and Retention",
          content:
            "We hold our customer's satisfaction and retention as our utmost priority. \n We make sure of these by providing services like:",
          items: ["Onboarding support",
            "Proactive engagement",
            "Renewal & retention support",
            "Customer satisfaction tracking",
            "Long-term relationship management"],
        },
        {
          title: "Email Marketing and Marketing Automation",
          content:
            "We design personalized email campaigns that nurture leads and increase customer lifetime value. \n Our Email marketing services include.",
          items: ["Email Campaign Strategy",
            "Automation workflows",
            "Lead nurturing sequences",
            "Newsletter design",
            "Performance tracking"],
        },
        {
          title: "Conversion Rate Optimization",
          content:
            "Driving Traffic is only half the job. We optimize your website and landing pages to convert visitors into customers. \nOur CRO Services include ",
          items: ["User Behaviour analysis",
            "Funnel Optimization",
            "A/B Testing",
            "Landing Page Optimization",
            "Conversion Tracking"],
        },
      ],
    },
    processSection: {
      mainHeading: "How our Customer Support Setup Works",
      mainDescription:
        "We don’t believe in a one for all strategy system. We work individually with each client to make sure they are satisfied as to how their Support System works.",
      steps: [
        {
          step: "01",
          title: "Understanding Your Customer Support Needs",
          description: "We understand from you, the needs of your business.",
        },
        {
          step: "02",
          title: "Strategy Building",
          description:
            "According to your requirement, we build a strategy that aligns with your needs.",
        },
        {
          step: "03",
          title: "Getting the Team Ready",
          description:
            "We get the perfect team ready for you that aligns with your brand voice and also familiar with the industry jargon.",
        },
        {
          step: "04",
          title: "Working towards Customer Satisfaction",
          description:
            "We manage customer relations while keeping an eye on satisfaction, response time, and resolution rate.",
        },
        {
          step: "05",
          title: "Process Optimization",
          description:
            "As your company expands, we optimise procedures, boost productivity, and help expand operations.",
        },
      ],
    },
    faqs: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Do you offer 24/7 customer support services?",
          answer: "Yes, we offer flexible support models including 24/7 coverage based on business needs.",
        },
        {
          question: "Is customer support a short-term service?",
          answer: "No. Customer support is an ongoing function that evolves with business growth and customer expectations.",
        },
        {
          question: "Will your agents follow our brand tone and guidelines?",
          answer: "Absolutely. All agents are trained on your brand voice, values, and processes.",
        },
        {
          question: "Can customer support really impact revenue?",
          answer: "Yes. Strong customer support improves retention, repeat purchases, and brand loyalty.",
        },


      ],

    },
    ctaButtons: [
      {
        text: "Schedule a Consultation",
        href: "/ContactUs",
      },
      {
        text: "Talk to an Expert",
        href: "/ContactUs",
      },
    ],
  },

  "custom-software-development": {
    id: "custom-software-development",
    mainHeading: "Custom Software Development by Balman Infotech",
    subHeadings: [
      "Build Systems That Scale With Your Business",
    ],
    image: "/heroImgs/webDevelopment.jpeg",
    descriptions: [
      "At Balman Infotech, we develop custom software solutions that help businesses operate at a digitally smarter level. \n Software should not complicate the growth of a company. It should simplify it. \n We have been building software tailored to the company’s operational needs, the ever-increasing industry requirements, and long-term vision. It does not matter if you are a startup building your first internal system or an enterprise trying to adapt with the increasing demands; we are here to be a part of your growth.",
    ],

    leftSideServices: [
      { label: "Organic Growth", path: "/services/organic-growth" },
      { label: "Digital Marketing", path: "/services/digital-marketing" },
      { label: "Branding Services", path: "/services/branding" },
      { label: "Customer Support", path: "/services/customer-support" },
      { label: "Web Development", path: "/services/web-development" },
    ],
    mainCta: {
      text: "Talk to our Experts",
      href: "/ContactUs",
    },


    whyChooseUs: {
      heading: "Why Choose Balman Infotech for Software Development?",
      items: [
        "Experienced software architects and developers",
        "Secure and scalable development practices",
        "Performance-focused system design",
        "Transparent communication and reporting",
        "Long-term maintenance and support",
        "Growth-aligned technology strategy",
      ],
    },
    whySection: {
      title:
        "Why Custom Software Matters",
      description:
        "Off-the-shelf tools can work temporarily. Subscription-based models risk data leakage to third-party applications or software. But growing businesses eventually outgrow the generic solutions.",
      listTitle: "Custom software helps you:",
      points: [
        "Automate manual processes",
        "Reduce operational errors",
        "Improve team efficiency",
        "Centralise business data", "Enhance reporting and decision-making", "Strengthen security and compliance", "Scale without friction"
      ],
      footerText: "At Balman Infotech, we focus on customer support strategies that directly impact business growth and customer retention.",

    },
    accordionData: {
      heading:
        "Our Software Development Services",
      description: "",
      accordion: [
        {
          title: "Custom Business Software Development",
          content:
            "We build software catered specifically for your internal operations, business logic, and growth plans.",
          items: ["System designs driven by processes", "Workflow automation - So that the progress is transparent", "Role-based access systems - So your confidential data is protected, and not everyone has access to everything", "Dashboard and reporting systems- Be on top of the company’s data at anytime", "Cloud-based applications - No fear of losing your data"],
        },
        {
          title: "SaaS Product Development",
          content:
            "Launching a digital product? No worries, we help you design, build, and scale SaaS platforms from their concept to deployment.",
          items: ["MVP development - Complete your Minimum Viable Product with a clear focus",

            "Subscription model integration - No worries regarding payment plans and memberships",

            "Multi-user architecture - Can be used and controlled by multiple people",

            "Secure cloud deployment - Reliable hosting with a strong security sense",
            "Scalable backend infrastructure - Want to grow? No problem, we are here to help you grow without compromising performance."
          ]
        },

        {
          title: "CRM & ERP Solutions",
          content:
            "Manage your operations, customer relationships, and resources efficiently with integrated systems.",
          items: ["Custom CRM development - Your customers and their needs need to be kept in mind first, always!",

            "ERP system integration - Combining all your operations and connecting them in one common space",

            "Inventory and finance management modules - Keep control over all the billing, sales, and miscellaneous finances.",

            "Process automation tools - Minimise human interference and automate work ",

            "Data analytics and reporting dashboards - Make decisions based on Structured Data available on your software"],
        },
        {
          title: "API Development & Integrations",
          content:
            "We connect your systems, so they communicate seamlessly.",
          items: ["Third-party API integrations - Do collaborations with third-party applications seamlessly",
            "Payment gateway integrations - Help your customers pay with the payment mode of their choice",
            "CRM integrations - Sync all the data across platforms for consistency",
            "Marketing automation integration - Align your marketing tools with the backend Secure data exchange solutions - Your data stays safe - Always"
          ],
        },
        {
          title: "Enterprise Software Modernisation",
          content:
            "Outdated systems slow growth. We help modernise legacy software for improved performance and scalability.",
          items: ["System architecture redesign - Build newer pathways and update your old systems.", "Code optimisation - Newer and more efficient resolution with better and faster codes", "Cloud migration - Cloning and transferring all of your data safely and efficiently", "Performance enhancement", "Security upgrades - Better security for your datasets"

          ],
        },
      ],
    },
    processSection: {
      mainHeading: "Our Development Approach",
      mainDescription:
        "At Balman Infotech, we follow a structured, transparent process.",
      steps: [
        {
          step: "01",
          title: "Discovery & Business Analysis",
          description: "We understand your business model, operational workflows,the pain points, and scalability goals.",
        },
        {
          step: "02",
          title: "Architecture & Planning",
          description:
            "We define the technology stack, system architecture, and the final roadmap for development that we’ll be using to cater to your needs.",
        },
        {
          step: "03",
          title: "UI/UX Design",
          description:
            "We design intuitive, user-friendly interfaces aligned with your workflows.",
        },
        {
          step: "04",
          title: "Agile Development",
          description:
            "We build in structured sprints, ensuring flexibility and performance.",
        },
        {
          step: "05",
          title: "Testing & Quality Assurance",
          description:
            "We conduct a rigorous amount of testing for security, seamless performance, and compatibility.",
        },
        // {
        //   step: "06",
        //   title: "Deployment & Support",
        //   description:
        //     "We launch, monitor, and support your software for continuous growth and optimisation too(as you grow). ",
        // },
      ],
      cta: {
        text: "Talk to an Expert",
        href: "/ContactUs",
      },
    },

  },


};
