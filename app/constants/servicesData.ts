// lib/servicesData.ts

export interface ServiceData {
    id: string;
    mainHeading: string;
    subHeadings: string[];
    descriptions: string[];
    image: string;
    services: string[];
    accordion: {
        title: string;
        content: string;
        items?: string[];
    }[];
    process?: {
        step: string;
        title: string;
        description: string;
    }[];
    industries?: string[];
    faqs?: {
        question: string;
        answer: string;
    }[];
    whyChooseUs?: string[];
}

export const servicesData: Record<string, ServiceData> = {
    branding: {
        id: "branding",
        mainHeading: "Helping You Build a Strong and Memorable Brand",
        subHeadings: ["Brand Strategy & Identity"],
        descriptions: [
            "What makes you remember a company? What makes you think of the red colour when you hear Zomato? How do you remember the virtue of being fit when Nike is mentioned? All of this happened due to strong branding done by the company.\n\nRooting your company with fixed values, voice and vision, branding is what decides how the market and the consumer perceives you. Balman Infotech wants to do exactly that.\n\nWe work with both domestic and foreign clients to develop brands that are not simply aesthetically pleasing but also clear, consistent, and built for long-term growth. \n\nOur customised branding solutions are made to fit your company's objectives, audience expectations, and future scalability, regardless of whether you are a start-up, SME, or corporation."
        ],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
        services: [
            "Brand Strategy & Positioning",
            "Brand Identity Design",
            "Brand Messaging and Voice",
            "Rebranding",
            "Brand Consistency"
        ],
        accordion: [
            {
                title: "Why Is Branding Important?",
                content: "Branding is no longer only about colours and logos in today's cutthroat industry. Customers identify, trust, and choose you based on your brand.\nWhat happens if you already have a brand but it isn't working? Growth can be hampered by ambiguity, inadequate differentiation, erratic communication, and a weak emotional bond.\nAt Balman Infotech, we assist companies in creating brands that are not just aesthetically pleasing but also brands that stand out, communicate clearly, and flourish with assurance."
            },
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
        ],
        process: [
            {
                step: "01",
                title: "Understanding and Discovering Brands",
                description: "We are aware of your company's objectives, target market, and audience."
            },
            {
                step: "02",
                title: "Direction and Brand Strategy",
                description: "We establish messaging, personality, positioning, and strategic direction."
            },
            {
                step: "03",
                title: "Development of Creativity",
                description: "We create communications systems and visual identities that complement the plan."
            },
            {
                step: "04",
                title: "Evaluation and Improvement",
                description: "We preserve brand consistency while refining concepts in response to feedback."
            },
            {
                step: "05",
                title: "Launch and Implementation of the Brand",
                description: "We provide brand guidelines and assist with platform implementation."
            }
        ],
        industries: [
            "E-commerce",
            "Healthcare",
            "Real Estate",
            "Hospitality",
            "Education",
            "IT & SaaS",
            "Startups & SMEs"
        ],
        whyChooseUs: [
            "Data-driven digital marketing strategies",
            "Transparent reporting and communication",
            "Customized campaigns for your business goals",
            "Experience across multiple industries",
            "AI-powered tools with human expertise",
            "Focus on ROI and measurable results"
        ],
        faqs: [
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
        ],

    },

    "digital-marketing": {
        id: "digital-marketing",
        mainHeading: "Boost Your Brand, Traffic & Revenue with Result-Driven Digital Marketing",
        subHeadings: ["Strategic Digital Growth"],
        descriptions: [
            "We are a service-driven digital marketing agency helping businesses attract strategy, growth, and measurable growth for local and international businesses.\n\nWhether you are a Start-up, SME or Enterprise, our customized digital marketing solutions are designed to attract the right audience and deliver real results.\n\nOur expert team combines creativity with data-driven insights to build campaigns that don't just reach people—they convert them."
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        services: [
            "Search Engine Optimization (SEO)",
            "Pay Per Click Advertising (PPC)",
            "Social Media Marketing (SMM)",
            "Content Marketing",
            "Email Marketing and Automation",
            "Conversion Rate Optimization"
        ],
        accordion: [
            {
                title: "Why Choose Balman Infotech as your Online Marketing Partner?",
                content: "At Balman Infotech, we focus on digital marketing strategies that directly impact business growth, not vanity metrics.",
                items: [
                    "Data-led Success Model",
                    "A no-barrier stance",
                    "Transparent results and reports",
                    "Customised marketing processes",
                    "Customised digital marketing strategies",
                    "AI-assisted reach with human expertise"
                ]
            },
            {
                title: "Why is Digital Marketing Important for Business Growth Today?",
                content: "Most businesses no longer go through traditional selling alone. They research, compare and make decisions online. However, if your brand is not visible across digital channels, you are losing opportunities every day.\n\nDigital Marketing helps your business:\n• Increase brand awareness and trust\n• Generate conversion leads and sales\n• Engage audiences in meaningful ways\n• Scaling marketing efforts cost-effectively"
            }
        ],
        process: [
            {
                step: "01",
                title: "Business and Market Understanding",
                description: "We understand your business goals, audience, competitors and the industry landscape."
            },
            {
                step: "02",
                title: "Strategy and Channel Planning",
                description: "We select the right online channels and create a custom multi-channel marketing roadmap."
            },
            {
                step: "03",
                title: "Campaign Setup and Optimization",
                description: "We launch and optimize campaigns across SEO, PPC, Social Media and Content platforms."
            },
            {
                step: "04",
                title: "Performance Tracking and Analysis",
                description: "We monitor traffic, leads, conversions and ROI with advanced analytics tools."
            },
            {
                step: "05",
                title: "Continuous Improvement & Scaling",
                description: "We refine strategies, scale winning campaigns and adapt to market changes."
            }
        ],
        industries: [
            "E-commerce",
            "Healthcare",
            "Real Estate",
            "Hospitality",
            "Education",
            "IT and SaaS",
            "Startups and SMEs"
        ],
        faqs: [
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
        ],
        whyChooseUs: [
            "Data-driven digital marketing strategies",
            "Transparent reporting and communication",
            "Customized campaigns for your business goals",
            "Experience across multiple industries",
            "AI-powered tools with human expertise",
            "Focus on ROI and measurable results"
        ]
    },

    // Add more services here following the same structure
    "web-development": {
        id: "web-development",
        mainHeading: "Custom Web Development Solutions for Modern Businesses",
        subHeadings: ["Scalable & Secure Web Solutions"],
        descriptions: [
            "We build fast, secure, and scalable websites and web applications that drive business growth.\n\nFrom corporate websites to complex web platforms, our development team creates solutions that combine cutting-edge technology with exceptional user experience.\n\nWhether you need a simple landing page or a complex enterprise application, we deliver custom web solutions tailored to your specific business needs."
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
        services: [
            "Corporate Website Development",
            "E-commerce Development",
            "Custom Web Applications",
            "CMS Development",
            "API Development & Integration",
            "Web Maintenance & Support"
        ],
        accordion: [],
        industries: [
            "E-commerce",
            "Healthcare",
            "Real Estate",
            "Education",
            "IT & SaaS",
            "Finance"
        ],
        whyChooseUs: [
            "Modern technology stack",
            "Responsive & mobile-first design",
            "SEO-optimized development",
            "Ongoing support and maintenance",
            "Agile development process"
        ]
    },

    "organic-growth": {
        id: "organic-growth",
        mainHeading: "Sustainable Organic Growth Strategies",
        subHeadings: ["Long-term Business Growth"],
        descriptions: [
            "We help businesses achieve sustainable growth through organic marketing strategies that build lasting customer relationships.\n\nOur organic growth services focus on creating valuable content, building brand authority, and establishing long-term market presence.\n\nWe combine SEO, content marketing, and community building to drive qualified traffic and conversions without paid advertising."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        services: [
            "SEO Strategy & Implementation",
            "Content Marketing",
            "Community Building",
            "Influencer Partnerships",
            "PR & Media Relations",
            "Organic Social Media Growth"
        ],
        accordion: [],
        industries: [
            "E-commerce",
            "B2B SaaS",
            "Healthcare",
            "Education",
            "Lifestyle Brands"
        ],
        whyChooseUs: [
            "Sustainable growth strategies",
            "No dependency on paid ads",
            "Long-term ROI focus",
            "Authority building",
            "Community-driven approach"
        ]
    },

    "customer-support": {
        id: "customer-support",
        mainHeading: "24/7 Customer Support Services",
        subHeadings: ["Excellence in Customer Experience"],
        descriptions: [
            "We provide round-the-clock customer support services that enhance customer satisfaction and loyalty.\n\nOur trained support team handles customer inquiries, technical issues, and service requests with professionalism and efficiency.\n\nFrom live chat to phone support, we offer multi-channel customer service solutions that keep your customers happy and your business running smoothly."
        ],
        image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=400&fit=crop",
        services: [
            "24/7 Live Chat Support",
            "Phone Support",
            "Email Support",
            "Technical Support",
            "Customer Service Training",
            "Help Desk Management"
        ],
        accordion: [],
        industries: [
            "E-commerce",
            "SaaS",
            "Healthcare",
            "Financial Services",
            "Telecommunications"
        ],
        whyChooseUs: [
            "24/7 availability",
            "Multi-channel support",
            "Trained professionals",
            "Quick response times",
            "Scalable solutions"
        ]
    }
};