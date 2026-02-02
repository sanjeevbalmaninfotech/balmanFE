
import Navbar from '../components/navBar';
import Footer from '../components/footer/Footer';
import WhoAreWe from '../components/aboutUs/WhoAreWe';
import WhyBalmanSection from '../components/aboutUs/whyBalmanSection';
import WhatWeActuallyDo from '../components/aboutUs/SectionHeadingProps';
import WhoWeAreBuiltFor from '../components/aboutUs/WhoWeAreBuiltFor';
export default function AboutExperienceSection() {


  return (
    <>
        <Navbar />
        <WhoAreWe/>
        <WhyBalmanSection/>
        <WhatWeActuallyDo/>
        <WhoWeAreBuiltFor/>
        <Footer />
    </>
  );
}