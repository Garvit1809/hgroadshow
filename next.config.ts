import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` so it can be served by any static host.
  output: "export",

  // Static exports have no image optimization server, so the default
  // `next/image` loader is unsupported.
  images: {
    unoptimized: true,
  },

  // Emit `/about/index.html` instead of `/about.html` so static hosts resolve
  // nested routes without per-path rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
