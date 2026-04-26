import Image from "next/image";
import Link from "next/link";

/** Intrinsic size of `public/images/11.png` — used for layout + correct aspect ratio. */
const FOOTER_IMAGE_WIDTH = 2460;
const FOOTER_IMAGE_HEIGHT = 717;

/**
 * Slight zoom so left/right edge figures are cropped; keeps the same
 * aspect ratio for the block (unchanged) while focusing the center of the photo.
 */
const FOOTER_IMAGE_ZOOM = 1.25;

const COPYRIGHT_YEAR = new Date().getFullYear();

export function LandingNewsletterFooter() {
  return (
    <footer
      className="relative z-0 w-full min-w-0 overflow-x-clip bg-black"
      aria-label="Site footer"
    >
      <div
        className="relative z-0 w-full overflow-hidden leading-[0]"
        style={{ aspectRatio: `${FOOTER_IMAGE_WIDTH} / ${FOOTER_IMAGE_HEIGHT}` }}
      >
        <Image
          src="/images/11.png"
          alt="Large group of steppers in formal black attire on a wooden stage in front of a red curtain"
          fill
          className="object-cover object-center"
          style={{ transform: `scale(${FOOTER_IMAGE_ZOOM})` }}
          sizes="100vw"
          priority
        />
      </div>
      <div className="flex w-full min-w-0 items-center justify-center border-t border-black/10 bg-gold px-4 pt-2.5 sm:pt-3 pb-[max(0.625rem,env(safe-area-inset-bottom))] sm:pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[0.7rem] font-bold leading-tight text-background sm:text-xs">
          <Link
            href="/terms"
            className="no-underline transition hover:opacity-90"
          >
            Terms &amp; Conditions
          </Link>
          <span className="text-background/50" aria-hidden>
            ·
          </span>
          <span>© EliteLevelSteppersHallOfFame{COPYRIGHT_YEAR}</span>
        </p>
      </div>
    </footer>
  );
}
