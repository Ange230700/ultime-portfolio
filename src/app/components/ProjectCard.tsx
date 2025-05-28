// src/app/components/ProjectCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const header = (
    <div className="relative h-40 w-full">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="rounded-t-lg object-cover"
      />
    </div>
  );

  const footer = (
    <div className="flex justify-center gap-2">
      <Link href={project.link} target="_blank">
        <Button
          label="Voir projet"
          icon="pi pi-external-link"
          className="w-full"
        />
      </Link>
      <Link href={`/projects/${project.id}`}>
        <Button
          label="Détails"
          icon="pi pi-info-circle"
          className="w-full"
          severity="secondary"
        />
      </Link>
    </div>
  );

  return (
    <Card
      title={project.title}
      subTitle={project.subtitle}
      header={header}
      footer={footer}
      className="transform transition md:w-[25rem]"
    >
      <p className="m-0 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
        {project.description}
      </p>
    </Card>
  );
};
