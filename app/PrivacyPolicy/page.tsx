import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar";
import PrivacyPolicyMainSecition from "../components/PrivacyPolicy/PrivacyPolicyMainSecition";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};


// comment 
export default function PrivacyPolicy() {
    return (
        <div>
            <Navbar />
            <PrivacyPolicyMainSecition />
            <Footer />
        </div>
    );
}


