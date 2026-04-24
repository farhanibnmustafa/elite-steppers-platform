# Enterprise Folder and File Structure

## Architecture Type

This structure is a **feature-first modular monolith with layered architecture**.

Why this type:

- It keeps the deployment simple for a serverless Next.js + Supabase stack.
- It enforces clean separation of concerns without the overhead of microservices too early.
- It scales operationally because each domain module owns its service, repository, validation, and contracts.
- It gives a safe migration path later if a domain such as voting or payments needs to be extracted into a separate service.

Core rule:

- `app/api` and server actions handle transport only.
- `modules/*/services` own business logic.
- `modules/*/repositories` own database access.
- `integrations/*` own third-party calls and infrastructure adapters.

## Recommended Tree

Reserved domains **`community`**, **`contact`**, **`activity`**, and **`reporting`** follow the same subdirectory layout as other modules; create **`src/app/api/contact/`** and **`src/app/admin/reports/`** when you wire routes and pages.

```text
elite-steppers-platform/
|-- .github/
|   \-- workflows/
|       |-- ci.yml
|       |-- deploy-preview.yml
|       \-- deploy-production.yml
|-- docs/
|   |-- adr/
|   |-- runbooks/
|   \-- architecture/
|       \-- enterprise-folder-structure.md
|-- infra/
|   |-- env/
|   |   |-- .env.development.example
|   |   |-- .env.staging.example
|   |   \-- .env.production.example
|   |-- monitoring/
|   |   |-- otel.ts
|   |   |-- logging.ts
|   |   \-- alerts.md
|   \-- security/
|       |-- headers.ts
|       |-- rate-limit.ts
|       \-- secrets-policy.md
|-- public/
|   |-- images/
|   |-- og/
|   \-- video-posters/
|-- scripts/
|   |-- check-env.mjs
|   |-- generate-supabase-types.mjs
|   |-- seed-dev.mjs
|   \-- smoke/
|       \-- api-health.mjs
|-- src/
|   |-- app/
|   |   |-- (marketing)/
|   |   |   |-- page.tsx
|   |   |   |-- hall-of-fame/
|   |   |   |   |-- page.tsx
|   |   |   |   \-- [slug]/page.tsx
|   |   |   |-- events/
|   |   |   |   |-- page.tsx
|   |   |   |   \-- [eventId]/page.tsx
|   |   |   |-- membership/page.tsx
|   |   |   |-- nominations/page.tsx
|   |   |   \-- shop/
|   |   |       |-- page.tsx
|   |   |       \-- [productId]/page.tsx
|   |   |-- (auth)/
|   |   |   |-- login/page.tsx
|   |   |   |-- register/page.tsx
|   |   |   \-- callback/route.ts
|   |   |-- (member)/
|   |   |   |-- dashboard/page.tsx
|   |   |   |-- profile/page.tsx
|   |   |   |-- tickets/page.tsx
|   |   |   \-- votes/page.tsx
|   |   |-- admin/
|   |   |   |-- page.tsx
|   |   |   |-- nominations/page.tsx
|   |   |   |-- voting/page.tsx
|   |   |   |-- inductees/page.tsx
|   |   |   |-- events/page.tsx
|   |   |   |-- media/page.tsx
|   |   |   |-- memberships/page.tsx
|   |   |   |-- orders/page.tsx
|   |   |   |-- reports/
|   |   |   \-- users/page.tsx
|   |   |-- api/
|   |   |   |-- health/
|   |   |   |   |-- live/route.ts
|   |   |   |   \-- ready/route.ts
|   |   |   |-- nominations/
|   |   |   |   |-- route.ts
|   |   |   |   \-- [nominationId]/route.ts
|   |   |   |-- votes/route.ts
|   |   |   |-- events/
|   |   |   |   |-- route.ts
|   |   |   |   \-- [eventId]/route.ts
|   |   |   |-- memberships/route.ts
|   |   |   |-- orders/route.ts
|   |   |   |-- payments/
|   |   |   |   |-- checkout/route.ts
|   |   |   |   \-- webhook/route.ts
|   |   |   |-- media/upload-url/route.ts
|   |   |   |-- contact/
|   |   |   |-- admin/
|   |   |   |   |-- users/route.ts
|   |   |   |   \-- roles/route.ts
|   |   |   \-- webhooks/
|   |   |       |-- payments/route.ts
|   |   |       \-- storage/route.ts
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- not-found.tsx
|   |   \-- providers.tsx
|   |-- actions/
|   |   |-- nominations/
|   |   |   |-- submit-nomination.action.ts
|   |   |   \-- approve-nomination.action.ts
|   |   |-- voting/cast-vote.action.ts
|   |   |-- memberships/upgrade-membership.action.ts
|   |   |-- contact/
|   |   \-- admin/publish-event.action.ts
|   |-- components/
|   |   |-- ui/
|   |   |-- admin/
|   |   |-- forms/
|   |   |-- marketing/
|   |   \-- shared/
|   |-- config/
|   |   |-- app.config.ts
|   |   |-- feature-flags.ts
|   |   |-- navigation.ts
|   |   |-- rbac.ts
|   |   \-- routes.ts
|   |-- hooks/
|   |-- integrations/
|   |   |-- analytics/
|   |   |   \-- analytics.client.ts
|   |   |-- email/
|   |   |   |-- email.client.ts
|   |   |   \-- email.templates.ts
|   |   |-- payments/
|   |   |   |-- payment-gateway.ts
|   |   |   \-- stripe.client.ts
|   |   |-- storage/
|   |   |   \-- storage.client.ts
|   |   |-- video/
|   |   |   \-- video.client.ts
|   |   \-- webhooks/
|   |       \-- webhook-signature.ts
|   |-- lib/
|   |   |-- auth/
|   |   |   |-- auth-context.ts
|   |   |   |-- permission-check.ts
|   |   |   \-- session.ts
|   |   |-- cache/
|   |   |   \-- cache-tags.ts
|   |   |-- db/
|   |   |   |-- supabase-admin.ts
|   |   |   |-- supabase-browser.ts
|   |   |   \-- supabase-server.ts
|   |   |-- env/
|   |   |   |-- client.ts
|   |   |   \-- server.ts
|   |   |-- http/
|   |   |   |-- api-error.ts
|   |   |   |-- api-response.ts
|   |   |   \-- route-guard.ts
|   |   |-- observability/
|   |   |   |-- logger.ts
|   |   |   |-- metrics.ts
|   |   |   \-- tracing.ts
|   |   |-- queue/
|   |   |   \-- job-dispatcher.ts
|   |   |-- security/
|   |   |   |-- csp.ts
|   |   |   |-- idempotency.ts
|   |   |   |-- ip-fingerprint.ts
|   |   |   |-- rate-limit.ts
|   |   |   \-- signed-urls.ts
|   |   |-- utils/
|   |   |   |-- dates.ts
|   |   |   |-- money.ts
|   |   |   \-- slug.ts
|   |   \-- validation/
|   |       \-- zod-error-map.ts
|   |-- modules/
|   |   |-- auth/
|   |   |   |-- contracts/
|   |   |   |-- policies/
|   |   |   |-- repositories/
|   |   |   |   \-- role.repository.ts
|   |   |   |-- services/
|   |   |   |   \-- auth.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- users/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- user.repository.ts
|   |   |   |-- services/
|   |   |   |   \-- user-admin.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- hall-of-fame/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- inductee.repository.ts
|   |   |   |-- services/
|   |   |   |   \-- inductee.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- nominations/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- nomination.repository.ts
|   |   |   |-- services/
|   |   |   |   |-- nomination.service.ts
|   |   |   |   \-- nomination-approval.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- voting/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   |-- ballot.repository.ts
|   |   |   |   \-- vote-window.repository.ts
|   |   |   |-- services/
|   |   |   |   |-- vote.service.ts
|   |   |   |   |-- anti-abuse.service.ts
|   |   |   |   \-- live-results.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- events/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- event.repository.ts
|   |   |   |-- services/
|   |   |   |   |-- event.service.ts
|   |   |   |   \-- event-registration.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- memberships/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |-- services/
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- payments/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- payment.repository.ts
|   |   |   |-- services/
|   |   |   |   |-- checkout.service.ts
|   |   |   |   \-- payment-webhook.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- orders/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- order.repository.ts
|   |   |   |-- services/
|   |   |   |   \-- order.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- shop/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- product.repository.ts
|   |   |   |-- services/
|   |   |   |   \-- catalog.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- media/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- media.repository.ts
|   |   |   |-- services/
|   |   |   |   \-- media.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- content/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- article.repository.ts
|   |   |   |-- services/
|   |   |   |   \-- content.service.ts
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- community/
|   |   |   |-- contracts/
|   |   |   |-- policies/
|   |   |   |-- repositories/
|   |   |   |-- services/
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- contact/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |-- services/
|   |   |   |-- validators/
|   |   |   \-- index.ts
|   |   |-- activity/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |-- services/
|   |   |   \-- index.ts
|   |   |-- audit/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |   \-- audit.repository.ts
|   |   |   |-- services/
|   |   |   |   \-- audit.service.ts
|   |   |   \-- index.ts
|   |   |-- notifications/
|   |   |   |-- contracts/
|   |   |   |-- services/
|   |   |   |   \-- notification.service.ts
|   |   |   \-- index.ts
|   |   |-- reporting/
|   |   |   |-- contracts/
|   |   |   |-- repositories/
|   |   |   |-- services/
|   |   |   \-- index.ts
|   |   |-- analytics/
|   |   |   |-- contracts/
|   |   |   |-- services/
|   |   |   |   \-- analytics.service.ts
|   |   |   \-- index.ts
|   |   \-- index.ts
|   |-- styles/
|   |   |-- tokens.css
|   |   \-- utilities.css
|   |-- types/
|   |   |-- api.ts
|   |   |-- database.ts
|   |   \-- domain.ts
|   |-- instrumentation.ts
|   \-- middleware.ts
|-- supabase/
|   |-- config.toml
|   |-- migrations/
|   |-- seeds/
|   |-- policies/
|   |   |-- roles.sql
|   |   |-- nominations.sql
|   |   |-- voting.sql
|   |   |-- memberships.sql
|   |   \-- media.sql
|   |-- functions/
|   |   |-- payments-webhook/
|   |   |-- media-processing/
|   |   |-- vote-abuse-check/
|   |   \-- audit-forwarder/
|   \-- tests/
|       \-- rls.test.sql
|-- tests/
|   |-- fixtures/
|   |-- factories/
|   |-- helpers/
|   |-- unit/
|   |   |-- modules/
|   |   \-- lib/
|   |-- integration/
|   |   |-- api/
|   |   |-- services/
|   |   \-- repositories/
|   |-- contract/
|   |   |-- webhooks/
|   |   \-- integrations/
|   |-- e2e/
|   |   |-- public-flows/
|   |   \-- admin-flows/
|   \-- performance/
|       |-- voting-load.k6.ts
|       \-- checkout-spike.k6.ts
|-- .env.example
|-- .gitignore
|-- components.json
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
|-- tsconfig.json
\-- README.md
```

## Layer Separation

### 1. API Layer

Directories:

- `src/app/api/**`
- `src/actions/**`
- `src/lib/http/**`

Responsibilities:

- Parse requests and headers.
- Authenticate the caller.
- Authorize the operation at the entry point.
- Validate transport-level input.
- Call exactly one application service or workflow entry.
- Map service results into HTTP responses or form action responses.

Rules:

- No SQL.
- No Supabase queries directly in route handlers.
- No payment, email, storage, or webhook logic inline.
- No business decision trees beyond basic request guarding.

Example flow:

- `src/app/api/nominations/route.ts`
- validates request body
- calls `nomination.service.ts`
- returns `201` or mapped domain error

### 2. Service Layer

Directories:

- `src/modules/*/services`

Responsibilities:

- Own business workflows.
- Coordinate repositories and integrations.
- Enforce domain rules such as voting windows, nomination approval state transitions, membership entitlements, or refund rules.
- Emit audit events and notifications.
- Manage transaction boundaries and idempotency.

This is where the real application logic lives.

Examples:

- `nomination-approval.service.ts`
- `anti-abuse.service.ts`
- `checkout.service.ts`
- `event-registration.service.ts`

### 3. Data Layer

Directories:

- `src/modules/*/repositories`
- `src/lib/db/**`
- `supabase/migrations`
- `supabase/policies`

Responsibilities:

- Encapsulate all database reads and writes.
- Keep query logic centralized and reusable.
- Isolate Supabase client usage from the rest of the app.
- Define schema evolution and RLS policies.

Rules:

- Repositories return domain-shaped data, not raw HTTP responses.
- Repositories do not send emails, create payments, or contain UI logic.
- RLS is enforced in Supabase even if application guards also exist.

### 4. Integration Layer

Directories:

- `src/integrations/**`
- `supabase/functions/**`

Responsibilities:

- Third-party payment gateways
- email providers
- storage adapters
- video providers
- analytics sinks
- webhook signature verification
- async offloading for jobs better handled outside the request path

Rules:

- Integration clients are thin adapters.
- Service layer decides when to call them.
- Secrets are never read directly in route handlers or React components.

## Why This Is Enterprise Grade

### Domain isolation

Each business capability has its own module:

- `nominations`
- `voting`
- `events`
- `memberships`
- `payments`
- `orders`
- `shop`
- `media`
- `content`
- `community` (posts, reactions, comments; FR-10.3–10.4)
- `contact` (contact form capture and admin forwarding; FR-10.1–10.2)
- `activity` (per-user timeline and interaction history; FR-11.2–11.3)
- `reporting` (admin exports, scheduled summaries, operational reports; FR-12.6)
- `audit`
- `users`

This prevents the codebase from collapsing into a single `services` or `utils` bucket.

Implement **subscription and entitlement** flows inside `memberships` (`contracts/`, `services/`) so they stay separate from one-off commerce in `orders` / `shop` / `payments`.

### Transport is thin

API routes and server actions stay small and predictable. This is critical for maintainability, security review, and testability.

### Security is built into the structure

Security controls are not scattered:

- RBAC definitions live in `src/config/rbac.ts`
- permission checks live in `src/lib/auth`
- rate limiting, idempotency, CSP, and fingerprinting live in `src/lib/security`
- Supabase RLS policies live in `supabase/policies`
- webhook verification lives in `src/integrations/webhooks`

### Serverless scalability

The layout assumes bursty traffic around voting and events:

- request path stays thin
- caching helpers live in `src/lib/cache`
- async or edge-adjacent work can be pushed into `supabase/functions`
- idempotency and rate limiting are first-class
- performance tests are explicit under `tests/performance`

### Operational maturity

Enterprise systems need operating artifacts, not only app code:

- CI/CD in `.github/workflows`
- runbooks in `docs/runbooks`
- environment separation in `infra/env`
- tracing, metrics, and logs in `infra/monitoring` and `src/lib/observability`

## Major Directory Guide

## Folder and File Responsibility Map

This section answers the practical question: **which folder holds which file, and what work that file should do**.

### Top-level placement

| Folder | What goes here | What work it does |
|---|---|---|
| `src/app` | Next.js pages, layouts, route handlers | Web entry points, page rendering, HTTP transport |
| `src/actions` | Next.js Server Actions | Form and UI mutations from the App Router |
| `src/modules` | Business domain modules | Core application rules and workflows |
| `src/integrations` | External provider adapters | Payments, email, storage, analytics, webhooks |
| `src/lib` | Shared technical utilities | Auth helpers, DB clients, security, logging, validation |
| `src/components` | Reusable UI components | Presentational and form UI |
| `src/config` | Central app config | RBAC maps, feature flags, routes, navigation |
| `src/types` | Shared TypeScript types | API, DB, and domain typing |
| `supabase` | Database and Supabase platform assets | Schema, migrations, RLS, Edge Functions |
| `tests` | Automated tests | Unit, integration, contract, e2e, performance |
| `infra` | Operational setup docs/config | Environment separation, monitoring, security policy |
| `docs` | Human documentation | Architecture, ADRs, runbooks |

### API layer files

These files are the **entry points**. They should be thin.

| File pattern | Folder | Purpose | What it should do |
|---|---|---|---|
| `route.ts` | `src/app/api/**` | HTTP endpoint | Parse request, auth check, validate input, call service, return response |
| `page.tsx` | `src/app/**` | Route UI | Render page, fetch read-only data, wire components |
| `layout.tsx` | `src/app/**` | Shared route layout | Wrap pages with layout and providers |
| `loading.tsx` | `src/app/**` | Suspense loading UI | Show route-level loading state |
| `error.tsx` | `src/app/**` | Route-level error fallback | Show safe UI for failures |
| `*.action.ts` | `src/actions/**` | Server Action | Accept form input, validate, call service, return UI-safe result |

Example:

- `src/app/api/nominations/route.ts`
  Work: accept nomination request, check session if needed, validate body, call `nomination.service.ts`, map result to JSON.

- `src/app/api/payments/checkout/route.ts`
  Work: validate cart or ticket payload, call `checkout.service.ts`, return checkout session info.

### Service layer files

These files contain the **actual business logic**.

| File pattern | Folder | Purpose | What it should do |
|---|---|---|---|
| `*.service.ts` | `src/modules/*/services` | Domain workflow service | Enforce business rules and coordinate repositories/integrations |
| `*-approval.service.ts` | `src/modules/*/services` | State-transition workflow | Handle approval/rejection/review flows |
| `anti-abuse.service.ts` | `src/modules/voting/services` | Fraud/abuse control | Apply rate limit rules, fingerprint checks, duplicate vote logic |
| `live-results.service.ts` | `src/modules/voting/services` | Voting projection logic | Compute publishable live result views |

Example:

- `src/modules/nominations/services/nomination.service.ts`
  Work: create nomination, apply rules, store data, emit audit event, notify admin reviewers.

- `src/modules/nominations/services/nomination-approval.service.ts`
  Work: approve or reject nomination, verify admin permission, change status, record audit log.

- `src/modules/payments/services/checkout.service.ts`
  Work: calculate totals, enforce product/ticket eligibility, create payment intent, persist order draft.

- `src/modules/memberships/services/membership.service.ts`
  Work: activate membership, renew tier, grant entitlements, sync payment outcome.

### Data layer files

These files own **database access only**.

| File pattern | Folder | Purpose | What it should do |
|---|---|---|---|
| `*.repository.ts` | `src/modules/*/repositories` | Persistence adapter | Read/write domain data via Supabase/Postgres |
| `supabase-server.ts` | `src/lib/db` | Server DB client factory | Create server-safe Supabase client |
| `supabase-admin.ts` | `src/lib/db` | Service-role DB client | Restricted privileged access for server-only operations |
| `*.sql` | `supabase/policies` | Row Level Security rules | Enforce least privilege in DB |
| migration files | `supabase/migrations` | Schema evolution | Create tables, indexes, triggers, enums, constraints |

Example:

- `src/modules/voting/repositories/ballot.repository.ts`
  Work: insert vote, check prior vote record, fetch vote count aggregates.

- `src/modules/events/repositories/event.repository.ts`
  Work: create event row, update schedules, fetch attendee lists, load event details.

- `supabase/policies/voting.sql`
  Work: ensure only allowed users can read/write vote data under RLS.

Important boundary:

- Repository files do not decide business policy.
- They only execute data access needed by the service layer.

### Integration layer files

These files talk to **external systems**.

| File pattern | Folder | Purpose | What it should do |
|---|---|---|---|
| `*.client.ts` | `src/integrations/**` | Vendor adapter | Wrap SDK/API calls for one provider |
| `payment-gateway.ts` | `src/integrations/payments` | Payment abstraction | Standardize checkout/refund/payment-status calls |
| `webhook-signature.ts` | `src/integrations/webhooks` | Webhook security helper | Verify provider signatures |
| Supabase Edge Functions | `supabase/functions/**` | Async or webhook processing | Handle webhook ingestion, media processing, abuse checks |

Example:

- `src/integrations/email/email.client.ts`
  Work: send transactional emails such as nomination receipt, membership confirmation, admin alerts.

- `src/integrations/storage/storage.client.ts`
  Work: generate signed upload/download URLs, move or delete media assets.

- `src/integrations/payments/stripe.client.ts`
  Work: create checkout session, verify webhook payload, request refund, fetch payment status.

- `supabase/functions/media-processing`
  Work: post-upload processing such as thumbnails, metadata extraction, moderation, transcoding triggers.

### Validation and contracts

These files define the shape of data and protect boundaries.

| File pattern | Folder | Purpose | What it should do |
|---|---|---|---|
| `*.validator.ts` or schema files | `src/modules/*/validators` | Domain input validation | Validate business inputs before service execution |
| `contracts/*` | `src/modules/*/contracts` | DTOs and interfaces | Define request/response shapes and domain contracts |
| `api.ts` | `src/types` | Shared transport types | Define API payload types where shared |
| `database.ts` | `src/types` | Generated DB types | Typed access to Supabase schema |

Example:

- `src/modules/nominations/validators/nomination.validator.ts`
  Work: validate nominee name, category, biography, evidence links, and media references.

- `src/modules/payments/contracts/checkout.contract.ts`
  Work: define input/output DTOs for checkout service.

### Auth, RBAC, and security files

These files centralize security-sensitive logic.

| File | Folder | What it does |
|---|---|---|
| `rbac.ts` | `src/config` | Defines platform roles and allowed actions |
| `permission-check.ts` | `src/lib/auth` | Checks whether current actor can perform an operation |
| `session.ts` | `src/lib/auth` | Reads authenticated user/session context |
| `rate-limit.ts` | `src/lib/security` | Throttles abusive requests |
| `idempotency.ts` | `src/lib/security` | Prevents duplicate submissions/charges |
| `ip-fingerprint.ts` | `src/lib/security` | Supports anti-abuse scoring for votes and suspicious actions |
| `signed-urls.ts` | `src/lib/security` | Controls safe media upload/download URL handling |

### Observability files

These files make the system operable in production.

| File | Folder | What it does |
|---|---|---|
| `logger.ts` | `src/lib/observability` | Structured application logs |
| `metrics.ts` | `src/lib/observability` | Counters, histograms, business metrics |
| `tracing.ts` | `src/lib/observability` | Trace spans across route, service, repository, integration |
| `otel.ts` | `infra/monitoring` | OpenTelemetry bootstrap/config |
| `alerts.md` | `infra/monitoring` | Alert definitions for ops |

### UI files

These files are only for presentation.

| Folder | Purpose | What work it does |
|---|---|---|
| `src/components/ui` | shadcn/ui primitives | Buttons, dialogs, inputs, tables |
| `src/components/forms` | App-specific form components | Nomination form, checkout form, event form |
| `src/components/admin` | Admin dashboard widgets | Grids, moderation panels, analytics cards |
| `src/components/marketing` | Public-facing sections | Hero, spotlight, inductee cards, event promos |
| `src/components/shared` | Shared cross-app UI | Header, footer, media cards, empty states |

Important boundary:

- UI components never contain direct DB queries.
- UI components never call payment SDK secrets or admin clients.

### Test files

These folders define what kind of quality each test covers.

| Folder | What belongs here | What it verifies |
|---|---|---|
| `tests/unit` | Service and helper tests | Business rule correctness |
| `tests/integration` | API, repository, workflow tests | Modules work together correctly |
| `tests/contract` | Provider/webhook tests | Third-party integrations match expected payloads |
| `tests/e2e` | Browser journeys | Real user and admin flows |
| `tests/performance` | Load scripts | Voting spikes, checkout bursts, event traffic |

### `src/app`

Next.js App Router entry points. This is the delivery layer for pages, layouts, route handlers, and segment-level UI composition.

Use it for:

- pages and layouts
- route handlers
- route groups
- page-specific loading and error boundaries

Do not use it for:

- SQL
- domain workflows
- payment gateway orchestration

### `src/actions`

Server Actions used by forms and authenticated dashboard interactions. These are transport adapters for React server mutations.

Use them for:

- form submission entry points
- invoking one service per action
- shaping UI-friendly mutation results

### `src/modules`

The heart of the system. Each folder is a bounded domain module.

Use a module when the feature has:

- business rules
- state transitions
- repositories
- validators
- contracts shared across API and UI

Recommended internal convention per module:

- `contracts`: DTOs, domain events, request and response contracts
- `repositories`: Supabase and SQL access
- `services`: business workflows
- `validators`: Zod schemas and rule-level validation
- `policies`: module-specific authorization rules where needed

Additional bounded contexts for this platform:

- `community`: public/community feed, likes, comments; moderation policies stay in-module.
- `contact`: inbound contact submissions; email forwarding is triggered from the service via `src/integrations/email`.
- `activity`: read-side aggregation of a member’s votes, orders, nominations, and community actions (often backed by a projection table or event feed).
- `reporting`: admin-only operational reports and exports; complements product `analytics` (dashboard KPIs).

### `src/integrations`

All third-party adapters. This keeps vendor SDKs out of domain logic.

Examples:

- Stripe or another payment processor
- email delivery provider
- storage provider
- analytics provider
- video hosting or transcoding service

### `src/lib`

Cross-cutting technical building blocks that are not domain-specific.

Examples:

- Supabase client factories
- auth/session context
- HTTP response helpers
- security helpers
- logging, metrics, tracing
- shared utility functions

Rule:

- If code is specific to one business capability, it belongs in `src/modules`, not `src/lib`.

### `supabase`

Database and platform concerns owned by Supabase.

Use it for:

- migrations
- seeds
- RLS policies
- SQL tests
- edge functions for webhook or background offload

### `tests`

Test structure is split by test objective instead of by framework only.

- `unit`: services, validators, helpers
- `integration`: API routes, repository behavior, Supabase-backed workflows
- `contract`: third-party webhook and adapter contracts
- `e2e`: browser-level user journeys
- `performance`: voting surges, checkout spikes, event-release traffic

### `infra`

Operational configuration and environment strategy.

Use it for:

- environment templates
- deployment assumptions
- monitoring setup
- security policy documentation

### `docs`

Human-readable engineering documentation.

Recommended contents:

- architecture docs
- ADRs
- incident runbooks
- onboarding notes

## Security and Least Privilege

This system should enforce security in multiple layers:

1. Supabase Auth for identity.
2. RBAC and policy checks in the application layer.
3. Row Level Security in Supabase for least-privilege data access.
4. Signed upload URLs for media.
5. Rate limiting, idempotency keys, and fingerprint checks for votes and checkout.
6. Audit logs on every admin mutation, approval action, refund, role change, and content publish event.

Recommended role model:

- `guest`
- `member`
- `judge`
- `moderator`
- `editor`
- `admin`
<!-- - `super_admin` -->

## Observability

Observability should be intentional from the start.

Folders responsible:

- `src/lib/observability`
- `infra/monitoring`
- `tests/performance`

Expected signals:

- structured logs for every API request and admin action
- metrics for nomination counts, vote attempts, failed checkouts, media upload failures
- traces across API route -> service -> repository -> integration
- alerts for payment webhook failures, auth spikes, vote abuse anomalies, and storage processing failures

## CI/CD and Environment Separation

Recommended environments:

- local
- development
- staging
- production

Separation rules:

- separate Supabase projects per environment
- separate storage buckets where risk requires it
- separate payment keys and webhook secrets
- no shared admin credentials across environments
- CI runs lint, typecheck, unit, integration, contract, and build checks before deploy

Workflow split:

- `ci.yml`: quality gates
- `deploy-preview.yml`: branch or preview deployments
- `deploy-production.yml`: protected release path

## Testing Strategy

### Unit tests

Target:

- service rules
- validators
- small pure helpers

### Integration tests

Target:

- route handlers with mocked auth context
- repository behavior against test database or ephemeral schema
- service plus repository workflows

### Contract tests

Target:

- payment webhook payloads
- email adapter contract
- storage adapter behavior

### End-to-end tests

Target:

- nomination submission
- admin approval
- vote cast
- membership upgrade
- ticket checkout
- media upload and publish

### Performance tests

Target:

- live voting spikes
- event registration bursts
- high-demand checkout windows

## Example Request Path

### Nomination submission

`page/form -> server action or route -> validator -> nomination.service -> nomination.repository -> audit.service -> notification.service`

### Vote cast

`route/action -> auth/session guard -> anti-abuse.service -> vote.service -> ballot.repository -> audit.service -> live-results.service`

### Payment checkout

`route/action -> checkout.service -> payment integration -> order.repository -> webhook -> payment-webhook.service -> membership/order update`

## Non-Negotiable Rules

1. Do not place business logic in `route.ts`.
2. Do not call Supabase directly from React components.
3. Do not place vendor SDK code inside repositories.
4. Do not mix admin and public concerns in the same service when permission boundaries differ.
5. Do not bypass audit logging for privileged operations.
6. Do not rely on client-side checks for authorization.

## Summary

This structure is enterprise-grade because it combines:

- feature-based modularity
- strict layered separation
- security by design
- serverless-friendly scalability
- strong operational support for CI/CD, monitoring, and testing

For this platform, a modular monolith is the right starting point: simple to deploy, clear to govern, and scalable enough for high-traffic events when paired with caching, RLS, async offloading, and disciplined service boundaries.
