// lib/servicesData.ts

export interface AccordionData {
    heading: string;
    description: string;
    accordion: {
        title: string;
        content: string;
        items?: string[];
    }[];
}

interface WhySection {
    title: string;
    description: string;
    listTitle?: string;
    points: string[];
    footerText?: string;
}

interface ServiceItem {
    label: string;
    path: string;
}

export interface ProcessSection {
    mainHeading: string;
    mainDescription: string;
    steps: {
        step: string;
        title: string;
        description: string;
    }[];
}

export interface AIMarketingSection {
    mainHeading: string;
    description: string;
    subSections: {
        subHeading: string;
        description: string;
        bulletPoints?: {
            title: string;
            description: string;
            subPoints?: string[];
        }[];
    }[];
}
export interface ServiceData {
    id: string;
    mainHeading: string;
    subHeadings: string[];
    descriptions: string[];
    image: string;
    leftSideServices: ServiceItem[];
    accordionData?: AccordionData; // NEW: Added for accordion with heading/description
    aiSection?: AIMarketingSection;
    // accordion?: {
    //     title: string;
    //     content: string;
    //     items?: string[];
    // }[];
    processSection?: ProcessSection;
    industries?: {
        heading: string;
        items: string[];
    };
    faqs?: {
        heading: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
    whyChooseUs?: {
        heading: string;
        items: string[];
    };
    whySection?: WhySection;
    ctaButtons?: {
        text: string;
        href: string;
    }[];
    mainCta?: {
        text: string;
        href: string;
    };
}

export const servicesData: Record<string, ServiceData> = {
    "branding": {
        id: "branding",
        mainHeading: "Helping You Build a Strong and Memorable Brand",
        subHeadings: ["Brand Strategy & Identity"],
        descriptions: [
            "What makes you remember a company? What makes you think of the red colour when you hear Zomato? How do you remember the virtue of being fit when Nike is mentioned? All of this happened due to strong branding done by the company. Rooting your company with fixed values, voice and vision, branding is what decides how the market and the consumer perceives you. Balman Infotech wants to do exactly that.\n\n \n We work with both domestic and foreign clients to develop brands that are not simply aesthetically pleasing but also clear, consistent, and built for long-term growth. Our customised branding solutions are made to fit your company's objectives, audience expectations, and future scalability, regardless of whether you are a start-up, SME, or corporation."
        ],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
        leftSideServices: [
            { label: "Organic Growth", path: "/services/organic-growth" },
            { label: "Digital Marketing", path: "/services/digital-marketing" },
            { label: "Branding Services", path: "/services/branding" },
            { label: "Web Development", path: "/services/web-development" },
            { label: "Customer Support", path: "/services/customer-support" }
        ],
        mainCta: {
            text: "Talk to a Branding Expert 1",
            href: "/contact-us"
        },
        aiSection: {
            mainHeading: "AI-Powered Digital Marketing Overview – Smarter Marketing Decisions",
            description: "Digital Marketing is rapidly evolving with AI-driven platforms and algorithms. At Balman Infotech, we use AI-powered tools combined with human strategy to improve efficiency, accuracy and results.",
            subSections: [
                {
                    subHeading: "How do we use AI in Digital Marketing?",
                    description: "Our Urgent Care Centre is staffed by an exceptional mix of senior Emergency Medicine consultants and registrars, alongside experienced GPs, nurses and HCAs. This breadth of expertise means you're always seen by a professional suited to your condition - day or night."
                },
                {
                    subHeading: "AI-Based Audience and Keyword Analysis?",
                    description: "We analyse user behaviour, interests, demographics and search intent to target high-converting audiences.",
                    bulletPoints: [
                        {
                            title: "AI-Optimized Content and Ads",
                            description: "Our content and ad creatives are optimized for –",
                            subPoints: [
                                "Search Engines and AI-driven results",
                                "Social Media algorithms",
                                "Personalization and Engagement"
                            ]
                        },
                        {
                            title: "Predictive Campaign Performance",
                            description: "AI helps us forecast trends, identify winning campaigns, and optimize budgets before performance drops."
                        },
                        {
                            title: "Automation with Human Control",
                            description: "We use AI for automation and efficiency, while our experts ensure brand consistency, ethics and strategic alignment."
                        }
                    ]
                }
            ]
        },
        accordionData: {
            heading: "Branding Solutions by Balman Infotech",
            description: "We create quick, responsive, conversion-focused websites that effectively engage users and represent your business. The services that we offer include:",
            accordion: [
                {
                    title: "Brand Strategy & Positioning",
                    content: "To guarantee clarity and consistency over all touchpoints, we establish the core of your brand.",
                    items: [
                        "Brand discovery & research",
                        "Market and competitor analysis",
                        "Brand positioning & differentiation",
                        "Brand purpose, mission & vision",
                        "Target audience definition"
                    ]
                },
                {
                    title: "Brand Identity Design",
                    content: "We design graphic identities that capture the essence of your brand.",
                    items: [
                        "Logo design & visual systems",
                        "Colour palette & typography",
                        "Brand style guidelines",
                        "Iconography & visual elements",
                        "Brand consistency frameworks"
                    ]
                },
                {
                    title: "Brand Messaging and Voice",
                    content: "Your writing is just as important as your appearance. We create messages that connect and foster confidence.",
                    items: [
                        "Brand tone & voice development",
                        "Key messaging frameworks",
                        "Taglines & brand statements",
                        "Website & communication copy direction",
                        "Internal brand communication guidelines"
                    ]
                }
            ]
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
                "Scale marketing efforts cost-effectively"
            ],
            footerText:
                "At Balman Infotech, we focus on digital marketing strategies that directly impact business growth, not vanity metrics."
        },
        whyChooseUs: {
            heading: "Why Choose Balman as Your Branding Partner?",
            items: [
                "Data-driven digital marketing strategies",
                "Transparent reporting and communication",
                "Customized campaigns for your business goals",
                "Experience across multiple industries",
                "AI-powered tools with human expertise",
                "Focus on ROI and measurable results"
            ]
        },
        processSection: {
            mainHeading: "Our Digital Marketing Work Process",
            mainDescription: "At Balman Infotech, we follow structural as well as transparent process to deliver consistent results.",
            steps: [
                {
                    step: "01",
                    title: "Business and Market Understanding",
                    description: "We understand your business goals, audience, competitors and industry landscape."
                },
                {
                    step: "02",
                    title: "Strategy and Channel Planning",
                    description: "We select the right online channel and create a customized marketing roadmap."
                },
                {
                    step: "03",
                    title: "Campaign Setup and Optimization",
                    description: "We launch and optimize campaigns across SEO, PPC, social media and content platforms."
                },
                {
                    step: "04",
                    title: "Performance Tracking and AnalyticsP",
                    description: "We monitor traffic, leads, conversions, and ROI using advanced analytics tools."
                },
                {
                    step: "05",
                    title: "Continuous Improvement & Scaling",
                    description: "We refine strategies, scale winning campaigns and adapt to market changes."
                }
            ]
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
                "Startups & SMEs"
            ]
        },
        faqs: {
            heading: "Frequently Asked Questions",
            items: [
                {
                    question: "What is included in branding services?",
                    answer: "Branding includes strategy, visual identity, messaging, and guidelines to ensure consistency across platforms."
                },
                {
                    question: "Is branding only for new businesses?",
                    answer: "No. Branding is equally important for growing and established businesses looking to reposition or scale."
                },
                {
                    question: "How long does a branding project take?",
                    answer: "Timelines vary, but most branding projects take 4–8 weeks depending on scope."
                },
                {
                    question: "Will branding help business growth?",
                    answer: "Yes. Strong branding improves recognition, trust, conversions, and long-term loyalty."
                },
                {
                    question: "Is branding a one-time activity?",
                    answer: "Branding evolves as businesses grow. Periodic refinement ensures relevance and consistency."
                }
            ]
        },
        ctaButtons: [
            {
                text: "Request a Free Brand Audit",
                href: "/contact-us"
            },
            {
                text: "Schedule a Strategy Call Today",
                href: "/contact-us"
            }
        ]
    },

    "digital-marketing": {
        id: "digital-marketing",
        mainHeading: "Digital Marketing Balman Infotech",
        subHeadings: ["Strategic Digital Growth"],
        descriptions: [
            "Balman Infotech is a full-service digital marketing agency helping businesses build strong online visibility, generate qualified leads and scale revenue in complex markets. Our digital marketing strategies combine data, creativity and AI-powered insights to deliver measurable growth for local and international businesses. Whether you are a Start-up, SME or Enterprise, our customized digital marketing solutions are designed to attract the right audience and convert them into loyal customers."
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        leftSideServices: [
            { label: "Organic Growth", path: "/services/organic-growth" },
            { label: "Digital Marketing", path: "/services/digital-marketing" },
            { label: "Branding Services", path: "/services/branding" },
            { label: "Web Development", path: "/services/web-development" },
            { label: "Customer Support", path: "/services/customer-support" }
        ],
        mainCta: {
            text: "Talk to a Branding Expert 2",
            href: "/contact-us"
        },
        aiSection: {
            mainHeading: "AI-Powered Digital Marketing Overview – Smarter Marketing Decisions",
            description: "Digital Marketing is rapidly evolving with AI-driven platforms and algorithms. At Balman Infotech, we use AI-powered tools combined with human strategy to improve efficiency, accuracy and results.",
            subSections: [
                {
                    subHeading: "How do we use AI in Digital Marketing?",
                    description: "Our Urgent Care Centre is staffed by an exceptional mix of senior Emergency Medicine consultants and registrars, alongside experienced GPs, nurses and HCAs. This breadth of expertise means you're always seen by a professional suited to your condition - day or night."
                },
                {
                    subHeading: "AI-Based Audience and Keyword Analysis?",
                    description: "We analyse user behaviour, interests, demographics and search intent to target high-converting audiences.",
                    bulletPoints: [
                        {
                            title: "AI-Optimized Content and Ads",
                            description: "Our content and ad creatives are optimized for –",
                            subPoints: [
                                "Search Engines and AI-driven results",
                                "Social Media algorithms",
                                "Personalization and Engagement"
                            ]
                        },
                        {
                            title: "Predictive Campaign Performance",
                            description: "AI helps us forecast trends, identify winning campaigns, and optimize budgets before performance drops."
                        },
                        {
                            title: "Automation with Human Control",
                            description: "We use AI for automation and efficiency, while our experts ensure brand consistency, ethics and strategic alignment."
                        }
                    ]
                }
            ]
        },
        accordionData: {
            heading: "Complete Digital Marketing Solutions Designed By Balman Infotech to Grow your Business",
            description: "",
            accordion: [
                {
                    title: "Search Engine Optimization (SEO)",
                    content: "We improve your website visibility on search engines to drive long-term, high-quality organic traffic.",
                    items: []
                },
                {
                    title: "Pay Per Click Advertising (PPC)",
                    content: "Our PPC experts create and manage high-performing paid ad campaigns that deliver instant visibility and leads.",

                },
                {
                    title: "Social Media Marketing (SMM)",
                    content: "We help brands build strong relationships with their audience through strategic social media marketing.",
                    items: []
                }, {
                    title: "Content Marketing",
                    content: "Content is the foundation of online growth and success. We create content that attracts, educates and converts.",
                    items: []
                },
                {
                    title: "Email Marketing and Marketing Automation",
                    content: "We design personalized email campaigns that nurture leads and increase customer lifetime value. Our Email marketing services include.",
                    items: []
                }, {
                    title: "Conversion Rate Optimization",
                    content: "Driving Traffic is only half the job. We optimize your website and landing pages to convert visitors into customers.",
                    items: []
                }

            ]
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
                "Scale marketing efforts cost-effectively"
            ],
            footerText:
                "At Balman Infotech, we focus on digital marketing strategies that directly impact business growth, not vanity metrics."
        },

        processSection: {
            mainHeading: "Our Digital Marketing Work Process",
            mainDescription: "At Balman Infotech, we follow structural as well as transparent process to deliver consistent results.",
            steps: [
                {
                    step: "01",
                    title: "Business and Market Understanding",
                    description: "We understand your business goals, audience, competitors and industry landscape."
                },
                {
                    step: "02",
                    title: "Strategy and Channel Planning",
                    description: "We select the right online channel and create a customized marketing roadmap."
                },
                {
                    step: "03",
                    title: "Campaign Setup and Optimization",
                    description: "We launch and optimize campaigns across SEO, PPC, social media and content platforms."
                },
                {
                    step: "04",
                    title: "Performance Tracking and AnalyticsP",
                    description: "We monitor traffic, leads, conversions, and ROI using advanced analytics tools."
                },
                {
                    step: "05",
                    title: "Continuous Improvement & Scaling",
                    description: "We refine strategies, scale winning campaigns and adapt to market changes."
                }
            ]
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
                "Startups and SMEs"
            ]
        },
        faqs: {
            heading: "Digital Marketing FAQs",
            items: [
                {
                    question: "How long do digital marketing return takes to show up?",
                    answer: "PPC and Social can show immediate results, while SEO and Content Marketing typically take 3-6 months for meaningful growth."
                },
                {
                    question: "Will digital marketing help increase sales?",
                    answer: "Yes, with smart mix of on-brand quality, conversions and retargeting."
                },
                {
                    question: "Do you offer local and international digital marketing services?",
                    answer: "Yes, we run both local and international digital marketing campaigns."
                },
                {
                    question: "Is digital marketing a one-time activity?",
                    answer: "No, digital marketing requires continuous optimization and adaptation to platform updates and campaigns."
                }
            ]
        },
        whyChooseUs: {
            heading: "Why Choose Balman Infotech as your Online Marketing Partner?",
            items: [
                "Dedicated Account Manager",
                "ROI-focused approach",
                "Transparent reporting and insights",
                "Experienced Marketing professionals",
                "Customized digital marketing strategies",
                "AI-powered tools with human expertise"
            ]
        }, ctaButtons: [
            {
                text: "Request a Free Marketing Consultant",
                href: "/contact-us"
            },
            {
                text: "Schedule a Strategy Call Today",
                href: "/contact-us"
            }
        ]
    },

    "web-development": {
        id: "web-development",
        mainHeading: "Custom Web Development Solutions for Modern Businesses",
        subHeadings: ["Scalable & Secure Web Solutions"],
        descriptions: [
            "We build fast, secure, and scalable websites and web applications that drive business growth.\n\nFrom corporate websites to complex web platforms, our development team creates solutions that combine cutting-edge technology with exceptional user experience.\n\nWhether you need a simple landing page or a complex enterprise application, we deliver custom web solutions tailored to your specific business needs."
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
        leftSideServices: [
            { label: "Organic Growth", path: "/services/organic-growth" },
            { label: "Digital Marketing", path: "/services/digital-marketing" },
            { label: "Branding Services", path: "/services/branding" },
            { label: "Web Development", path: "/services/web-development" },
            { label: "Customer Support", path: "/services/customer-support" }
        ],
        mainCta: {
            text: "Talk to a Branding Expert 3",
            href: "/contact-us"
        },
        industries: {
            heading: "Industries We Serve",
            items: [
                "E-commerce",
                "Healthcare",
                "Real Estate",
                "Education",
                "IT & SaaS",
                "Finance"
            ]
        },
        whyChooseUs: {
            heading: "Why Choose Balman for Web Development?",
            items: [
                "Modern technology stack",
                "Responsive & mobile-first design",
                "SEO-optimized development",
                "Ongoing support and maintenance",
                "Agile development process"
            ]
        }
    },

    "organic-growth": {
        id: "organic-growth",
        mainHeading: "Sustainable Organic Growth Strategies",
        subHeadings: ["Long-term Business Growth"],
        descriptions: [
            "We help businesses achieve sustainable growth through organic marketing strategies that build lasting customer relationships.\n\nOur organic growth services focus on creating valuable content, building brand authority, and establishing long-term market presence.\n\nWe combine SEO, content marketing, and community building to drive qualified traffic and conversions without paid advertising."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        leftSideServices: [
            { label: "Organic Growth", path: "/services/organic-growth" },
            { label: "Digital Marketing", path: "/services/digital-marketing" },
            { label: "Branding Services", path: "/services/branding" },
            { label: "Web Development", path: "/services/web-development" },
            { label: "Customer Support", path: "/services/customer-support" }
        ],
        mainCta: {
            text: "Talk to a Branding Expert 4",
            href: "/contact-us"
        },
        industries: {
            heading: "Industries We Specialize In",
            items: [
                "E-commerce",
                "B2B SaaS",
                "Healthcare",
                "Education",
                "Lifestyle Brands"
            ]
        },
        whyChooseUs: {
            heading: "Why Partner With Us for Organic Growth?",
            items: [
                "Sustainable growth strategies",
                "No dependency on paid ads",
                "Long-term ROI focus",
                "Authority building",
                "Community-driven approach"
            ]
        }
    },

    "customer-support": {
        id: "customer-support",
        mainHeading: "24/7 Customer Support Services",
        subHeadings: ["Excellence in Customer Experience"],
        descriptions: [
            "We provide round-the-clock customer support services that enhance customer satisfaction and loyalty.\n\nOur trained support team handles customer inquiries, technical issues, and service requests with professionalism and efficiency.\n\nFrom live chat to phone support, we offer multi-channel customer service solutions that keep your customers happy and your business running smoothly."
        ],
        image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=400&fit=crop",
        leftSideServices: [
            { label: "Organic Growth", path: "/services/organic-growth" },
            { label: "Digital Marketing", path: "/services/digital-marketing" },
            { label: "Branding Services", path: "/services/branding" },
            { label: "Web Development", path: "/services/web-development" },
            { label: "Customer Support", path: "/services/customer-support" }
        ],
        mainCta: {
            text: "Talk to a Customer Support Expert",
            href: "/contact-us"
        },

        industries: {
            heading: "Industries We Support",
            items: [
                "E-commerce",
                "SaaS",
                "Healthcare",
                "Financial Services",
                "Telecommunications"
            ]
        },
        whyChooseUs: {
            heading: "Why Choose Our Customer Support Services?",
            items: [
                "24/7 availability",
                "Multi-channel support",
                "Trained professionals",
                "Quick response times",
                "Scalable solutions"
            ]
        }
    }
};