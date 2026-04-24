/**
 * Example App Router page — copy to e.g. `app/(marketing)/hall-of-fame/page.tsx`
 * and change imports to `@/components/hall-of-fame` (or your path) after moving `src/`.
 */
import type { Metadata } from "next";
import { HallOfFamePageView } from "../src";

export const metadata: Metadata = {
  title: "Hall of Fame | Your Site",
  description:
    "Browse inductees celebrating performers, DJs, instructors, organizers, and icons of your community.",
};

export default function HallOfFamePage() {
  return <HallOfFamePageView />;
}
