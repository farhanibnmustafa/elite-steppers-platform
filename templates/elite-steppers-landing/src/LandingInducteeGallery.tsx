import Link from "next/link";
import { landingInnerMax } from "./landingLayout";

const CARD_COUNT = 12;

export function LandingInducteeGallery() {
  return (
    <section
      className="relative w-full min-w-0 bg-[#0a0a0c] pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-14 md:pb-16"
      aria-labelledby="inductee-gallery-heading"
    >
      <div className={landingInnerMax}>
        <h2
          id="inductee-gallery-heading"
          className="pb-10 text-center text-[1.35rem] font-semibold leading-tight tracking-tight text-white sm:pb-12 sm:text-[1.55rem] md:pb-14 md:text-[1.9rem]"
        >
          Inductee Gallery
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7 xl:gap-8">
          {Array.from({ length: CARD_COUNT }, (_, i) => (
            <article
              key={i}
              className="flex aspect-[7/8] w-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#14151c] shadow-[0_8px_28px_-18px_rgba(0,0,0,0.85)]"
            >
              <div className="relative h-[58%] min-h-0 w-full shrink-0 rounded-t-xl bg-gradient-to-b from-white/[0.07] to-[#0a0a0c]/85">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 text-center">
                  <span className="text-[0.7rem] font-medium tracking-wide text-gold/90 sm:text-xs">
                    Coming soon
                  </span>
                  <span className="text-[0.6rem] text-white/40 sm:text-[0.65rem]">
                    Portrait pending
                  </span>
                </div>
              </div>
              <div className="flex min-h-0 flex-1 flex-col justify-between p-2.5 sm:p-3">
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white sm:text-sm">
                    Coming soon
                  </p>
                  <p className="mt-0.5 text-[0.7rem] leading-snug text-white/50 sm:text-xs">
                    Inductee profile
                  </p>
                  <p className="mt-0.5 text-[0.7rem] leading-snug text-[#94a3b8]/90 sm:text-xs">
                    Year TBD
                  </p>
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  <span className="rounded-md border border-[#a5b4fc]/35 bg-[#1a1b27] px-1.5 py-px text-[0.55rem] font-normal text-white/55 sm:px-2 sm:text-[0.6rem]">
                    Soon
                  </span>
                  <span className="rounded-md border border-[#a5b4fc]/35 bg-[#1a1b27] px-1.5 py-px text-[0.55rem] font-normal text-white/55 sm:px-2 sm:text-[0.6rem]">
                    TBA
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-11 md:mt-12">
          <Link
            href="/hall-of-fame"
            className="inline-flex items-center justify-center rounded-[10px] border border-[#B8B0D0] bg-white/[0.06] px-5 py-1.5 text-[0.6875rem] font-normal tracking-tight text-[#B8B0D0] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:bg-white/[0.1] sm:px-6 sm:py-2 sm:text-xs"
          >
            See Full Hall of Fame
          </Link>
        </div>
      </div>
    </section>
  );
}
