import { HallOfFameFeaturedInductees } from "./HallOfFameFeaturedInductees";
import { HallOfFameHero } from "./HallOfFameHero";
import { HallOfFameInducteeGallery } from "./HallOfFameInducteeGallery";
import { HallOfFameSearchByYear } from "./HallOfFameSearchByYear";
import { LandingNewsletter } from "./LandingNewsletter";
import { LandingNewsletterFooter } from "./LandingNewsletterFooter";

/**
 * Full marketing Hall of Fame page: hero, gallery, featured inductees, year search, newsletter, footer.
 * Wrap in your app layout (e.g. `MarketingLayoutShell` + `main` padding) as in `examples/next-app-hall-of-fame-page.tsx`.
 */
export function HallOfFamePageView() {
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
