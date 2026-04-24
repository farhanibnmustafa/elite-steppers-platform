"use client";

import dynamic from "next/dynamic";

const NominationSuccessPageClient = dynamic(
  () =>
    import("@/components/marketing/NominationSuccessPageClient").then(
      (m) => m.NominationSuccessPageClient
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full min-h-[min(60vh,32rem)] bg-black"
        aria-busy
        aria-label="Loading page"
      />
    ),
  }
);

/**
 * Client-only mount for the nomination success route (see `NominationsClientSectionsHost`).
 * Avoids hydration mismatches when browser extensions inject attributes on SSR HTML.
 */
export function NominationSuccessRouteHost() {
  return <NominationSuccessPageClient />;
}
