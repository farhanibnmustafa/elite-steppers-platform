import { NominationSuccessPageClient } from "@/components/marketing/NominationSuccessPageClient";

/**
 * Renders the success thank-you view (client island). We do not use
 * `next/dynamic` with `ssr: false` here: that shipped no HTML for the body, so
 * on slow networks or dev over LAN the page looked like a blank area under the
 * header. Extension-injected attributes are handled on the client root in
 * `NominationSuccessPageClient` via `suppressHydrationWarning` (see
 * `NominationsClientSectionsHost` / `NominationFormSection`).
 */
export function NominationSuccessRouteHost() {
  return <NominationSuccessPageClient />;
}
