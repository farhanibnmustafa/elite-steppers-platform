import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { faqPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = {
  title: "FAQ | Elite Level Steppers",
};

export default function FaqPage() {
  return <SimpleStubPageView data={faqPageStub} />;
}
