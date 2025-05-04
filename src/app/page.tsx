// src\app\page.tsx

"use client";

import Link from "next/link";
import { Card } from "primereact/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-1 flex-col space-y-10 p-6">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold">
          Bonjour, je suis Ange KOUAKOU
        </h1>
        <p className="mb-6 text-xl">
          Développeur fullstack en formation à ADA Tech School, passionné par la
          création d&apos;experiences numériques.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="rounded-lg px-6 py-3 transition hover:bg-blue-700"
          >
            En savoir plus
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border px-6 py-3 transition hover:bg-blue-50"
          >
            Mes projets
          </Link>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Projets récents
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Example card, adjust mapping as needed */}
          <Link
            href="/projects"
            className="transform transition hover:scale-105"
          >
            <Card className="h-full">
              <div className="relative mb-4 h-40 w-full">
                <Image
                  src="/images/project-demo.jpg"
                  alt="Projet Démo"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Titre du projet</h3>
              <p>Brève description du projet mis en avant.</p>
            </Card>
          </Link>
          <Link
            href="/projects"
            className="transform transition hover:scale-105"
          >
            <Card className="h-full">
              <div className="relative mb-4 h-40 w-full">
                <Image
                  src="/images/project-demo2.jpg"
                  alt="Projet Démo"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Deuxième projet</h3>
              <p>Une autre description accrocheuse.</p>
            </Card>
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Explorer</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/skills"
            className="px-5 py-3 transition hover:bg-gray-200"
          >
            Compétences
          </Link>
          <Link
            href="/education"
            className="px-5 py-3 transition hover:bg-gray-200"
          >
            Formations
          </Link>
          <Link
            href="/contact"
            className="px-5 py-3 transition hover:bg-gray-200"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
