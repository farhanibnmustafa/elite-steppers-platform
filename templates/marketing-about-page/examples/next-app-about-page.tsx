/**
 * Example App Router page — copy to e.g. `app/(marketing)/about/page.tsx`
 * and point imports to where you installed the template (e.g. `@/components/marketing-about`).
 * `AboutPageView` already includes the hero and main content wrapper.
 */
import type { Metadata } from "next";
import { aboutPageExampleData, AboutPageView } from "../src";

// Replace with your site metadata, or add `metadata` fields to your data module.
export const metadata: Metadata = {
  title: "About us | Your Site",
  description: "About your organization—mission, programs, and how to get involved.",
};

export default function AboutPage() {
  return <AboutPageView data={aboutPageExampleData} />;
}
