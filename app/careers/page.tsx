import HeroImage from "../components/careers/HeroImage";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar";


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
