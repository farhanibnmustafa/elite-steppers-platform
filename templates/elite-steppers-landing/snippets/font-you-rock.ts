/**
 * Lilita One for the “YOU ROCK” mark on the nomination success view.
 * Merge into `src/app/fonts.ts` (or use standalone) and pass
 * `fontYouRock.className` to `NominationSuccessView` as `youRockFontClassName`.
 */
import { Lilita_One } from "next/font/google";

export const fontYouRock = Lilita_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-you-rock",
});
