# Reusable Next.js — About Us page (App Router)

Portable **About** layout from **elite-steppers-platform**: two-column intro (image + lead copy), mission, what-we-do list with inline links, value pillars, optional leadership note, and a gold CTA row (`#171723` card via `bg-nomination-card`). The UI is **fully responsive** (fluid `clamp` title, stacked full-width then wrapped CTAs with fixed `h-12` + compact type, capped hero height on small viewports, `min-w-0` / `overflow-wrap`).

## Parity with the main app (sync)

These files are kept aligned with production:

| Template | Main app |
|----------|----------|
| [`src/AboutPageView.tsx`](src/AboutPageView.tsx) | [`src/components/marketing/AboutPageView.tsx`](../../src/components/marketing/AboutPageView.tsx) |
| [`src/aboutPageDefaultData.ts`](src/aboutPageDefaultData.ts) | [`src/components/marketing/aboutPageDefaultData.ts`](../../src/components/marketing/aboutPageDefaultData.ts) |
| [`src/aboutPageExampleData.ts`](src/aboutPageExampleData.ts) | *(greenfield placeholder only — not in app)* |
| [`examples/next-app-about-page.elite-parity.tsx`](examples/next-app-about-page.elite-parity.tsx) | [`src/app/(marketing)/about/page.tsx`](../../src/app/(marketing)/about/page.tsx) |
| [`examples/next-app-about-page.tsx`](examples/next-app-about-page.tsx) | Minimal greenfield example using `aboutPageExampleData` |

When you change the live `AboutPageView` or `aboutPageDefaultData` in the repo, **copy updates into this template** (or vice versa) so zips stay accurate.

## Contents

| Path | Purpose |
|------|--------|
| `src/AboutPageView.tsx` | Presentational page; all copy from typed `AboutPageData` |
| `src/aboutPageDefaultData.ts` | Full Elite Level Steppers copy + routes (production mirror) |
| `src/aboutPageExampleData.ts` | Short placeholder for new projects |
| `src/index.ts` | Barrel exports |
| `styles/tailwind-gold-snippet.css` | `:root` + `@theme` gold / background / nomination-card + `shadow-gold-sm` |
| `examples/next-app-about-page.tsx` | Greenfield route using example data |
| `examples/next-app-about-page.elite-parity.tsx` | Production-style route using `aboutPageDefaultData` |
| `pack-template.sh` | Zips this folder → `marketing-about-page-template.zip` (repo root, gitignored) |
| `tsconfig.json` | Local TS (root `tsconfig` may `exclude` `templates/**`) |

## Requirements

- Next.js 14+ (App Router), React 18+, TypeScript, Tailwind CSS v4
- `next/image` and `next/link`
- `text-gold`, `bg-gold`, `text-background`, `bg-nomination-card`, and **`shadow-gold-sm`** (merge `styles/tailwind-gold-snippet.css` or match [`globals.css`](../../src/app/globals.css))
- A dark page background; `text-background` on CTA text should match your `--background` (see snippet)

## Responsive behavior (reference)

- **Title:** `clamp` + `text-balance`
- **Grid:** 1 column &lt; `md`, 2 columns for image + lead from `md` up
- **Hero image:** `min-h` and `max-h` cap on small viewports, `4/3` aspect from `md+`
- **CTAs:** `h-12` row with compact `text-xs` / `min-[500px]:text-[0.8125rem]`; full width on the narrowest, then row + wrap from `min-[400px]`
- **CTA card:** `bg-nomination-card` (`#171723`)

## How to use in another project

1. Copy `templates/marketing-about-page/src/` to e.g. `src/components/marketing-about/`.
2. Merge `styles/tailwind-gold-snippet.css` (or ensure your `globals` define the same colors + `shadow-gold-sm`).
3. Use `aboutPageExampleData` and replace copy/hrefs, **or** adapt `aboutPageDefaultData` as a starting point.
4. Add `app/.../about/page.tsx` with your `ContentMain` (or `main` + padding) + `<AboutPageView data={...} />` — see `examples/`.
5. Set `export const metadata` for SEO.

**Zip:** `bash templates/marketing-about-page/pack-template.sh` from the repo root.
