/**
 * 1:1 with `src/app/(marketing)/about/page.tsx` in elite-steppers-platform.
 * `AboutPageView` includes the watermark hero, then `ContentMain` for the article.
 */
import type { Metadata } from "next";
import { aboutPageDefaultData, AboutPageView } from "../src";

export const metadata: Metadata = {
  title: "About us | Elite Level Steppers",
  description:
    "Learn about the Elite Level Steppers Hall of Fame: mission, community, and how to get involved with nominations, events, and more.",
};

export default function AboutPage() {
  return <AboutPageView data={aboutPageDefaultData} />;
}
