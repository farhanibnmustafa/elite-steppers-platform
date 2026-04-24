/**
 * Horizontal inset for landing (safe-area aware). Shared by header + section
 * inner wrappers; tuned so grids use a bit more width without hugging the edge.
 */
export const landingGutterX =
  "pl-[max(2.75rem,env(safe-area-inset-left))] pr-[max(2.75rem,env(safe-area-inset-right))] min-[400px]:pl-[max(3.25rem,env(safe-area-inset-left))] min-[400px]:pr-[max(3.25rem,env(safe-area-inset-right))] sm:pl-[max(3.75rem,env(safe-area-inset-left))] sm:pr-[max(3.75rem,env(safe-area-inset-right))] md:pl-[max(5rem,env(safe-area-inset-left))] md:pr-[max(5rem,env(safe-area-inset-right))] lg:pl-[max(6.25rem,env(safe-area-inset-left))] lg:pr-[max(6.25rem,env(safe-area-inset-right))] xl:pl-[max(8.25rem,env(safe-area-inset-left))] xl:pr-[max(8.25rem,env(safe-area-inset-right))] 2xl:pl-[max(10rem,env(safe-area-inset-left))] 2xl:pr-[max(10rem,env(safe-area-inset-right))]";

/** Slightly wider than max-w-7xl (80rem); use on header/hero for alignment with sections */
export const landingContentMax = "max-w-[min(100%,85rem)]";

export const landingInnerMax =
  `mx-auto w-full min-w-0 ${landingContentMax} ${landingGutterX}`;
