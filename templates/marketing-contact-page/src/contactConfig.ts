/**
 * Use with `metadata` in your App Router `page.tsx` (see `examples/next-app-contact-page.tsx`).
 * Page copy and layout live in the components — kept in lockstep with `src/components/marketing/`.
 */
export const contactPageConfig = {
  metadata: {
    title: "Contact us | Elite Level Steppers",
    description:
      "Reach the Elite Level Steppers Hall of Fame: questions about nominations, events, membership, and staying connected to stepping culture.",
  },
} as const;
