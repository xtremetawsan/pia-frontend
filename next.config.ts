import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "d.hrpeak.com"],
    remotePatterns: [
      {
        hostname: "*", // Allow images from all domains
      },
    ],
  },
};

export default nextConfig;
