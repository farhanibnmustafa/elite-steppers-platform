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
| `public/images/11.png` | Wide footer image (`donateConfig.footer.heroImage`); set to `null` in config to hide |

**Note:** `DonateGiftForm` still uses a fixed “middle preset” style for **$100** and **$250**. If you change `amountPresets` in config, adjust `isMiddlePreset` in `DonateGiftForm.tsx` to match your tier layout. `DonatePageSections` maps three impact note rows to lock/bank/receipt icons; keep three notes or edit the icon list.

## Requirements in the target project

- **Next.js** 14+ **App Router**
- **React** 18+
- **Tailwind CSS** v4 with `@import "tailwindcss";` in global CSS
- **TypeScript** (recommended)
- Dark page background (e.g. parent layout `bg-black text-white`) and **`gold`** accent (`text-gold`, `border-gold`, `bg-gold`), or merge [styles/tailwind-donate-snippet.css](styles/tailwind-donate-snippet.css)
- **`next/image`:** add `donateConfig.footer.heroImage.src` to [`images.localPatterns`](https://nextjs.org/docs/app/api-reference/components/image#localpatterns) (or use a remote pattern) if needed

Sans-serif UI font: the live site uses Poppins via `font-sans`. Set your layout’s `font-sans` or add `className="font-sans"` on `DonatePageView`’s wrapper if you rely on a different default.

## Images (`public/images/`)

The template **ships with** `11.png` for the optional footer photo band. Merge `public/images/` into your Next app’s `public/`, or set `footer.heroImage` to `null` in `donateConfig.ts` / point `src` at your own file.

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

### 4. Edit configuration first

Open **`src/donateConfig.ts`**: set hero **rail** links, **impact** text, **footer** `termsHref`, `copyrightPrefix`, and either keep `footer.heroImage` (needs `11.png` in `public/images`) or set it to `null` to remove the image band. All routes you reference in config must exist in the target app or be updated to real paths.

### 5. Add the route

1. Add e.g. `app/(marketing)/donate/page.tsx`.
2. Copy from [examples/next-app-donate-page.tsx](examples/next-app-donate-page.tsx) and **replace** `import … from "../src"` with the imports from step 3.
3. Put the page inside your marketing `layout` (header/footer) if the rest of the site uses one.

### 6. Global layout and overflow

Ensure `html` / `body` do not allow horizontal scroll (`overflow-x: clip` on a wrapper is common) so the full-bleed footer **image** does not cause sideways scroll on small screens. If `next/image` complains about local paths, add the footer image to [`images.localPatterns`](https://nextjs.org/docs/app/api-reference/components/image#localpatterns) as noted in [Requirements](#requirements-in-the-target-project).

### 7. Checklist

- [ ] `public/images/11.png` present **or** `footer.heroImage` is `null` / points to a valid file.
- [ ] `donateConfig` routes and legal strings match your site.
- [ ] `npm run dev` and `npm run build` succeed.

## Parity with elite-steppers-platform

The production page (not a duplicate of the template) lives at:

- [src/app/(marketing)/donate/page.tsx](../../src/app/(marketing)/donate/page.tsx)
- [src/components/marketing/DonateHero.tsx](../../src/components/marketing/DonateHero.tsx)
- [src/components/marketing/donate/](../../src/components/marketing/donate/)

The template adds **`donateConfig`** for portability and slightly **tighter default gutters** in `landingLayout.ts` so it behaves well standalone; you can paste the main app’s `landingGutterX` into the template copy if you want pixel-perfect alignment with the rest of the site.

## Editor diagnostics

The repository root `tsconfig.json` may **exclude** `templates/**`. Use the template’s [tsconfig.json](tsconfig.json) for local typecheck: `npx tsc -p templates/marketing-donate-page/tsconfig.json`.
