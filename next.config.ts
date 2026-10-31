import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 90],
  },
  async redirects() {
    return [
      // "Language Academy" was renamed "Learn Kashmiri", and the separate
      // Publications page now lives inside it. Keep old links working.
      { source: "/language-academy", destination: "/learn-kashmiri", permanent: true },
      { source: "/language-academy/music", destination: "/learn-kashmiri/music", permanent: true },
      { source: "/publications", destination: "/learn-kashmiri#library", permanent: true },
    ];
  },
};

export default nextConfig;
