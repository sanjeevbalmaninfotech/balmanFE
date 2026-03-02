import type { MetadataRoute } from "next";
import { servicesData } from "./constants/servicesData";
import { blogPosts } from "./constants/blogsData";

const BASE_URL = "https://balmaninfotech.com";

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/aboutus`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/ContactUs`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/careers`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/brand-audit`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    // Dynamic service pages from servicesData
    const servicePages: MetadataRoute.Sitemap = Object.keys(servicesData).map(
        (id) => ({
            url: `${BASE_URL}/services/${id}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        })
    );

    // Dynamic blog pages from blogPosts
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${BASE_URL}/service/${post.id}`,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...servicePages, ...blogPages];
}
