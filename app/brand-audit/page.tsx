import AuditForm from "../components/BrandAudit/AuditForm";
import AuditImageSection from "../components/BrandAudit/AuditImageSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar";

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

