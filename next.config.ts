import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (khaspekova.github.io)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
