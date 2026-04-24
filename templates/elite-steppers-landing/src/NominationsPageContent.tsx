import { NominateHero } from "./NominateHero";
import { NominationCriteria } from "./NominationCriteria";
import { NominationsClientSectionsHost } from "./NominationsClientSectionsHost";

/**
 * Full `/nominations` page (hero, criteria, form + newsletter + footer).
 * Matches `src/app/(marketing)/nominations/page.tsx` in the main app.
 */
export function NominationsPageContent() {
  return (
    <>
      <NominateHero />
      <NominationCriteria />
      <NominationsClientSectionsHost />
    </>
  );
}
