/**
 * Edit this file first when porting: routes, copy, amounts, footer image.
 */
export const donatePageConfig = {
  metadata: {
    title: "Donate | Elite Level Steppers",
    description:
      "Support programs, archives, and events that preserve stepping culture.",
  },

  hero: {
    title: "Support the Movement",
    body: "Your donation helps preserve stepping's legacy, honor cultural icons, and inspire the next generation through programs, archives, and events.",
    railLinks: [
      {
        href: "/hall-of-fame",
        label: "Back to Hall of Fame",
        leadingArrow: true,
      },
      { href: "/nominations", label: "Nominate a Stepper", leadingArrow: false },
    ] as const,
    primaryCta: { href: "#donation-form", label: "Donate Now" },
    secondaryCta: { href: "#your-impact", label: "See Your Impact" },
  },

  giftForm: {
    heading: "Choose Your Gift",
    subtext:
      "Select an amount and how often you'd like to give. Every gift fuels programs, archives, and celebrations that keep stepping alive.",
    donationTypeLabel: "Donation Type",
    amountLabel: "Amount",
    otherAmountLabel: "Other amount (USD)",
    otherAmountPlaceholder: "Enter custom amount",
    fullNameLabel: "Full name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    paymentNote:
      "Payment Methods: Stripe / PayPal / Apple Pay (add your gateway here). Recurring donations will bill monthly.",
    submitLabel: "Donate now",
    legalNote:
      "By donating you agree to our terms. Contact us if you need a receipt or have questions about your gift.",
    thankYouPrefix:
      "Thank you — we'll connect a secure checkout here. Your intended gift:",
    customAmountWord: "custom amount",
    monthlyWord: "monthly ",
    amountPresets: [25, 50, 100, 250, 500] as const,
  },

  impact: {
    heading: "Your Impact",
    tiers: [
      { amount: "$25", text: "Supplies for youth workshops and clinics." },
      { amount: "$50", text: "Digitizes and preserves Hall of Fame archives." },
      { amount: "$100", text: "Funds travel stipends for student performers." },
      { amount: "$250+", text: "Sponsors scholarships and community programs." },
    ] as const,
    notes: [
      {
        label: "Secure:",
        body: "All payments are processed via encrypted gateways.",
      },
      {
        label: "Transparent:",
        body: "Annual impact report shared with donors.",
      },
      {
        label: "Tax Info:",
        body: "Add your nonprofit/tax-deductible statement here.",
      },
    ] as const,
  },

  otherWays: {
    heading: "Other Ways to Give",
    subtext:
      "Partner with us through sponsorships, planned gifts, or volunteering at events and programs.",
    links: [
      { href: "/about", label: "Corporate partnerships" },
      { href: "/membership", label: "Legacy & planned giving" },
      { href: "/events", label: "Volunteer at events" },
    ] as const,
  },

  newsletter: {
    heading: "Legends Move Fast. Don't Miss a Beat.",
    subtext:
      "Subscribe now and be the first to hear about inductees, events, and exclusive merch drops.",
    emailPlaceholder: "Enter your email",
    submitAriaLabel: "Subscribe to newsletter",
    successMessage: "Thanks — you're on the list.",
  },

  footer: {
    /** Set to null to hide the large image band and keep only the gold legal bar. */
    heroImage: {
      src: "/images/11.png",
      alt: "Community photo for the footer",
      width: 2460,
      height: 717,
      zoom: 1.25,
    },
    termsHref: "/terms",
    termsLabel: "Terms & Conditions",
    /** Appended with current year in the component, e.g. © MyOrg2026 */
    copyrightPrefix: "© EliteLevelSteppersHallOfFame",
  },
} as const;
