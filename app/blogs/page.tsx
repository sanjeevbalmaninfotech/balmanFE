import BlogList from "../components/blogs/BlogLists";
import TechTreeHero from "../components/blogs/TechTreeHero";
import Navbar from "../components/navBar";

export default function BlogPage() {
  return (
    <>
    <Navbar/>
      <TechTreeHero />
      <BlogList/>
    </>
  );
}
