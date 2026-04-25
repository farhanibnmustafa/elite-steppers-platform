import React from "react";
import { EliteSteppersLandingSections } from "./EliteSteppersLandingSections";
import { LandingHeader } from "./LandingHeader";

export type EliteSteppersLandingProps = {
  /** Pass `true` on LCP-critical routes so the header logo loads with priority. */
  logoPriority?: boolean;
};

/**
 * Full marketing landing page (header → hero → sections → footer).
 * For multi-route sites prefer {@link MarketingLayoutShell} + {@link EliteSteppersLandingSections} on `/`.
 * Expects Tailwind + theme tokens from `styles/landing-globals-snippet.css` and images under `/public/images/`.
 */
export function EliteSteppersLanding({
  logoPriority = true,
}: EliteSteppersLandingProps) {
  return (
    <div className="flex min-h-dvh w-full min-w-0 flex-col overflow-x-clip bg-background text-white">
      <LandingHeader logoPriority={logoPriority} />
      <EliteSteppersLandingSections />
    </div>
  );
}
