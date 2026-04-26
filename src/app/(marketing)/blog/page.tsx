import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { blogPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = { title: "Blog | Elite Level Steppers" };

export default function BlogPage() {
  return <SimpleStubPageView data={blogPageStub} />;
}
