import { InducteeGallerySection } from "@/components/marketing/InducteeGallerySection";

/**
 * Same placeholder grid as the home page — no profile photos or per-inductee lines.
 */
export function HallOfFameInducteeGallery() {
  return (
    <InducteeGallerySection
      headingId="hall-of-fame-inductee-gallery-heading"
      showFullHallCta={false}
    />
  );
}
