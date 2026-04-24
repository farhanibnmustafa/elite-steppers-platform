import { Lilita_One } from "next/font/google";

/** “YOU ROCK” mark on nomination success — separate module so it is not preloaded on every route. */
export const fontYouRock = Lilita_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-you-rock",
});
