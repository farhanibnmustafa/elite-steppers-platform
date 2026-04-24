"use client";

import { useState } from "react";
import { donatePageConfig } from "./donateConfig";
import { landingInnerMax } from "./landingLayout";

function PaperPlaneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 -translate-y-0.5 translate-x-0.5 -rotate-6 sm:h-4 sm:w-4"
      aria-hidden
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

const inner = `${landingInnerMax} text-center`;

export function DonateNewsletter({
  tightToDivider = false,
}: {
  tightToDivider?: boolean;
} = {}) {
  const cfg = donatePageConfig.newsletter;
  const [submitted, setSubmitted] = useState(false);

  const headingBlockPadding = tightToDivider
    ? "pt-0 pb-2.5 sm:pb-3 md:pb-3.5"
    : "pt-6 pb-2.5 sm:pt-7 sm:pb-3 md:pt-8 md:pb-3.5 lg:pt-9";

  return (
    <section
      className="relative z-20 w-full min-w-0"
      aria-labelledby="donate-newsletter-heading"
    >
      <div className={`${inner} ${headingBlockPadding}`}>
        <h2
          id="donate-newsletter-heading"
          className="text-balance px-1 text-[clamp(1.15rem,4.2vw,1.9rem)] font-semibold leading-tight text-white"
        >
          {cfg.heading}
        </h2>
        <p className="mx-auto mt-1.5 max-w-[min(100%,52rem)] px-2 text-center text-pretty text-[0.7rem] font-medium leading-snug text-white/88 min-[400px]:text-xs sm:mt-2 sm:px-1 sm:text-sm md:text-[0.9375rem] md:leading-snug">
          {cfg.subtext}
        </p>
      </div>

      <div className={`${inner} max-w-full`}>
        <form
          className="relative z-20 mx-auto w-full max-w-[15.5rem] min-[360px]:max-w-[17rem] sm:max-w-xs md:max-w-[20.5rem] lg:max-w-sm"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="relative -mb-6 w-full min-w-0 sm:-mb-7 md:-mb-9 lg:-mb-10">
            <label className="sr-only" htmlFor="donate-newsletter-email">
              Email address
            </label>
            <input
              id="donate-newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder={cfg.emailPlaceholder}
              className="h-11 w-full min-w-0 rounded-full border border-white/22 bg-white/[0.04] py-2 pl-3 pr-12 text-center text-sm text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] outline-none ring-0 backdrop-blur-[1px] placeholder:text-center placeholder:text-white/45 focus:border-white/40 focus:ring-2 focus:ring-gold/30 sm:pl-4 sm:pr-[3.25rem] sm:text-[0.9375rem] md:pr-14"
            />
            <button
              type="submit"
              className="shadow-gold-icon absolute right-1.5 top-1/2 flex h-9 w-9 min-h-9 min-w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-background transition hover:brightness-105 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-2 md:h-9 md:w-9"
              aria-label={cfg.submitAriaLabel}
            >
              <PaperPlaneIcon />
            </button>
          </div>
        </form>
        {submitted ? (
          <p
            className="relative z-20 mt-1.5 px-2 pb-2 text-xs text-gold/90 sm:mt-2 sm:text-sm"
            role="status"
          >
            {cfg.successMessage}
          </p>
        ) : null}
      </div>
    </section>
  );
}
