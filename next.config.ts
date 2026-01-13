import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lifelikelocals.tempurl.host",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
