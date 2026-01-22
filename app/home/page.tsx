import { HeroSection } from "../components/homePage";
import PrivacyModal from "../components/PrivacyPolicy/PrivacyModal";


export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <PrivacyModal />
        </div>
    );
}