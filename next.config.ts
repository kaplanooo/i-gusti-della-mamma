import type { NextConfig } from "next";

const CANONICAL_HOST = "igustidellamamma.fr";
const REDIRECT_HOSTS = [
  "www.igustidellamamma.fr",
  "igustidellamamma.com",
  "www.igustidellamamma.com",
];

const nextConfig: NextConfig = {
  async redirects() {
    return REDIRECT_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://${CANONICAL_HOST}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
