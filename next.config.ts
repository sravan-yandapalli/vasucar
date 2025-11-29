import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // generate static export into /out
  output: "export",

  // GitHub Pages project path → repo name
  basePath: isProd ? "/vasucar" : "",

  // needed for static export (no Next.js image optimizer)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
