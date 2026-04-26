import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { membershipPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = {
  title: "Become a member | Elite Level Steppers",
};

export default function MembershipPage() {
  return <SimpleStubPageView data={membershipPageStub} />;
}
