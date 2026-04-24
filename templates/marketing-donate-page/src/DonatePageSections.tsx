import Link from "next/link";
import { donatePageConfig } from "./donateConfig";
import { DonateGiftForm } from "./DonateGiftForm";

const panel =
  "rounded-xl border border-white/12 bg-[#0e0e13] px-4 py-6 sm:px-8 sm:py-9 md:px-10 md:py-10";

const panelImpact =
  "flex h-full min-h-0 w-full flex-col rounded-xl border-0 bg-[#171723] px-4 py-6 sm:px-8 sm:py-9 md:px-10 md:py-10";

const impactCard =
  "rounded-xl border border-white/15 bg-[#14151c] px-4 py-3.5 sm:px-5 sm:py-4";

function ImpactIconLock() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 shrink-0 text-gold"
      aria-hidden
    >
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8 11V8a4 4 0 018 0v3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ImpactIconBank() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 shrink-0 text-white"
      aria-hidden
    >
      <path
        d="M3 21h18M5 21V10.5M19 21V10.5M9 21v-6h6v6M2 10.5L12 3l10 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7.5h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ImpactIconReceipt() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 shrink-0 text-white"
      aria-hidden
    >
      <path
        d="M7 3h10a2 2 0 012 2v16l-2-1-2 1-2-1-2 1-2-1-2 1-2-1V5a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 8h6M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

const noteIcons = [ImpactIconLock, ImpactIconBank, ImpactIconReceipt] as const;

export function DonatePageSections() {
  const { impact, otherWays } = donatePageConfig;

  return (
    <div className="mt-10 space-y-8 font-sans sm:mt-12">
      <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
        <div className="flex min-h-0 min-w-0 lg:col-span-8">
          <DonateGiftForm className="h-full min-h-0 w-full" />
        </div>
        <aside
          id="your-impact"
          className="flex min-h-0 min-w-0 scroll-mt-28 lg:col-span-4"
          aria-labelledby="donate-impact-heading"
        >
          <div className={panelImpact}>
            <h2
              id="donate-impact-heading"
              className="text-center text-pretty text-[clamp(1.35rem,4vw,1.9375rem)] font-bold tracking-tight text-white"
            >
              {impact.heading}
            </h2>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {impact.tiers.map(({ amount, text }) => (
                <li key={amount} className={impactCard}>
                  <p className="text-center text-pretty text-sm font-semibold leading-snug sm:text-[0.9375rem]">
                    <span className="text-gold">{amount}</span>{" "}
                    <span className="font-semibold text-white">{text}</span>
                  </p>
                </li>
              ))}
              {impact.notes.map(({ label, body }, i) => {
                const Icon = noteIcons[i] ?? ImpactIconLock;
                return (
                  <li key={label} className={impactCard}>
                    <div className="flex items-start gap-3">
                      <Icon />
                      <p className="min-w-0 flex-1 text-pretty text-sm leading-snug sm:text-[0.9375rem]">
                        <span className="font-semibold text-gold">{label}</span>{" "}
                        <span className="text-white">{body}</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>

      <section className={panel} aria-labelledby="donate-other-ways-heading">
        <h2
          id="donate-other-ways-heading"
          className="text-pretty text-[clamp(1.35rem,4vw,1.9375rem)] font-bold tracking-tight text-white"
        >
          {otherWays.heading}
        </h2>
        <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">
          {otherWays.subtext}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          {otherWays.links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex min-h-[2.75rem] flex-1 items-center justify-center rounded-xl border border-white/35 bg-[#1b1f2a] px-5 text-center text-sm font-medium text-white transition hover:border-white/50 hover:bg-[#232838] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/55 sm:min-w-[10rem] sm:flex-none sm:px-7"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
