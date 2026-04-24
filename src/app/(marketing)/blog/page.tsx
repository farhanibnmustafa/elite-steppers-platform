import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = { title: "Blog | Elite Level Steppers" };

export default function BlogPage() {
  return (
    <ContentMain>
      <h1 className="text-2xl font-semibold">Blog</h1>
      <p className="mt-4 text-white/75">News and stories — coming soon.</p>
    </ContentMain>
  );
}
