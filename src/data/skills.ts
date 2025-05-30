// src\data\skills.ts

type Skill = {
  label: string;
  icon?: string;
};

export const languages: Skill[] = [
  { label: "TypeScript", icon: "pi pi-code" },
  { label: "PHP", icon: "pi pi-code" },
  { label: "Python", icon: "pi pi-code" },
  { label: "Java", icon: "pi pi-code" },
];

export const DXTools: string[] = [
  "Git / GitHub",
  "Docker",
  "Linters",
  "Code formatters",
];

export const frontFrameworks: Skill[] = [
  { label: "React", icon: "pi pi-code" },
  { label: "Next.js", icon: "pi pi-code" },
  { label: "Angular", icon: "pi pi-code" },
  { label: "Vue", icon: "pi pi-code" },
];

export const backFrameworks: Skill[] = [
  { label: "Express", icon: "pi pi-code" },
  { label: "Symfony", icon: "pi pi-code" },
  { label: "Django", icon: "pi pi-code" },
  { label: "NestJS", icon: "pi pi-code" },
  { label: "Spring Boot", icon: "pi pi-code" },
];

export const databases: Skill[] = [
  { label: "MySQL", icon: "pi pi-database" },
  { label: "PostgreSQL", icon: "pi pi-database" },
];

export const NMTechStack: Skill[] = [
  { label: "Next.js", icon: "pi pi-code" },
  { label: "MySQL", icon: "pi pi-database" },
];

export const REMTechStack: Skill[] = [
  { label: "React", icon: "pi pi-code" },
  { label: "Express", icon: "pi pi-code" },
  { label: "MySQL", icon: "pi pi-database" },
];

export const VSMTechStack: Skill[] = [
  { label: "Vue", icon: "pi pi-code" },
  { label: "Symfony", icon: "pi pi-code" },
  { label: "MySQL", icon: "pi pi-database" },
];

export const VDPTechStack: Skill[] = [
  { label: "Vue", icon: "pi pi-code" },
  { label: "Django", icon: "pi pi-code" },
  { label: "PostgreSQL", icon: "pi pi-database" },
];

export const ASMTechStack: Skill[] = [
  { label: "Angular", icon: "pi pi-code" },
  { label: "Spring Boot", icon: "pi pi-code" },
  { label: "MySQL", icon: "pi pi-database" },
];

export const softSkills: string[] = [
  "Travail en équipe",
  "Autonomie",
  "Adaptabilité",
  "Rigueur",
  "Agile/SCRUM",
];

export const uiFrameworks: Skill[] = [
  { label: "PrimeReact" },
  { label: "PrimeVue" },
  { label: "PrimeNG" },
];
