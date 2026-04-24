import Image from "next/image";
import Link from "next/link";
import { landingInnerMax } from "./landingLayout";

export function LandingMerch() {
  return (
    <section
      className="relative w-full min-w-0 overflow-x-clip bg-background py-8 sm:py-10 md:py-12 lg:py-14"
      aria-labelledby="hall-of-fame-merch-heading"
    >
      <div
        className={`${landingInnerMax} relative z-10 flex flex-col items-center text-center`}
      >
        <h2
          id="hall-of-fame-merch-heading"
          className="max-w-full text-pretty px-2 text-[1.55rem] font-semibold uppercase leading-tight tracking-[0.18em] text-gold min-[400px]:text-[1.75rem] min-[400px]:tracking-[0.28em] sm:text-[2.125rem] sm:tracking-[0.36em] md:text-[2.5rem] md:tracking-[0.4em] lg:text-[3.05rem] lg:tracking-[0.42em] xl:text-[3.35rem] xl:tracking-[0.44em]"
        >
          Hall of Fame
        </h2>

        <div className="relative mt-4 w-full px-2 pb-3 sm:mt-5 sm:pb-4 md:mt-6 md:pb-5">
          <div
            className="pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 justify-center overflow-x-visible"
            aria-hidden
          >
            <span className="origin-center translate-y-[4%] scale-x-[0.9] scale-y-[1.14] select-none whitespace-nowrap text-[clamp(4.75rem,24vw,22rem)] font-bold leading-[1.18] tracking-[0.02em] text-[#222226] sm:scale-x-[0.91] sm:scale-y-[1.2] sm:text-[clamp(5.25rem,26vw,24rem)] sm:tracking-[0.028em] sm:leading-[1.22] md:scale-x-[0.92] md:scale-y-[1.26] md:tracking-[0.034em] md:leading-[1.28] lg:scale-x-[0.92] lg:scale-y-[1.32] lg:tracking-[0.04em]">
              MERCH
            </span>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-xl translate-y-4 sm:max-w-3xl sm:translate-y-5 md:max-w-3xl md:translate-y-6 lg:max-w-4xl lg:translate-y-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md sm:aspect-[5/4] sm:max-w-xl md:max-w-2xl md:aspect-[16/10]">
              <Image
                src="/images/merch-flatlay.png"
                alt="Hall of Fame merchandise: apparel, hat, dress shoes, framed photo, pins, and drinkware"
                fill
                className="object-contain object-center drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
                sizes="(max-width: 768px) 100vw, 896px"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-9 md:mt-10">
          <Link
            href="/merch"
            className="inline-flex items-center justify-center rounded-[10px] border border-[#c8bfe7] bg-[#1a1a1c] px-5 py-1.5 text-[0.6875rem] font-medium text-[#c8bfe7] transition hover:border-[#ddd6f5] hover:bg-[#222226] hover:text-[#ddd6f5] sm:px-6 sm:py-2 sm:text-xs"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
