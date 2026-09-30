import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 1080, 1920, 2560],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  // The APDL page was first published at /disclaimer; keep that link working.
  async redirects() {
    return [{ source: "/disclaimer", destination: "/apdl", permanent: true }];
  },
};

export default nextConfig;
