// src/app/projects/[projectId]/page.tsx
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import projects, { type Project } from "@/data/projects";
import { ProgressSpinner } from "primereact/progressspinner";
import Link from "next/link";
import { Button } from "primereact/button";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      setLoading(true);
      setError(null);
      try {
        const proj = projects.find((p) => p.id === Number(projectId));

        if (!proj) throw new Error("Project not found");

        setProject(proj);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    if (projectId) fetchProject();
  }, [projectId]);

  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <ProgressSpinner />
      </div>
    );

  if (error || !project)
    return (
      <div className="p-4 text-center text-xl">
        {error ?? "Project not found"}
      </div>
    );

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-4xl font-bold">{project.title}</h1>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-2xl font-semibold">{project.subtitle}</h2>

      <p className="mt-4 text-lg">{project.description}</p>

      <div className="mt-4 flex gap-4">
        <Link href={project.link} target="_blank">
          <Button icon="pi pi-external-link" label="Voir le projet" />
        </Link>

        <Link href="/projects">
          <Button
            icon="pi pi-arrow-left"
            label="Retour aux projets"
            severity="secondary"
          />
        </Link>
      </div>
    </div>
  );
}
