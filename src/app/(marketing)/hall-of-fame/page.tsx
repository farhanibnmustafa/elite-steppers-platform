import type { Metadata } from "next";
import { HallOfFameFeaturedInductees } from "@/components/marketing/HallOfFameFeaturedInductees";
import { HallOfFameHero } from "@/components/marketing/HallOfFameHero";
import { HallOfFameInducteeGallery } from "@/components/marketing/HallOfFameInducteeGallery";
import { HallOfFameSearchByYear } from "@/components/marketing/HallOfFameSearchByYear";
import { LandingNewsletter } from "@/components/marketing/LandingNewsletter";
import { LandingNewsletterFooter } from "@/components/marketing/LandingNewsletterFooter";

export const metadata: Metadata = {
  title: "Hall of Fame | Elite Level Steppers",
  description:
    "Browse inductees celebrating performers, DJs, instructors, organizers, and icons of stepping culture.",
};

export default function HallOfFamePage() {
  return (
    <>
      <HallOfFameHero />
      <HallOfFameInducteeGallery />
      <HallOfFameFeaturedInductees />
      <HallOfFameSearchByYear />
      <div
        className="my-10 h-0.5 w-full min-w-0 bg-gold/85 sm:my-12 md:my-14"
        role="separator"
        aria-hidden
      />
      <LandingNewsletter tightToDivider />
      <LandingNewsletterFooter />
    </>
  );
}
