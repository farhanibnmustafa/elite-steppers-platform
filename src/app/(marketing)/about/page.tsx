import type { Metadata } from "next";
import { aboutPageDefaultData } from "@/components/marketing/aboutPageDefaultData";
import { AboutPageView } from "@/components/marketing/AboutPageView";

export const metadata: Metadata = {
  title: "About us | Elite Level Steppers",
  description:
    "Learn about the Elite Level Steppers Hall of Fame: mission, community, and how to get involved with nominations, events, and more.",
};

export default function AboutPage() {
  return <AboutPageView data={aboutPageDefaultData} />;
}
