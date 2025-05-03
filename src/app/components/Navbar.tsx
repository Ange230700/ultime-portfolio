// src\app\components\Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";
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
      label: "About",
      icon: "pi pi-info-circle",
      command: () => {
        router.push("/about");
      },
    },
  ];

  const start = (
    <Link href="/" passHref>
      <Button label="Ange KOUAKOU" text className="text-6xl font-bold" />
    </Link>
  );

  const end = <ThemeSwitcher theme={theme} setTheme={setTheme} />;

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
