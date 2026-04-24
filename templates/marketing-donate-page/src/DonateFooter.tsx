import Image from "next/image";
import Link from "next/link";
import { donatePageConfig } from "./donateConfig";

const COPYRIGHT_YEAR = new Date().getFullYear();

export function DonateFooter() {
  const { footer } = donatePageConfig;
  const img = footer.heroImage;

  return (
    <footer
      className="relative z-0 w-full min-w-0 overflow-x-clip bg-black"
      aria-label="Site footer"
    >
      {img ? (
        <div
          className="relative z-0 w-full overflow-hidden leading-[0]"
          style={{ aspectRatio: `${img.width} / ${img.height}` }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center"
            style={{ transform: `scale(${img.zoom})` }}
            sizes="100vw"
            priority={false}
          />
        </div>
      ) : null}
      <div className="flex w-full min-w-0 items-center justify-center border-t border-black/10 bg-gold px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] sm:pt-3 sm:pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <p className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[0.7rem] font-bold leading-tight text-background sm:text-xs">
          <Link
            href={footer.termsHref}
            className="no-underline transition hover:opacity-90"
          >
            {footer.termsLabel}
          </Link>
          <span className="text-background/50" aria-hidden>
            ·
          </span>
          <span>
            {footer.copyrightPrefix}
            {COPYRIGHT_YEAR}
          </span>
        </p>
      </div>
    </footer>
  );
}
