/**
 * Example: `src/app/(marketing)/nominations/success/page.tsx`
 *
 * Add Lilita One to your app and pass its class to the success view (same as
 * the main `elite-steppers-platform` `fontYouRock`).
 */
import { fontYouRock } from "@/app/font-you-rock";
import { NominationSuccessView } from "@/components/elite-steppers-landing";

export default function NominationsSuccessPage() {
  return (
    <NominationSuccessView youRockFontClassName={fontYouRock.className} />
  );
}
