import Image from "next/image";
import Link from "next/link";

export type AboutWhatWeDoSegment =
  | string
  | { type: "link"; href: string; children: string };

export type AboutWhatWeDoItem = {
  key: string;
  label: string;
  segments: AboutWhatWeDoSegment[];
};

export type AboutValuePillar = {
  key: string;
  title: string;
  body: string;
};

export type AboutCta = {
  key: string;
  href: string;
  label: string;
};

export type AboutPageData = {
  kicker: string;
  h1: string;
  sub: string;
  heroImage: { src: string; alt: string };
  lead: [string, string];
  mission: { title: string; paragraphs: [string, string] };
  whatWeDo: { title: string; items: AboutWhatWeDoItem[] };
  values: { title: string; pillars: AboutValuePillar[] };
  leadershipNote: string;
  cta: { title: string; sub: string; actions: AboutCta[] };
};

const body =
  "text-base leading-relaxed text-white/85 [overflow-wrap:anywhere] sm:text-justify";
const h2 =
  "text-balance text-lg font-semibold leading-snug text-gold [overflow-wrap:anywhere] sm:text-xl";
const linkClass =
  "font-medium break-words text-gold underline decoration-gold/45 underline-offset-2 transition hover:decoration-gold hover:text-gold/95";
/** Uniform height, compact type — long labels use two balanced lines without breaking row height. */
const ctaClass =
  "no-underline shadow-gold-sm inline-flex h-12 min-h-12 w-full min-w-0 max-w-full shrink-0 touch-manipulation select-none items-center justify-center rounded-lg border border-gold/90 bg-gold px-2.5 text-center text-xs font-medium leading-tight text-balance text-background antialiased transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-[400px]:w-auto min-[400px]:min-w-[8.5rem] min-[400px]:max-w-[11.25rem] min-[400px]:px-3 min-[500px]:text-[0.8125rem] min-[500px]:leading-snug";

function WhatWeDoLine({ item }: { item: AboutWhatWeDoItem }) {
  return (
    <li className="min-w-0 pl-0.5 [list-style-position:outside]">
      <span className="text-white/90">{item.label} </span>
      {item.segments.map((seg, i) => {
        if (typeof seg === "string") {
          return <span key={i}>{seg}</span>;
        }
        return (
          <Link key={i} href={seg.href} className={linkClass}>
            {seg.children}
          </Link>
        );
      })}
    </li>
  );
}

export function AboutPageView({ data }: { data: AboutPageData }) {
  return (
    <div className="mx-auto w-full min-w-0 max-w-4xl font-sans">
      <header className="border-b border-gold/30 pb-5 sm:pb-7">
        <p className="text-sm font-medium leading-snug text-gold/95 [overflow-wrap:anywhere]">
          {data.kicker}
        </p>
        <h1 className="mt-2 text-balance text-[clamp(1.375rem,1.1rem+1.1vw,2.25rem)] font-semibold leading-[1.15] text-white [overflow-wrap:anywhere] min-[400px]:leading-tight sm:mt-2.5 min-[500px]:text-[clamp(1.5rem,1rem+1.4vw,2.5rem)]">
          {data.h1}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65 [overflow-wrap:anywhere] sm:mt-3 sm:text-base sm:leading-normal">
          {data.sub}
        </p>
      </header>

      <div className="mt-7 grid w-full min-w-0 grid-cols-1 gap-6 min-[500px]:gap-7 md:mt-8 md:grid-cols-2 md:items-start md:gap-6 lg:gap-8">
        <div
          className="relative w-full min-w-0 self-start overflow-hidden rounded-lg border border-gold/20 bg-background max-md:min-h-[12rem] max-md:max-h-[min(52svh,22rem)] md:aspect-[4/3] md:max-h-none"
        >
          <Image
            src={data.heroImage.src}
            alt={data.heroImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="min-w-0 space-y-3 sm:space-y-3.5">
          <p className={body}>{data.lead[0]}</p>
          <p className={body}>{data.lead[1]}</p>
        </div>
      </div>

      <div className="mt-9 space-y-8 sm:mt-10 sm:space-y-9 md:mt-12 md:space-y-10">
        <section
          className="border-t border-gold/25 pt-6 sm:pt-7"
          aria-labelledby="about-mission"
        >
          <h2 id="about-mission" className={h2}>
            {data.mission.title}
          </h2>
          <p className={`mt-3.5 ${body}`}>{data.mission.paragraphs[0]}</p>
          <p className={`mt-3.5 ${body}`}>{data.mission.paragraphs[1]}</p>
        </section>

        <section
          className="border-t border-gold/25 pt-6 sm:pt-7"
          aria-labelledby="about-whatwedo"
        >
          <h2 id="about-whatwedo" className={h2}>
            {data.whatWeDo.title}
          </h2>
          <ul
            className={`mt-3.5 list-disc space-y-1.5 pl-4 marker:text-gold [list-style-position:outside] min-[400px]:pl-5 sm:space-y-2 sm:pl-6 ${body}`}
          >
            {data.whatWeDo.items.map((item) => (
              <WhatWeDoLine key={item.key} item={item} />
            ))}
          </ul>
        </section>

        <section
          className="border-t border-gold/25 pt-6 sm:pt-7"
          aria-labelledby="about-values"
        >
          <h2 id="about-values" className={h2}>
            {data.values.title}
          </h2>
          <ul className="mt-3.5 list-none space-y-3 pl-0 sm:space-y-3.5">
            {data.values.pillars.map((pillar) => (
              <li key={pillar.key} className="min-w-0 pl-0">
                <h3 className="text-base font-semibold text-white/95 [overflow-wrap:anywhere] sm:text-lg">
                  {pillar.title}
                </h3>
                <p className={`mt-1 ${body}`}>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm leading-relaxed text-white/60 [overflow-wrap:anywhere]">
          {data.leadershipNote}
        </p>

        <section
          className="border-t border-gold/25 bg-nomination-card px-4 py-5 text-center sm:rounded-lg sm:px-5 sm:py-6"
          aria-labelledby="about-cta"
        >
          <h2
            id="about-cta"
            className={`${h2} text-center text-base sm:text-lg`}
          >
            {data.cta.title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-white/85 [overflow-wrap:anywhere] sm:mt-2.5 sm:text-base">
            {data.cta.sub}
          </p>
          <div className="mx-auto mt-4 flex w-full min-w-0 max-w-2xl flex-col items-stretch justify-center gap-2.5 min-[400px]:mt-5 min-[400px]:max-w-none min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:items-stretch min-[400px]:justify-center min-[400px]:gap-2.5 min-[500px]:gap-3">
            {data.cta.actions.map((a) => (
              <Link key={a.key} href={a.href} className={ctaClass}>
                {a.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
