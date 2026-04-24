import Link from "next/link";

const donateRailLinkClassName =
  "font-sans inline-flex w-fit items-center gap-1.5 text-left text-sm font-semibold tracking-normal text-white transition hover:text-white/90 sm:text-[0.9375rem]";

/**
 * Donate page hero: breadcrumb rail + bordered panel (reference UI).
 * Typography uses site `font-sans` (Poppins); colors use `background` + `gold` tokens.
 */
export function DonateHero() {
  return (
    <section
      className="w-full min-w-0 overflow-x-clip font-sans"
      aria-labelledby="donate-hero-heading"
    >
      <div className="mb-8 flex min-w-0 flex-col gap-3 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2">
        <Link
          href="/hall-of-fame"
          className={`${donateRailLinkClassName} min-w-0 max-w-full`}
        >
          <span aria-hidden className="shrink-0 text-white">
            ←
          </span>
          <span className="min-w-0 break-words">Back to Hall of Fame</span>
        </Link>
        <Link
          href="/nominations"
          className={`${donateRailLinkClassName} min-w-0 max-w-full sm:shrink-0`}
        >
          Nominate a Stepper
        </Link>
      </div>

      <div className="rounded-xl border border-white/12 bg-[#0e0e13] px-4 py-6 sm:px-8 sm:py-9 md:px-10 md:py-11">
        <h1
          id="donate-hero-heading"
          className="text-pretty text-[clamp(1.65rem,3.75vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white [word-spacing:0.08em]"
        >
          Support the Movement
        </h1>
        <p className="mt-3 max-w-2xl text-left text-pretty text-[0.9rem] font-normal leading-[1.6] text-white/88 sm:text-[1rem] sm:leading-[1.58]">
          Your donation helps preserve stepping&apos;s legacy, honor cultural
          icons, and inspire the next generation through programs, archives, and
          events.
        </p>
        <div className="mt-6 flex min-w-0 flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
          <Link
            href="#donation-form"
            className="inline-flex min-h-[2.75rem] w-full min-w-0 touch-manipulation items-center justify-center rounded-xl bg-gold px-5 text-center text-sm font-bold text-background shadow-gold-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[480px]:w-auto min-[480px]:min-w-[10rem] sm:min-h-[2.875rem] sm:px-6 sm:text-[0.9375rem]"
          >
            Donate Now
          </Link>
          <Link
            href="#your-impact"
            className="inline-flex min-h-[2.75rem] w-full min-w-0 touch-manipulation items-center justify-center rounded-xl border border-white/35 bg-[#1b1f2a] px-5 text-center text-sm font-normal text-white transition hover:bg-[#232838] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/55 min-[480px]:w-auto min-[480px]:min-w-[10rem] sm:min-h-[2.875rem] sm:px-6 sm:text-[0.9375rem]"
          >
            See Your Impact
          </Link>
        </div>
      </div>
    </section>
  );
}
