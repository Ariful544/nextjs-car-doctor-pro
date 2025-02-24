import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Other config options here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],
  },
};

export default nextConfig;

