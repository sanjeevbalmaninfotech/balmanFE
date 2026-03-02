import Navbar from "../components/navBar";
import Footer from "../components/footer/Footer";
import ContactUsSection from "../components/ContactUs/ContactUsSection";
import ContactUsForm from "../components/ContactUs/ContactUsForm";


const metadata = {
  title: "Contact Balman Infotech | Dial +91 9814097251",
  description: "Get in touch with Balman Infotech for expert branding and advertising solutions. Contact our team today to discuss your business growth strategy.",
}

export default function ContactForm() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  mt-14 bg-[#010101] text-white section-padding-x section-padding-y">
        <ContactUsSection />
        <ContactUsForm />
      </div>
      <Footer />
    </>
  );
}
