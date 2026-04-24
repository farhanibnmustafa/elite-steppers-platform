"use client";

import { LandingNewsletter } from "./LandingNewsletter";
import { LandingNewsletterFooter } from "./LandingNewsletterFooter";
import { NominationFormSection } from "./NominationFormSection";

/**
 * Renders only on the client so React does not hydrate server HTML that may be
 * altered by browser extensions (e.g. `bis_skin_checked` from security tools),
 * which otherwise causes hydration mismatches on this page.
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
