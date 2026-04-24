/**
 * Example App Router page — copy to e.g. `src/app/(marketing)/about/page.tsx`
 * and point imports to where you installed the template (e.g. `@/components/marketing-about`).
 */
import type { Metadata } from "next";
// import { ContentMain } from "@/components/marketing/ContentMain";
import { aboutPageExampleData, AboutPageView } from "../src";

// Replace with your site metadata, or add `metadata` fields to your data module.
export const metadata: Metadata = {
  title: "About us | Your Site",
  description: "About your organization—mission, programs, and how to get involved.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <AboutPageView data={aboutPageExampleData} />
    </main>
  );
}
