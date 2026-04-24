/**
 * Single place to customize the Terms & Conditions for a new project.
 * Legal review is required before production; complete jurisdiction placeholders in termsContent.
 */
export const termsPageConfig = {
  /** Legal name in the opening paragraph (e.g. "Your Company, Inc."). */
  legalEntityName: "Your Organization, Inc.",
  /** Name shown in the Contact section (e.g. "Your Organization"). */
  displayName: "Your Organization",
  lastUpdated: "April 24, 2026",
  contactEmail: "legal@example.com",
  /**
   * Completes: "in connection with __ (collectively, the Services)"
   * Example: "the Hall of Fame, nominations, events, membership information, and related offerings"
   */
  servicesScope:
    "nominations, events, membership information, and related offerings",
  /**
   * Completes: "The Services are provided to share information about __, to facilitate..."
   */
  serviceInformationFocus:
    "our organization, its public programs, and any offerings described on the site",
  /** Completes: "... to facilitate __, and to support related programs...". */
  serviceFacilitate:
    "nominations, form submissions, and other user materials we allow through the site",
  /**
   * Used in the nominations / submissions section where the text refers to
   * "the Hall of Fame" in the production site. Use e.g. "our programs" or
   * "the Hall of Fame" for a similar organization.
   */
  primaryProgram: "our programs",
  metadata: {
    title: "Terms & Conditions | Your Site",
    description:
      "Terms and Conditions for using this website, including user submissions, communications, and related services.",
  },
} as const;

export type TermsPageConfig = typeof termsPageConfig;
