import { MarketingLayoutShell } from "@/components/marketing/MarketingLayoutShell";

/** Keep all public marketing routes under this group only — no `src/app/about/page.tsx` etc. at the app root (same URL conflict). */
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MarketingLayoutShell>{children}</MarketingLayoutShell>;
}
