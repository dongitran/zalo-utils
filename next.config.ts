import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/zalo-utils',
  assetPrefix: '/zalo-utils',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
