import Image from "next/image";

/** Intrinsic size of footer photo — used for layout + correct aspect ratio. */
const FOOTER_IMAGE_WIDTH = 2460;
const FOOTER_IMAGE_HEIGHT = 717;

/** Center zoom: crops left/right while the outer block keeps the same aspect ratio. */
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
          priority={false}
        />
      </div>
      <div className="flex w-full min-w-0 items-center justify-center border-t border-black/10 bg-gold py-2.5 px-4 sm:py-3">
        <p className="text-center text-[0.7rem] font-bold leading-tight text-black sm:text-xs">
          © EliteLevelSteppersHallOfFame{COPYRIGHT_YEAR}
        </p>
      </div>
    </footer>
  );
}
