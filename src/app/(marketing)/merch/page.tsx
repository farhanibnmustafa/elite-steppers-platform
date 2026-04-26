import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { merchPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = {
  title: "Hall of Fame Merch | Elite Level Steppers",
};

export default function MerchPage() {
  return <SimpleStubPageView data={merchPageStub} />;
}
