// src\app\education\page.tsx

"use client";

import React from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { educationList } from "@/data/educationList";

interface TimelineEvent {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  icon: string;
}

export default function EducationPage() {
  const events: TimelineEvent[] = educationList.map((edu) => ({
    id: edu.formation_id,
    title: edu.formation_title,
    subtitle: edu.school,
    date: edu.formation_span,
    icon: "pi pi-book",
  }));

  const marker = (item: TimelineEvent) => (
    <span className="w-2rem h-2rem align-items-center justify-content-center border-circle shadow-1 flex">
      <i className={item.icon}></i>
    </span>
  );

  const content = (item: TimelineEvent) => (
    <Card title={item.title} subTitle={item.date} className="mb-4">
      <h3 className="text-lg font-semibold">{item.subtitle}</h3>
    </Card>
  );

  return (
    <div className="flex flex-1 flex-col p-4">
      <h1 className="mb-6 text-3xl font-bold">Formations</h1>
      <div className="card">
        <Timeline
          value={events}
          align="alternate"
          className="customized-timeline"
          marker={marker}
          content={content}
        />
      </div>
    </div>
  );
}
