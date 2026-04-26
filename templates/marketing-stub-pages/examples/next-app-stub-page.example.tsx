/**
 * Example `app/.../membership/page.tsx` (or any stub route). Replace the import
 * with your `@/...` path after copying `src/*` from this template.
 */
import type { Metadata } from "next";
import { membershipPageStub, SimpleStubPageView } from "../src";

export const metadata: Metadata = {
  title: "Become a member | Your Site",
};

export default function MembershipPage() {
  return <SimpleStubPageView data={membershipPageStub} />;
}
