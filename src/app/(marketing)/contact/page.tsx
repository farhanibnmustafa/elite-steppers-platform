import type { Metadata } from "next";
import { ContactPageView } from "@/components/marketing/ContactPageView";

export const metadata: Metadata = {
  title: "Contact us | Elite Level Steppers",
  description:
    "Reach the Elite Level Steppers Hall of Fame: questions about nominations, events, membership, and staying connected to stepping culture.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
