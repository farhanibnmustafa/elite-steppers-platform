import type { Metadata } from "next";
import { NominationCriteria } from "@/components/marketing/NominationCriteria";
import { NominateHero } from "@/components/marketing/NominateHero";
import { NominationsClientSectionsHost } from "@/components/marketing/NominationsClientSectionsHost";

export const metadata: Metadata = {
  title: "Nominate a stepper | Elite Level Steppers",
  description:
    "Submit a Hall of Fame nomination: honor leaders in stepping culture with photos, story, and supporting links.",
};

export default function NominationsPage() {
  return (
    <>
      <NominateHero />
      <NominationCriteria />
      <NominationsClientSectionsHost />
    </>
  );
}
