import { Metadata } from "next";
import AuditForm from "../components/BrandAudit/AuditForm";
import AuditImageSection from "../components/BrandAudit/AuditImageSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar";


export const metadata: Metadata = {
    title: "Brand Audit Services | Balman Infotech - Expert Branding Review",
    description: "Unlock brand clarity with Balman Infotech’s Brand Audit services, in-depth analysis of brand identity, and positioning to strengthen your impact & growth.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function BrandAuditPage() {
    return (
        <div className="bg-[#010101] mt-10 ">

            <Navbar />


            <AuditImageSection />
            <AuditForm />

            <Footer />
        </div>
    );
}

