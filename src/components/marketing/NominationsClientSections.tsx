"use client";

import { LandingNewsletter } from "@/components/marketing/LandingNewsletter";
import { LandingNewsletterFooter } from "@/components/marketing/LandingNewsletterFooter";
import { NominationFormSection } from "@/components/marketing/NominationFormSection";

/**
 * Client island for the nomination form, newsletter, and footer. The form
 * still SSRs; extension-injected attributes on the client are handled at the
 * form root in `NominationFormSection` via `suppressHydrationWarning`.
 */
export default function NominationsClientSections() {
  return (
    <>
      <NominationFormSection />
      <LandingNewsletter tightToDivider />
      <LandingNewsletterFooter />
    </>
  );
}
