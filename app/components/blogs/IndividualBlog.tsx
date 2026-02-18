import { BlogPost, BlogContent } from "@/app/constants/blogsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IndividualBlogProps {
    blog: BlogPost;
}

type RenderedContent = BlogContent & { __rendered?: boolean };

function renderBlock(section: BlogContent, key: number, isFirst = false): React.ReactNode {
    switch (section.type) {
        case 'paragraph':
            return (
                <p key={key} className="text-[#E8E8EA] text-base leading-[120%] font-normal mb-4">
                    {section.text}
                </p>
            );
        case 'heading': {
            const level = section.level || 2;
            const Tag = `h${level}` as "h2" | "h3" | "h4";
            return (
                <Tag
                    key={key}
                    className={`
      text-[#E8E8EA]  font-bold leading-tight tracking-tight mb-4 text-xl
      sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl
      ${isFirst ? 'mt-0' : 'mt-6 sm:mt-8 md:mt-10'}    `}
                >
                    {section.text}
                </Tag>
            );

        }
        case 'list':
            return section.checkbox ? (
                <ul key={key} className="space-y-4 text-[#E8E8EA] text-base leading-[120%] font-normal mb-8">
                    {section.items?.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                            <Image
                                src="/service/checkbox.png"
                                alt="checked"
                                width={18}
                                height={18}
                                className="mt-[2px] shrink-0"
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul key={key} className="space-y-4 text-[#E8E8EA] text-base leading-[120%] font-normal list-disc pl-5 mb-8">
                    {section.items?.map((item: string, i: number) => (
                        <li key={i} className="pl-2">{item}</li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
}

export default function IndividualBlog({ blog }: IndividualBlogProps) {
    const widthMap: Record<number, string> = { 30: '30%', 40: '40%', 50: '50%' };

    // Cast content to allow __rendered flag
    const content = blog.content as RenderedContent[];

    return (
        <div className="min-h-screen bg-[#010101] text-white font-['Plus_Jakarta_Sans']">
            <div className="section-padding-x pt-10 sm:pt-12 lg:pt-16">
                {/* --- HEADER / TITLE --- */}
                <div className="flex flex-col items-center justify-center mb-6 sm:mb-10 mt-12 md:mt-6 lg:mb-15">
                    <div className="flex items-center justify-center gap-3 mb-1 sm:mb-2 lg:mb-2">
                        <div className="w-6 h-[2px] sm:w-8 bg-orange-600"></div>
                        <span className="font-medium lg:text-[24px] leading-[1] capitalize text-[#8E8E8E]">
                            Services
                        </span>
                    </div>
                    <h1 className="service-heading-h1 text-center">
                        {blog.title}
                    </h1>
                </div>

                {/* --- ROW 1: Image and Sidebar List (Side-by-Side) --- */}
                <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-12 mb-4 sm:mb-8 lg:mb-15">
                    {/* IMAGE SECTION */}
                    <div className="flex-1">
                        <div className="relative w-full aspect-[1565/573] rounded-2xl sm:rounded-xl lg:rounded-3xl overflow-hidden">
                            <Image
                                src={blog.heroImage}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* SIDEBAR SERVICES LIST */}
                    <div className="hidden xl:block w-full xl:w-[260px] 2xl:w-[280px] shrink-0">
                        <div className="border border-gray-700 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 place-items-center xl:place-items-start gap-x-4 gap-y-2">
                                {blog.sideLinks.map((svc, idx) => (
                                    <Link
                                        key={idx}
                                        href={svc.path}
                                        className="block w-full text-center xl:text-left py-1.5 service-list-text text-xs sm:text-sm lg:text-base"
                                    >
                                        {svc.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= BLOG CONTENT ================= */}
            <main className="w-full pb-10 sm:pb-15 lg:pb-20">
                <div className="section-padding-x">
                    <div className="max-w-none">
                        {blog?.date && <p className="text-gray-400 text-sm mb-6">{blog?.date}</p>}

                        {content.map((section, index) => {
                            // Skip items already consumed inside a floated image group
                            if (section.__rendered) return null;

                            if (section.type === 'image') {
                                const imgWidthPct = section.width ? widthMap[section.width] : '100%';
                                const align = section.align || 'center';
                                const isFloat = align === 'left' || align === 'right';

                                // Centered / full-width — render standalone
                                if (!isFloat) {
                                    return (
                                        <div key={index} style={{ width: imgWidthPct, margin: '0 auto 1.5rem' }}>
                                            <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '350 / 430' }}>
                                                <Image src={section.src || ''} alt={section.alt || ''} fill className="object-cover" />
                                            </div>
                                        </div>
                                    );
                                }

                                // Left / right — collect all following non-image siblings into the flex row
                                const siblings: React.ReactNode[] = [];
                                let j = index + 1;
                                let siblingCount = 0;
                                while (j < content.length && content[j].type !== 'image') {
                                    siblings.push(renderBlock(content[j], j, siblingCount === 0));
                                    content[j].__rendered = true;
                                    j++;
                                    siblingCount++;
                                }

                                const imgBlock = (
                                    <div
                                        className="w-full h-full flex justify-center items-center"
                                    >
                                        <div
                                            className="relative w-[90%] max-w-[400px] md:w-full md:max-w-none rounded-xl overflow-hidden"
                                            style={{ aspectRatio: '350 / 430' }}
                                        >
                                            <Image
                                                src={section.src || ''}
                                                alt={section.alt || ''}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                );

                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row gap-6 lg:gap-10 mb-10 w-full items-center md:items-center"
                                    >
                                        {align === 'right' ? (
                                            <>
                                                <div className="flex-1 min-w-0 order-last md:order-first w-full">
                                                    {siblings}
                                                </div>
                                                <div
                                                    className="w-full md:flex-shrink-0 order-first md:order-last"
                                                    style={{ flexBasis: imgWidthPct }}
                                                >
                                                    {imgBlock}
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div
                                                    className="w-full md:flex-shrink-0 order-first"
                                                    style={{ flexBasis: imgWidthPct }}
                                                >
                                                    {imgBlock}
                                                </div>
                                                <div className="flex-1 min-w-0 w-full">
                                                    {siblings}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            }

                            // All other block types
                            return renderBlock(section, index);
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
