# Reusable Next.js — Terms & Conditions page (App Router)

Portable copy of the **Terms & Conditions** implementation from this repo: configurable legal copy, table of contents with anchor links, and dark + gold marketing styling (Tailwind). It is a **sibling** of `templates/elite-steppers-landing/`: same stack assumptions (Next.js App Router, React 18+, Tailwind CSS v4, TypeScript). Copy `src/` into any compatible project, adjust `termsConfig.ts`, and mount `TermsPageView` on a route such as `/terms`.

## What’s in this template

| Path | Purpose |
|------|--------|
| `src/termsConfig.ts` | **Edit first:** org name, email, `lastUpdated`, `metadata`, service/nominations phrasing, `primaryProgram` (e.g. `"the Hall of Fame"` vs `"our programs"`) |
| `src/termsContent.ts` | Full clause set; uses `termsConfig` for org-specific lines; still contains `[Insert state/country]` in governing law (complete with counsel) |
| `src/TermsPageView.tsx` | Table of contents, article sections, scroll anchors (no `next/image` hero) |
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

## Images

This template is **text-only**; there is no `public/images/` folder and no `next/image` assets. Nothing to copy for artwork.

## Add this template to another project

Work through these steps in the **target** app.

### 1. Get the template files

| Source | What to do |
|--------|------------|
| **Zip** | In **elite-steppers-platform** run `bash templates/legal-terms-page/pack-template.sh`, then unzip `legal-terms-page-template.zip`. Use the `templates/legal-terms-page` folder as the template root. |
| **Copy** | Copy `templates/legal-terms-page` from a checkout of this repo. |

### 2. Copy into your app

| From template | Into your app (example) |
|---------------|-------------------------|
| `src/*` | e.g. `src/components/legal-terms/` (keep `index.ts`) |
| `styles/tailwind-terms-snippet.css` | Merge after `@import "tailwindcss";` in `globals.css` if your app has no `text-gold` / `border-gold/30` (see [Requirements](#requirements-in-the-target-project)) |
| `examples/next-app-terms-page.tsx` | **Reference** for your `app/.../terms/page.tsx` — update imports to `@/components/legal-terms` |

There is **no** `public/images` folder; nothing to copy for assets.

### 3. TypeScript path alias

In **`tsconfig.json`**:

```json
"paths": { "@/*": ["./src/*"] }
```

Then:

```ts
import { TermsPageView, termsPageConfig } from "@/components/legal-terms";
```

### 4. Customize legal copy

Edit **`src/termsConfig.ts`**: org name, contact email, `lastUpdated`, `metadata`, and service/nominations phrasing. Have counsel review **`termsContent.ts`** before production (governing law placeholder, liability, etc.).

### 5. Add the route

1. Create e.g. `app/(marketing)/terms/page.tsx`.
2. Copy the pattern from `examples/next-app-terms-page.tsx` — **replace** any `import … from "../src"` with the imports from step 3.
3. Wrap `<TermsPageView />` in the same `main` / `ContentMain` / layout padding you use for other long-form marketing pages.
4. `export const metadata` using `termsPageConfig.metadata.title` and `termsPageConfig.metadata.description` (as in the example).

### 6. Site navigation

Add links to `/terms` from your footer and anywhere else you surface legal pages.

### 7. Checklist

- [ ] `text-gold` and related tokens work (merged snippet or existing theme).
- [ ] `termsConfig` and `termsContent` reflect your org; attorney review done if required.
- [ ] `npm run build` succeeds.

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
