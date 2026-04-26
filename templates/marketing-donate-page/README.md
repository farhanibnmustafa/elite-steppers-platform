# Reusable Next.js — Donate landing page (App Router)

Portable **donate** flow from **elite-steppers-platform**, kept aligned with the live App Router page: hero with rail + CTAs, gift form and impact column, the shared [LandingNewsletter](src/LandingNewsletter.tsx) email band, and [LandingNewsletterFooter](src/LandingNewsletterFooter.tsx) (group photo + gold legal strip). Layout is **mobile-first** with `overflow-x-clip` on the page shell.

## What’s in this template

| Path | Purpose |
|------|---------|
| [src/donateConfig.ts](src/donateConfig.ts) | `metadata` **title** / **description** for the example route (optional when porting) |
| [src/DonatePageView.tsx](src/DonatePageView.tsx) | Composes the full page (same structure as the production `/donate` route) |
| [src/DonateHero.tsx](src/DonateHero.tsx) | Breadcrumb rail + hero panel |
| [src/DonateGiftForm.tsx](src/DonateGiftForm.tsx) | Client form (placeholder submit until you wire payments) |
| [src/DonatePageSections.tsx](src/DonatePageSections.tsx) | Grid + impact list + “Other ways” links |
| [src/LandingNewsletter.tsx](src/LandingNewsletter.tsx) | Shared newsletter copy + email field |
| [src/LandingNewsletterFooter.tsx](src/LandingNewsletterFooter.tsx) | Full-bleed `11.png` + terms bar |
| [src/landingLayout.ts](src/landingLayout.ts) | `landingInnerMax` (matches main site) |
| [src/index.ts](src/index.ts) | Barrel exports |
| [styles/tailwind-donate-snippet.css](styles/tailwind-donate-snippet.css) | Optional `--color-gold` + `shadow-gold-*` if your theme lacks them |
| [examples/next-app-donate-page.tsx](examples/next-app-donate-page.tsx) | Example `page.tsx` + `metadata` |
| [pack-template.sh](pack-template.sh) | Zips to `marketing-donate-page-template.zip` at repo root |
| `public/images/11.png` | Required for the footer image path used in `LandingNewsletterFooter` |

**Note:** `DonateGiftForm` uses a fixed “middle preset” style for **$100** and **$250**; if you change presets, update `isMiddlePreset` in `DonateGiftForm.tsx`. Hero copy, impact text, and form labels live in the components (not in `donateConfig`).

## Requirements in the target project

- **Next.js** 14+ **App Router**
- **React** 18+
- **Tailwind CSS** v4 with `@import "tailwindcss";` in global CSS
- **TypeScript** (recommended)
- Dark page background (e.g. parent layout `bg-black text-white`) and **`gold`** accent (`text-gold`, `border-gold`, `bg-gold`), or merge [styles/tailwind-donate-snippet.css](styles/tailwind-donate-snippet.css)
- **`next/image`:** add `/images/11.png` to [`images.localPatterns`](https://nextjs.org/docs/app/api-reference/components/image#localpatterns) if your Next config requires it

Sans-serif UI font: the live site uses Poppins via `font-sans`. Set your layout’s `font-sans` or add `className="font-sans"` on `DonatePageView`’s wrapper if you rely on a different default.

## Images (`public/images/`)

Add **`11.png`** under `public/images/` (same as the monorepo) for the footer band, or edit `LandingNewsletterFooter` to use a different asset.

## Add this template to another project

Follow these steps in the **target** app (in order).

### 1. Get the template files

| Source | What to do |
|--------|------------|
| **Zip** | In **elite-steppers-platform** run `bash templates/marketing-donate-page/pack-template.sh`, then unzip `marketing-donate-page-template.zip`. Use the `templates/marketing-donate-page` folder as the template root. |
| **Copy** | Copy `templates/marketing-donate-page` from a checkout of this repo. |

### 2. Copy into your app

| From template | Into your app (example) |
|---------------|-------------------------|
| `src/*` | e.g. `src/components/marketing-donate/` (keep `index.ts`) |
| `public/images/11.png` (or whole folder) | `public/images/` |
| `styles/tailwind-donate-snippet.css` | Merge into `globals.css` if your app lacks `text-gold` / `border-gold` / `shadow-gold-*` (see [Requirements](#requirements-in-the-target-project)) |
| `examples/next-app-donate-page.tsx` | **Reference** for `app/.../donate/page.tsx` — fix imports to `@/components/marketing-donate` |

### 3. TypeScript path alias

In **`tsconfig.json`** set `"paths": { "@/*": ["./src/*"] }` (default in many Next.js apps), then:

```ts
import { DonatePageView, donatePageConfig } from "@/components/marketing-donate";
```

### 4. Metadata and copy

**`src/donateConfig.ts`** only holds **metadata** for the example page. For hero rails, form labels, and impact text, edit **`DonateHero`**, **`DonatePageSections`**, and **`DonateGiftForm`** to match your site (same as the monorepo).

### 5. Add the route

1. Add e.g. `app/(marketing)/donate/page.tsx`.
2. Copy from [examples/next-app-donate-page.tsx](examples/next-app-donate-page.tsx) and **replace** `import … from "../src"` with the imports from step 3.
3. Put the page inside your marketing `layout` (header/footer) if the rest of the site uses one.

### 6. Global layout and overflow

Ensure `html` / `body` do not allow horizontal scroll (`overflow-x: clip` on a wrapper is common) so the full-bleed footer **image** does not cause sideways scroll on small screens. If `next/image` complains about local paths, add the footer image to [`images.localPatterns`](https://nextjs.org/docs/app/api-reference/components/image#localpatterns) as noted in [Requirements](#requirements-in-the-target-project).

### 7. Checklist

- [ ] `public/images/11.png` present (or you updated `LandingNewsletterFooter`).
- [ ] `donateConfig.metadata` and in-component copy / routes match your site.
- [ ] `npm run dev` and `npm run build` succeed.

## Parity with elite-steppers-platform

The production page (not a duplicate of the template) lives at:

- [src/app/(marketing)/donate/page.tsx](../../src/app/(marketing)/donate/page.tsx)
- [src/components/marketing/DonateHero.tsx](../../src/components/marketing/DonateHero.tsx)
- [src/components/marketing/donate/](../../src/components/marketing/donate/)

`landingLayout.ts` matches the main app. `donateConfig` is limited to **metadata** for the pack example; all layout and form copy is in the components.

## Editor diagnostics

The repository root `tsconfig.json` may **exclude** `templates/**`. Use the template’s [tsconfig.json](tsconfig.json) for local typecheck: `npx tsc -p templates/marketing-donate-page/tsconfig.json`.
