import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/vasilchenko-website/",
  assetPrefix: "/vasilchenko-website/",
};

export default nextConfig;
