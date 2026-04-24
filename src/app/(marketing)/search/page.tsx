import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = { title: "Search | Elite Level Steppers" };

export default function SearchPage() {
  return (
    <ContentMain>
      <h1 className="text-2xl font-semibold">Search</h1>
      <p className="mt-4 text-white/75">Search inductees — coming soon.</p>
    </ContentMain>
  );
}
