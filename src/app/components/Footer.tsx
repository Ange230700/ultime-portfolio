// src\app\components\Footer.tsx

"use client";

import React from "react";
import Link from "next/link";
import { Button } from "primereact/button";
import socials from "@/data/socials";

const iconMap: Record<number, string> = {
  1: "pi pi-github",
  2: "pi pi-linkedin",
  3: "pi pi-twitter",
};

export default function Footer() {
  return (
    <footer className="flex justify-around p-4">
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.url}
        >
          <Button icon={iconMap[social.id]} severity="secondary" />
        </Link>
      ))}
    </footer>
  );
}
