// src/data/projects.ts
import type { StaticImageData } from "next/image";
import dafScreenshot from "../../public/images/DAF.png";
import quizScreenshot from "../../public/images/quiz.png";
import morseScreenshot from "../../public/images/morseTranslator.png";
import streamiaScreenshot from "../../public/images/streamia.png";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  link: string;
}

const projects: Project[] = [
  {
    id: 4,
    title: "Streamia",
    subtitle: "Plateforme de streaming vidéo",
    description: "La meilleure expérience de streaming de vidéos.",
    image: streamiaScreenshot,
    link: "https://ultime-streamia.vercel.app/",
  },
  {
    id: 1,
    title: "DAF",
    subtitle: "Projet Dataviz",
    description: "Visualisez les données du FBI.",
    image: dafScreenshot,
    link: "https://ultime-daf.vercel.app/",
  },
  {
    id: 2,
    title: "Quiz",
    subtitle: "Testez vos connaissances",
    description: "Un quiz interactif pour s’amuser et apprendre.",
    image: quizScreenshot,
    link: "https://quizz-two-delta.vercel.app/",
  },
  {
    id: 3,
    title: "Morse Translator",
    subtitle: "Convertisseur Morse",
    description: "Traducteur vers et depuis le code Morse.",
    image: morseScreenshot,
    link: "https://04-can-you-speak-morse.vercel.app/",
  },
];

export default projects;
