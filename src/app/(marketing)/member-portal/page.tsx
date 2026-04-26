import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { memberPortalPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = {
  title: "Member portal | Elite Level Steppers",
};

export default function MemberPortalPage() {
  return <SimpleStubPageView data={memberPortalPageStub} />;
}
