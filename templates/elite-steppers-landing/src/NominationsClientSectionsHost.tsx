"use client";

import dynamic from "next/dynamic";

const NominationsClientSections = dynamic(
  () => import("./NominationsClientSections"),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full min-h-[28rem] bg-gradient-to-b from-zinc-950/40 to-transparent"
        aria-busy
        aria-label="Loading nomination form and footer"
      />
    ),
  },
);

export function NominationsClientSectionsHost() {
  return <NominationsClientSections />;
}
