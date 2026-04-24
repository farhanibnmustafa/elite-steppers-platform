import { LandingHero } from "@/components/marketing/LandingHero";
import { LandingInducteeGallery } from "@/components/marketing/LandingInducteeGallery";
import { LandingUpcomingEvents } from "@/components/marketing/LandingUpcomingEvents";
import { LandingCommunityPride } from "@/components/marketing/LandingCommunityPride";
import { LandingMerch } from "@/components/marketing/LandingMerch";
import { LandingMembershipSupport } from "@/components/marketing/LandingMembershipSupport";
import { LandingNewsletter } from "@/components/marketing/LandingNewsletter";
import { LandingNewsletterFooter } from "@/components/marketing/LandingNewsletterFooter";

export default function HomePage() {
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
