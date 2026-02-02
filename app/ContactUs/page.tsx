

import Navbar from '../components/navBar';
import Footer from '../components/footer/Footer';
import ContactUsSection from '../components/ContactUs/ContactUsSection';
import ContactUsForm from '../components/ContactUs/ContactUsForm';

export default function ContactForm() {
    

    return (
        <>
            <Navbar />
            <div className="flex flex-col  mt-14 bg-[#010101] text-white section-padding-x section-padding-y">
                <ContactUsSection/>
               <ContactUsForm/>
            </div>
            <Footer />
        </>

    );
}