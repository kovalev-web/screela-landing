import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Google treats www and the bare domain as duplicates and picked www as
    // canonical (Search Console, 2026-07-13) — 301 everything to the bare
    // domain, which is what metadataBase/sitemap/OG URLs already use.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.screela.com" }],
        destination: "https://screela.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
