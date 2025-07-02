import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*", // Allow images from all domains
      },
    ],
  },
};

export default nextConfig;
