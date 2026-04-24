# Elite Steppers Hall of Fame Platform

Enterprise-grade folder scaffold for a serverless Next.js + Supabase platform.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
