import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = {
  title: "Member portal | Elite Level Steppers",
};

export default function MemberPortalPage() {
  return (
    <ContentMain>
      <h1 className="text-2xl font-semibold">Member portal</h1>
      <p className="mt-4 text-white/75">Coming soon.</p>
    </ContentMain>
  );
}
