import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = {
  title: "Become a member | Elite Level Steppers",
};

export default function MembershipPage() {
  return (
    <ContentMain>
      <h1 className="text-2xl font-semibold">Become a member</h1>
      <p className="mt-4 text-white/75">Membership options — coming soon.</p>
    </ContentMain>
  );
}
