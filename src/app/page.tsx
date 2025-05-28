// src\app\page.tsx

"use client";

import React from "react";
import Link from "next/link";
import { ProjectCard } from "@/app/components/ProjectCard";
import projects from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
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
          <Link href="/about" className="p-button font-bold">
            En savoir plus
          </Link>
          <Link href="/projects" className="p-button font-bold">
            Mes projets
          </Link>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Projets stars
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featuredProjects.map((proj) => (
            <ProjectCard key={proj.title} project={proj} />
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">Explorer</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/skills" className="p-button font-bold">
            Compétences
          </Link>
          <Link href="/education" className="p-button font-bold">
            Formations
          </Link>
          <Link href="/contact" className="p-button font-bold">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
