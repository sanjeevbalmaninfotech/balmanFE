import IndividualBlog from "@/app/components/blogs/IndividualBlog";
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navBar";
import { blogPosts } from "@/app/constants/blogsData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = blogPosts.find((b) => b.id === id);

    if (!blog) {
        notFound();
    }

    return (
        <main>
            <Navbar />
            <IndividualBlog blog={blog} />
            <Footer />
        </main>
    );
}