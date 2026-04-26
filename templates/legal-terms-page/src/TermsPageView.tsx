import Link from "next/link";
import { ContentMain } from "./ContentMain";
import {
  type TermsBlock,
  type TermsSection,
  termsSections,
  TERMS_LAST_UPDATED,
} from "./termsContent";

function TermsBlockContent({ block }: { block: TermsBlock }) {
  const body =
    "text-left text-base leading-relaxed text-white/85 [overflow-wrap:anywhere] sm:text-justify";

  if (block.type === "p") {
    return <p className={body}>{block.text}</p>;
  }
  if (block.type === "ul") {
    return (
      <ul
        className={`${body} list-disc space-y-2 pl-5 sm:pl-6 marker:text-gold`}
      >
        {block.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <ol
      className={`${body} list-decimal space-y-2 pl-5 sm:pl-6 marker:font-medium marker:text-gold`}
    >
      {block.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}

function TermsSectionView({ section }: { section: TermsSection }) {
  return (
    <section
      className="scroll-mt-20 border-t border-gold/25 pt-5 first:border-t-0 first:pt-0 first:scroll-mt-0 sm:scroll-mt-24 sm:pt-6 md:scroll-mt-28"
      aria-labelledby={section.id}
    >
      <h2
        id={section.id}
        className="text-balance text-base font-semibold leading-snug text-gold [overflow-wrap:anywhere] min-[400px]:text-lg sm:text-xl"
      >
        {section.title}
      </h2>
      <div className="mt-3.5 space-y-3.5 sm:mt-4 sm:space-y-4">
        {section.blocks.map((block, blockIndex) => (
          <TermsBlockContent key={blockIndex} block={block} />
        ))}
      </div>
    </section>
  );
}

/**
 * Full terms view including `ContentMain` — matches `app/(marketing)/terms/page.tsx` content.
 */
export function TermsPageView() {
  return (
    <ContentMain>
      <article
        className="mx-auto w-full min-w-0 max-w-full sm:max-w-3xl font-sans"
        lang="en"
      >
        <header className="border-b border-gold/30 pb-5 sm:pb-8">
          <h1 className="text-balance text-xl font-semibold leading-tight text-white [overflow-wrap:anywhere] min-[400px]:text-2xl sm:text-3xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm leading-snug text-white/60">
            Last updated: {TERMS_LAST_UPDATED}
          </p>
          <p className="mt-3 max-w-2xl border-l-2 border-gold/40 pl-3 text-sm leading-relaxed text-white/60 sm:mt-4 sm:pl-4 sm:text-justify">
            This page is provided for your convenience. It does not constitute legal advice. Have
            qualified counsel review these terms before relying on them for commercial or legal
            decisions.
          </p>
        </header>

        <nav
          className="mt-6 w-full min-w-0 rounded-lg border border-gold/20 bg-white/[0.03] p-3.5 sm:mt-8 sm:p-5"
          aria-labelledby="terms-toc-title"
        >
          <p
            id="terms-toc-title"
            className="text-sm font-semibold tracking-wide text-gold"
          >
            On this page
          </p>
          <ol className="mt-3.5 list-outside list-decimal space-y-1.5 pl-5 text-sm leading-normal text-white/80 marker:font-medium marker:text-gold sm:mt-4 sm:space-y-2 sm:pl-6 sm:text-base sm:leading-snug">
            {termsSections.map((section) => (
              <li key={section.id} className="min-w-0 pl-0.5">
                <Link
                  href={`#${section.id}`}
                  className="inline-block w-full min-w-0 max-w-full rounded-sm py-1 text-pretty text-white/90 no-underline underline-offset-2 transition [overflow-wrap:anywhere] hover:underline hover:decoration-gold/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70 sm:py-1"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-6 space-y-7 sm:mt-8 sm:space-y-9 md:mt-10 md:space-y-10">
          {termsSections.map((section) => (
            <TermsSectionView key={section.id} section={section} />
          ))}
        </div>
      </article>
    </ContentMain>
  );
}
