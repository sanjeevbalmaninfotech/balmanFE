import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pravatar.cc'],       // allows pravatar avatars
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",  // allows Unsplash images
        pathname: "/**",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
