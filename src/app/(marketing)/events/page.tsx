import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { eventsPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = { title: "Events | Elite Level Steppers" };

export default function EventsPage() {
  return <SimpleStubPageView data={eventsPageStub} />;
}
