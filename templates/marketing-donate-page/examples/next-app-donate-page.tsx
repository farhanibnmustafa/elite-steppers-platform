/**
 * Example App Router page — copy to e.g. `app/(marketing)/donate/page.tsx`.
 * Adjust import path to where you placed the template `src/` folder.
 */

import type { Metadata } from "next";
import {
  DonatePageView,
  donatePageConfig,
} from "../src";

export const metadata: Metadata = {
  title: donatePageConfig.metadata.title,
  description: donatePageConfig.metadata.description,
};

export default function DonatePage() {
  return <DonatePageView />;
}
