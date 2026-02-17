import HeroImage from "@/app/components/Common/HeroImageSection";
import SectionHeading from "../Common/SectionHeading";
import { BlogPost } from "@/app/constants/blogsData";

interface IndividualBlogProps {
    blog: BlogPost;
}

export default function IndividualBlog({ blog }: IndividualBlogProps) {
    return (
        <div className="min-h-screen bg-[#010101] text-white font-['Plus_Jakarta_Sans']">
            <HeroImage url={blog.heroImage} />

            <header className="section-padding-x pt-4 sm:pt-8 lg:pt-6 pb-4 sm:pb-8 lg:pb-6">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                        <div className="h-[1px] w-6 bg-primary"></div>
                        <span className="text-gray-400 text-sm sm:text-base">{blog.date}</span>
                    </div>

                    <SectionHeading>
                        {blog.title}
                    </SectionHeading>
                </div>
            </header>

            {/* ================= BLOG CONTENT ================= */}
            <main className="w-full py-2 sm:py-3 lg:py-5">
                <div className="section-padding-x">
                    <div className="">
                        {blog.content.map((section, index) => {
                            switch (section.type) {
                                case 'paragraph':
                                    return (
                                        <p key={index} className="text-[#E8E8EA] text-base leading-[120%] font-normal mb-4">
                                            {section.text}
                                        </p>
                                    );
                                case 'heading': {
                                    const level = section.level || 2;
                                    const Tag = `h${level}` as "h2" | "h3" | "h4";
                                    return (
                                        <Tag key={index} className="text-[#E8E8EA] text-4xl lg:text-[36px] font-bold leading-tight lg:leading-[48px] tracking-tight lg:tracking-[-2px] mb-6 mt-10">
                                            {section.text}
                                        </Tag>
                                    );
                                }
                                case 'list':
                                    return (
                                        <ul key={index} className="space-y-4 text-[#E8E8EA] text-base leading-[120%] font-normal list-disc pl-5 mb-8">
                                            {section.items?.map((item, i) => (
                                                <li key={i} className="pl-2">{item}</li>
                                            ))}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
