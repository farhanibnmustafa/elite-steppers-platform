import { WatermarkHero } from "@/components/marketing/WatermarkHero";
import type { AboutPageData } from "@/components/marketing/AboutPageView";

type AboutHeroProps = {
  data: Pick<AboutPageData, "hero">;
};

/**
 * About page hero — same visual system as the contact page (`WatermarkHero`).
 */
export function AboutHero({ data }: AboutHeroProps) {
  return (
    <WatermarkHero
      headingId="about-hero-heading"
      watermarkWord="About"
      badge={data.hero.badge}
      title={data.hero.title}
      description={<p className="m-0">{data.hero.intro}</p>}
    />
  );
}
