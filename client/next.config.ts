import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"], //TODO remove in prod
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:3001/:path*', // Proxy to NestJS
  //     },
  //   ];
  // },
};

export default nextConfig;
