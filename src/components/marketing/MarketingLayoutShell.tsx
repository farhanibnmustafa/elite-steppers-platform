"use client";

import { usePathname } from "next/navigation";
import { LandingHeader } from "@/components/marketing/LandingHeader";

/**
 * Shared marketing chrome: full-height shell + nav. Logo uses fetch priority
 * only on `/` where the hero LCP image competes with the mark.
 */
export function MarketingLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const logoPriority = pathname === "/";

  return (
    <div className="flex min-h-dvh w-full min-w-0 flex-col overflow-x-clip bg-background text-white">
      <LandingHeader logoPriority={logoPriority} />
      <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
