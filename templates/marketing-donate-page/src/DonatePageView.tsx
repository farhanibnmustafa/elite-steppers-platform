import { DonateHero } from "./DonateHero";
import { DonatePageSections } from "./DonatePageSections";
import { landingInnerMax } from "./landingLayout";
import { LandingNewsletter } from "./LandingNewsletter";
import { LandingNewsletterFooter } from "./LandingNewsletterFooter";

/**
 * Donate page — aligned with the live App Router route: hero, sections, shared newsletter + photo footer.
 */
export function DonatePageView() {
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
