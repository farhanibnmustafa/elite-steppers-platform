"use client";

import Image from "next/image";
import { landingContentMax } from "./landingLayout";

/**
 * Hall of Fame hero: same structure, imagery, and gradients as NominateHero;
 * copy tuned for the Hall of Fame headline and description.
 */
export function HallOfFameHero() {
  return (
    <section
      className="relative mb-10 flex w-full min-w-0 min-h-[min(78svh,30rem)] flex-1 flex-col overflow-x-clip overflow-y-visible bg-background sm:mb-12 sm:min-h-[min(75svh,36rem)] md:mb-14 md:min-h-[min(78svh,38rem)] lg:min-h-[min(82svh,42rem)]"
      aria-labelledby="hall-of-fame-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 w-full min-h-0 overflow-hidden bg-background"
        aria-hidden
      >
        <div className="relative h-full min-h-0 w-full min-h-full">
          {/*
            Mobile: keep the subject (left) in frame; a lower Y% crops the pedestal
            and shows more of the figure. Wider viewports ease toward center-right.
          */}
          <Image
            src="/images/12.png"
            alt=""
            fill
            priority
            sizes="100vw"
            draggable={false}
            className="select-none object-cover contrast-[1.02] [object-position:24%_10%] min-[400px]:[object-position:26%_15%] sm:[object-position:42%_30%] md:[object-position:58%_38%] lg:[object-position:60%_40%] xl:[object-position:54%_42%] 2xl:[object-position:52%_42%]"
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-transparent to-black/55 sm:from-black/10 sm:via-transparent sm:to-black/30 md:to-black/15 lg:to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-r from-black/[0.94] via-black/70 to-black/25 sm:from-black/75 sm:via-black/40 sm:to-black/10 md:from-black/55 md:via-black/25 md:to-transparent lg:from-black/40 lg:via-black/10 lg:to-transparent"
            aria-hidden
          />
        </div>
      </div>

      <div
        className={`relative z-10 mx-auto flex min-h-0 w-full min-w-0 ${landingContentMax} flex-1 flex-col justify-start pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:pt-10 sm:pb-8 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] md:pb-12 md:pt-10 lg:min-h-[min(64svh,720px)] lg:pl-[max(2rem,env(safe-area-inset-left))] lg:pr-[max(2rem,env(safe-area-inset-right))] lg:pb-14 lg:pt-11 xl:pt-12`}
      >
        <div className="w-full min-w-0 max-w-full pl-0 pt-5 text-left sm:max-w-xl sm:pt-8 min-[500px]:ml-[2%] min-[650px]:ml-[3.5%] min-[800px]:ml-[5.5%] md:pt-10 lg:ml-[7.5%] lg:max-w-2xl lg:pt-12 xl:ml-[9%] xl:pt-14 2xl:ml-[11%]">
          <div className="flex min-w-0 max-w-full flex-col items-start text-left max-sm:rounded-2xl max-sm:bg-black/45 max-sm:px-3.5 max-sm:py-4 max-sm:ring-1 max-sm:ring-white/10 max-sm:backdrop-blur-md max-sm:shadow-[0_8px_32px_rgba(0,0,0,0.45)] sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0 sm:backdrop-blur-none">
            <p className="mb-1.5 w-full min-w-0 max-w-full font-sans text-[1.1rem] font-bold uppercase leading-none tracking-[0.3em] text-gold min-[400px]:mb-1.5 min-[400px]:text-[1.2rem] min-[400px]:tracking-[0.32em] sm:mb-2 sm:text-[1.3rem] sm:tracking-[0.34em] md:text-[1.4rem] md:tracking-[0.36em] lg:mb-2 lg:text-[1.5rem]">
              ELITE LEVEL STEPPERS
            </p>

            <div className="inline-block w-full min-w-0 max-w-full self-start text-left align-top">
              <h1
                id="hall-of-fame-hero-heading"
                className="m-0 w-full min-w-0 max-w-full p-0 text-left text-pretty font-bold uppercase [word-spacing:0.06em]"
              >
                <span
                  className="block w-full min-w-0 max-w-full text-[clamp(1.85rem,6.2vw+0.2rem,2.55rem)] leading-[0.95] tracking-[0.04em] text-white [text-shadow:0.55px_0_0_rgba(255,255,255,0.97),-0.55px_0_0_rgba(255,255,255,0.97),0_0.55px_0_rgba(255,255,255,0.6),0.55px_0.55px_0_rgba(0,0,0,0.22),0_2px_8px_rgba(0,0,0,0.65),0_1px_0_rgba(0,0,0,0.45)] min-[400px]:text-[3.05rem] min-[400px]:leading-[0.93] min-[400px]:tracking-[0.045em] sm:text-[3.45rem] sm:tracking-[0.05em] md:text-[3.9rem] md:tracking-[0.055em] lg:text-[4.85rem] lg:leading-[0.92] lg:tracking-[0.06em] xl:text-[5.35rem] xl:leading-[0.91] xl:tracking-[0.065em]"
                >
                  Hall of
                </span>
                <span className="mt-0 block w-full min-w-0 max-w-full self-start min-[400px]:mt-px sm:mt-0.5">
                  <span className="text-shadow-gold-accent block w-full min-w-0 text-[clamp(2.65rem,10vw+0.2rem,4.85rem)] font-bold leading-[0.86] tracking-[0.04em] text-gold min-[400px]:text-[5.8rem] min-[400px]:leading-[0.84] min-[400px]:tracking-[0.045em] sm:text-[6.55rem] sm:leading-[0.84] sm:tracking-[0.05em] md:text-[7.4rem] md:leading-[0.83] md:tracking-[0.055em] lg:text-[9.2rem] lg:leading-[0.81] lg:tracking-[0.06em] xl:text-[10.2rem] xl:leading-[0.8] xl:tracking-[0.065em]">
                    Fame
                  </span>
                </span>
              </h1>

              <p className="mt-3 box-border w-0 min-w-full text-left text-pretty text-[0.75rem] font-normal leading-[1.6] text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.65)] min-[400px]:mt-3.5 min-[400px]:text-[0.8rem] sm:mt-4 sm:text-[0.88rem] md:mt-4 md:text-[0.92rem] md:leading-[1.58]">
                Honoring the legends who&apos;ve shaped the stepping world — past
                and present. Explore inductees, learn their stories, and
                celebrate their contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
