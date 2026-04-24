import React from "react";
import { LandingCommunityPride } from "./LandingCommunityPride";
import { LandingHero } from "./LandingHero";
import { LandingInducteeGallery } from "./LandingInducteeGallery";
import { LandingMembershipSupport } from "./LandingMembershipSupport";
import { LandingMerch } from "./LandingMerch";
import { LandingNewsletter } from "./LandingNewsletter";
import { LandingNewsletterFooter } from "./LandingNewsletterFooter";
import { LandingUpcomingEvents } from "./LandingUpcomingEvents";

/**
 * Home landing body only (hero → sections → footer). Use under
 * {@link MarketingLayoutShell} so the header is not duplicated across routes.
 */
export function EliteSteppersLandingSections() {
  return (
    <>
      <LandingHero />
      <LandingInducteeGallery />
      <LandingUpcomingEvents />
      <LandingCommunityPride />
      <LandingMerch />
      <LandingMembershipSupport />
      <LandingNewsletter />
      <LandingNewsletterFooter />
    </>
  );
}
