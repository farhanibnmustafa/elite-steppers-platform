import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack dev uses filesystem cache by default (Next 16+). If you see
  // "Unable to write SST file" / corrupt `.next` cache, run `npm run dev:reset`
  // or set `experimental: { turbopackFileSystemCacheForDev: false }`.
};

export default nextConfig;
