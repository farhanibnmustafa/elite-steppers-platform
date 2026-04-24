"use client";

import Image from "next/image";
import { landingContentMax } from "./landingLayout";

export function NominateHero() {
  return (
    <section
      className="relative mb-10 flex w-full min-w-0 min-h-[min(78svh,30rem)] flex-1 flex-col overflow-x-clip overflow-y-visible bg-background sm:mb-12 sm:min-h-[min(75svh,36rem)] md:mb-14 md:min-h-[min(78svh,38rem)] lg:min-h-[min(82svh,42rem)]"
      aria-labelledby="nominate-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 w-full min-h-0 overflow-hidden bg-background"
        aria-hidden
      >
        <div className="relative h-full min-h-0 w-full min-h-full">
          <Image
            src="/images/12.png"
            alt=""
            fill
            priority
            sizes="100vw"
            draggable={false}
            className="select-none object-cover contrast-[1.02] [object-position:82%_44%] min-[400px]:[object-position:80%_42%] sm:[object-position:78%_40%] md:[object-position:72%_40%] lg:[object-position:60%_40%] xl:[object-position:54%_42%] 2xl:[object-position:52%_42%]"
          />
          {/*
            Readability: strong dim on the left (copy) on small screens; lighter on large
            so the stage/statue stay visible. Extra bottom blend on mobile for long copy.
          */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-transparent to-black/50 sm:from-black/10 sm:via-transparent sm:to-black/30 md:to-black/15 lg:to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-r from-black/88 via-black/55 to-black/15 sm:from-black/75 sm:via-black/40 sm:to-black/10 md:from-black/55 md:via-black/25 md:to-transparent lg:from-black/40 lg:via-black/10 lg:to-transparent"
            aria-hidden
          />
        </div>
      </div>

      <div
        className={`relative z-10 mx-auto flex min-h-0 w-full min-w-0 ${landingContentMax} flex-1 flex-col justify-start pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:pt-10 sm:pb-8 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] md:pb-12 md:pt-10 lg:min-h-[min(64svh,720px)] lg:pl-[max(2rem,env(safe-area-inset-left))] lg:pr-[max(2rem,env(safe-area-inset-right))] lg:pb-14 lg:pt-11 xl:pt-12`}
      >
        <div className="w-full min-w-0 max-w-full pl-0 pt-5 text-left sm:max-w-xl sm:pt-8 min-[500px]:ml-[2%] min-[650px]:ml-[3.5%] min-[800px]:ml-[5.5%] md:pt-10 lg:ml-[7.5%] lg:max-w-2xl lg:pt-12 xl:ml-[9%] xl:pt-14 2xl:ml-[11%]">
          <h1
            id="nominate-hero-heading"
            className="text-left text-pretty text-[1.9rem] font-bold uppercase leading-[1.1] tracking-[0.04em] text-white [word-spacing:0.06em] [text-shadow:0.55px_0_0_rgba(255,255,255,0.97),-0.55px_0_0_rgba(255,255,255,0.97),0_0.55px_0_rgba(255,255,255,0.6),0.55px_0.55px_0_rgba(0,0,0,0.22),0_2px_8px_rgba(0,0,0,0.65),0_1px_0_rgba(0,0,0,0.45)] min-[400px]:text-[2.35rem] min-[400px]:leading-[1.06] min-[400px]:tracking-[0.045em] sm:text-[2.65rem] sm:tracking-[0.05em] md:text-[2.95rem] md:tracking-[0.055em] lg:text-[3.75rem] lg:leading-[1.05] lg:tracking-[0.06em] xl:text-[4.1rem] xl:tracking-[0.065em]"
          >
            <span className="block">Nominate a</span>
            <span className="mt-1.5 block min-[400px]:mt-2 sm:mt-2">
              <span className="text-shadow-gold-accent font-bold text-gold">
                stepper!
              </span>
            </span>
          </h1>

          <p className="mt-4 max-w-[min(100%,32rem)] text-left text-pretty text-[0.9rem] font-semibold leading-[1.5] text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.65)] min-[400px]:mt-5 min-[400px]:text-[0.95rem] sm:mt-6 sm:max-w-2xl sm:text-[1.02rem] md:mt-6 md:text-[1.08rem] md:leading-[1.5]">
            Shine the spotlight on those who&apos;ve kept the beat alive.
          </p>

          <p className="mt-4 max-w-[min(100%,32rem)] text-left text-pretty text-[0.9rem] font-normal leading-[1.6] text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.65)] min-[400px]:mt-5 min-[400px]:text-[0.95rem] sm:mt-6 sm:max-w-2xl sm:text-[1.02rem] md:mt-6 md:text-[1.08rem] md:leading-[1.58]">
            From the pioneers to today&apos;s innovators, the Steppers Hall of
            Fame exists to honor excellence in stepping. If you know someone
            whose talent, dedication, and impact deserve recognition, we invite you
            to nominate them.
          </p>
        </div>
      </div>
    </section>
  );
}
