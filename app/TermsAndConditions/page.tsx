import { Metadata } from "next";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar";
import TopSection from "../components/TermsAndConditions/TopSection";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function TermsAndConditions() {
    return (
        <div>
            <Navbar />
            <div className="mt-10">
                <TopSection />
            </div>
            <Footer />
        </div>
    );
}

