
import Navbar from '../components/navBar';
import Footer from '../components/footer/Footer';
import WhoAreWe from '../components/aboutUs/WhoAreWe';
import WhyBalmanSection from '../components/aboutUs/whyBalmanSection';
import WhatWeActuallyDo from '../components/aboutUs/SectionHeadingProps';
import WhoWeAreBuiltFor from '../components/aboutUs/WhoWeAreBuiltFor';
export default function AboutExperienceSection() {


  const metadata = {
    title: "About Balman Infotech - Your Growth Partner",
    description: "Learn about Balman Infotech, an end-to-end branding, and advertising agency combining strategy, creativity and technology to boost business growth.",

  };

  return (
    <>
      <Navbar />
      <WhoAreWe />
      <WhyBalmanSection />
      <WhatWeActuallyDo />
      <WhoWeAreBuiltFor />
      <Footer />
    </>
  );
}