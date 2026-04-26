import { ContactFormSection } from "@/components/marketing/ContactFormSection";
import { ContactHero } from "@/components/marketing/ContactHero";
import { ContentMain } from "@/components/marketing/ContentMain";
import { LandingNewsletterFooter } from "@/components/marketing/LandingNewsletterFooter";

/**
 * Public contact route: full-bleed hero + two-column form and org channels, then
 * the same full-bleed image footer as nominations (no newsletter / email band).
 */
export function ContactPageView() {
  return (
    <>
      <ContactHero />
      {/** `landingInnerMax` in the section owns horizontal gutters; avoid stacking `ContentMain` padding + max (was double inset + tighter than the header’s 85rem rail). */}
      <ContentMain className="!max-w-none !px-0 !py-0">
        <ContactFormSection />
      </ContentMain>
      <div
        className="h-0.5 w-full shrink-0 bg-gold/85 mt-16 sm:mt-20 md:mt-24"
        role="separator"
        aria-hidden
      />
      <LandingNewsletterFooter />
    </>
  );
}
