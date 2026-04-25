import Link from "next/link";
import { landingInnerMax } from "./landingLayout";

const PLACEHOLDER_COUNT = 6;

export function LandingUpcomingEvents() {
  return (
    <section
      className="relative w-full min-w-0 bg-background pt-8 pb-12 sm:pt-12 sm:pb-14 md:pt-14 md:pb-16"
      aria-labelledby="upcoming-events-heading"
    >
      <div className={landingInnerMax}>
        <h2
          id="upcoming-events-heading"
          className="pb-8 text-center text-[1.35rem] font-semibold leading-tight tracking-tight text-white sm:pb-10 sm:text-[1.55rem] md:pb-12 md:text-[1.9rem]"
        >
          Upcoming &amp; Recent Events
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7 xl:gap-8">
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
            <article
              key={i}
              className="flex min-h-0 flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#14151c] p-4 shadow-[0_8px_28px_-18px_rgba(0,0,0,0.85)] sm:p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex min-w-[2.65rem] flex-col items-center rounded-lg border border-gold/25 bg-black/35 px-2 py-1.5 text-center sm:min-w-[2.75rem]">
                  <span className="text-[0.6rem] font-medium uppercase tracking-wider text-gold/80 sm:text-[0.65rem]">
                    Soon
                  </span>
                  <span className="mt-px text-sm font-medium tabular-nums text-white/90 sm:text-base">
                    —
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-white sm:text-base">
                    Coming soon
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50 sm:text-[0.8125rem]">
                    Coming soon — dates, venue, and registration will be posted
                    when this event is announced.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-[10px] border border-[#B8B0D0] bg-white/[0.06] px-5 py-1.5 text-[0.6875rem] font-normal tracking-tight text-[#B8B0D0] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:bg-white/[0.1] sm:px-6 sm:py-2 sm:text-xs"
          >
            See Full Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
