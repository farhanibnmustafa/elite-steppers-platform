import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { searchPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = { title: "Search | Elite Level Steppers" };

export default function SearchPage() {
  return <SimpleStubPageView data={searchPageStub} />;
}
