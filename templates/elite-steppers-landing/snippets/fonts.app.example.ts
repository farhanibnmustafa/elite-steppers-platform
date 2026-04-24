/**
 * Optional single-file copy for `src/app/fonts.ts` in the target project.
 * Matches elite-steppers-platform: Poppins (400–700) + Lilita for nomination success.
 *
 * Poppins is limited to four weights to match Tailwind usage and avoid unused
 * `link rel=preload` warnings on routes that don’t need every file.
 */
import { Lilita_One, Poppins } from "next/font/google";

export const fontUi = Poppins({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const fontYouRock = Lilita_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-you-rock",
});
