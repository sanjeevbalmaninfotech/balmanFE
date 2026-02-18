import BlogList from "../components/blogs/BlogLists";
import TechTreeHero from "../components/blogs/TechTreeHero";
import HeroImage from "../components/Common/HeroImageSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar";

export default function BlogPage() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <TechTreeHero /> */}
      {/* "C:\repos\balmanFE\public\heroImgs\heroOrangeTreelarge.jpeg"
      "C:\repos\balmanFE\public\HeroImages\blogHero.png"
      */}
      <Navbar />
      <div className="mt-10 lg:mt-18">

        <HeroImage url="/HeroImages/blogHero.png" />
      </div>

      <BlogList />
      <Footer />
    </>
  );
}
