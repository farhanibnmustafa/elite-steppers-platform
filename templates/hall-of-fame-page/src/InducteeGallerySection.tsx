import Link from "next/link";
import { InducteeGalleryPlaceholderGrid } from "./InducteeGalleryCard";
import { landingInnerMax } from "./landingLayout";

type InducteeGallerySectionProps = {
  headingId: string;
  /** Home page: link to the full Hall of Fame. Omit on `/hall-of-fame` so the grid matches the landing placeholder-only layout. */
  showFullHallCta?: boolean;
};

/**
 * Shared 12-tile “Coming soon” gallery used on the landing page and the Hall of Fame page.
 * Profile images and per-inductee copy belong in Featured / Search by year, not here.
 */
export function InducteeGallerySection({
  headingId,
  showFullHallCta = false,
}: InducteeGallerySectionProps) {
  return (
    <section
      className="relative w-full min-w-0 bg-background pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-14 md:pb-16"
      aria-labelledby={headingId}
    >
      <div className={landingInnerMax}>
        <h2
          id={headingId}
          className="pb-10 text-center text-[1.35rem] font-semibold leading-tight tracking-tight text-white sm:pb-12 sm:text-[1.55rem] md:pb-14 md:text-[1.9rem]"
        >
          Inductee Gallery
        </h2>

        <InducteeGalleryPlaceholderGrid />

        {showFullHallCta ? (
          <div className="mt-10 flex justify-center sm:mt-11 md:mt-12">
            <Link
              href="/hall-of-fame"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#B8B0D0] bg-white/[0.06] px-5 py-1.5 text-[0.6875rem] font-normal tracking-tight text-[#B8B0D0] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:bg-white/[0.1] sm:px-6 sm:py-2 sm:text-xs"
            >
              See Full Hall of Fame
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
