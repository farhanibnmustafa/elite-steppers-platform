"use client";

import { usePathname } from "next/navigation";
import { LandingHeader } from "./LandingHeader";

/**
 * Shared marketing chrome: full-height shell + nav. Use in `app/(marketing)/layout.tsx`
 * (or similar) and render route `children` below — logo fetch priority defaults to
 * the home path `/` only (tune if your home URL differs).
 */
export function MarketingLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const logoPriority = pathname === "/";

  return (
    <div className="flex min-h-dvh w-full min-w-0 flex-col overflow-x-clip bg-[#0a0a0c] text-white">
      <LandingHeader logoPriority={logoPriority} />
      {children}
    </div>
  );
}
