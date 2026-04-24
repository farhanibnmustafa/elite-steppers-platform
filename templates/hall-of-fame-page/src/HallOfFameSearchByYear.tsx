"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  getSearchByYearCardTags,
  HALL_OF_FAME_DEMO_INDUCTEES,
  type HallOfFameInductee,
} from "./hallOfFameInducteeData";
import {
  HALL_OF_FAME_DEFAULT_SEARCH_YEAR,
  HALL_OF_FAME_NOTABLE_BY_YEAR,
  HALL_OF_FAME_SEARCH_YEARS,
  type HallOfFameSearchYear,
} from "./hallOfFameNotableByYearData";
import { landingInnerMax } from "./landingLayout";

/**
 * Portraits for the 2×2 “Search by year” grid (slot order: row1 L→R, row2 L→R).
 * `object-cover` on tall portrait PNGs: a higher default Y% centers the whole
 * body and can clip foreheads. Use a lower Y anchor (~15–20%) so the visible
 * crop includes the top of the head; faces read centered in the image strip.
 * Per-slot nudges if a subject is off-center in the source.
 */
const SEARCH_BY_YEAR_PORTRAIT_CARDS: readonly {
  src: string;
  objectPosition: string;
}[] = [
  { src: "/images/4.png", objectPosition: "object-[50%_18%] min-[500px]:object-[50%_16%]" },
  { src: "/images/5.png", objectPosition: "object-[50%_18%] min-[500px]:object-[50%_16%]" },
  { src: "/images/6.png", objectPosition: "object-[50%_18%] min-[500px]:object-[50%_16%]" },
  { src: "/images/7.png", objectPosition: "object-[50%_18%] min-[500px]:object-[50%_16%]" },
];

const searchByYearImageClass = (objectPosition: string) =>
  `${objectPosition} object-cover transition duration-500 ease-out group-hover:scale-[1.04]`;

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const YEARS = [...HALL_OF_FAME_SEARCH_YEARS].sort((a, b) => a - b);

function SearchYearInducteeCard({
  row,
  yearLabel,
  portraitSrc,
  imageClassName,
}: {
  row: HallOfFameInductee;
  yearLabel: number;
  portraitSrc?: string;
  imageClassName?: string;
}) {
  const [a, b] = getSearchByYearCardTags(row);
  const src = portraitSrc ?? row.imageSrc ?? undefined;
  const hasImage = Boolean(src);

  return (
    <article className="group flex min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171723] shadow-[0_12px_36px_-20px_rgba(0,0,0,0.9)]">
      <div className="relative aspect-[20/14.2] w-full min-h-0 shrink-0 overflow-hidden bg-gradient-to-b from-white/[0.06] to-[#0a0a0a] min-[500px]:aspect-[20/14.5]">
        {hasImage && src ? (
          <Image
            src={src}
            alt={row.name}
            fill
            sizes="(max-width: 1024px) 50vw, 32vw"
            className={
              imageClassName ??
              "object-cover object-[50%_18%] min-[500px]:object-[50%_16%] transition duration-500 ease-out group-hover:scale-[1.04]"
            }
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-3 text-center">
            <span className="text-[0.7rem] font-medium tracking-wide text-gold/90 sm:text-xs">
              Coming soon
            </span>
            <span className="text-[0.6rem] text-white/40 sm:text-[0.65rem]">Portrait pending</span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-black/0 transition duration-300 group-hover:bg-black/55"
          aria-hidden
        />
        <div className="absolute inset-0 z-[2] flex items-center justify-center p-3 opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            type="button"
            className="pointer-events-auto inline-flex min-h-[2.5rem] items-center justify-center rounded-xl border border-gold/25 bg-gold px-4 py-2.5 font-sans text-xs font-semibold text-black shadow-[0_6px_20px_rgba(0,0,0,0.45)] transition hover:bg-gold-muted"
          >
            View Profile
          </button>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-1 p-2.5 sm:gap-1.5 sm:p-3">
        <h3 className="min-w-0 text-xs font-bold leading-snug text-white sm:text-sm">{row.name}</h3>
        <div className="flex min-w-0 items-baseline justify-between gap-2 text-[0.65rem] sm:text-[0.7rem]">
          <span className="min-w-0 truncate text-white/85">{row.role}</span>
          <span className="shrink-0 font-normal text-white/45">Inducted {yearLabel}</span>
        </div>
        <div className="mt-auto flex flex-wrap gap-0.5 pt-0">
          <span className="rounded-full border border-white/12 bg-transparent px-1.5 py-0.5 text-[0.55rem] font-medium text-white/70 sm:px-2 sm:text-[0.6rem]">
            {a}
          </span>
          <span className="rounded-full border border-white/12 bg-transparent px-1.5 py-0.5 text-[0.55rem] font-medium text-white/70 sm:px-2 sm:text-[0.6rem]">
            {b}
          </span>
        </div>
      </div>
    </article>
  );
}

export function HallOfFameSearchByYear() {
  const [year, setYear] = useState<HallOfFameSearchYear>(HALL_OF_FAME_DEFAULT_SEARCH_YEAR);
  const index = YEARS.indexOf(year);

  const forYear = useMemo(
    () =>
      HALL_OF_FAME_DEMO_INDUCTEES.filter((row) => row.inductionYear === year)
        .sort(
          (a, b) => Number(a.id) - Number(b.id)
        )
        .slice(0, 4),
    [year]
  );

  const events = HALL_OF_FAME_NOTABLE_BY_YEAR[year] ?? [];
  const canStepUp = index > 0;
  const canStepDown = index < YEARS.length - 1;

  return (
    <section
      className="relative w-full min-w-0 bg-background py-10 sm:py-12 md:py-16"
      aria-labelledby="hall-of-fame-year-heading"
    >
      <div className={landingInnerMax}>
        <h2
          id="hall-of-fame-year-heading"
          className="pb-8 text-center text-2xl font-bold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] min-[400px]:pb-9 min-[400px]:text-[1.75rem] sm:pb-10 sm:text-3xl"
        >
          Search By Year
        </h2>

        <div
          className="grid w-full min-w-0 grid-cols-1 items-stretch gap-2.5 sm:gap-3 lg:grid-cols-[minmax(0,14.5rem)_minmax(0,1fr)_minmax(0,14.5rem)] lg:items-stretch lg:gap-1.5 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_minmax(0,16rem)] xl:gap-2"
        >
          {/* Year rail — chevrons top/bottom, active year in gold */}
          <div className="flex min-h-0 w-full min-w-0 items-center justify-center lg:w-auto lg:items-stretch">
            <div className="flex w-full max-w-[18rem] flex-row items-center gap-2.5 rounded-2xl border border-white/10 bg-[#171723] p-2 sm:max-w-[20rem] sm:gap-3.5 sm:p-3 lg:h-full lg:min-h-[23.5rem] lg:max-w-[14.5rem] lg:w-full xl:max-w-[16rem] lg:flex-col lg:items-stretch lg:justify-stretch lg:gap-0 lg:py-4">
              <button
                type="button"
                className="flex h-16 w-16 shrink-0 items-center justify-center text-white/90 transition enabled:hover:text-gold disabled:cursor-not-allowed disabled:opacity-30 sm:h-[4.25rem] sm:w-[4.25rem] lg:mx-auto"
                onClick={() => {
                  if (canStepUp) setYear(YEARS[index - 1]!);
                }}
                disabled={!canStepUp}
                aria-label="Previous year"
              >
                <ChevronUp className="h-12 w-12 sm:h-14 sm:w-14" />
              </button>
              <div
                className="flex min-h-0 min-w-0 flex-1 flex-row items-center justify-start gap-x-1.5 gap-y-0 overflow-x-auto overflow-y-hidden overscroll-x-contain py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [scrollbar-gutter:stable] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden min-[400px]:justify-center min-[400px]:gap-2.5 min-[500px]:gap-3 lg:w-full lg:flex-1 lg:flex-col lg:justify-center lg:gap-3 lg:overflow-x-visible lg:py-1.5"
                role="listbox"
                aria-label="Induction year"
              >
                {YEARS.map((y) => {
                  const isSel = y === year;
                  return (
                    <button
                      key={y}
                      type="button"
                      role="option"
                      aria-selected={isSel}
                      onClick={() => setYear(y)}
                      className={
                        isSel
                          ? "w-auto shrink-0 snap-start scroll-mx-1 text-center text-[clamp(1.35rem,5.5vw,2.25rem)] font-black leading-none tracking-tight text-gold min-[400px]:text-[2.5rem] sm:text-[2.7rem] md:text-[2.9rem] lg:w-full lg:snap-none"
                          : "w-auto shrink-0 snap-start scroll-mx-1 text-center text-lg font-bold leading-none text-white/40 transition hover:text-white/65 min-[400px]:text-xl sm:text-2xl lg:w-full lg:snap-none"
                      }
                    >
                      {y}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                className="flex h-16 w-16 shrink-0 items-center justify-center text-white/90 transition enabled:hover:text-gold disabled:cursor-not-allowed disabled:opacity-30 sm:h-[4.25rem] sm:w-[4.25rem] lg:mx-auto"
                onClick={() => {
                  if (canStepDown) setYear(YEARS[index + 1]!);
                }}
                disabled={!canStepDown}
                aria-label="Next year"
              >
                <ChevronDown className="h-12 w-12 sm:h-14 sm:w-14" />
              </button>
            </div>
          </div>

          {/* 2×2 inductee grid */}
          <div className="min-h-0 w-full min-w-0 self-stretch justify-self-center max-w-full lg:max-w-[min(100%,28rem)] xl:max-w-[min(100%,30.5rem)] 2xl:max-w-[min(100%,32.5rem)]">
            {forYear.length === 0 ? (
              <p
                className="flex h-full min-h-[17.5rem] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-4 text-center text-sm text-white/50"
                role="status"
              >
                No inductee records for this year yet.
              </p>
            ) : (
              <div className="grid h-full min-h-0 w-full min-w-0 auto-rows-fr grid-cols-1 gap-2.5 min-[500px]:grid-cols-2 min-[500px]:gap-3 md:gap-3.5">
                {forYear.map((row, i) => {
                  const slot = SEARCH_BY_YEAR_PORTRAIT_CARDS[i];
                  return (
                    <SearchYearInducteeCard
                      key={row.id}
                      row={row}
                      yearLabel={row.inductionYear}
                      portraitSrc={slot?.src}
                      imageClassName={slot ? searchByYearImageClass(slot.objectPosition) : undefined}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Notable events — center-aligned (matches reference) */}
          <div className="flex min-h-0 min-w-0 flex-col self-stretch rounded-2xl border border-white/10 bg-[#171723] p-4 sm:p-5 md:p-6">
            <h3 className="shrink-0 text-center text-[0.65rem] font-bold uppercase tracking-[0.3em] text-gold min-[400px]:text-xs min-[400px]:tracking-[0.32em]">
              Notable Events
            </h3>
            <ul
              className="mt-2 min-h-0 flex-1 space-y-2.5 text-center [text-wrap:balance] min-[400px]:mt-2.5 min-[400px]:space-y-3"
              role="list"
            >
              {events.map((ev) => (
                <li key={`${year}-${ev.title}`} className="flex flex-col items-center text-center">
                  <span
                    className="select-none text-xl leading-none"
                    aria-hidden
                  >
                    {ev.icon}
                  </span>
                  <p className="mt-1.5 text-xs font-semibold text-white min-[400px]:text-sm">{ev.title}</p>
                  <p className="mt-0.5 max-w-prose text-[0.7rem] leading-relaxed text-white/70 min-[400px]:text-xs">
                    {ev.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-2xl text-center min-[400px]:mt-14 sm:mt-16">
          <h3 className="text-xl font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.3)] min-[400px]:text-2xl sm:text-3xl">
            Want to Nominate Your Favorite Artist?
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-white/70 min-[400px]:mt-3 min-[400px]:text-sm">
            Be the first to hear about inductees, events, and exclusive merch drops.
          </p>
          <div className="mt-6 flex justify-center min-[400px]:mt-8">
            <Link
              href="/nominations"
              className="inline-flex min-h-[2.5rem] items-center justify-center rounded-xl bg-gold px-5 py-2.5 text-xs font-semibold text-black shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition hover:bg-gold-muted min-[400px]:px-6 min-[400px]:text-sm"
            >
              Nominate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
