// src\app\projects\page.jsx

"use client";

import React from "react";
import projects from "@/data/projects";
import { ProjectCard } from "@/app/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col p-4">
      <h1 className="mb-4 text-3xl font-bold">Projets</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
