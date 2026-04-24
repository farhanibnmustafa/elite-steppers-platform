# Reusable Next.js — Donate landing page (App Router)

Portable **donate** flow from **elite-steppers-platform**: hero with CTAs, gift form (amount presets + contact fields), impact sidebar, “other ways to give,” newsletter band, and optional wide footer image + legal bar. Layout is **mobile-first**: full-width CTAs on narrow viewports, **two-column** form + impact from the `md` breakpoint, **8 / 4** split from `lg`, safe-area-aware horizontal padding, `clamp()` headings, and `overflow-x-clip` on the page shell.

## What’s in this template

| Path | Purpose |
|------|---------|
| [src/donateConfig.ts](src/donateConfig.ts) | **Edit first:** metadata, hero copy & links, form labels, impact tiers, footer image (`null` to hide), terms URL, copyright |
| [src/DonatePageView.tsx](src/DonatePageView.tsx) | Composes the full page (use as the default export for `/donate`) |
| [src/DonateHero.tsx](src/DonateHero.tsx) | Breadcrumb rail + hero panel |
| [src/DonateGiftForm.tsx](src/DonateGiftForm.tsx) | Client form (placeholder submit until you wire Stripe/PayPal/etc.) |
| [src/DonatePageSections.tsx](src/DonatePageSections.tsx) | Grid + impact list + “Other ways” links |
| [src/DonateNewsletter.tsx](src/DonateNewsletter.tsx) | Email capture (client) |
| [src/DonateFooter.tsx](src/DonateFooter.tsx) | Optional `next/image` band + gold legal strip |
| [src/landingLayout.ts](src/landingLayout.ts) | `landingInnerMax` gutters (tuned for reuse; align with your site header if needed) |
| [src/index.ts](src/index.ts) | Barrel exports |
| [styles/tailwind-donate-snippet.css](styles/tailwind-donate-snippet.css) | Optional `--color-gold` + `shadow-gold-*` if your theme lacks them |
| [examples/next-app-donate-page.tsx](examples/next-app-donate-page.tsx) | Example route wiring + `metadata` |
| [pack-template.sh](pack-template.sh) | Zips this folder to `marketing-donate-page-template.zip` at repo root |

**Note:** `DonateGiftForm` still uses a fixed “middle preset” style for **$100** and **$250**. If you change `amountPresets` in config, adjust `isMiddlePreset` in `DonateGiftForm.tsx` to match your tier layout. `DonatePageSections` maps three impact note rows to lock/bank/receipt icons; keep three notes or edit the icon list.

## Requirements in the target project

- **Next.js** 14+ **App Router**
- **React** 18+
- **Tailwind CSS** v4 with `@import "tailwindcss";` in global CSS
- **TypeScript** (recommended)
- Dark page background (e.g. parent layout `bg-black text-white`) and **`gold`** accent (`text-gold`, `border-gold`, `bg-gold`), or merge [styles/tailwind-donate-snippet.css](styles/tailwind-donate-snippet.css)
- **`next/image`:** add `donateConfig.footer.heroImage.src` to [`images.localPatterns`](https://nextjs.org/docs/app/api-reference/components/image#localpatterns) (or use a remote pattern) if needed

Sans-serif UI font: the live site uses Poppins via `font-sans`. Set your layout’s `font-sans` or add `className="font-sans"` on `DonatePageView`’s wrapper if you rely on a different default.

## How to use in another repository

1. **Copy** the folder or run `bash templates/marketing-donate-page/pack-template.sh` from **elite-steppers-platform** and unzip `marketing-donate-page-template.zip`.

2. **Copy `src/`** into the target app, e.g. `src/components/marketing-donate/`.

3. **Paths:** set `compilerOptions.paths` so `@/*` resolves to `./src/*`, then either:
   - `import { DonatePageView, donatePageConfig } from "@/components/marketing-donate";`
   - or keep **relative** imports inside the template and copy files as-is.

4. **Customize** [src/donateConfig.ts](src/donateConfig.ts) (routes must exist in the target app).

5. **Add a route** e.g. `app/(marketing)/donate/page.tsx` — see [examples/next-app-donate-page.tsx](examples/next-app-donate-page.tsx). Wrap in your marketing layout (header/footer) as needed.

6. **Globals:** ensure `html` / `body` avoid horizontal overflow (`overflow-x: clip` is common) so full-bleed footer image does not scroll sideways on small screens.

## Parity with elite-steppers-platform

The production page (not a duplicate of the template) lives at:

- [src/app/(marketing)/donate/page.tsx](../../src/app/(marketing)/donate/page.tsx)
- [src/components/marketing/DonateHero.tsx](../../src/components/marketing/DonateHero.tsx)
- [src/components/marketing/donate/](../../src/components/marketing/donate/)

The template adds **`donateConfig`** for portability and slightly **tighter default gutters** in `landingLayout.ts` so it behaves well standalone; you can paste the main app’s `landingGutterX` into the template copy if you want pixel-perfect alignment with the rest of the site.

## Editor diagnostics

The repository root `tsconfig.json` may **exclude** `templates/**`. Use the template’s [tsconfig.json](tsconfig.json) for local typecheck: `npx tsc -p templates/marketing-donate-page/tsconfig.json`.
