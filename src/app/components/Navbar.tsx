// src\app\components\Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

type NavbarMenuItem = MenuItem & {
  label?: string;
  icon?: string;
};

export default function Navbar() {
  const router = useRouter();
  const [theme, setTheme] = useState("lara-light-blue");
  const items: NavbarMenuItem[] = [
    {
      label: "Compétences",
      icon: "pi pi-check-circle",
      command: () => {
        router.push("/skills");
      },
    },
    {
      label: "Projets",
      icon: "pi pi-briefcase",
      command: () => {
        router.push("/projects");
      },
    },
    {
      label: "Formations",
      icon: "pi pi-graduation-cap",
      command: () => {
        router.push("/education");
      },
    },
    {
      label: "Savoir plus",
      icon: "pi pi-info-circle",
      command: () => {
        router.push("/about");
      },
    },
    {
      label: "Contact",
      icon: "pi pi-address-book",
      command: () => {
        router.push("/contact");
      },
    },
  ];

  const start = (
    <Link
      href="/"
      passHref
      className="text-2xl font-bold transition-colors duration-200 hover:text-blue-300"
    >
      Ange KOUAKOU
    </Link>
  );

  const end = <ThemeSwitcher theme={theme} setTheme={setTheme} />;

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
