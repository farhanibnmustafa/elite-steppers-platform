"use client";

import Image from "next/image";
import { landingInnerMax } from "./landingLayout";

const FEATURED = [
  {
    kind: "large" as const,
    category: "Master Stepper",
    name: "Marcus Johnson",
    bio: "Honored for his unmatched precision, dynamic stage presence, and dedication to mentoring the next generation of steppers. His artistry has set a gold standard in competitive and showcase performances nationwide.",
    imageSrc: "/images/13.png",
    /** Full-bleed: shared crop so the subject stays up / center-left; right side reads against the gradient, not a solid panel. */
    imagePosition:
      "object-cover object-[28%_26%] min-[400px]:object-[30%_25%] sm:object-[32%_24%] lg:object-[34%_22%]",
  },
  {
    kind: "small" as const,
    category: "Sound Innovator",
    name: "DJ Liana Cruz",
    bio: "Recognized as the creative force behind stepping's most electrifying performances.",
    imageSrc: "/images/14.png",
    imageClass:
      "z-0 object-cover object-[72%_32%] sm:object-[70%_30%] lg:object-[68%_30%] transition-transform duration-500 ease-out group-hover:scale-105",
  },
  {
    kind: "small" as const,
    category: "Fashion Visionary",
    name: "Danielle Brooks",
    bio: "Celebrated for her bold, culturally-inspired designs that have shaped the signature look of elite stepping troupes.",
    imageSrc: "/images/15.png",
    imageClass:
      "z-0 object-cover object-[70%_44%] sm:object-[68%_45%] lg:object-[40%_24%] transition-transform duration-500 ease-out group-hover:scale-105",
    /** Slight dim so this photo lines up with the other cards' contrast. */
    imageOverlayClass:
      "bg-gradient-to-b from-black/40 via-black/35 to-black/50",
  },
] as const;

const cardBase =
  "group relative w-full min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#171723] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)] transition-shadow duration-300 will-change-transform hover:shadow-[0_28px_64px_-18px_rgba(0,0,0,0.65)]";

function ViewProfileButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`mt-3 inline-flex w-max items-center justify-center rounded-full bg-gold px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.11em] text-black shadow-sm transition hover:bg-gold-muted sm:mt-4 sm:px-6 sm:py-3 sm:tracking-[0.13em] ${className}`}
    >
      View Profile
    </button>
  );
}

type SmallEntry = (typeof FEATURED)[number] & { kind: "small" };

function InducteeSmallCard({
  entry,
  sizes,
}: {
  entry: SmallEntry;
  sizes: string;
}) {
  return (
    <article
      className={`${cardBase} min-h-[16.5rem] flex-1 sm:min-h-[18.25rem] lg:min-h-0`}
    >
      <Image
        src={entry.imageSrc}
        alt={entry.name}
        fill
        sizes={sizes}
        className={entry.imageClass}
      />
      {"imageOverlayClass" in entry && entry.imageOverlayClass ? (
        <div
          className={`pointer-events-none absolute inset-0 z-[1] ${entry.imageOverlayClass}`}
          aria-hidden
        />
      ) : null}
      <div className="absolute inset-0 z-10 flex min-h-0 flex-col items-start justify-center p-5 sm:p-6 sm:pl-6 sm:pr-4">
        <div className="max-w-[min(100%,22rem)] text-left [text-shadow:0_1px_3px_rgba(0,0,0,0.85),0_0_24px_rgba(0,0,0,0.4)]">
          <p className="text-[0.6rem] font-bold uppercase leading-none tracking-[0.24em] text-gold min-[400px]:text-[0.65rem] min-[400px]:tracking-[0.26em]">
            {entry.category}
          </p>
          <h3 className="mt-1.5 text-base font-extrabold uppercase leading-tight text-white min-[400px]:text-lg sm:mt-2 sm:text-xl">
            {entry.name}
          </h3>
          <p className="mt-1.5 text-[0.8rem] font-normal leading-[1.55] text-white/90 min-[400px]:text-sm sm:leading-[1.5]">
            {entry.bio}
          </p>
        </div>
      </div>
    </article>
  );
}

export function HallOfFameFeaturedInductees() {
  const [large, ...rest] = FEATURED;
  if (!large || large.kind !== "large") return null;
  const [smTop, smBottom] = rest;

  return (
    <section
      className="relative w-full min-w-0 bg-background py-10 sm:py-12 md:py-16"
      aria-labelledby="hall-of-fame-featured-heading"
    >
      <div className={landingInnerMax}>
        <h2
          id="hall-of-fame-featured-heading"
          className="pb-8 text-center text-2xl font-bold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] min-[400px]:pb-9 min-[400px]:text-[1.75rem] sm:pb-10 sm:text-3xl"
        >
          Featured Inductees
        </h2>

        <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,1.78fr)_minmax(0,1.22fr)] lg:gap-6">
          <article
            className={`${cardBase} relative flex min-h-[min(30.5rem,92vw)] flex-col sm:min-h-[min(32.5rem,88vw)] lg:h-full lg:min-h-[32.5rem]`}
          >
            {/* Full-bleed image stack + right scrim for legibility (replaces the old left/right split). */}
            <div
              className="absolute inset-0 overflow-hidden bg-[#171723]"
              aria-hidden
            >
              <div className="absolute inset-0">
                <Image
                  src={large.imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className={`${large.imagePosition} blur-2xl opacity-45`}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <Image
                src={large.imageSrc}
                alt={large.name}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                className={`${large.imagePosition} z-0 transition-transform duration-500 ease-out group-hover:scale-105`}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-l from-black/95 from-[0%] via-black/55 via-[40%] to-transparent to-[65%] sm:via-[42%] sm:to-[68%] lg:from-black/90 lg:via-[45%] lg:via-black/50 lg:to-[72%]"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col justify-end p-5 pb-6 sm:p-6 sm:pb-8 md:p-8 max-lg:min-h-[14rem] lg:justify-center lg:pb-8 lg:pl-4">
              <div className="ml-auto flex w-full max-w-md flex-col items-end text-right [text-shadow:0_1px_3px_rgba(0,0,0,0.5),0_0_28px_rgba(0,0,0,0.35)] max-lg:ml-0 max-lg:max-w-full max-lg:items-stretch max-lg:text-left">
                <p className="text-[0.65rem] font-bold uppercase leading-none tracking-[0.28em] text-gold min-[400px]:text-xs min-[400px]:tracking-[0.3em]">
                  {large.category}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold uppercase leading-[1.1] tracking-wide text-white min-[400px]:text-3xl sm:mt-2.5 sm:text-4xl sm:leading-[1.05] md:text-5xl">
                  {large.name}
                </h3>
                <p className="mt-2 text-[0.8rem] font-normal leading-[1.6] text-white/90 min-[400px]:text-sm sm:mt-2.5 sm:text-[0.9rem] sm:leading-[1.55]">
                  {large.bio}
                </p>
                <ViewProfileButton className="self-end max-lg:self-start" />
              </div>
            </div>
          </article>

          <div className="flex min-h-0 min-w-0 flex-col gap-6">
            {smTop && smTop.kind === "small" ? (
              <InducteeSmallCard
                entry={smTop}
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
            ) : null}
            {smBottom && smBottom.kind === "small" ? (
              <InducteeSmallCard
                entry={smBottom}
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
