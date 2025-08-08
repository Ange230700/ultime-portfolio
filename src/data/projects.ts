// src/data/projects.ts
import type { StaticImageData } from "next/image";
import dafScreenshot from "../../public/images/DAF.png";
import quizScreenshot from "../../public/images/quiz.png";
import morseScreenshot from "../../public/images/morseTranslator.png";
import streamiaScreenshot from "../../public/images/streamia.png";
import mastermindScreenshot from "../../public/images/mastermind.png";
import motusScreenshot from "../../public/images/motus.png";
import voidnullScreenshot from "../../public/images/voidnull.png";
import abyssScreenshot from "../../public/images/Abyss.png";
import vacuumScreenshot from "../../public/images/Vacuum.png";
import nihilScreenshot from "../../public/images/nihil.png";
import shakaScreenshot from "../../public/images/shaka.png";
import chefitupScreenshot from "../../public/images/chefitup.png";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 4,
    title: "Streamia",
    subtitle: "Plateforme de streaming vidéo",
    description: "La meilleure expérience de streaming de vidéos.",
    image: streamiaScreenshot,
    link: "https://ultime-streamia.vercel.app/",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "PrimeReact",
      "TailwindCSS",
    ],
  },
  {
    id: 8,
    title: "Abyss",
    subtitle: "Plateforme de vente de meubles",
    description: "La meilleure expérience de vente de meubles.",
    image: abyssScreenshot,
    link: "https://abyss-front-two.vercel.app/",
    technologies: [
      "TypeScript",
      "Angular",
      "PrimeNg",
      "TailwindCSS",
      "NestJs",
      "Prisma",
      "MySQL",
    ],
  },
  {
    id: 9,
    title: "Vacuum",
    subtitle: "Back office",
    description: "CRUD pour la gestion des collectes.",
    image: vacuumScreenshot,
    link: "https://cleared-front.vercel.app",
    technologies: [
      "TypeScript",
      "Vite",
      "Vue",
      "PrimeVue",
      "TailwindCSS",
      "Express",
      "Prisma",
      "MySQL",
    ],
  },
  {
    id: 10,
    title: "Nihil",
    subtitle: "Réseau social",
    description: "Un réseau social moderne avec microservices et monorepo.",
    image: nihilScreenshot,
    link: "https://nihil-frontend.vercel.app/",
    technologies: [
      "TypeScript",
      "React",
      "PrimeReact",
      "Express",
      "Prisma",
      "Docker",
      "Nx",
    ],
  },
  {
    id: 11,
    title: "Shaka",
    subtitle: "Application Surfspots",
    description: "Trouvez les meilleurs spots de surf partout dans le monde.",
    image: shakaScreenshot,
    link: "https://shaka-frontend.vercel.app/",
    technologies: ["TypeScript", "React Native", "Expo", "NestJS", "Prisma"],
  },
  {
    id: 12,
    title: "Chef It Up",
    subtitle: "Plateforme de recettes",
    description: "Découvrez et partagez des recettes de cuisine.",
    image: chefitupScreenshot,
    link: "https://chef-it-up-tau.vercel.app/",
    technologies: ["TypeScript", "Nuxt.js", "PrimeVue", "Prisma"],
  },
  {
    id: 1,
    title: "DAF",
    subtitle: "Projet Dataviz",
    description: "Visualisez les données du FBI.",
    image: dafScreenshot,
    link: "https://ultime-daf.vercel.app/",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "PrimeReact",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    title: "Quiz (Void Trivia)",
    subtitle: "Testez vos connaissances",
    description: "Un quiz interactif pour s’amuser et apprendre.",
    image: quizScreenshot,
    link: "https://void-quiz.vercel.app/",
    technologies: ["TypeScript", "Angular", "TailwindCSS", "PrimeNg"],
  },
  {
    id: 5,
    title: "Mastermind",
    subtitle: "Jeu de logique",
    description:
      "Un jeu de logique interactif pour améliorer les capacités cognitives tout en s'amusant.",
    image: mastermindScreenshot,
    link: "https://ultime-mastermind.vercel.app/",
    technologies: ["TypeScript", "Vite", "Vue", "TailwindCSS", "PrimeVue"],
  },
  {
    id: 6,
    title: "Motus",
    subtitle: "Jeu de mots",
    description:
      "Un jeu de mots interactif pour améliorer son orthographe tout en s'amusant.",
    image: motusScreenshot,
    link: "https://ultime-motus.vercel.app/",
    technologies: ["TypeScript", "Nuxt", "Vue", "TailwindCSS", "PrimeVue"],
  },
  {
    id: 7,
    title: "VoidNull",
    subtitle: "Simple API REST CRUD",
    description: "Créez et modifiez des données avec une API REST.",
    image: voidnullScreenshot,
    link: "https://void-null-front.vercel.app/",
    technologies: [
      "TypeScript",
      "Angular",
      "PrimeNg",
      "TailwindCSS",
      "NestJs",
      "Prisma",
      "MySQL",
    ],
  },
  {
    id: 3,
    title: "Morse Translator",
    subtitle: "Convertisseur Morse",
    description: "Traducteur vers et depuis le code Morse.",
    image: morseScreenshot,
    link: "https://04-can-you-speak-morse.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default projects;
