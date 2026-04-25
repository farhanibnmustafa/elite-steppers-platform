"use client";

import Link from "next/link";
import { LandingNewsletter } from "./LandingNewsletter";
import { LandingNewsletterFooter } from "./LandingNewsletterFooter";
import { NominateHero } from "./NominateHero";
import { landingInnerMax } from "./landingLayout";

export type NominationSuccessViewProps = {
  /**
   * `fontYouRock` from `next/font/google` (Lilita One), e.g. `fontYouRock.className`.
   * See `snippets/font-you-rock.ts` in this template.
   */
  youRockFontClassName: string;
};

/**
 * Nominations “thank you” page body: hero, YOU ROCK, CTA, newsletter, footer.
 * Same structure as the main app `src/app/(marketing)/nominations/success/page.tsx`.
 */
export function NominationSuccessView({
  youRockFontClassName,
}: NominationSuccessViewProps) {
  return (
    <div
      className="flex w-full min-w-0 flex-1 flex-col"
      suppressHydrationWarning
    >
      <NominateHero />
      <section
        className="relative z-10 flex w-full min-w-0 flex-1 flex-col items-center justify-center overflow-x-clip bg-black pt-[max(2.5rem,env(safe-area-inset-top))] pb-6 sm:pb-8 md:pb-0 sm:pt-[3.5rem] md:pt-20"
        aria-labelledby="nomination-success-heading"
      >
        <div
          className={`${landingInnerMax} flex w-full min-w-0 flex-col items-center text-center`}
        >
          <div
            className={`mb-2.5 flex w-full min-w-0 max-w-full select-none justify-center overflow-x-clip sm:mb-3 ${youRockFontClassName}`}
            aria-hidden
          >
            <div
              className="w-fit max-w-full translate-x-1 min-[360px]:translate-x-2 min-[400px]:translate-x-4 min-[500px]:translate-x-5 sm:translate-x-6 md:translate-x-8"
            >
              <div
                className="relative mx-auto h-[min(6.5rem,25vw)] w-[min(15rem,88vw)] min-[400px]:h-[7rem] min-[400px]:w-[16.5rem] sm:h-[8rem] sm:w-[19rem] md:h-[9rem] md:w-[22rem] origin-top max-[400px]:scale-[0.92] min-[401px]:scale-100"
              >
                <span
                  className="text-faux-extrabold absolute left-0 top-0 z-0 -rotate-[5deg] uppercase leading-none tracking-[-0.02em] text-white"
                  style={{ fontSize: "clamp(2.35rem, 13.5vw, 4.9rem)" }}
                >
                  <span className="inline-block">YO</span>
                  <span className="inline-block -translate-y-1.5 sm:-translate-y-2.5">
                    U
                  </span>
                </span>
                <span
                  className="text-faux-extrabold absolute left-[1.6rem] top-[2.1rem] z-10 rotate-[3.5deg] uppercase leading-none tracking-[-0.02em] min-[400px]:left-[1.85rem] min-[400px]:top-[2.45rem] sm:left-[2.25rem] sm:top-[2.65rem] md:left-[2.55rem] md:top-[2.95rem]"
                  style={{
                    color: "#C5A04D",
                    fontSize: "clamp(2.5rem, 14.5vw, 5.15rem)",
                  }}
                >
                  ROC
                  <span className="inline-block -translate-y-3.5 sm:-translate-y-4">
                    K
                  </span>
                </span>
              </div>
            </div>
          </div>
          <h2
            id="nomination-success-heading"
            className="text-balance text-lg font-medium leading-tight text-white [overflow-wrap:anywhere] min-[400px]:text-xl sm:text-2xl md:text-3xl"
          >
            Your submission was successful!
          </h2>
          <p className="mt-2.5 w-full max-w-3xl text-pretty text-center text-xs leading-snug text-white/90 sm:mt-3 sm:text-sm md:mt-3.5">
            <span className="block">
              We may call or email you if we need more details about your
              submission.
            </span>
            <span className="mt-1 block w-full min-w-0">
              Think someone else deserves the spotlight? Click the button
              below to nominate another Hall of Fame candidate.
            </span>
          </p>
          <Link
            href="/nominations"
            className="no-underline shadow-gold-md mt-4 inline-flex w-full max-w-sm min-h-11 min-w-0 touch-manipulation select-none items-center justify-center self-center rounded-lg border border-gold/90 bg-gold px-6 py-2.5 text-sm font-semibold text-background [text-wrap:balance] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[400px]:mt-5 min-[500px]:max-w-[14.75rem] sm:mt-5 sm:min-h-10 sm:min-w-[14.75rem] sm:px-8 sm:py-2.5 sm:text-base"
          >
            Nominate Another
          </Link>
        </div>
        <div
          className="mt-14 w-full sm:mt-16 md:mt-20"
          aria-hidden
        >
          <div className="h-px w-full bg-gold/90" />
        </div>
        <div
          className="h-[max(2rem,env(safe-area-inset-bottom))] shrink-0"
          aria-hidden
        />
      </section>
      <div className="w-full min-w-0 shrink-0">
        <LandingNewsletter />
        <LandingNewsletterFooter />
      </div>
    </div>
  );
}
