# Elite Steppers — full marketing site template (home + nominations)

Portable copy of the **marketing** UI from this repo: header, home sections (hero, gallery, events, community, merch, membership, newsletter, photo footer), and the **nominations** flow (nominating hero, criteria, form, success “YOU ROCK” page) using the same layout shell. Components use **relative imports** inside `src/`, so you can copy the folder into another Next.js + Tailwind v4 app or port it (see `PORTING_NON_NEXT.md`).

**Add this to another project:** work through [**How to use this template in another project**](#how-to-use-this-template-in-another-project) in order (files → path alias → **globals + snippet** → fonts → routes → images → checklist). For routing, choose [Option A (home only)](#option-a--single-landing-route-) or [Option B (shared marketing layout)](#option-b--multi-page-marketing-site-shared-header). Unpacking `elite-steppers-landing-template.zip` yields a `templates/elite-steppers-landing` folder; use the contents of that folder as the template root.

## How this template fits the monorepo (5 packages vs. 7 built-out routes)

The live app’s **fully built** marketing surface is **seven** routes, but the repo ships **five** reusable **template** folders under `templates/` (each can be packed with `pack-template.sh`):

| App route (built-out) | Reusable template folder |
|----------------------|--------------------------|
| `/` (home) | `templates/elite-steppers-landing/` |
| `/nominations` | *(same as above — bundled)* |
| `/nominations/success` | *(same as above — bundled)* |
| `/hall-of-fame` | `templates/hall-of-fame-page/` |
| `/about` | `templates/marketing-about-page/` |
| `/donate` | `templates/marketing-donate-page/` |
| `/terms` | `templates/legal-terms-page/` |

**Why home, nominations, and success share this one template:** they use the same **header**, **layout shell**, **global styles and fonts**, **image set**, and the **nominate → success** user journey. Packaging them together avoids duplicating that shell in three zips, matches how teams usually adopt “the marketing site,” and matches maintenance in the monorepo (one template stays aligned with the shared `marketing` components for those flows). You can still use [Option A](#option-a--single-landing-route-) to ship **only the home** route if a project does not need nominations.

## Layout (what you are copying)

```
templates/elite-steppers-landing/
  src/
    EliteSteppersLanding.tsx          # single-route: header + all sections
    EliteSteppersLandingSections.tsx  # home body only (for layout shell)
    MarketingLayoutShell.tsx          # shared header + shell (multi-route)
    NominationsPageContent.tsx         # /nominations (hero + criteria + form host)
    NominationSuccessView.tsx         # /nominations/success (pass Lilita `className`)
    NominateHero.tsx … (nominations)   # + nominationFormStyles, client sections, …
    index.ts                          # barrel exports
    landingLayout.ts
    LandingHeader.tsx … LandingNewsletterFooter.tsx
  public/images/               # home + nominations hero, logo, merch, footer (same as main site)
  styles/landing-globals-snippet.css
  snippets/fonts.app.example.ts   # full drop-in: Poppins + Lilita (matches app fonts.ts)
  snippets/fonts.poppins.ts
  snippets/font-you-rock.ts
  examples/
    next-app-page.tsx              # single-file home
    marketing-app-layout.tsx       # app/(marketing)/layout.tsx
    marketing-home-page.tsx        # app/(marketing)/page.tsx
    marketing-nominations-page.tsx
    marketing-nominations-success-page.tsx
  PORTING_NON_NEXT.md
  pack-template.sh
  tsconfig.json
  README.md
```

## Contents

| Path | Purpose |
|------|---------|
| `src/` | React components + composers (landing, layout shell, nominations, success) |
| `styles/landing-globals-snippet.css` | CSS variables, `@theme` colors, `html`/`body`, **nominations** tokens + utilities (merge with `globals.css`) |
| `snippets/fonts.app.example.ts` | **Recommended:** paste as `src/app/fonts.ts` (Poppins 400–700 + Lilita) — same as the main app |
| `snippets/fonts.poppins.ts` | Poppins `fontUi` only (if you manage Lilita separately) |
| `snippets/font-you-rock.ts` | Lilita only (if you only need the success-page font) |
| `examples/next-app-page.tsx` | Single route: full `EliteSteppersLanding` on `/` |
| `examples/marketing-app-layout.tsx` | Multi-route: wrap marketing routes with `MarketingLayoutShell` |
| `examples/marketing-home-page.tsx` | Multi-route: home content without duplicating the header |
| `examples/marketing-nominations-page.tsx` | `app/(marketing)/nominations/page.tsx` |
| `examples/marketing-nominations-success-page.tsx` | `app/(marketing)/nominations/success/page.tsx` |
| `PORTING_NON_NEXT.md` | Notes for Vite / Remix / non-Next stacks |
| `pack-template.sh` | Zips this folder for transfer (run from repo root; includes `public/images`) |
| `public/images/*.png` | Bundled assets — merge into your app’s `public/images/` |
| `tsconfig.json` | Local TS project for this folder (no Next.js compiler plugin) so editors resolve `./Landing…` imports |

In the **elite-steppers-platform** repo, the root `tsconfig.json` excludes `templates/**` so VS Code/Cursor attaches this `tsconfig.json` to files under `src/`. If diagnostics linger, run **TypeScript: Restart TS Server**. After copying the template elsewhere, either keep this `tsconfig.json` beside `src/` or rely on your app’s single project config.

## Requirements

- **Next.js** 14+ with the **App Router** (`app/`) — tested with 16.x
- **React** 18+
- **Tailwind CSS** v4 with `@import "tailwindcss";` in your global CSS
- **TypeScript** (recommended; matches the examples)

> **Not using Next.js?** See `PORTING_NON_NEXT.md`. **Using the Pages Router (`pages/`)?** The same components usually work, but you mount them from `pages/*.tsx` and `_app.tsx` instead; this README only documents the App Router.

---

## How to use this template in another project

Follow these steps **in order** in the target repository (new `create-next-app` or an existing app).

### 1. Get the files into your app

- **From a zip:** run `bash templates/elite-steppers-landing/pack-template.sh` in the elite-steppers-platform repo, unzip `elite-steppers-landing-template.zip` somewhere, and use the `templates/elite-steppers-landing` folder inside it.
- **From a copy:** copy the whole `templates/elite-steppers-landing` directory from this repo.

You need at least:

| Copy from template | Place in your app |
|--------------------|-------------------|
| `src/*` (entire folder) | e.g. `src/components/elite-steppers-landing/` |
| `public/images/*` | `public/images/` (merge; do not rename files) |
| `styles/landing-globals-snippet.css` | merged into your globals (see step 3) |
| `snippets/fonts.app.example.ts` (or `fonts.poppins.ts` + `font-you-rock.ts`) | use as / merge into `src/app/fonts.ts` (see step 4) |

The **examples** in `examples/*.tsx` are **reference only** — paste or adapt them into your `app/` tree.

**Import path in docs:** examples assume the barrel file lives at  
`@/components/elite-steppers-landing` → i.e. `src/components/elite-steppers-landing/index.ts`.  
If you use a different folder name, change every import (or add a re-export file at the path you prefer).

### 2. Add a TypeScript path alias (if you don’t have one)

In **`tsconfig.json`**, under `compilerOptions.paths`, ensure `@/*` points at your `src` folder (default in Next.js):

```json
"paths": {
  "@/*": ["./src/*"]
}
```

If you use another alias for components, either switch the examples to that alias or add a second path that points at `elite-steppers-landing`.

### 3. Merge global CSS (order matters)

In **`src/app/globals.css`** (or your main global stylesheet):

1. Keep **`@import "tailwindcss";` first.**
2. **After** that, either **paste in** the full contents of `styles/landing-globals-snippet.css`, *or* copy that file into your repo (e.g. `src/styles/landing-globals-snippet.css`) and import it with a path that matches your layout, for example from `src/app/globals.css`:

   ```css
   @import "../styles/landing-globals-snippet.css";
   ```

3. If you already have `:root` or `@theme inline` blocks, **merge** duplicate variables instead of duplicating whole files — the snippet defines background, gold, and **nominations** field colors plus checkbox + gold-shadow utilities. Without this merge, form panels and the “YOU ROCK” block will look wrong.

4. Import that CSS from your **root** `app/layout.tsx` (e.g. `import "./globals.css"`).

### 4. Fonts and root `layout`

1. Create or edit **`src/app/fonts.ts`**: the easiest path is to copy **`snippets/fonts.app.example.ts`** to **`src/app/fonts.ts`** (it includes **Poppins** at weights **400–700** plus **Lilita** for the success page, matching the main repo). Alternatively, merge **`fontUi`** from `snippets/fonts.poppins.ts` and **`fontYouRock`** from `snippets/font-you-rock.ts` into one file.
2. In **`src/app/layout.tsx`**:
   - Set **`className={fontUi.variable}`** on **`<html>`** (or on `<body>` if you prefer) so `--font-ui` is available site-wide.
   - Use **`className="font-sans antialiased"`** (or similar) on **`<body>`** so Tailwind’s `font-sans` uses the theme stack from the snippet.
3. You do **not** need to put `fontYouRock` on `<body>`. The success page passes **`fontYouRock.className`** only to **`NominationSuccessView`** (see `examples/marketing-nominations-success-page.tsx`).

### 5. Viewport (recommended)

In root **`app/layout.tsx`**, export `viewport` so safe-area insets behave like the reference app:

```ts
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
```

### 6. Add routes: choose one layout strategy

- **Option A** — only the full landing on **`/`** (no shared marketing layout): see [Option A](#option-a--single-landing-route-) below.
- **Option B** — home + more pages under one header: add **`app/(marketing)/layout.tsx`**, home **`app/(marketing)/page.tsx`**, and optional nominations routes; see [Option B](#option-b--multi-page-marketing-site-shared-header) below.

The **`(marketing)`** segment is a **route group**: it does **not** appear in the URL (`/` not `/marketing`).

### 7. Images

These must exist as **`/images/<filename>.png`** (Next serves `public/images/`):

| File | Use |
|------|-----|
| `1.png` | home hero background |
| `12.png` | nominations / nominate hero |
| `18.png` | header logo |
| `merch-flatlay.png` | merch section |
| `11.png` | footer photo |

If any file is missing, **`next/image` will 404** at build or runtime for that section.

### 8. Navigation and stub pages

`LandingHeader` links to paths like **`/about`**, **`/hall-of-fame`**, **`/nominations`**, etc. Either:

- add minimal **`app/about/page.tsx`** (and the rest) so those URLs resolve, or  
- edit **`src/components/elite-steppers-landing/LandingHeader.tsx`** (and any section with internal `Link`s) to match your real routes.

**Duplicate URL rule:** do not create both `app/about/page.tsx` and `app/(marketing)/about/page.tsx` for the same path.

### 9. Checklist before you consider it done

- [ ] `src/components/elite-steppers-landing/` exists and `index.ts` exports resolve.
- [ ] `public/images` contains the PNGs listed above.
- [ ] `globals.css` includes Tailwind + merged snippet (nominations + gold utilities).
- [ ] `fontUi.variable` is on `<html>` (or equivalent) and body uses `font-sans`.
- [ ] At least one route renders `EliteSteppersLanding` or `EliteSteppersLandingSections` + layout as in Option A/B.
- [ ] (If using nominations **success**): `fontYouRock` is in `app/fonts.ts` and `NominationSuccessView` receives `youRockFontClassName={fontYouRock.className}`.
- [ ] `npm run dev` and `npm run build` both succeed.

### Troubleshooting

| Symptom | What to check |
|--------|----------------|
| “Module not found” for `@/components/elite-steppers-landing` | Path alias, folder name, and that `index.ts` is present. |
| Images broken / 404 | Files under `public/images/` with exact names. |
| Form or success page looks unstyled (grey/zinc wrong) | Snippet not merged; `@theme` nomination colors missing. |
| Type errors only in the copied folder | Your app’s `tsconfig` `include` should cover `src/components/**`. You can keep the template’s local `tsconfig.json` next to the copied folder for IDE only (optional). |
| Hydration warnings on `/nominations` | Expected if extensions alter the DOM; the template loads the form with `dynamic(..., { ssr: false })` to reduce this. |
| Chrome: font “preloaded but not used” on some routes | Declaring many Poppins weights preloads more **.woff2** files than a single page may paint immediately. This template’s **`fonts.app.example.ts`** only loads **400–700** (and Lilita only where the success view uses it), matching the main app. Don’t re-add 800/900 unless you add matching `font-extrabold` / `font-black` text. |

## Option A — Single landing route (`/`)

Use when the bundle is only the full homepage. Complete [How to use this template in another project](#how-to-use-this-template-in-another-project) (steps 1–5 and 7–8) first, then add this route.

**`app/page.tsx`** (see `examples/next-app-page.tsx`):

```tsx
import { EliteSteppersLanding } from "@/components/elite-steppers-landing";

export default function Page() {
  return <EliteSteppersLanding logoPriority />;
}
```

## Option B — Multi-page marketing site (shared header)

Use a **route group** so URLs stay clean (`/about`, not `/marketing/about`). Complete the [integration steps](#how-to-use-this-template-in-another-project) above first, then:

1. Add **`app/(marketing)/layout.tsx`** — wrap `children` with `MarketingLayoutShell` (see `examples/marketing-app-layout.tsx`).
2. Add **`app/(marketing)/page.tsx`** — render **`EliteSteppersLandingSections`** only (see `examples/marketing-home-page.tsx`).
3. (Optional) Add **`app/(marketing)/nominations/page.tsx`** and **`nominations/success/page.tsx`** (see `examples/marketing-nominations-*.tsx`). The header already links to `/nominations`.
4. Add other pages under **`app/(marketing)/`** (e.g. `about/page.tsx`) with **no** second `LandingHeader`.

`MarketingLayoutShell` sets logo `priority` on pathname **`/`** only. If your home path differs, edit that component.

**Do not** define the same segment twice (e.g. both `app/about/page.tsx` and `app/(marketing)/about/page.tsx`) — Next.js will error (duplicate URL).

## Ship the template as a zip (another machine / repo)

From the **elite-steppers-platform** repo root:

```bash
bash templates/elite-steppers-landing/pack-template.sh
```

This writes `elite-steppers-landing-template.zip` in the repo root (includes `src/`, `public/images/`, styles, snippets, and docs — large files are the PNGs).

## Public API

- **`EliteSteppersLanding`** — full page (header + sections); best for a single `/` route.
- **`MarketingLayoutShell`** — outer shell + `LandingHeader`; use in a marketing `layout.tsx`.
- **`EliteSteppersLandingSections`** — home sections only; use as `page.tsx` body under the shell.
- **`NominationsPageContent`** — full `/nominations` page (hero, criteria, form + client footer stack).
- **`NominationSuccessView`** — `/nominations/success` (requires `youRockFontClassName` from `fontYouRock`).
- **`NominationsClientSectionsHost`**, **`NominationFormSection`**, **`NominateHero`**, … — lower-level pieces from `src/index.ts`.
- **Individual exports** — `LandingHeader`, `LandingHero`, … for custom layouts.

## Keeping in sync

To refresh this template from the main app, copy updated files from `src/components/marketing/` into `templates/elite-steppers-landing/src/`, replace `@/components/marketing/…` with `./…` (same tree), mirror any new sections in `EliteSteppersLandingSections.tsx` (and keep `EliteSteppersLanding` composing header + sections), sync `NominateHero`, `Nomination*`, and `Nominations*`, and `nominationFormStyles` with `src`, copy `src/app/fonts.ts` into `snippets/fonts.app.example.ts` (and keep `snippets/fonts.poppins.ts` / `font-you-rock.ts` aligned if you still ship them separately), merge `src/app/globals.css` nomination and gold-shadow **layers** into `styles/landing-globals-snippet.css` if design tokens change, re-copy `public/images/{1,12,18,11}.png` and `merch-flatlay.png` from the main `public/images/` when assets change, and re-run `bash templates/elite-steppers-landing/pack-template.sh` if you redistribute the zip.

Non-Next stacks: see `PORTING_NON_NEXT.md` (`next/image`, `next/link`, `usePathname`).

## License

Use per your parent project’s license.
