# Porting this template outside Next.js

The components target **Next.js** (`next/image`, `next/link`, `next/navigation`’s `usePathname`, App Router). To reuse in **Vite**, **Remix**, **CRA**, or another React stack:

1. **`next/image` →** `<img>` or your framework’s image component. Keep `width` / `height` or `aspect-ratio` where layout depends on it (`LandingHeader` logo, footer `Image`).
2. **`next/link` →** `<a href="...">` or your router’s `Link` (e.g. `react-router-dom`). Preserve `className` and `aria-current` where set.
3. **`usePathname()` (header active states; `MarketingLayoutShell` logo priority) →** pass `pathname` as a prop from your router (`useLocation().pathname`, Remix `useLocation()`, etc.), or replace `LandingHeader` / `MarketingLayoutShell` with versions that read your router’s API.
4. **`"use client"`** sections (`LandingHeader`, `LandingHero`, `LandingNewsletter`) stay as client components in frameworks that split server/client; in SPA-only apps they are ordinary components.
5. **Fonts:** load Poppins (or your choice) with `@font-face` or a provider, and set `--font-ui` on `:root` / `html` to match `landing-globals-snippet.css`.
6. **Tailwind v4:** keep the same `@import "tailwindcss"` + merged theme snippet, or translate utility classes if you drop Tailwind.

For the smallest lift, **embed this template inside a Next.js route** in the other system, or export the site as a static subdomain.
