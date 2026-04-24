/**
 * Poppins only — drop into e.g. `src/app/fonts.ts` and apply `fontUi.variable` on
 * `<html>`. For Lilita as well, prefer `snippets/fonts.app.example.ts` as a
 * full `fonts.ts` (see Next.js `next/font/google` docs).
 */
import { Poppins } from "next/font/google";

export const fontUi = Poppins({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  /** Only weights used in the marketing UI; avoids extra unused font preloads. */
  weight: ["400", "500", "600", "700"],
});
