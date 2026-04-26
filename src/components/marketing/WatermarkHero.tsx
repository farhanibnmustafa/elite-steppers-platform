import type { ReactNode } from "react";
import { landingInnerMax } from "@/components/marketing/landingLayout";

const NOISE_SVG = encodeURIComponent(
  `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`,
);

/** Richer “hero” gold (badge / divider) — same as contact page WatermarkHero. */
export const HERO_GOLD = "#f2d45c";
export const HERO_GOLD_RGB = "242,212,92";

export type WatermarkHeroProps = {
  /** e.g. `about-hero-heading` — also used in `aria-labelledby` on the section. */
  headingId: string;
  /** Large background word (displayed in uppercase in the design). */
  watermarkWord: string;
  /** Pill label above the main title. */
  badge: string;
  title: string;
  /** One paragraph or custom nodes under the divider. */
  description: ReactNode;
};

/**
 * Charcoal field, film grain, huge muted gold watermark, top glow, badge + title + gold divider.
 */
export function WatermarkHero({
  headingId,
  watermarkWord,
  badge,
  title,
  description,
}: WatermarkHeroProps) {
  const wm = watermarkWord.toUpperCase();

  return (
    <section
      className="relative isolate w-full min-w-0 overflow-x-clip overflow-y-visible bg-[#0b0b0b]"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse 118% 72% at 50% 0%, color-mix(in srgb, ${HERO_GOLD} 34%, transparent) 0%, color-mix(in srgb, ${HERO_GOLD} 14%, transparent) 45%, color-mix(in srgb, ${HERO_GOLD} 6%, transparent) 70%, transparent 88%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,${NOISE_SVG}")` }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden [perspective:1000px]"
        aria-hidden
      >
        <p
          className="select-none font-sans text-[clamp(2.5rem,18vw,12.5rem)] font-bold leading-[0.9] tracking-[-0.03em] motion-reduce:translate-y-0 [transform:translate3d(0,0,-36px)] max-[380px]:text-[2.1rem] max-sm:tracking-tighter sm:text-[clamp(3.5rem,16vw,12.5rem)] [animation:watermark-hero-rise_1.1s_ease-out_both] motion-reduce:animate-none"
          style={{ color: `color-mix(in srgb, ${HERO_GOLD} 22%, transparent)` }}
        >
          {wm}
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#0b0b0b] from-[0%] via-[#0b0b0b]/35 via-[42%] to-transparent to-[72%] sm:via-[48%] sm:to-[78%]"
        aria-hidden
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "@keyframes watermark-hero-rise{0%{transform:translate3d(0,8%,-36px);opacity:0.2}100%{transform:translate3d(0,0,-36px);opacity:1}}",
        }}
      />

      <div
        className={`relative z-10 flex min-h-[min(58svh,30rem)] items-center justify-center py-10 sm:min-h-[min(56svh,32rem)] sm:py-12 md:min-h-[min(52svh,34rem)] md:py-14 ${landingInnerMax}`}
      >
        <div className="mx-auto w-full min-w-0 max-w-2xl pb-1 text-center sm:pb-0">
          <p
            className="mb-4 inline-flex max-w-full items-center justify-center gap-2.5 rounded-full border bg-[#0b0b0b]/60 px-3.5 py-2 pr-4 text-[0.75rem] font-bold leading-none tracking-wide text-white sm:mb-5 sm:px-4 sm:py-2.5 sm:text-[0.8rem]"
            style={{
              borderColor: HERO_GOLD,
              boxShadow: `0 0 0 1px rgba(${HERO_GOLD_RGB},0.24) inset`,
            }}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{
                backgroundColor: HERO_GOLD,
                boxShadow: `0 0 10px rgba(${HERO_GOLD_RGB},0.95)`,
              }}
              aria-hidden
            />
            <span>{badge}</span>
          </p>
          <h1
            id={headingId}
            className="text-balance text-3xl font-bold leading-[1.1] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.5)] min-[400px]:text-[clamp(1.9rem,1.15rem+1.6vw,2.9rem)] sm:leading-tight"
          >
            {title}
          </h1>
          <div className="relative mx-auto mt-3 w-full max-w-md px-4 sm:mt-3.5" aria-hidden>
            <div className="flex min-h-4 items-center">
              <div
                className="h-px flex-1"
                style={{
                  background: `linear-gradient(to left, rgba(${HERO_GOLD_RGB},0.92) 0%, transparent 100%)`,
                }}
              />
              <div
                className="mx-0.5 h-2 w-2 shrink-0 rounded-full border"
                style={{
                  borderColor: HERO_GOLD,
                  backgroundColor: HERO_GOLD,
                  boxShadow: `0 0 12px 3px rgba(${HERO_GOLD_RGB},0.85)`,
                }}
              />
              <div
                className="h-px flex-1"
                style={{
                  background: `linear-gradient(to right, rgba(${HERO_GOLD_RGB},0.92) 0%, transparent 100%)`,
                }}
              />
            </div>
          </div>
          <div className="mx-auto mt-3 max-w-lg text-pretty text-base font-normal leading-[1.55] text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] sm:mt-4 sm:text-[1.02rem] sm:leading-[1.55]">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}
