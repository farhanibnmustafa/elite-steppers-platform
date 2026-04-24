import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = { title: "Events | Elite Level Steppers" };

export default function EventsPage() {
  return (
    <ContentMain>
      <h1 className="text-2xl font-semibold">Events</h1>
      <p className="mt-4 text-white/75">Calendar — coming soon.</p>
    </ContentMain>
  );
}
