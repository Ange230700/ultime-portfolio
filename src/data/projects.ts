// src\data\projects.ts

import type { StaticImageData } from "next/image";
import dafScreenshot from "../../public/images/DAF.png";
import quizScreenshot from "../../public/images/quiz.png";
import morseScreenshot from "../../public/images/morseTranslator.png";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "DAF",
    subtitle: "Détection d'activité de formation",
    description: "Description du projet 1",
    image: dafScreenshot,
    link: "https://ongoing-fbi-investigations.vercel.app/",
  },
  {
    id: 2,
    title: "Quiz",
    subtitle: "",
    description: "Quiz",
    image: quizScreenshot,
    link: "https://quizz-two-delta.vercel.app/",
  },
  {
    id: 3,
    title: "Morse translator",
    subtitle: "",
    description: "Traduction",
    image: morseScreenshot,
    link: "https://04-can-you-speak-morse.vercel.app/",
  },
];

export default projects;
