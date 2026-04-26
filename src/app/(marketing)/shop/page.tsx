import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { shopPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = {
  title: "Shop | Elite Level Steppers",
};

export default function ShopPage() {
  return <SimpleStubPageView data={shopPageStub} />;
}
