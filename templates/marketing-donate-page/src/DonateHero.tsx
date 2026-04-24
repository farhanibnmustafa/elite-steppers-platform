import Link from "next/link";
import { donatePageConfig } from "./donateConfig";

const railLinkClassName =
  "font-sans inline-flex w-fit items-center gap-1.5 text-left text-sm font-semibold tracking-normal text-white transition hover:text-white/90 sm:text-[0.9375rem]";

export function DonateHero() {
  const { hero } = donatePageConfig;

  return (
    <section
      className="w-full min-w-0 overflow-x-clip font-sans"
      aria-labelledby="donate-hero-heading"
    >
      <div className="mb-8 flex min-w-0 flex-col gap-3 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2">
        {hero.railLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${railLinkClassName} min-w-0 max-w-full ${link.leadingArrow ? "" : "sm:shrink-0"}`}
          >
            {link.leadingArrow ? (
              <span aria-hidden className="shrink-0 text-white">
                ←
              </span>
            ) : null}
            <span className="min-w-0 break-words">{link.label}</span>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border border-white/12 bg-[#0e0e13] px-4 py-6 sm:px-8 sm:py-9 md:px-10 md:py-11">
        <h1
          id="donate-hero-heading"
          className="text-pretty text-[clamp(1.65rem,3.75vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white [word-spacing:0.08em]"
        >
          {hero.title}
        </h1>
        <p className="mt-3 max-w-2xl text-left text-pretty text-[0.9rem] font-normal leading-[1.6] text-white/88 sm:text-[1rem] sm:leading-[1.58]">
          {hero.body}
        </p>
        <div className="mt-6 flex min-w-0 flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex min-h-[2.75rem] w-full min-w-0 touch-manipulation items-center justify-center rounded-xl bg-gold px-5 text-center text-sm font-bold text-background shadow-gold-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[480px]:w-auto min-[480px]:min-w-[10rem] sm:min-h-[2.875rem] sm:px-6 sm:text-[0.9375rem]"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex min-h-[2.75rem] w-full min-w-0 touch-manipulation items-center justify-center rounded-xl border border-white/35 bg-[#1b1f2a] px-5 text-center text-sm font-normal text-white transition hover:bg-[#232838] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/55 min-[480px]:w-auto min-[480px]:min-w-[10rem] sm:min-h-[2.875rem] sm:px-6 sm:text-[0.9375rem]"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
