import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90, 95],
    formats: ["image/avif", "image/webp"],
    // Server-side image optimization enabled
  },
};

export default nextConfig;
