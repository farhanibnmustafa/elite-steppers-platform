"use client";

import Image from "next/image";
import { useState } from "react";
import { landingContentMax } from "./landingLayout";

const categories = [
  "All",
  "Performer",
  "DJ",
  "Instructor",
  "Organizer",
  "Fashion",
] as const;

function BadgeMedalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <circle cx="9" cy="6.5" r="3.25" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6 9.2 4.2 15.2 9 12.4l4.8 2.8L12 9.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="6.5" r="1" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function LandingHero() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof categories)[number]>("All");

  return (
    <section
      className="relative flex w-full min-w-0 min-h-[min(70svh,32rem)] flex-1 flex-col overflow-x-clip overflow-y-visible bg-[#0a0a0c] sm:min-h-[min(75svh,36rem)] md:min-h-[min(78svh,38rem)] lg:min-h-[min(82svh,42rem)]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 w-full min-h-0 overflow-hidden bg-[#0a0a0c]"
        aria-hidden
      >
        <div className="relative h-full min-h-0 w-full">
          <Image
            src="/images/1.png"
            alt=""
            fill
            priority
            sizes="100vw"
            draggable={false}
            className="select-none object-cover contrast-[1.02] [object-position:90%_28%] min-[400px]:[object-position:86%_30%] sm:[object-position:80%_32%] md:[object-position:64%_36%] lg:[object-position:center_40%] xl:object-center"
          />
        </div>
      </div>

      <div
        className={`relative z-10 mx-auto flex min-h-0 w-full min-w-0 ${landingContentMax} flex-1 flex-col justify-start pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:pt-10 sm:pb-8 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] md:pb-12 md:pt-10 lg:min-h-[min(64svh,720px)] lg:pl-[max(2rem,env(safe-area-inset-left))] lg:pr-[max(2rem,env(safe-area-inset-right))] lg:pb-14 lg:pt-11 xl:pt-12`}
      >
        <div className="w-full min-w-0 max-w-full pl-0 text-left sm:max-w-xl min-[500px]:ml-[2%] min-[650px]:ml-[3.5%] min-[800px]:ml-[5.5%] lg:ml-[7.5%] lg:max-w-2xl xl:ml-[9%] 2xl:ml-[11%]">
          <p className="mb-3.5 inline-flex max-w-full items-center gap-1.5 self-start rounded-[20px] border border-gold/90 bg-white/[0.12] px-2.5 py-1.5 text-left text-[0.65rem] leading-snug shadow-[0_1px_12px_rgba(0,0,0,0.25)] backdrop-blur-md min-[400px]:mb-4 min-[400px]:px-3.5 min-[400px]:text-[0.75rem] sm:mb-4.5 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-[0.78rem] sm:leading-snug lg:mb-6">
            <BadgeMedalIcon className="shrink-0 text-gold" />
            <span className="min-w-0 font-semibold tracking-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.65),0_0_20px_rgba(0,0,0,0.35)]">
              Since 1970 • Celebrating the Icons of Stepping Culture
            </span>
          </p>

          <h1
            id="hero-heading"
            className="text-left text-pretty text-[1.3rem] font-semibold leading-[1.1] text-white [word-spacing:0.02em] [text-shadow:0.55px_0_0_rgba(255,255,255,0.97),-0.55px_0_0_rgba(255,255,255,0.97),0_0.55px_0_rgba(255,255,255,0.6),0.55px_0.55px_0_rgba(0,0,0,0.22),0_2px_6px_rgba(0,0,0,0.58),0_1px_0_rgba(0,0,0,0.38)] min-[400px]:text-[1.5rem] min-[400px]:[word-spacing:0.04em] min-[400px]:leading-[1.08] sm:text-[1.65rem] sm:[word-spacing:0.05em] md:text-[1.82rem] md:[word-spacing:0.06em] lg:text-[2.35rem] lg:leading-[1.06] lg:[word-spacing:0.08em] xl:text-[2.55rem] xl:[word-spacing:0.1em]"
          >
            <span className="block">Honoring the legends who</span>
            <span className="mt-1.5 block min-[400px]:mt-2 sm:mt-2">
              keep the{" "}
              <span className="font-semibold text-gold [word-spacing:0.02em] [text-shadow:0.55px_0_0_rgba(212,175,55,0.99),-0.55px_0_0_rgba(212,175,55,0.99),0_0.45px_0_rgba(212,175,55,0.5),0_2px_7px_rgba(0,0,0,0.48),0_0_1px_rgba(0,0,0,0.6)] min-[400px]:[word-spacing:0.04em] lg:[word-spacing:0.05em]">
                floor
              </span>{" "}
              alive.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-left text-pretty text-[0.8125rem] font-normal leading-[1.55] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.5)] min-[400px]:mt-4.5 sm:mt-5 sm:max-w-2xl sm:text-[0.875rem] md:mt-5 md:text-[0.9375rem] md:leading-[1.58]">
            The Steppers Hall of Fame recognizes dancers, DJs, instructors,
            event hosts, and fashion icons from across the nation who have shaped
            the stepping scene — while honoring the Black cultural roots that
            started it all. Explore inductees, watch classic sets, and nominate
            the next class.
          </p>

          <div
            className="mt-5 flex w-full min-w-0 max-w-full flex-wrap content-start justify-start gap-x-2.5 gap-y-2.5 text-left sm:mt-5.5 md:mt-6"
            role="group"
            aria-label="Filter inductees by role"
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={
                    isActive
                      ? "shrink-0 rounded-[20px] border border-gold bg-white/[0.15] px-3.5 py-1.5 text-[0.6875rem] font-medium text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] shadow-[0_1px_8px_rgba(0,0,0,0.2)] backdrop-blur-sm min-[400px]:px-4 min-[400px]:text-xs sm:text-[0.8125rem]"
                      : "shrink-0 rounded-[20px] border border-white/55 bg-white/[0.1] px-3.5 py-1.5 text-[0.6875rem] font-medium text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] backdrop-blur-sm transition hover:border-white/80 hover:bg-white/[0.16] min-[400px]:px-4 min-[400px]:text-xs sm:text-[0.8125rem]"
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="mt-4.5 w-full max-w-xl text-left min-[400px]:mt-5 sm:mt-5.5 sm:max-w-2xl md:mt-6">
            <label htmlFor="hero-search" className="sr-only">
              Search inductees by name
            </label>
            <input
              id="hero-search"
              type="search"
              placeholder="Search inductees by name..."
              autoComplete="off"
              className="min-h-10 w-full min-w-0 rounded-lg border border-white/40 bg-white/[0.12] px-3.5 py-2 text-[0.8125rem] font-normal text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] shadow-[0_1px_12px_rgba(0,0,0,0.2)] placeholder:text-white/55 outline-none backdrop-blur-md transition focus:border-gold/80 focus:ring-1 focus:ring-gold/25 sm:min-h-0 sm:px-4 sm:py-2.5 sm:text-[0.875rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
