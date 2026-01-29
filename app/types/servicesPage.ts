

export interface AccordionData {
    heading: string;
    description: string;
    accordion: {
        title: string;
        content: string;
        items?: string[];
    }[];
}
export interface AIMarketingSectionProps {
    data: AIMarketingSection;
}



interface WhySection {
    title: string;
    description: string;
    listTitle?: string;
    points?: string[];
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


export interface BrandingAccordionProps {
    accordionData: AccordionData;
}


export interface ProcessSectionProps {
    data: ProcessSection;
}