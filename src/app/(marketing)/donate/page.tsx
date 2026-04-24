import type { Metadata } from "next";
import { DonateHero } from "@/components/marketing/DonateHero";
import { DonatePageSections } from "@/components/marketing/donate/DonatePageSections";
import { landingInnerMax } from "@/components/marketing/landingLayout";
import { LandingNewsletter } from "@/components/marketing/LandingNewsletter";
import { LandingNewsletterFooter } from "@/components/marketing/LandingNewsletterFooter";

export const metadata: Metadata = { title: "Donate | Elite Level Steppers" };

export default function DonatePage() {
  return (
    <div className="min-w-0 overflow-x-clip">
      <main
        className={`${landingInnerMax} pb-10 pt-8 sm:pb-12 sm:pt-10 md:pt-12`}
      >
        <DonateHero />
        <DonatePageSections />
      </main>
      <div className="mt-5 border-t border-gold pt-8 sm:mt-6 sm:pt-9">
        <LandingNewsletter tightToDivider />
      </div>
      <LandingNewsletterFooter />
    </div>
  );
}
