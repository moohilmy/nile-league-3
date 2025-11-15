import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    
  },
  
  env:{
    API_YOUTUBE: process.env.API_YOUTUBE,
    API_COUNTRY: process.env.API_COUNTRY
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'api-ninjas-data.s3.us-west-2.amazonaws.com',
        pathname: '/**'
      }
      ],
    minimumCacheTTL: 2592000,
  },
  
  
};

export default nextConfig;
