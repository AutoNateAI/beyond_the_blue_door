export const screens = {
  home: {
    source: "beyond_the_blue_door_ascension_of_self_conversion_funnel",
    title: "Beyond the Blue Door",
  },
  "ascension-model": {
    source: "the_ascension_of_self_operating_framework",
    title: "The Ascension of Self",
  },
  "financial-growth": {
    source: "financial_growth_economic_mobility_ladder",
    title: "Financial Growth",
  },
  "impact-and-intelligence": {
    source: "institutional_funders_autonateai_intelligence_ledger",
    title: "Impact & Intelligence",
  },
} as const;

export const staticPages = [
  "ascension-model",
  "financial-growth",
  "impact-and-intelligence",
] as const;

export type Screen = keyof typeof screens;
