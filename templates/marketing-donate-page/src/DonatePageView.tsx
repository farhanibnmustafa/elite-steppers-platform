import { DonateFooter } from "./DonateFooter";
import { DonateHero } from "./DonateHero";
import { DonateNewsletter } from "./DonateNewsletter";
import { DonatePageSections } from "./DonatePageSections";
import { landingInnerMax } from "./landingLayout";

/**
 * Full donate landing: hero, form + impact grid, optional newsletter band, footer.
 * Page background should be dark (e.g. `bg-black`) from the parent layout.
 */
export function DonatePageView() {
  return (
    <div className="min-w-0 overflow-x-clip">
      <main
        className={`${landingInnerMax} pb-10 pt-8 text-white sm:pb-12 sm:pt-10 md:pt-12`}
      >
        <DonateHero />
        <DonatePageSections />
      </main>
      <div className="mt-5 border-t border-gold pt-8 sm:mt-6 sm:pt-9">
        <DonateNewsletter tightToDivider />
      </div>
      <DonateFooter />
    </div>
  );
}
