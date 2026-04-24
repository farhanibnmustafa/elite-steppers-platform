/**
 * Example App Router page — copy to e.g. `src/app/(marketing)/terms/page.tsx`
 * and change imports to `@/components/legal-terms` (or your path) after moving `src/`.
 */
import type { Metadata } from "next";
// import { ContentMain } from "@/components/marketing/ContentMain";
import { TermsPageView, termsPageConfig } from "../src";

export const metadata: Metadata = {
  title: termsPageConfig.metadata.title,
  description: termsPageConfig.metadata.description,
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <TermsPageView />
    </main>
  );
}

// --- Alternative: use your existing wide content wrapper, e.g. in this repo:
// import { ContentMain } from "@/components/marketing/ContentMain";
// return (
//   <ContentMain>
//     <TermsPageView />
//   </ContentMain>
// );
