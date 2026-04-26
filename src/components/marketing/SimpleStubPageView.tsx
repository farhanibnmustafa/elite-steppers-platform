import { ContentMain } from "@/components/marketing/ContentMain";

export type StubHeadingData =
  | { style: "semibold"; text: string }
  | {
      style: "brand-gold";
      /** Text before the gold span (e.g. `"Hall of Fame "`) */
      before?: string;
      gold: string;
      /** Text after the gold span */
      after?: string;
    };

export type SimpleStubPageData = {
  heading: StubHeadingData;
  subtext: string;
  subtextClassName?: string;
};

const brandH1Class =
  "font-brand text-2xl font-medium tracking-tight text-white sm:text-3xl";

export function SimpleStubPageView({ data }: { data: SimpleStubPageData }) {
  const { heading, subtext, subtextClassName } = data;
  const subP = subtextClassName ?? "mt-4 text-white/75";

  return (
    <ContentMain>
      {heading.style === "semibold" ? (
        <h1 className="text-2xl font-semibold">{heading.text}</h1>
      ) : (
        <h1 className={brandH1Class}>
          {heading.before}
          <span className="text-gold">{heading.gold}</span>
          {heading.after}
        </h1>
      )}
      <p className={subP}>{subtext}</p>
    </ContentMain>
  );
}
