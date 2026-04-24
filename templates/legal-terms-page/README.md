# Reusable Next.js — Terms & Conditions page (App Router)

Portable copy of the **Terms & Conditions** implementation from this repo: configurable legal copy, table of contents with anchor links, and dark + gold marketing styling (Tailwind). It is a **sibling** of `templates/elite-steppers-landing/`: same stack assumptions (Next.js App Router, React 18+, Tailwind CSS v4, TypeScript). Copy `src/` into any compatible project, adjust `termsConfig.ts`, and mount `TermsPageView` on a route such as `/terms`.

## What’s in this template

| Path | Purpose |
|------|--------|
| `src/termsConfig.ts` | **Edit first:** org name, email, `lastUpdated`, `metadata`, service/nominations phrasing, `primaryProgram` (e.g. `"the Hall of Fame"` vs `"our programs"`) |
| `src/termsContent.ts` | Full clause set; uses `termsConfig` for org-specific lines; still contains `[Insert state/country]` in governing law (complete with counsel) |
| `src/TermsPageView.tsx` | UI only — hero, “On this page” nav, sections |
| `src/index.ts` | Barrel exports |
| `styles/tailwind-terms-snippet.css` | Optional `--color-gold` if the target app has no `text-gold` / `border-gold` |
| `examples/next-app-terms-page.tsx` | Example `app/(marketing)/terms/page.tsx` wiring + `metadata` from config |
| `pack-template.sh` | From repo root, zips this folder to `legal-terms-page-template.zip` |
| `tsconfig.json` | Local TypeScript for editors (parent `tsconfig` may `exclude` `templates/**`) |

**Not legal advice.** The copy is a structured draft; a qualified attorney should review before production, especially governing law, liability limits, and industry rules.

## Requirements in the target project

- **Next.js** 14+ with the **App Router** (`app/`)
- **React** 18+
- **Tailwind CSS** v4 with `@import "tailwindcss";` in global CSS
- **TypeScript** (recommended)
- A **dark** page background and **gold** accent from your theme, or merge `styles/tailwind-terms-snippet.css` (see below)

`TermsPageView` uses utilities such as `text-gold`, `border-gold/30`, `text-white/85`, `bg-white/[0.03]`. The main **elite-steppers-platform** app defines `gold` in [globals.css](/src/app/globals.css) (`@theme inline`). If your app does not define `gold`, add the snippet or equivalent tokens.

## How to use in another repository

1. **Get the files**
   - From a zip: run `bash templates/legal-terms-page/pack-template.sh` in **elite-steppers-platform**, then unzip; or
   - Copy the whole `templates/legal-terms-page` directory.

2. **Copy `src/`** into the target app, e.g. `src/components/legal-terms/` (or any folder you prefer).

3. **TypeScript path:** ensure `@/*` → `./src/*` in `tsconfig.json`, then you can re-export or import:
   - `import { TermsPageView, termsPageConfig } from "@/components/legal-terms";`

4. **Customize** `termsConfig.ts` (names, email, dates, `primaryProgram` / `serviceInformationFocus` / `servicesScope` as needed for your product).

5. **Add a route** e.g. `app/(marketing)/terms/page.tsx`:
   - See `examples/next-app-terms-page.tsx`.
   - Wrap `<TermsPageView />` in your layout `main` (e.g. `ContentMain` in this monorepo) so padding matches other legal/marketing pages.

6. **Metadata** — use `termsPageConfig.metadata.title` and `termsPageConfig.metadata.description` in `export const metadata` (see example).

7. **Footer / nav** — link to `/terms` with your other legal links.

## Parity with elite-steppers-platform

The “live” implementation in this repo (not a duplicate of the template) lives at:

- [src/app/(marketing)/terms/page.tsx](/src/app/(marketing)/terms/page.tsx)
- [src/app/(marketing)/terms/termsContent.ts](/src/app/(marketing)/terms/termsContent.ts)

To align the product site with the template, you can:

- Port changes **from** the template’s `termsConfig` + `termsContent` into the app, or
- Point the app at a shared package later. As shipped, the template is **standalone** for easy zipping; the app keeps its own files until you choose to consolidate.

## Shell wrapper (optional)

`ContentMain` in this project is approximately:

```tsx
<main
  className="mx-auto w-full min-w-0 max-w-7xl py-12 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] lg:pl-[max(2rem,env(safe-area-inset-left))] lg:pr-[max(2rem,env(safe-area-inset-right))]"
>
  {children}
</main>
```

Use the same component if you have it, or the example’s simplified `main` for a quick start.

## Editor diagnostics

The repository root [tsconfig.json](/tsconfig.json) `exclude`s `templates/**`. The template’s local `tsconfig.json` (with `include` for `src/`, `examples/`, and `../../next-env.d.ts`) is for per-folder typechecking in **elite-steppers-platform**. After copying the template out, your app’s main `tsconfig` will apply. If the IDE is noisy here, use **TypeScript: Restart TS Server** or `npx tsc -p templates/legal-terms-page/tsconfig.json` from the repo root.

## Pack for transfer

```bash
bash templates/legal-terms-page/pack-template.sh
```

Output: `legal-terms-page-template.zip` at the repository root (next to this project folder when run as above).
