import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = {
  title: "FAQ | Elite Level Steppers",
};

export default function FaqPage() {
  return (
    <ContentMain>
      <h1 className="text-2xl font-semibold">FAQ</h1>
      <p className="mt-4 text-white/75">Coming soon.</p>
    </ContentMain>
  );
}
