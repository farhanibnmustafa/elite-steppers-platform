# Reusable Next.js — Hall of Fame page (App Router)

Portable copy of the **Hall of Fame** experience from this repo: hero, “Inductee Gallery” placeholder grid, **Featured Inductees** (one large + two small cards), **Search by year** (year rail, 2×2 portrait grid, notable events, nominate CTA), gold divider, newsletter, and the wide photo footer. The layout is **responsive** (fluid hero type, left-aligned feature copy on small viewports, horizontally scrollable year list on very narrow screens). It is a **sibling** of `templates/elite-steppers-landing/` and `templates/legal-terms-page/`: same stack assumptions (Next.js App Router, React 19+, Tailwind CSS v4, TypeScript, `next/image`).

## What’s in this template

| Path | Purpose |
|------|--------|
| `src/hallOfFameInducteeData.ts` | Demo directory rows + pill config (replace with CMS/API) |
| `src/hallOfFameNotableByYearData.ts` | “Notable events” + searchable years list |
| `src/landingLayout.ts` | `landingInnerMax` / `landingContentMax` (safe-area–aware gutters) |
| `src/InducteeGalleryCard.tsx` | Tile + `InducteeGalleryPlaceholderGrid` (12 “Coming soon” cards) |
| `src/InducteeGallerySection.tsx` | Section wrapper; `showFullHallCta` for landing vs HoF page |
| `src/HallOfFameHero.tsx` | Full-bleed image hero with gradients |
| `src/HallOfFameInducteeGallery.tsx` | Thin wrapper around the gallery section |
| `src/HallOfFameFeaturedInductees.tsx` | Featured one/two card layout + copy (edit `FEATURED` array) |
| `src/HallOfFameSearchByYear.tsx` | Interactive year UI + 2×2 cards + events column |
| `src/LandingNewsletter.tsx` | Subscribe strip (client; placeholder submit) |
| `src/LandingNewsletterFooter.tsx` | `next/image` footer + legal link strip |
| `src/HallOfFamePageView.tsx` | Composes the full page in order (drop into a route) |
| `src/index.ts` | Barrel exports |
| `styles/tailwind-hof-snippet.css` | Optional `--gold` theme + `text-shadow-gold-accent` / `shadow-gold-icon` utilities |
| `examples/next-app-hall-of-fame-page.tsx` | Example `page.tsx` + `metadata` |
| `pack-template.sh` | From repo root, zips this folder to `hall-of-fame-page-template.zip` |
| `tsconfig.json` | Local TypeScript for editors (parent `tsconfig` may `exclude` `templates/**`) |

## Requirements in the target project

- **Next.js** 14+ with the **App Router** (`app/`)
- **React** 18+ (19+ as in this monorepo)
- **Tailwind CSS** v4 with `@import "tailwindcss";` in global CSS
- **TypeScript** (recommended)
- A **dark** page background and **gold** accent from your theme, or import `styles/tailwind-hof-snippet.css` and align with your `globals` (this app uses `@theme` in [globals.css](/src/app/globals.css))

Components reference utilities such as `text-gold`, `bg-gold`, `bg-gold-muted`, `bg-background`, `text-background`, and shadow helpers (`text-shadow-gold-accent`, `shadow-gold-icon` on the home app). If your app does not define them, add equivalents or copy patterns from the main repo `globals.css`.

## Images (`public/images/`)

Copy at least these files from the main app (or replace paths in data/components):

- `12.png` — hero background  
- `13.png`, `14.png`, `15.png` — featured block + some demo data  
- `4.png`, `5.png`, `6.png`, `7.png` — “Search by year” 2×2 slot portraits  
- `11.png` — footer full-width photo  

`next/image` uses root-relative paths (e.g. `/images/12.png`).

## How to use in another repository

1. **Get the files**  
   - From a zip: run `bash templates/hall-of-fame-page/pack-template.sh` in **elite-steppers-platform** at the repo root, then unzip; or  
   - Copy the whole `templates/hall-of-fame-page` directory.

2. **Copy `src/`** into the target app, e.g. `src/components/hall-of-fame/`.

3. **TypeScript path:** ensure `"@/*": ["./src/*"]` in `tsconfig.json`, then:  
   `import { HallOfFamePageView } from "@/components/hall-of-fame";`

4. **Add a route** e.g. `app/(marketing)/hall-of-fame/page.tsx` — see `examples/next-app-hall-of-fame-page.tsx`.  
   Wrap the page in your existing marketing `layout` (header/shell) so width and background match the rest of the site.

5. **Metadata** — set `title` and `description` in the page file to match your product.

6. **Footer** — `LandingNewsletterFooter` links to `/terms` and a copyright line; change `href` and strings for your org.

7. **Data** — replace demo arrays in `hallOfFameInducteeData.ts` and `hallOfFameNotableByYearData.ts` when you wire a CMS; adjust `FEATURED` in `HallOfFameFeaturedInductees.tsx` for the large/small cards.

## Responsiveness (what this template does)

- Hero titles use `clamp()` on the default breakpoint so “Hall of” / “Fame” do not overflow narrow screens; gutters use `max-w-full` and `min-w-0` through the text stack.  
- Featured “large” card uses bottom-aligned, left-typed copy on viewports below `lg`, and the original right column alignment from `lg` up.  
- The year selector row scrolls horizontally on the smallest phones when five years do not fit, with `shrink-0` on year buttons.  
- Sections use `landingInnerMax` (safe areas + max width) and `min-w-0` on flex/grid children to avoid horizontal scroll in flex layouts.

## Optional: one-off zip from this monorepo

```bash
bash templates/hall-of-fame-page/pack-template.sh
# Creates hall-of-fame-page-template.zip at the repository root
```
