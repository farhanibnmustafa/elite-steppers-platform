# Reusable Next.js — Contact page (App Router)

Portable **contact** experience from **elite-steppers-platform**, kept in lockstep with `src/components/marketing/Contact*.tsx` and the shared `WatermarkHero`: two-column get-in-touch block (email, phone, social, quick links) plus a client message form on nomination-style surfaces, gold separator, and `LandingNewsletterFooter` (wide photo + gold terms strip — same as **NOMINATE A STEPPER** / other marketing pages, without a newsletter email band on this route).

## What’s in this template

| Path | Purpose |
|------|---------|
| [src/contactConfig.ts](src/contactConfig.ts) | **Metadata** for `export const metadata` in your route (title + description) |
| [src/ContactPageView.tsx](src/ContactPageView.tsx) | Full page: hero, form section, separator, `LandingNewsletterFooter` |
| [src/ContactHero.tsx](src/ContactHero.tsx) | Wraps [WatermarkHero](src/WatermarkHero.tsx) |
| [src/ContactFormSection.tsx](src/ContactFormSection.tsx) | Client: form + left column |
| [src/WatermarkHero.tsx](src/WatermarkHero.tsx) | Shared charcoal / grain / watermark hero (also used on About) |
| [src/LandingNewsletterFooter.tsx](src/LandingNewsletterFooter.tsx) | `next/image` + gold legal bar |
| [src/ContentMain.tsx](src/ContentMain.tsx) | Main wrapper (padding turned off in the view for section gutters) |
| [src/landingLayout.ts](src/landingLayout.ts) | `landingInnerMax` |
| [src/nominationFormStyles.ts](src/nominationFormStyles.ts) | Form surface classes |
| [src/index.ts](src/index.ts) | Barrel exports |
| [styles/tailwind-contact-snippet.css](styles/tailwind-contact-snippet.css) | Optional theme tokens if your app lacks `gold` / `nomination-*` |
| [examples/next-app-contact-page.tsx](examples/next-app-contact-page.tsx) | Example `page.tsx` + `metadata` |
| [pack-template.sh](pack-template.sh) | Zips to `marketing-contact-page-template.zip` at repo root |

**Customize copy, links, and channels** by editing the component files (same as the monorepo). `contactConfig` only centralizes **metadata** for the example route.

## Requirements in the target project

- **Next.js** 14+ **App Router**, **React** 18+, **Tailwind CSS** v4
- Dark marketing background and `gold` / `background` / `nomination-*` tokens (or merge the CSS snippet)
- `public/images/11.png` for the footer image (or change `LandingNewsletterFooter` in your copy)

## Get the template

From repo root: `bash templates/marketing-contact-page/pack-template.sh` (or use **`bash scripts/pack-all-templates.sh`** to rebuild all six zips).

## Add to another project

1. Copy `src/*` into your app (e.g. `src/components/marketing-contact/`).
2. Merge [styles/tailwind-contact-snippet.css](styles/tailwind-contact-snippet.css) if needed.
3. Add `app/(marketing)/contact/page.tsx` using [examples/next-app-contact-page.tsx](examples/next-app-contact-page.tsx) — point imports at your path alias.
4. Wire the form `onSubmit` in `ContactFormSection` to your backend when ready.

## Parity with elite-steppers-platform

- [app/(marketing)/contact/page.tsx](../../src/app/(marketing)/contact/page.tsx)
- [src/components/marketing/ContactPageView.tsx](../../src/components/marketing/ContactPageView.tsx) and related `Contact*`, [WatermarkHero](../../src/components/marketing/WatermarkHero.tsx), [LandingNewsletterFooter](../../src/components/marketing/LandingNewsletterFooter.tsx)

## Editor diagnostics

`npx tsc -p templates/marketing-contact-page/tsconfig.json` from the repo root.
