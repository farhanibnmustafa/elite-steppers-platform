import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ExtensionHydrationStripper } from "@/components/ExtensionHydrationStripper";
import {
  bisSkinCheckedEarlyBootstrapInline,
  stripBisSkinCheckedInline,
} from "@/lib/stripBisSkinChecked";
import { fontUi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Level Steppers Hall of Fame",
  description: "Honoring the legends who keep the floor alive.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontUi.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Script id="bis-skin-early" strategy="beforeInteractive">
          {bisSkinCheckedEarlyBootstrapInline}
        </Script>
        <ExtensionHydrationStripper />
        {children}
        {/* End-of-body strip; `setAttribute` hook above blocks most re-injection before React hydrates. */}
        <script dangerouslySetInnerHTML={{ __html: stripBisSkinCheckedInline }} />
      </body>
    </html>
  );
}
