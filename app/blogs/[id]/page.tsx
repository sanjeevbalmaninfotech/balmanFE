import IndividualBlog from "@/app/components/blogs/IndividualBlog";
import HeroImage from "@/app/components/Common/HeroImageSection";
import Navbar from "@/app/components/navBar";


export default function Page() {
    return (
        <main>
            <Navbar />
            <HeroImage url="/heroImgs/heroOrangeTreelarge.jpg" />
            <IndividualBlog />
        </main>
    );
}