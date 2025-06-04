// src/data/projects.ts
import type { StaticImageData } from "next/image";
import dafScreenshot from "../../public/images/DAF.png";
import quizScreenshot from "../../public/images/quiz.png";
import morseScreenshot from "../../public/images/morseTranslator.png";
import streamiaScreenshot from "../../public/images/streamia.png";
import mastermindScreenshot from "../../public/images/mastermind.png";
import motusScreenshot from "../../public/images/motus.png";
import voidnullScreenshot from "../../public/images/voidnull.png";

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
