// src\app\page.tsx

"use client";

import { useState } from "react";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

export default function Home() {
  const [theme, setTheme] = useState("lara-light-blue");
  return (
    <div>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
}
