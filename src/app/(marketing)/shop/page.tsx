import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = {
  title: "Shop | Elite Level Steppers",
};

export default function ShopPage() {
  return (
    <ContentMain>
      <h1 className="font-brand text-2xl font-medium tracking-tight text-white sm:text-3xl">
        <span className="text-gold">Shop</span>
      </h1>
      <p className="mt-4 text-white/75">Storefront coming soon.</p>
    </ContentMain>
  );
}
