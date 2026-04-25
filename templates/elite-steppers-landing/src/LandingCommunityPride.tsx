import Link from "next/link";
import { landingInnerMax } from "./landingLayout";

const cardShell =
  "flex h-full flex-col rounded-2xl bg-[var(--brand-navy)] p-4 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.85)] sm:p-5";

const criteria = [
  "Minimum 7 years of contribution to the Nation-wide stepping community",
  "Peer recognition for excellence, mentorship, or innovation",
  "Documented impact: events, instruction, music programming, or cultural leadership",
] as const;

export function LandingCommunityPride() {
  return (
    <section
      className="relative w-full min-w-0 bg-background pt-5 pb-6 sm:pt-6 sm:pb-8 md:pt-7 md:pb-9"
      aria-label="Community pride and induction criteria"
    >
      <div className={landingInnerMax}>
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-stretch lg:justify-center lg:gap-5 xl:gap-6">
          <article className={`${cardShell} w-full max-w-sm shrink-0`}>
            <h2
              id="community-pride-heading"
              className="text-[1.35rem] font-semibold leading-tight tracking-tight text-gold sm:text-[1.45rem] md:text-[1.6rem]"
            >
              Community Pride
            </h2>
            <p className="mt-1 text-sm font-normal text-white sm:text-[0.9375rem]">
              Your Voice. Your Legends.
            </p>
            <p className="mt-2 text-[0.8125rem] leading-snug text-white sm:mt-3 sm:text-sm">
              From the pioneers to the rising stars, your nomination helps honor
              those shaping our stepping culture.
            </p>
            <div className="mt-auto pt-4 sm:pt-4">
              <Link
                href="/nominations"
                className="shadow-gold-cta inline-flex items-center justify-center rounded-[10px] bg-gold px-4 py-1.5 text-[0.6875rem] font-medium tracking-tight text-background transition hover:brightness-105 sm:px-5 sm:py-2 sm:text-xs"
              >
                Submit a Nomination
              </Link>
            </div>
          </article>

          <article className={`${cardShell} w-full max-w-sm shrink-0`}>
            <h2
              id="induction-criteria-heading"
              className="text-[1.35rem] font-semibold leading-tight tracking-tight text-gold sm:text-[1.45rem] md:text-[1.6rem]"
            >
              Induction Criteria
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5 sm:mt-4 sm:gap-2">
              {criteria.map((line) => (
                <li key={line} className="flex gap-2 sm:gap-2.5">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                    aria-hidden
                  />
                  <span className="text-[0.8125rem] leading-snug text-white sm:text-sm">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
