import BlogList from "../components/blogs/BlogLists";
import TechTreeHero from "../components/blogs/TechTreeHero";
import HeroImage from "../components/Common/HeroImageSection";
import Navbar from "../components/navBar";

export default function BlogPage() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <TechTreeHero /> */}
      <HeroImage url="/heroImgs/heroOrangeTreelarge.jpg" />
      <BlogList />
    </>
  );
}
