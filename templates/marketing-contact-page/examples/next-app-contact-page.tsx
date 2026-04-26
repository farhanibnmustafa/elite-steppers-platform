/**
 * Example App Router page — copy to e.g. `app/(marketing)/contact/page.tsx`.
 * Point imports to where you installed this template (often `@/components/marketing-contact`).
 */

import type { Metadata } from "next";
import { ContactPageView, contactPageConfig } from "../src";

export const metadata: Metadata = {
  title: contactPageConfig.metadata.title,
  description: contactPageConfig.metadata.description,
};

export default function ContactPage() {
  return <ContactPageView />;
}
