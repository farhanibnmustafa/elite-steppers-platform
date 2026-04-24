/**
 * Horizontal inset (safe-area aware). Copy of elite-steppers-platform
 * `landingLayout` so the template is self-contained.
 */
export const landingGutterX =
  "pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] min-[400px]:pl-[max(1.25rem,env(safe-area-inset-left))] min-[400px]:pr-[max(1.25rem,env(safe-area-inset-right))] sm:pl-[max(2rem,env(safe-area-inset-left))] sm:pr-[max(2rem,env(safe-area-inset-right))] md:pl-[max(3.25rem,env(safe-area-inset-left))] md:pr-[max(3.25rem,env(safe-area-inset-right))] lg:pl-[max(4rem,env(safe-area-inset-left))] lg:pr-[max(4rem,env(safe-area-inset-right))] xl:pl-[max(5rem,env(safe-area-inset-left))] xl:pr-[max(5rem,env(safe-area-inset-right))]";

export const landingContentMax = "max-w-[min(100%,85rem)]";

export const landingInnerMax =
  `mx-auto w-full min-w-0 ${landingContentMax} ${landingGutterX}`;
