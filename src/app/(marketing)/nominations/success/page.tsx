import type { Metadata } from "next";
import { NominationSuccessRouteHost } from "@/components/marketing/NominationSuccessRouteHost";

export const metadata: Metadata = {
  title: "Nomination received | Elite Level Steppers",
};

/**
 * Thank-you view: client island in `NominationSuccessRouteHost` (SSR + hydration
 * warning suppression for extension-injected attributes; see that module).
 */
export default function NominationSuccessPage() {
  return <NominationSuccessRouteHost />;
}
