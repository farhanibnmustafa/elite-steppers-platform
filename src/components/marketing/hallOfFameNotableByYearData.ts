/**
 * Notable events copy per year (Search by year). Replace with CMS when ready.
 */
export const HALL_OF_FAME_SEARCH_YEARS = [
  2012, 2011, 2010, 2009, 2008,
] as const;

export type HallOfFameSearchYear = (typeof HALL_OF_FAME_SEARCH_YEARS)[number];

export type HallOfFameNotableEvent = {
  /** Single emoji for the list item */
  icon: string;
  title: string;
  description: string;
};

export const HALL_OF_FAME_NOTABLE_BY_YEAR: Record<
  HallOfFameSearchYear,
  readonly HallOfFameNotableEvent[]
> = {
  2012: [
    {
      icon: "🏆",
      title: "Legacy circle debut",
      description:
        "The national step showcase added a dedicated legacy circle honoring founding instructors and early architects of the form.",
    },
    {
      icon: "🎵",
      title: "Largest inter-city battle",
      description:
        "The Midwest region hosted a record twelve-crew inter-city battle with new judging standards adopted widely afterward.",
    },
    {
      icon: "👗",
      title: "Costume hall archive",
      description:
        "A traveling exhibit cataloged iconic costumes and footwear from championship seasons for the Hall archive.",
    },
  ],
  2011: [
    {
      icon: "🏆",
      title: "Youth mentorship pairings",
      description:
        "The south regional summit launched structured mentorship, pairing master instructors with rising step leaders.",
    },
    {
      icon: "🎵",
      title: "Touring workshop series",
      description:
        "A new three-metro tour brought master classes and arrangement clinics to schools and community arts centers.",
    },
    {
      icon: "👗",
      title: "Style council formed",
      description:
        "Troupe costumers collaborated on a shared look book that influenced regional competitions all season.",
    },
  ],
  2010: [
    {
      icon: "🏆",
      title: "DJ + A/V category",
      description:
        "The Elite Stepper Awards expanded the DJ category to include audio‑visual innovation and live remix craft.",
    },
    {
      icon: "🎵",
      title: "Record charity gala",
      description:
        "A Chicago–Detroit charity gala set a new fundraising bar for youth arts scholarships across both cities.",
    },
    {
      icon: "👗",
      title: "Runway step showcase",
      description:
        "A fusion runway and step showcase brought fashion houses and community crews to the same stage for the first time.",
    },
  ],
  2009: [
    {
      icon: "🏆",
      title: "Instructor certification",
      description:
        "The inaugural instructors’ roundtable set nationwide standards for class certification and studio partnerships.",
    },
    {
      icon: "🎵",
      title: "Documentary feature",
      description:
        "A documentary on club and ballroom culture included extended interviews with two Hall inductees and rare footage.",
    },
    {
      icon: "👗",
      title: "Regional look finals",
      description:
        "The first “best dressed troupe” regional finals put choreography and wardrobe on equal scoring weight.",
    },
  ],
  2008: [
    {
      icon: "🏆",
      title: "First induction ceremony",
      description:
        "The inaugural Hall of Fame ceremony recognized pathbreaking pioneers who defined elite stepping for a generation.",
    },
    {
      icon: "🎵",
      title: "Coastal coalition",
      description:
        "East and gulf cities formed a coalition to preserve rare recordings, flyers, and oral histories in one archive.",
    },
    {
      icon: "👗",
      title: "Uniform heritage fund",
      description:
        "A small grant program helped historic troupes repair and restore competition uniforms and jackets.",
    },
  ],
};

export const HALL_OF_FAME_DEFAULT_SEARCH_YEAR: HallOfFameSearchYear = 2010;
