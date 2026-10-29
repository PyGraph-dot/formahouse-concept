export type Property = {
  slug: string;
  name: string;
  collection: string;
  location: string;
  area: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  type: "Townhouse" | "Apartment" | "Detached home";
  status: "Ready to move in" | "In progress" | "Coming soon";
  size: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  paymentNote: string;
  completion: string;
  code: string;
};

const image = (id: string, width = 1500) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=86`;

export const properties: Property[] = [
  {
    slug: "the-courtyard",
    name: "The Courtyard",
    collection: "FORMA COLLECTION / 01",
    location: "Ogudu, Lagos",
    area: "Ogudu",
    price: 98500000,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    type: "Townhouse",
    status: "In progress",
    size: "178 m²",
    summary: "A little more breathing room, with the everyday details already considered.",
    description: "A three-bedroom townhouse concept organised around light, useful storage and a private outdoor pocket. The layout gives shared moments their own space without making everyday life feel over-designed.",
    image: image("photo-1600585154340-be6161a56a0c", 1800),
    gallery: [
      image("photo-1600585154340-be6161a56a0c", 1800),
      image("photo-1600607687939-ce8a6c25118c", 1200),
      image("photo-1600566753086-00f18fb6b3ea", 1200),
    ],
    features: ["Private outdoor space", "En-suite main bedroom", "Cross-ventilated living area", "Fitted kitchen", "Two parking spaces", "Controlled estate access"],
    paymentNote: "Illustrative staged-payment option; final terms would be confirmed in a written offer.",
    completion: "Target completion: Q4 2027",
    code: "FH-OG-03",
  },
  {
    slug: "olive-row",
    name: "Olive Row",
    collection: "FORMA COLLECTION / 02",
    location: "Ikate, Lekki",
    area: "Lekki",
    price: 142000000,
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    type: "Townhouse",
    status: "Coming soon",
    size: "224 m²",
    summary: "A calmer kind of city living, close to the things that keep a week moving.",
    description: "Olive Row explores a more open arrangement for growing households: generous shared areas downstairs, quieter private rooms above, and planted edges that soften the pace of the street.",
    image: image("photo-1600607687920-4e2a09cf159d", 1800),
    gallery: [
      image("photo-1600607687920-4e2a09cf159d", 1800),
      image("photo-1600607687644-c7171b42498f", 1200),
      image("photo-1600047509807-ba8f99d2cdde", 1200),
    ],
    features: ["Four en-suite bedrooms", "Family lounge", "Dedicated laundry zone", "Kitchen island provision", "Private terrace", "Estate security concept"],
    paymentNote: "Illustrative expression-of-interest stage. Availability and pricing are sample concept data.",
    completion: "Indicative launch: Q1 2027",
    code: "FH-IK-04",
  },
  {
    slug: "the-lightwell",
    name: "The Lightwell",
    collection: "FORMA COLLECTION / 03",
    location: "Ikeja GRA, Lagos",
    area: "Ikeja",
    price: 68500000,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    type: "Apartment",
    status: "Ready to move in",
    size: "112 m²",
    summary: "A well-planned two-bedroom apartment that puts daylight to work.",
    description: "The Lightwell is an apartment concept for people who want thoughtful planning over excess space. A central living area connects the kitchen and balcony, while bedrooms sit away from the main entrance for more privacy.",
    image: image("photo-1600566753190-17f0baa2a6c3", 1800),
    gallery: [
      image("photo-1600566753190-17f0baa2a6c3", 1800),
      image("photo-1600607687939-ce8a6c25118c", 1200),
      image("photo-1600566753086-00f18fb6b3ea", 1200),
    ],
    features: ["Two bedrooms", "Balcony", "Daylit living and dining", "Built-in wardrobes", "One parking space", "Shared landscaped courtyard"],
    paymentNote: "Illustrative outright price for the portfolio concept; verify final terms before any real purchase.",
    completion: "Sample status: ready to move in",
    code: "FH-IG-02",
  },
];

export const propertyBySlug = (slug: string) => properties.find((property) => property.slug === slug);

export const formatNaira = (value: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);

export const compactNaira = (value: number) => {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return `₦${Number.isInteger(millions) ? millions : millions.toFixed(1)}m`;
  }
  return formatNaira(value);
};
