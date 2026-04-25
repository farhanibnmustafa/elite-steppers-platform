# Elite Steppers Hall of Fame Platform

Enterprise-grade folder scaffold for a serverless Next.js + Supabase platform.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Reusable page templates

The `templates/` directory holds **five** copy-out packages. After you change a template **folder** under `templates/`, rebuild the zips and commit the updated `*-template.zip` files at the repo root (or run **`bash scripts/pack-all-templates.sh`** once to rebuild all five). Tracked zips: `elite-steppers-landing-template.zip`, `hall-of-fame-page-template.zip`, `marketing-about-page-template.zip`, `marketing-donate-page-template.zip`, and `legal-terms-page-template.zip`. If a zip is **renamed or retired**, remove the old filename from git with `git rm <old>.zip` so the repository does not keep obsolete bundles. The templates cover the monorepo’s **seven** fully built marketing routes as follows: **`elite-steppers-landing`** bundles **home**, **nominations**, and **nominations/success** in one pack (shared header, layout, and nominate → success flow); the other four templates are **one route each** — `hall-of-fame-page`, `marketing-about-page`, `marketing-donate-page`, and `legal-terms-page`. See each template’s `README.md` for integration steps; `templates/elite-steppers-landing/README.md` also explains why those three routes share a single template.

### Tech stack (current)

| Layer | Packages |
|--------|-----------|
| Runtime | Node.js 20.9+ |
| Framework | Next.js 16, React 19, App Router |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| API / DB | Supabase JS v2 + `@supabase/ssr` (cookie-aware clients) |
| Validation | Zod 4 |
| Lint | ESLint 9 + `eslint-config-next` (flat `eslint.config.mjs`; Next 16 removed `next lint`) |

Primary architecture document:

- `docs/architecture/enterprise-folder-structure.md`

This scaffold is organized as a modular monolith with strict layered boundaries:

- API layer: transport only
- Service layer: business workflows and orchestration
- Data layer: persistence and query access
- Integration layer: external systems and adapters

The structure is designed for:

- RBAC and admin controls
- nomination and approval workflows
- voting with anti-abuse controls
- payments, memberships, tickets, and shop operations
- media and event management
- audit logging and observability
- high-traffic serverless operation
