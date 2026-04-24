import type { AboutPageData } from "./AboutPageView";

/**
 * Example content for a new project. Replace all copy and hrefs, and point
 * `heroImage.src` at an image in your `public/images/` directory.
 * Default `1.png` is a stand-in; swap for your own asset.
 */
export const aboutPageExampleData: AboutPageData = {
  kicker: "A short line about your brand or purpose.",
  h1: "About Your Organization",
  sub: "A supporting sentence. Edit in aboutPageExampleData (or your own module).",
  heroImage: {
    src: "/images/1.png",
    alt: "Describe the hero image for screen readers (required for accessibility).",
  },
  lead: [
    "First lead paragraph. Explain who you are and what the page visitor should take away.",
    "Second lead paragraph. Invite visitors to explore programs, products, or contact you.",
  ],
  mission: {
    title: "Our mission",
    paragraphs: [
      "State your mission in plain language. This text is a placeholder for your org.",
      "Add a second paragraph as needed, or keep this as a short disclaimer about how details may change.",
    ],
  },
  whatWeDo: {
    title: "What we do",
    items: [
      {
        key: "a",
        label: "Program A —",
        segments: [
          " Summary text. Learn more: ",
          { type: "link", href: "/programs", children: "programs" },
          ".",
        ],
      },
      {
        key: "b",
        label: "Program B —",
        segments: [
          " More detail with an inline ",
          { type: "link", href: "/contact", children: "link" },
          " to your routes.",
        ],
      },
    ],
  },
  values: {
    title: "What we stand for",
    pillars: [
      { key: "1", title: "Value one", body: "Short description." },
      { key: "2", title: "Value two", body: "Short description." },
      { key: "3", title: "Value three", body: "Short description." },
    ],
  },
  leadershipNote:
    "Add an optional note about leadership, press, or contact—replace with real information when available.",
  cta: {
    title: "Get started",
    sub: "Use clear calls to action that match routes in your app.",
    actions: [
      { key: "1", href: "/contact", label: "Contact" },
      { key: "2", href: "/", label: "Home" },
    ],
  },
};
