import dynamic from 'next/dynamic';
import HeroSection from "../components/homePage/HeroSection";
import AboutSection from "../components/homePage/AboutSection";
import FounderSection from "../components/homePage/FounderSection";
import BrandAnalysisCTA from "../components/homePage/BrandAnalysisCTA";
import FAQSection from "../components/homePage/FAQSection";
import Footer from "../components/footer/Footer";
import PrivacyModal from "../components/PrivacyPolicy/PrivacyModal";

// Lazy load heavy client components (below the fold) for code splitting
const ServicesCards = dynamic(() => import("../components/homePage/ServicesCards"));
const TeamLeadsSection = dynamic(() => import("../components/homePage/TeamLeadsSection"));
const NewsletterSection = dynamic(() => import("../components/homePage/NewsletterSection"));


export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesCards />
            <FounderSection />
            <BrandAnalysisCTA />
            <TeamLeadsSection />
            <FAQSection />
            <NewsletterSection />
            <Footer />
            <PrivacyModal />
        </div>
    );
}