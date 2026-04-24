"use client";

import { LandingHeader } from "@/components/marketing/LandingHeader";

type SiteHeaderProps = {
  logoPriority?: boolean;
};

/**
 * Thin alias for {@link LandingHeader}. Prefer the shared
 * `MarketingLayoutShell` in `src/app/(marketing)/layout.tsx` for site pages.
 */
export function SiteHeader({ logoPriority = false }: SiteHeaderProps) {
  return <LandingHeader logoPriority={logoPriority} />;
}
