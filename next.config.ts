import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // 👈 Add any external domains here
  },
};

export default nextConfig;
