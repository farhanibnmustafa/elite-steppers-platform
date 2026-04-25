import { InducteeGallerySection } from "./InducteeGallerySection";

/** Re-export for legacy imports (`HallOfFame` and templates expected this from the landing entry). */
export { InducteeGalleryPlaceholderGrid } from "./InducteeGalleryCard";

export function LandingInducteeGallery() {
  return (
    <InducteeGallerySection
      headingId="inductee-gallery-heading"
      showFullHallCta
    />
  );
}
