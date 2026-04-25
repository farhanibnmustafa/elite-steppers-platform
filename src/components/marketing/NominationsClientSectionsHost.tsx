import NominationsClientSections from "@/components/marketing/NominationsClientSections";

/**
 * Renders the nomination form, newsletter, and marketing footer. These live in
 * a client entry so the form can use state and interactivity, but we do **not**
 * use `next/dynamic` with `ssr: false` here: that pattern shipped no HTML for
 * this block, so on slow networks or if the client bundle failed to load
 * (e.g. dev over LAN to a phone), the page looked like a blank area below
 * criteria. The previous `ssr: false` workaround for extension-driven hydration
 * quirks is replaced by `suppressHydrationWarning` on the form’s root
 * (see `NominationFormSection`).
 */
export function NominationsClientSectionsHost() {
  return <NominationsClientSections />;
}
