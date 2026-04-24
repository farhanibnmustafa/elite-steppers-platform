import type { AboutPageData } from "./AboutPageView";

/** Elite Level Steppers Hall of Fame — same content as `src/components/marketing/aboutPageDefaultData.ts` in the main app. */
export const aboutPageDefaultData: AboutPageData = {
  kicker: "Honoring the culture and the people who move it forward.",
  h1: "About Elite Level Steppers Hall of Fame",
  sub: "A home for the stories, voices, and legacy of stepping at its highest level—built with the community, for the community.",
  heroImage: {
    src: "/images/about-hero-cinematic.png",
    alt: "A performer in formal black suit on stage in warm spotlight, with deep red theatre curtains, representing passion and leadership in stepping culture.",
  },
  lead: [
    "We celebrate the people who raise the art form: performers, organizers, instructors, and culture-bearers whose impact lasts far beyond a single show night. The Hall of Fame exists to recognize that work with care, consistency, and respect.",
    "Whether you are new to the scene or a veteran of the floor, you belong in the story we are writing together. Explore how to participate, nominate someone who inspires you, and stay connected to what is next.",
  ],
  mission: {
    title: "Our mission",
    paragraphs: [
      "The Elite Level Steppers Hall of Fame is dedicated to preserving and elevating stepping culture. We document excellence, make space for new voices, and help audiences discover the history and the future of the form—on stage, online, and in community spaces.",
      "The organization's specific programs, timelines, and leadership may change as we grow; this page will stay a clear reference for our purpose and the ways to engage with us.",
    ],
  },
  whatWeDo: {
    title: "What we do",
    items: [
      {
        key: "hof",
        label: "Hall of Fame —",
        segments: [
          " We honor members and cohorts; explore ",
          { type: "link", href: "/hall-of-fame", children: "the Hall of Fame" },
          ".",
        ],
      },
      {
        key: "nom",
        label: "Nominations —",
        segments: [
          " The community can submit candidates for consideration; learn more and nominate through ",
          {
            type: "link",
            href: "/nominations",
            children: "the nominations process",
          },
          ".",
        ],
      },
      {
        key: "events",
        label: "Events & programs —",
        segments: [
          " We gather the community and spotlight performances and stories. See what is on the calendar: ",
          { type: "link", href: "/events", children: "events" },
          ".",
        ],
      },
      {
        key: "shop",
        label: "Shop —",
        segments: [
          " Official merch and gear support the work and the culture. Browse the store: ",
          { type: "link", href: "/shop", children: "shop" },
          ".",
        ],
      },
      {
        key: "mem",
        label: "Membership & support —",
        segments: [
          " Help sustain the work through ",
          { type: "link", href: "/membership", children: "membership" },
          " and ",
          { type: "link", href: "/donate", children: "donations" },
          ".",
        ],
      },
    ],
  },
  values: {
    title: "What we stand for",
    pillars: [
      {
        key: "c",
        title: "Community",
        body: "The floor is shared. We show up for each other and build long-term connection—not just a moment on stage.",
      },
      {
        key: "cr",
        title: "Craft",
        body: "Stepping is discipline: precision, creativity, and respect for the tradition. We recognize those who keep the standard high.",
      },
      {
        key: "l",
        title: "Legacy",
        body: "Today's work becomes tomorrow's story. The Hall of Fame is one way to pass the culture forward in public view.",
      },
    ],
  },
  leadershipNote:
    "Leadership, partnerships, and media inquiries: details will be published when finalized; use the contact path provided on the site and in your agreements for official questions.",
  cta: {
    title: "Get involved",
    sub: "Take the next step: nominate, explore honorees, or stay in the loop.",
    actions: [
      { key: "n", href: "/nominations", label: "Nominate a stepper" },
      { key: "h", href: "/hall-of-fame", label: "Hall of Fame" },
      { key: "e", href: "/events", label: "Events" },
      { key: "d", href: "/donate", label: "Donate" },
      { key: "nl", href: "/#newsletter-heading", label: "Newsletter" },
    ],
  },
};
