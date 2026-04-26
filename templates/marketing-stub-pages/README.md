# Reusable “coming soon” marketing stub routes

Portable **placeholder** pages for the nine marketing routes in **elite-steppers-platform** that are not covered by the larger templates (`elite-steppers-landing`, `hall-of-fame-page`, `marketing-about-page`, etc.): **membership**, **shop**, **faq**, **events**, **search**, **merch**, **member-portal**, **blog**, and **registration**.

Stack assumptions: **Next.js App Router**, **React 19+**, **Tailwind CSS v4**, **TypeScript** — same as the other `templates/*` packages.

## What’s in this template

| Path | Purpose |
|------|--------|
| `src/ContentMain.tsx` | Centered `main` with max width + safe-area padding (same as the monorepo) |
| `src/SimpleStubPageView.tsx` | Renders a stub heading (plain or brand + gold) + subtext |
| `src/stubPageDefaultData.ts` | `*PageStub` objects matching each route’s current copy in the app |
| `src/index.ts` | Barrel exports |
| `styles/tailwind-stub-snippet.css` | Optional `.font-brand` if your app does not define it in `globals.css` |
| `examples/next-app-stub-page.example.tsx` | Example App Router `page.tsx` for one route |
| `pack-template.sh` | Zips to `marketing-stub-pages-template.zip` at the repo root |

## Route → data export

| Monorepo route (example) | Import |
|--------------------------|--------|
| `/membership` | `membershipPageStub` |
| `/shop` | `shopPageStub` |
| `/faq` | `faqPageStub` |
| `/events` | `eventsPageStub` |
| `/search` | `searchPageStub` |
| `/merch` | `merchPageStub` |
| `/member-portal` | `memberPortalPageStub` |
| `/blog` | `blogPageStub` |
| `/registration` | `registrationPageStub` |

## Add to another project

1. **Copy** `src/*` into your app (e.g. `src/components/marketing-stub/`). Keep `index.ts` for clean imports.
2. Enable **`"paths": { "@/*": ["./src/*"] }`** in `tsconfig.json` (or adjust imports to match your structure).
3. If headings look wrong, ensure **`text-gold`** and **`font-brand`** exist (merge `styles/tailwind-stub-snippet.css` and match [`globals.css`](../../src/app/globals.css) in this repo, or add `--font-ui` / Poppins the same way the main app does).
4. For each URL, add `app/.../page.tsx` and pass the matching stub, as in `examples/next-app-stub-page.example.tsx`.

**Zip:** from repo root, `bash templates/marketing-stub-pages/pack-template.sh` (or `bash scripts/pack-all-templates.sh` in **elite-steppers-platform** after that script lists this pack).

## Keeping in sync

When you change the live `SimpleStubPageView` / `stubPageDefaultData` in **`src/components/marketing/`**, **copy the updates** into this template (or vice versa) so the zip matches the app.
