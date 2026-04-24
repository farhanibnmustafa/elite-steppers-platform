import type { Metadata } from "next";
import { NominationSuccessRouteHost } from "@/components/marketing/NominationSuccessRouteHost";

export const metadata: Metadata = {
  title: "Nomination received | Elite Level Steppers",
};

/**
 * Renders the thank-you view only in the client bundle (via `NominationSuccessRouteHost`)
 * so security extensions that inject `bis_skin_checked` on DOM nodes do not cause
 * React hydration errors against server-rendered HTML.
 */
export default function NominationSuccessPage() {
  return <NominationSuccessRouteHost />;
}
