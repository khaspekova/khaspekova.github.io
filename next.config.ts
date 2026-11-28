import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (khaspekova.github.io)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 85, 90, 95],
  },
};

export default nextConfig;
