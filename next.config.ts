import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phone-on-LAN to load dev HMR when using `http://<machine-ip>:3000`.
  // Without this, the dev client can fail to connect and the app may not hydrate
  // (e.g. menu buttons inert) while the “Blocked cross-origin… webpack-hmr”
  // warning is logged.
  allowedDevOrigins: (() => {
    const base = ["127.0.0.1", "localhost", "192.168.0.103"];
    const extra = process.env.ALLOWED_DEV_ORIGINS
      ? process.env.ALLOWED_DEV_ORIGINS.split(",").map((s) => s.trim()).filter(Boolean)
      : [];
    return [...new Set([...base, ...extra])];
  })(),
  // Turbopack dev uses filesystem cache by default (Next 16+). If you see
  // "Unable to write SST file" / corrupt `.next` cache, run `npm run dev:reset`
  // or set `experimental: { turbopackFileSystemCacheForDev: false }`.
};

export default nextConfig;
