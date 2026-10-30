export interface EmergencyHelpline {
  number: string;
  label: string;
  description: string;
}

export interface CategoryConfig {
  id: "emergency" | "health" | "agriculture" | "education";
  label: string;
  shortDescription: string;
  iconName: "ShieldAlert" | "HeartPulse" | "Sprout" | "BookOpen";
  accentColor: string; // Tailwind color token or hex
  theme: {
    badge: string;
    border: string;
    text: string;
    bg: string;
    bandBg: string;
  };
}

export const siteConfig = {
  name: "RahatNet",
  tagline: "Disaster-Ready Offline Intranet in a Box",
  description:
    "Preloaded emergency, health, agricultural, and educational knowledge delivered locally with zero runtime internet dependency during crises.",
  emergencyNotice:
    "Voice and SMS calls require connection to a mobile cellular network, which this local Wi-Fi unit cannot provide.",
  emergencyHelplines: [
    {
      number: "112",
      label: "National Emergency",
      description: "All-in-one emergency response (Police, Fire, Ambulance)",
    },
    {
      number: "108",
      label: "Disaster Medical & Ambulance",
      description: "Emergency medical transit and first response",
    },
    {
      number: "101",
      label: "Fire & Rescue Services",
      description: "Structural collapse, flood extraction, and fire control",
    },
    {
      number: "1078",
      label: "NDMA Disaster Helpline",
      description: "National Disaster Management Authority control room",
    },
  ] satisfies EmergencyHelpline[],
  categories: [
    {
      id: "emergency",
      label: "Emergency Safety",
      shortDescription:
        "Immediate survival protocols, flood, earthquake, and critical first-aid guidelines.",
      iconName: "ShieldAlert",
      accentColor: "#dc2626", // Red reserved strictly for emergency
      theme: {
        badge: "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 border-red-200 dark:border-red-900/60",
        border: "border-red-300 dark:border-red-900",
        text: "text-red-700 dark:text-red-400",
        bg: "bg-red-50/50 dark:bg-red-950/20",
        bandBg: "bg-red-600 text-white",
      },
    },
    {
      id: "health",
      label: "Health & Hygiene",
      shortDescription:
        "Water purification, ORS preparation, heat stroke prevention, and infection control.",
      iconName: "HeartPulse",
      accentColor: "#0d9488", // Teal
      theme: {
        badge: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-900/60",
        border: "border-teal-300 dark:border-teal-900",
        text: "text-teal-700 dark:text-teal-400",
        bg: "bg-teal-50/50 dark:bg-teal-950/20",
        bandBg: "bg-teal-700 text-white",
      },
    },
    {
      id: "agriculture",
      label: "Agriculture & Livestock",
      shortDescription:
        "Crop preservation, seed security, animal safety, and post-flood soil recovery.",
      iconName: "Sprout",
      accentColor: "#16a34a", // Emerald
      theme: {
        badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60",
        border: "border-emerald-300 dark:border-emerald-900",
        text: "text-emerald-700 dark:text-emerald-400",
        bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
        bandBg: "bg-emerald-700 text-white",
      },
    },
    {
      id: "education",
      label: "Education & Preparedness",
      shortDescription:
        "Community learning continuity, family kits, and child-safe disaster education.",
      iconName: "BookOpen",
      accentColor: "#2563eb", // Blue
      theme: {
        badge: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-900/60",
        border: "border-blue-300 dark:border-blue-900",
        text: "text-blue-700 dark:text-blue-400",
        bg: "bg-blue-50/50 dark:bg-blue-950/20",
        bandBg: "bg-blue-700 text-white",
      },
    },
  ] satisfies CategoryConfig[],
};

export type CategoryId = (typeof siteConfig.categories)[number]["id"];

export const categoryIds: [CategoryId, ...CategoryId[]] = [
  "emergency",
  "health",
  "agriculture",
  "education",
];
