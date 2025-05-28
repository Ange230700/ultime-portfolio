// src\app\projects\page.jsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "primereact/card";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col p-4">
      <h1 className="mb-4 text-3xl font-bold">Projets</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => {
            const header = (
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  priority
                  alt={project.title}
                  src={project.image}
                  fill
                  className="object-cover"
                />
              </div>
            );

            return (
              <Link
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-25rem block w-full transition-transform duration-200 hover:scale-105 sm:w-[20rem]"
              >
                <Card
                  title={project.title}
                  subTitle={project.subtitle}
                  header={header}
                  className="h-full w-full"
                >
                  <p className="m-0">{project.description}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
