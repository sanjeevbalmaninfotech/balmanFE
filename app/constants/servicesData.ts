// lib/servicesData.ts

import { ServiceData } from "../types/servicesPage";



export const servicesData: Record<string, ServiceData> = {
    "branding": {
        id: "branding",
        mainHeading: "Branding by Balman Infotech",
        subHeadings: ["Helping You Build a Strong and  Memorable Brand"],
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
            text: "Talk to an Expert",
            href: "/contact-us"
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
                , {
                    title: "Rebranding",
                    content: "We assist companies that are changing or repositioning in aligning their brand identity with their new objectives.",
                    items: []
                },
                {
                    title: "Brand Consistency",
                    content: "We make sure your brand is applied uniformly on every platform.",
                    items: []
                }
            ]
        },
        whySection: {
            title: "Why Is Branding Important?",
            description:
                "Branding is no longer only about colours and logos in today's cutthroat industry. Customers identify, trust, and choose you based on your brand.\n What happens if you already have a brand but it isn't working? \n  Growth can be hampered by ambiguity, inadequate differentiation, erratic communication, and a weak emotional bond. At Balman Infotech, we assist companies in creating brands that are not just aesthetically pleasing but also brands that stand out, communicate clearly, and flourish with assurance.",
            listTitle: "",
            // points: ["", "", ""],
            footerText:
                "At Balman Infotech, we focus on digital marketing strategies that directly impact business growth, not vanity metrics."
        },
        whyChooseUs: {
            heading: "Why Choose Balman as Your Branding Partner?",
            items: [
                "Skilled and experienced software, web, and app developers",
                "Secure and scalable development methods",
                "Technical solutions that focus on Efficiency",
                "Open and honest reporting and communication",
                "Long-term upkeep and assistance",
                "Experienced across multiple industries"
            ]
        },
        processSection: {
            mainHeading: "Branding Process",
            mainDescription: "",
            steps: [
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
                    title: "Launch & Implementation of the Brand",
                    description: "We provide brand guidelines and assist with platform implementation."
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
                    question: "Is branding a one-time activity?",
                    answer: "Branding evolves as businesses grow. Periodic refinement ensures relevance and consistency."
                },
                {
                    question: "How long does a branding project take?",
                    answer: "Timelines vary, but most branding projects take 4-8 weeks depending on scope."
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
            text: "Talk to one of our Marketing Experts",
            href: "/contact-us"
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
        mainHeading: "Web Development Balman Infotech",
        subHeadings: ["Build Scalable and User Friendly Websites, Apps and Softwares"],
        descriptions: [
            "Balman Infotech strives to support businesses in their technological advancements with our end-to-end support in website, app and software development catering to your business needs. \n\nWe help businesses design and develop technology solutions that will help both, local and international clients scale and increase their operational efficiency. \n\n Our tailored development solutions are made to fit your company's objectives, user requirements, and future scalability, regardless of whether you are a start-up, SME, or enterprise."
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
            text: "Talk to a Development Expert",
            href: "/contact-us"
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
        whyChooseUs: {
            heading: "Why Choose Balman as Your Web Development Partner?",
            items: [
                "Skilled and experienced software, web, and app developers",
                "Secure and scalable development methods",
                "Technical solutions that focus on Efficiency",
                "Open and honest reporting and communication",
                "Long-term upkeep and assistance",
                "Experienced across multiple industries"
            ]
        }

        , whySection: {
            title: "Why are Customer Support Services important for Business Growth Today?",
            description: "Customer Support helps your business -",
            points: [
                "Improve Brand Image and trust",
                "Increase in Customer Satisfaction",
                "Increase in Customer Retention",
                "Convert support interactions into growth opportunities"
            ],
            footerText:
                "At Balman Infotech, we focus on customer support strategies that directly impact business growth and customer retention."
        },

        accordionData: {
            heading: "Complete Customer Support Solutions Designed By Balman Infotech to Grow your Business",
            description: "",
            accordion: [
                {
                    title: "Customer Support through Multiple Channels",
                    content: "Using multiple channels to support your customer helps in preventing customer frustration and ease of contact in case they have a complaint or a query.",
                    items: []
                },
                {
                    title: "Inbound and Outbound Calls Services",
                    content: "Inbound Calling services mean when the customers call the brand to satisfy a query, put forward a complaint, but Outbound Calling means when a customer support executive reaches out to a customer. Balman Infotech provides both of these services through our highly trained executives that make sure your brand is heard loud and clear.",

                },
                {
                    title: "Technical Customer Support",
                    content: "For companies that rely on tech products and services, we offer trained technical customer support executives.",
                    items: []
                }, {
                    title: "Customer Satisfaction and Retention",
                    content: "We hold our customer’s satisfaction and retention as our utmost priority. We make sure of these by providing services like:",
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

        processSection: {
            mainHeading: "Our Web, App & Software Development Process",
            mainDescription: "We use an organised and open development process at Balman Infotech.",
            steps: [
                {
                    step: "01",
                    title: "Business Analysis and Requirements",
                    description: "We get  aware of your objectives, users, technical specifications, and scalability requirements."
                },
                {
                    step: "02",
                    title: "Architecture Design and Planning",
                    description: "We specify the development roadmap, system architecture, and technology stack."
                },
                {
                    step: "03",
                    title: "Design & Development",
                    description: "In structured development phases, we create functionality and design interfaces."
                },
                {
                    step: "04",
                    title: "Quality Assurance and Checking",
                    description: "We test usability, compatibility, security, and performance."
                },
                {
                    step: "05",
                    title: "Support & Scaling",
                    description: "We launch, oversee, manage, and expand your digital product as your company expands."
                }
            ]
        },
        faqs: {
            heading: "Frequently Asked Questions",
            items: [
                {
                    question: "Do you build scalable and secure applications?",
                    answer: "Yes, scalability and security are built into our development process from the start."
                },
                {
                    question: "Can you work with international clients?",
                    answer: "Yes, we develop digital products for international clients."
                },
                {
                    question: "Do you provide post-launch support?",
                    answer: "Yes, we offer ongoing maintenance, updates, and performance optimization."
                },
                {
                    question: "Is development a one-time service?",
                    answer: "No, digital products require regular updates and maintenance."
                },

            ]
        },
        ctaButtons: [
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

    "organic-growth": {
        id: "organic-growth",
        mainHeading: "Organic Growth by Balman Infotech",
        subHeadings: ["Sustainable Organic Growth That Builds Authority, Traffic and Revenue"],
        descriptions: [
            "Balman Infotech helps businesses achieve long-term business growth through strategic SEO, Content, Digital PR and Performance Optimization. Unlike short-term paid tactics, organic growth focuses on building trust, visibility, and consistent results without depending on ads.\n\n\n Our Organic Growth Strategies are designed to increase search visibility, attract the right audience and convert traffic into measurable business outcomes, locally and globally"
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
            text: "Speak with a Growth Strategist",
            href: "/contact-us"
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
                "Start-ups and SME's "
            ]
        },
        whyChooseUs: {
            heading: "Why Choose Balman Infotech for Organic Growth?",
            items: [
                "SEO + Content + Authority Expertise",
                "ROI-driven organic planning",
                "Transparent reporting and milestones",
                "Ai-powered insights with human strategy",
                "Long-term, sustainable growth focus",
                "AI-powered tools with human expertise"
            ]
        }, whySection: {
            title: "Understanding Organic Growth and Its Impact",
            description:
                "Organic Growth refers to increasing your brand’s visibility, traffic and revenue naturally through search engines, content and brand authority, without relying heavily on paid ads.",
            listTitle: "Our Organic Growth Helps Your Businesses",
            points: [
                "Build long-term brand credibility",
                "Reduce customer acquisition cost",
                "Generate consistent, high-quality leads",
                "Improve search engine trust and authority",
                "Scale sustainably over time"
            ],
            footerText:
                "At Balman Infotech, we focus on organic strategies that compound results month after month."
        },

        accordionData: {
            heading: "Our Organic Growth Services – Built for Long-term success",
            description: "",
            accordion: [
                {
                    title: "Organic SEO Growth Strategy",
                    content: "We create comprehensive SEO growth strategies focused on rankings, traffic quality and conversions.",
                    items: []
                },
                {
                    title: "Content Lead Growth",
                    content: "High-quality content is the backbone of content growth. We build a tropical authority that search engines as well as users trust.",

                },
                {
                    title: "Authority Building and Digital PR",
                    content: "We strengthen your brand's online authority through ethical off-page strategies that include:",
                    items: []
                }, {
                    title: "Local Organic Growth",
                    content: "For locally based businesses, we drive organic visibility through Local SEO. Our Local Organic Growth Services include:",
                    items: []
                },
                {
                    title: "Organic Conversion Optimization",
                    content: "Traffic alone doesn't grow business. We optimize your users’ journey to convert visitors into leads and customers with the help of.",
                    items: []
                },

            ]
        },
        aiSection: {
            mainHeading: "How do we use AI for organic growth?",
            description: "Search engines now rely heavily on AI-driven algorithms and AI-overviews. At Balman Infotech, we align organic growth strategies with modern AI-based search behaviour.",
            subSections: [

                {
                    subHeading: "",
                    description: "",
                    bulletPoints: [
                        {
                            title: "AI-based Search Intent and Topic analysis",
                            description: "We analyse what users and AI-powered search engines expect to see for each topic. Content Optimized for AI overviews and featured snippets",
                            //subPoints: ["",]
                        },
                        {
                            title: "We structure content for:",
                            description: "Various platforms like Google AI Overviews, Featured Snippets, Voice Search, Semantic and entity-based SEO"
                        },
                        {
                            title: "Predictive Growth Insights",
                            description: "AI tools help us forecast content opportunities and ranking trends before competitors."
                        },
                        {
                            title: "Human Strategy + AI Intelligence",
                            description: "AI supports research and optimization, while our experts guide strategy, creativity and trust-building."
                        }
                    ]
                }
            ]
        },

        processSection: {
            mainHeading: "Our Organic Growth Work Process",
            mainDescription: "We follow a proven, scalable framework to deliver consistent organic results.",
            steps: [
                {
                    step: "01",
                    title: "Business and Growth Audit",
                    description: "We analyse your website, brand authority, competitors and growth gaps."
                },
                {
                    step: "02",
                    title: "Growth Strategy and Roadmap",
                    description: "We build a customized organic growth plan aligned with the business goals."
                },
                {
                    step: "03",
                    title: "SEO and Content Execution",
                    description: "We implement SEO fixes, create authority content, and optimize existing assets."
                },
                {
                    step: "04",
                    title: "Authority and Trust Building",
                    description: "We strengthen backlinks, mentions and brand signals."
                },
                {
                    step: "05",
                    title: "Performance Tracking and Optimization",
                    description: "We track traffic, rankings, conversions, and continuously refine strategies."
                }
            ]
        },
        faqs: {
            heading: "Frequently Asked Questions",
            items: [
                {
                    question: "How long does organic growth take?",
                    answer: "Organic growth typically shows strong results within 3-6 months and compounds over time."
                },
                {
                    question: "Does organic growth include SEO?",
                    answer: "Yes, SEO is a core component, along with content, authority, and conversion Optimization. "
                },
                {
                    question: "Is organic growth better than paid marketing?",
                    answer: "Organic-growth delivers long-term ROI, while paid marketing delivers immediate results. However, the best strategy often combines both."
                },
                {
                    question: "Can Organic growth reduce ad spend?",
                    answer: "Yes, as organic visibility improves, dependency on paid ads decreases."
                },

            ]
        },
        ctaButtons: [
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