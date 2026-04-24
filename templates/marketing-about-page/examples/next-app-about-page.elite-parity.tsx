/**
 * 1:1 with `src/app/(marketing)/about/page.tsx` in elite-steppers-platform.
 * After copying the template, point imports at your app (`@/components/...`) and
 * use `ContentMain` if you have it.
 */
import type { Metadata } from "next";
// import { ContentMain } from "@/components/marketing/ContentMain";
import { aboutPageDefaultData, AboutPageView } from "../src";

export const metadata: Metadata = {
  title: "About us | Elite Level Steppers",
  description:
    "Learn about the Elite Level Steppers Hall of Fame: mission, community, and how to get involved with nominations, events, and more.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <AboutPageView data={aboutPageDefaultData} />
    </main>
  );
}
