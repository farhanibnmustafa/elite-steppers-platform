import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = {
  title: "Hall of Fame Merch | Elite Level Steppers",
};

export default function MerchPage() {
  return (
    <ContentMain>
      <h1 className="font-brand text-2xl font-medium tracking-tight text-white sm:text-3xl">
        Hall of Fame <span className="text-gold">Merch</span>
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
        Official merchandise collection — coming soon.
      </p>
    </ContentMain>
  );
}
