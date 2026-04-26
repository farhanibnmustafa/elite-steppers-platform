import { WatermarkHero } from "./WatermarkHero";

/**
 * Contact page hero — same treatment as the shared watermark hero.
 */
export function ContactHero() {
  return (
    <WatermarkHero
      headingId="contact-hero-heading"
      watermarkWord="Contact"
      badge="Contact"
      title="Get in touch"
      description={
        <p className="m-0">
          Have questions about nominations, the Hall of Fame, events, or how to support Elite
          Level Steppers? We are here to help you stay connected to the community and the
          culture of stepping.
        </p>
      }
    />
  );
}
