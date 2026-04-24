"use client";

import { useLayoutEffect } from "react";

import { BIS_SKIN_ATTR } from "@/lib/stripBisSkinChecked";

/**
 * Some extensions inject attributes (e.g. `bis_skin_checked`) before/during hydration.
 * Stripping must run after React commits the hydrated tree — an inline `beforeInteractive`
 * script + `MutationObserver` with `childList` can race the reconciler and cause
 * `Cannot read properties of null (reading 'removeChild')`.
 */
export function ExtensionHydrationStripper() {
  useLayoutEffect(() => {
    function strip() {
      try {
        document.querySelectorAll(`[${BIS_SKIN_ATTR}]`).forEach((el) => {
          el.removeAttribute(BIS_SKIN_ATTR);
        });
      } catch {
        /* ignore */
      }
    }

    strip();

    if (typeof MutationObserver === "undefined") {
      return;
    }

    const observer = new MutationObserver(strip);
    observer.observe(document.documentElement, {
      subtree: true,
      attributes: true,
      attributeFilter: [BIS_SKIN_ATTR],
    });

    const timeoutId = window.setTimeout(() => {
      strip();
      observer.disconnect();
    }, 4000);

    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}
