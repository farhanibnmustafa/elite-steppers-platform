/**
 * Example: `src/app/(marketing)/layout.tsx` — shared nav + shell for all marketing routes.
 * Route groups like `(marketing)` do not appear in the URL (`/about` stays `/about`).
 */
import { MarketingLayoutShell } from "@/components/elite-steppers-landing";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MarketingLayoutShell>{children}</MarketingLayoutShell>;
}
