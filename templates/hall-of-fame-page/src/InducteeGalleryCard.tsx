import Image from "next/image";

export type InducteeGalleryCardProps = {
  name: string;
  role: string;
  /** Optional third line (e.g. year) — used on the home gallery placeholder cards. */
  detail?: string;
  meta1: string;
  meta2: string;
  /** Gold “Legacy” pill on the image */
  legacyInductee?: boolean;
  imageSrc?: string | null;
  imageAlt?: string;
  /**
   * When set (Hall of Fame directory), shows a single muted line and hides the tag row.
   * E.g. `Pioneer | Inducted 2010`
   */
  subtitle?: string;
  /** Slightly more compact (Search by year 2×2) */
  compact?: boolean;
};

/**
 * Inductee tile: placeholder grid (home + Hall of Fame) uses cards without
 * `imageSrc` or `subtitle`; other views can pass images and a subtitle line.
 */
export function InducteeGalleryCard({
  name,
  role,
  detail,
  meta1,
  meta2,
  legacyInductee = false,
  imageSrc,
  imageAlt = "",
  subtitle,
  compact = false,
}: InducteeGalleryCardProps) {
  const hasImage = Boolean(imageSrc);
  const imgH = compact ? "h-[55%] sm:h-[56%]" : "h-[58%]";

  return (
    <article
      className={
        compact
          ? "flex aspect-[7/8] w-full min-w-0 max-w-sm flex-col overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#171723] shadow-[0_8px_28px_-18px_rgba(0,0,0,0.85)] sm:max-w-none"
          : "flex aspect-[7/8] w-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#171723] shadow-[0_8px_28px_-18px_rgba(0,0,0,0.85)]"
      }
    >
      <div
        className={`relative ${imgH} min-h-0 w-full shrink-0 overflow-hidden rounded-t-[14px] bg-gradient-to-b from-white/[0.07] to-background/85 sm:rounded-t-xl`}
      >
        {hasImage && imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="origin-center scale-[0.68] object-cover object-[50%_48%] sm:scale-[0.72] sm:object-[50%_46%] md:scale-75"
            />
            {legacyInductee && (
              <div className="absolute left-2 top-2 z-[1] rounded-full border border-gold/80 bg-[#171723]/90 px-2 py-0.5 text-[0.5rem] font-semibold uppercase tracking-wide text-gold sm:left-2.5 sm:top-2.5 sm:px-2.5 sm:py-1 sm:text-[0.55rem]">
                Legacy
              </div>
            )}
          </>
        ) : (
          <>
            {legacyInductee && (
              <div className="absolute left-2 top-2 z-[1] rounded-full border border-gold/80 bg-[#171723]/90 px-2 py-0.5 text-[0.5rem] font-semibold uppercase tracking-wide text-gold sm:left-2.5 sm:top-2.5 sm:px-2.5 sm:py-1 sm:text-[0.55rem]">
                Legacy
              </div>
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 text-center">
              <span className="text-[0.7rem] font-medium tracking-wide text-gold/90 sm:text-xs">
                Coming soon
              </span>
              <span className="text-[0.6rem] text-white/40 sm:text-[0.65rem]">
                Portrait pending
              </span>
            </div>
          </>
        )}
      </div>
      <div
        className={
          compact
            ? "flex min-h-0 flex-1 flex-col justify-between p-2 sm:p-2.5"
            : "flex min-h-0 flex-1 flex-col justify-between p-2.5 sm:p-3"
        }
      >
        <div className="min-w-0">
          <p
            className={
              compact
                ? "truncate text-[0.7rem] font-semibold text-white sm:text-xs"
                : "truncate text-xs font-semibold text-white sm:text-sm"
            }
          >
            {name}
          </p>
          {subtitle ? (
            <p
              className={
                compact
                  ? "mt-0.5 line-clamp-2 text-[0.6rem] leading-snug text-white/50 sm:text-[0.65rem]"
                  : "mt-0.5 text-[0.7rem] leading-snug text-white/50 sm:text-xs"
              }
            >
              {subtitle}
            </p>
          ) : (
            <>
              <p className="mt-0.5 text-[0.7rem] leading-snug text-white/50 sm:text-xs">
                {role}
              </p>
              {detail ? (
                <p className="mt-0.5 text-[0.7rem] leading-snug text-[#94a3b8]/90 sm:text-xs">
                  {detail}
                </p>
              ) : null}
            </>
          )}
        </div>
        {subtitle ? null : (
          <div className="mt-1.5 flex flex-wrap gap-1">
            <span className="rounded-md border border-[#a5b4fc]/35 bg-[#1a1b27] px-1.5 py-px text-[0.55rem] font-normal text-white/55 sm:px-2 sm:text-[0.6rem]">
              {meta1}
            </span>
            <span className="rounded-md border border-[#a5b4fc]/35 bg-[#1a1b27] px-1.5 py-px text-[0.55rem] font-normal text-white/55 sm:px-2 sm:text-[0.6rem]">
              {meta2}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

const PLACEHOLDER_CARD_COUNT = 12;

/** Same “Coming soon” tiles as the home page — no photos, no per-inductee subtitle line. */
export function InducteeGalleryPlaceholderGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7 xl:gap-8">
      {Array.from({ length: PLACEHOLDER_CARD_COUNT }, (_, i) => (
        <InducteeGalleryCard
          key={i}
          name="Coming soon"
          role="Inductee profile"
          detail="Year TBD"
          meta1="Soon"
          meta2="TBA"
        />
      ))}
    </div>
  );
}
