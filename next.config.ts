import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["thumbs.dreamstime.com","cdn-icons-png.flaticon.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* other config options here */
};

export default nextConfig;
