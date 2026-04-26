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
| `public/images/*.png` | Demo art (hero, example, newsletter footer); merge into your app’s `public/images/` |
| `tsconfig.json` | Local TS (root `tsconfig` may `exclude` `templates/**`) |

## Images (`public/images/`)

The template **includes** demo assets so routes work out of the box:

- `about-hero-cinematic.png` — `aboutPageDefaultData` hero  
- `1.png` — `aboutPageExampleData` (greenfield placeholder)  
- `11.png` — `LandingNewsletterFooter` wide footer photo (same as the main app)

`next/image` uses paths like `/images/about-hero-cinematic.png`. Merge this folder into the target app’s `public/`, or change `heroImage.src` in your data (and update `LandingNewsletterFooter` if you replace the footer asset).

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

## Add this template to another project

Work through these steps in the **target** app (in order).

### 1. Get the template files

| Source | What to do |
|--------|------------|
| **Zip** | In **elite-steppers-platform** run `bash templates/marketing-about-page/pack-template.sh`, then unzip `marketing-about-page-template.zip`. Use the `templates/marketing-about-page` folder as the template root. |
| **Copy** | Copy `templates/marketing-about-page` from a checkout of this repo. |

### 2. Copy into your app

| From template | Into your app (example) |
|---------------|-------------------------|
| `src/*` | e.g. `src/components/marketing-about/` (keep `index.ts` for exports) |
| `public/images/*` | `public/images/` (merge — hero images + `11.png` for the newsletter footer band) |
| `styles/tailwind-gold-snippet.css` | Merge into your global CSS (see step 3) |
| `examples/*.tsx` | **Reference only** — copy patterns into `app/.../about/page.tsx` |

### 3. Global CSS (theme)

After `@import "tailwindcss";` in `globals.css` (or equivalent), merge **`styles/tailwind-gold-snippet.css`**, or ensure your app already defines the same `text-gold`, `bg-gold`, `bg-nomination-card`, `text-background`, and **`shadow-gold-sm`**. The About page will look wrong if these tokens are missing.

### 4. TypeScript path alias

In **`tsconfig.json`**:

```json
"paths": { "@/*": ["./src/*"] }
```

Use imports such as:

```ts
import { AboutPageView, aboutPageDefaultData } from "@/components/marketing-about";
```

(Adjust the folder name if you used a different path.)

### 5. Add the route

1. Add e.g. `app/(marketing)/about/page.tsx` (or `app/about/page.tsx` — avoid **duplicate URLs** for the same path with and without a route group).
2. Follow `examples/next-app-about-page.elite-parity.tsx` (full copy) or `examples/next-app-about-page.tsx` (greenfield) — **replace** `import … from "../src"` with the `@/components/...` import from step 4.
3. Wrap the page in your shared marketing shell or a `<main>` with the same max-width / padding as your other pages (the examples show a `main` wrapper; use `ContentMain` if your app has it).
4. `export const metadata` for `title` and `description`.

### 6. Data

Use **`aboutPageDefaultData`** for production-style copy, or **`aboutPageExampleData`** for a short starter; update `heroImage`, links, and body copy for your org.

### 7. Checklist

- [ ] `public/images/` includes `about-hero-cinematic.png`, `1.png`, and `11.png` (or you changed `heroImage.src` in data and the footer image path in `LandingNewsletterFooter` if needed).
- [ ] Gold / nomination-card styles present (snippet or your theme).
- [ ] `@/*` imports resolve; `npm run build` passes.

**Zip (optional):** `bash templates/marketing-about-page/pack-template.sh` from the **elite-steppers-platform** repo root.
