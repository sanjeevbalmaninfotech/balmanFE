import { Metadata } from "next";
import HeroImage from "../components/careers/HeroImage";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar";

export const metadata: Metadata = {
    title: "Careers at Balman Infotech - Join Our Branding & Digital Team",
    description: "Explore career opportunities at Balman Infotech, grow your skills in branding, digital marketing, tech strategy, and creative services. Apply now.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function CareersPage() {
    return (
        <>
            <Navbar />
            <div className="mt-5 lg:mt-12">
                <HeroImage />
            </div>
            <Footer />
        </>
    );
}
