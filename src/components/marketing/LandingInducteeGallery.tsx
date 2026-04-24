import { InducteeGallerySection } from "@/components/marketing/InducteeGallerySection";

/** Re-export for legacy imports (`HallOfFame` and templates expected this from the landing entry). */
export { InducteeGalleryPlaceholderGrid } from "@/components/marketing/InducteeGalleryCard";

export function LandingInducteeGallery() {
  return (
    <InducteeGallerySection
      headingId="inductee-gallery-heading"
      showFullHallCta
    />
  );
}
