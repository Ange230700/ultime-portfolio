// src\app\about\page.tsx

"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col space-y-6 p-4">
      <h1 className="text-3xl font-bold">À propos de moi</h1>

      <p className="text-lg leading-relaxed">
        Actuellement apprenant à ADA Tech School. Ma progression dans la
        programmation a débuté en 2016-2017 au lycée où j&apos;apprenais les
        bases du langage C. J’étais captivé par la possibilité de transformer
        des concepts mathématiques en réalisations concrètes à l&apos;écran.
      </p>

      <p className="text-lg leading-relaxed">
        Très vite, j’ai découvert que la programmation va bien au-delà de
        l’application de concepts mathématiques : c’est une discipline qui
        consiste à résoudre des problèmes réels et complexes de manière logique
        et créative, et à participer activement à la construction du monde
        numérique.
      </p>

      <p className="text-lg leading-relaxed">
        Pour confirmer mon projet professionnel, j’ai suivi un bootcamp de 5
        mois en développement web à la Wild Code School. Cette expérience m’a
        conforté dans mon choix de devenir développeur web. Aujourd’hui, à ADA
        Tech School, j’aiguises mes compétences en technologies frontend et
        backend, notamment TypeScript, Java, PHP et Python.
      </p>

      <p className="text-lg leading-relaxed">
        J’ai travaillé sur plusieurs projets en équipe, comme une application
        développé avec Vite + TypeScript + React pour visualiser les données des
        personnes disparues enregistrées dans le système du FBI. Ce projet m’a
        permis de travailler sur les appels API, tout en développant mon goût
        pour le travail en équipe et les principes de l’agilité.
      </p>

      <p className="text-lg leading-relaxed">
        Dans le but d’obtenir la certification RNCP de niveau 6 en tant que
        concepteur-développeur d’applications, je suis à la recherche d’une
        alternance de 12 ou 36 mois (quatre jours en entreprise et un jour en
        formation).
      </p>

      <p className="text-lg leading-relaxed">
        Mon objectif ultime est d’atteindre la certification RNCP de niveau 7 en
        architecture logicielle et de participer à la création de solutions
        robustes et innovantes.
      </p>
    </div>
  );
}
