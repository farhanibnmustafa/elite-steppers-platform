/**
 * Example App Router page — copy to e.g. `src/app/(marketing)/terms/page.tsx`
 * and change imports to your alias after moving the template `src/`.
 * `TermsPageView` already wraps the article in `ContentMain` (same as the monorepo route).
 */
import type { Metadata } from "next";
import { TermsPageView, termsPageConfig } from "../src";

export const metadata: Metadata = {
  title: termsPageConfig.metadata.title,
  description: termsPageConfig.metadata.description,
};

export default function TermsPage() {
  return <TermsPageView />;
}
