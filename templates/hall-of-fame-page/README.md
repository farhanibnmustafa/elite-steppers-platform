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
| `public/images/*.png` | Demo photos used by the page (merge into your app’s `public/images/`) |
| `tsconfig.json` | Local TypeScript for editors (parent `tsconfig` may `exclude` `templates/**`) |

## Requirements in the target project

- **Next.js** 14+ with the **App Router** (`app/`)
- **React** 18+ (19+ as in this monorepo)
- **Tailwind CSS** v4 with `@import "tailwindcss";` in global CSS
- **TypeScript** (recommended)
- A **dark** page background and **gold** accent from your theme, or import `styles/tailwind-hof-snippet.css` and align with your `globals` (this app uses `@theme` in [globals.css](/src/app/globals.css))

Components reference utilities such as `text-gold`, `bg-gold`, `bg-gold-muted`, `bg-background`, `text-background`, and shadow helpers (`text-shadow-gold-accent`, `shadow-gold-icon` on the home app). If your app does not define them, add equivalents or copy patterns from the main repo `globals.css`.

## Images (`public/images/`)

The template **ships with** a `public/images/` folder containing the same demo assets as the monorepo app. When you adopt it elsewhere, **merge** that folder into your Next app’s `public/` (so `/images/12.png` resolves) or point `imageSrc` / static paths in the data to your own files.

- `12.png` — hero background  
- `13.png`, `14.png`, `15.png` — featured block + some demo data  
- `4.png`, `5.png`, `6.png`, `7.png` — “Search by year” 2×2 slot portraits  
- `11.png` — footer full-width photo  

`next/image` uses root-relative paths (e.g. `/images/12.png`).

## Add this template to another project

Follow these steps **in order** in the **target** repository (new `create-next-app` or an existing app).

### 1. Get the template files

| Source | What to do |
|--------|------------|
| **Zip** | In **elite-steppers-platform** run `bash templates/hall-of-fame-page/pack-template.sh`, then unzip `hall-of-fame-page-template.zip` at the machine where you are building. Use the `templates/hall-of-fame-page` folder inside the zip as the template root. |
| **Clone / copy** | Copy the whole `templates/hall-of-fame-page` directory from this repo. |

### 2. Copy files into your app

| From template | Into your app (example) |
|---------------|---------------------------|
| Everything under `src/` | e.g. `src/components/hall-of-fame/` (keep `index.ts` for barrel exports) |
| `public/images/*.png` | `public/images/` (merge; **same filenames** as documented above) |
| (Optional) `styles/tailwind-hof-snippet.css` | See step 4 — merge if your app lacks `text-gold`, `bg-gold`, etc. |
| `examples/next-app-hall-of-fame-page.tsx` | **Reference only** — paste into your `app/…/hall-of-fame/page.tsx` and fix imports (step 5). |

### 3. TypeScript path alias

In **`tsconfig.json`**, ensure:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

Then you can use:

`import { HallOfFamePageView } from "@/components/hall-of-fame";`

(Adjust the folder name in both the path and the import if you did not use `hall-of-fame`.)

### 4. Global CSS and theme tokens

- Keep `@import "tailwindcss";` **first** in your main global CSS (e.g. `src/app/globals.css`).
- If your app does **not** already define the same `gold` / `background` utilities as the main site, **merge** `styles/tailwind-hof-snippet.css` after Tailwind, or copy the relevant `@theme` / utility rules from the [monorepo `globals.css`](../../src/app/globals.css). Without this, text and gold accents on the page may look unstyled.
- If you already have a full marketing theme, you may only need a subset of the snippet.

### 5. Add the route

1. Create e.g. `app/(marketing)/hall-of-fame/page.tsx` (or your URL structure).
2. See `examples/next-app-hall-of-fame-page.tsx` — replace the example’s `import { HallOfFamePageView } from "../src"` with your barrel import, e.g. `from "@/components/hall-of-fame"`.
3. Wrap the page the same way as your other marketing pages (e.g. inside a shared `layout` that already provides header and background) so width and `bg-` match the rest of the site.
4. Set `export const metadata` (`title` / `description`).

### 6. After integration

- **Footer** — `LandingNewsletterFooter` links to `/terms` and a copyright line; change `href` and copy for your org.
- **Data** — replace demo content in `hallOfFameInducteeData.ts` and `hallOfFameNotableByYearData.ts` when you add a CMS; edit `FEATURED` in `HallOfFameFeaturedInductees.tsx` as needed.

### 7. Checklist

- [ ] `public/images/` contains the nine PNGs listed in [Images](#images-publicimages) (or you updated all path strings in data/components).
- [ ] `HallOfFamePageView` imports resolve (`index.ts` present, path alias correct).
- [ ] Global CSS includes Tailwind and enough gold/background tokens for the UI.
- [ ] `npm run dev` and `npm run build` succeed.

### 8. Ship a zip (from this monorepo)

```bash
bash templates/hall-of-fame-page/pack-template.sh
# → hall-of-fame-page-template.zip at the repository root
```

## Responsiveness (what this template does)

- Hero titles use `clamp()` on the default breakpoint so “Hall of” / “Fame” do not overflow narrow screens; gutters use `max-w-full` and `min-w-0` through the text stack.  
- Featured “large” card uses bottom-aligned, left-typed copy on viewports below `lg`, and the original right column alignment from `lg` up.  
- The year selector row scrolls horizontally on the smallest phones when five years do not fit, with `shrink-0` on year buttons.  
- Sections use `landingInnerMax` (safe areas + max width) and `min-w-0` on flex/grid children to avoid horizontal scroll in flex layouts.
