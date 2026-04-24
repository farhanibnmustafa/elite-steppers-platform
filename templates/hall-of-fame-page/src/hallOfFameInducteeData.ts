/**
 * Placeholder data for the Hall of Fame directory. Replace with CMS/API when ready.
 */
export type HallOfFameInducteeCategory =
  | "all"
  | "pioneer"
  | "dj"
  | "instructor"
  | "organizer"
  | "promoter";

export type HallOfFameInductee = {
  id: string;
  name: string;
  role: string;
  category: HallOfFameInducteeCategory;
  /** Shown in gallery as “Pioneer | Inducted 2012” when using inline layout */
  meta1: string;
  meta2: string;
  /** For “Search by year” and related filters */
  inductionYear: number;
  legacyInductee?: boolean;
  imageSrc?: string | null;
};

export const HALL_OF_FAME_PILL_CONFIG: {
  id: HallOfFameInducteeCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "pioneer", label: "Pioneers" },
  { id: "dj", label: "DJ" },
  { id: "instructor", label: "Instructors" },
  { id: "organizer", label: "Organizers" },
  { id: "promoter", label: "Promoters" },
];

const demo: HallOfFameInductee[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    role: "Pioneer",
    category: "pioneer",
    meta1: "Inducted 2010",
    meta2: "Chicago, IL",
    inductionYear: 2010,
    legacyInductee: true,
    imageSrc: "/images/13.png",
  },
  {
    id: "2",
    name: "Alex Rivera",
    role: "DJ",
    category: "dj",
    meta1: "Inducted 2012",
    meta2: "Detroit, MI",
    inductionYear: 2012,
    imageSrc: "/images/14.png",
  },
  {
    id: "3",
    name: "Morgan Lee",
    role: "Instructor",
    category: "instructor",
    meta1: "Inducted 2010",
    meta2: "Atlanta, GA",
    inductionYear: 2010,
    legacyInductee: true,
    imageSrc: "/images/15.png",
  },
  {
    id: "4",
    name: "Taylor Brooks",
    role: "Organizer",
    category: "organizer",
    meta1: "Inducted 2011",
    meta2: "Memphis, TN",
    inductionYear: 2011,
  },
  {
    id: "5",
    name: "Jordan Hayes",
    role: "Promoter",
    category: "promoter",
    meta1: "Inducted 2009",
    meta2: "Dallas, TX",
    inductionYear: 2009,
  },
  {
    id: "6",
    name: "Casey Morales",
    role: "Pioneer",
    category: "pioneer",
    meta1: "Inducted 2012",
    meta2: "Houston, TX",
    inductionYear: 2012,
  },
  {
    id: "7",
    name: "Riley Chen",
    role: "DJ",
    category: "dj",
    meta1: "Inducted 2008",
    meta2: "Oakland, CA",
    inductionYear: 2008,
  },
  {
    id: "8",
    name: "Sam Winters",
    role: "Instructor",
    category: "instructor",
    meta1: "Inducted 2011",
    meta2: "Baltimore, MD",
    inductionYear: 2011,
  },
  {
    id: "9",
    name: "Devon Smith",
    role: "Pioneer",
    category: "pioneer",
    meta1: "Inducted 2010",
    meta2: "Cleveland, OH",
    inductionYear: 2010,
    legacyInductee: true,
    imageSrc: "/images/12.png",
  },
  {
    id: "10",
    name: "Avery Fox",
    role: "Organizer",
    category: "organizer",
    meta1: "Inducted 2008",
    meta2: "St. Louis, MO",
    inductionYear: 2008,
  },
  {
    id: "11",
    name: "Quinn Park",
    role: "Promoter",
    category: "promoter",
    meta1: "Inducted 2010",
    meta2: "Miami, FL",
    inductionYear: 2010,
    imageSrc: "/images/11.png",
  },
  {
    id: "12",
    name: "Riley West",
    role: "DJ",
    category: "dj",
    meta1: "Inducted 2011",
    meta2: "Philadelphia, PA",
    inductionYear: 2011,
  },
  {
    id: "13",
    name: "Jamal Reed",
    role: "Instructor",
    category: "instructor",
    meta1: "Inducted 2012",
    meta2: "Nashville, TN",
    inductionYear: 2012,
  },
  {
    id: "14",
    name: "Chris Tate",
    role: "Pioneer",
    category: "pioneer",
    meta1: "Inducted 2009",
    meta2: "Kansas City, MO",
    inductionYear: 2009,
  },
  {
    id: "15",
    name: "Pat Kim",
    role: "Organizer",
    category: "organizer",
    meta1: "Inducted 2012",
    meta2: "Seattle, WA",
    inductionYear: 2012,
  },
  {
    id: "16",
    name: "Dana Cruz",
    role: "Promoter",
    category: "promoter",
    meta1: "Inducted 2010",
    meta2: "Phoenix, AZ",
    inductionYear: 2010,
  },
  {
    id: "17",
    name: "Renee Voss",
    role: "Instructor",
    category: "instructor",
    meta1: "Inducted 2011",
    meta2: "Charlotte, NC",
    inductionYear: 2011,
  },
  {
    id: "18",
    name: "Blake O’Neil",
    role: "Pioneer",
    category: "pioneer",
    meta1: "Inducted 2009",
    meta2: "Milwaukee, WI",
    inductionYear: 2009,
  },
  {
    id: "19",
    name: "Monica Velez",
    role: "DJ",
    category: "dj",
    meta1: "Inducted 2009",
    meta2: "Tampa, FL",
    inductionYear: 2009,
  },
  {
    id: "20",
    name: "Evan Collins",
    role: "Instructor",
    category: "instructor",
    meta1: "Inducted 2008",
    meta2: "Minneapolis, MN",
    inductionYear: 2008,
  },
  {
    id: "21",
    name: "Priya Nair",
    role: "Organizer",
    category: "organizer",
    meta1: "Inducted 2008",
    meta2: "Las Vegas, NV",
    inductionYear: 2008,
  },
];

export const HALL_OF_FAME_DEMO_INDUCTEES: HallOfFameInductee[] = demo;

export function formatInducteeSubtitle(row: HallOfFameInductee) {
  return `${row.role} | ${row.meta1}`;
}

/** Optional style tags for “Search by year” cards (visual only; replace with CMS fields later). */
const SEARCH_BY_YEAR_TAGS: Partial<Record<string, readonly [string, string]>> = {
  "1": ["Soul & RnB", "Live mixes"],
  "2": ["Club & battle", "Scratch & blend"],
  "3": ["Studio focus", "Master class"],
  "4": ["Citywide", "Community"],
  "5": ["Tour circuits", "Spotlight"],
  "6": ["Founding era", "Trailblazer"],
  "7": ["Vinyl culture", "Battle sets"],
  "8": ["Choreography", "Youth pipeline"],
  "9": ["Heritage sound", "Classic sets"],
  "10": ["Block events", "Regional"],
  "11": ["Sunshine scene", "Showcase"],
  "12": ["Sound design", "Live PA"],
  "13": ["Curriculum", "Certified"],
  "14": ["Cross‑regional", "Bridge building"],
  "15": ["Northwest scene", "Fest stages"],
  "16": ["Desert circuit", "Night events"],
  "17": ["Carolinas", "House party"],
  "18": ["Midwest swing", "Heritage"],
  "19": ["Gulf coast", "Club residency"],
  "20": ["Twin Cities", "Youth league"],
  "21": ["Vegas scene", "Residency sets"],
};

export function getSearchByYearCardTags(
  row: HallOfFameInductee
): readonly [string, string] {
  const pair = SEARCH_BY_YEAR_TAGS[row.id];
  if (pair) return pair;
  return [row.role, row.meta2];
}
