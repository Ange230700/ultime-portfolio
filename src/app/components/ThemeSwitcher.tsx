// src\app\components\ThemeSwitcher.tsx

"use client";

import { useContext } from "react";
import { PrimeReactContext } from "primereact/api";
import { Button } from "primereact/button";

export default function ThemeSwitcher({
  theme,
  setTheme,
}: Readonly<{
  theme: string;
  setTheme: (t: string) => void;
}>) {
  const context = useContext(PrimeReactContext);

  const isLight = theme.includes("light");

  const nextTheme = isLight ? "lara-dark-blue" : "lara-light-blue";

  const icon = isLight ? "pi pi-moon" : "pi pi-sun";

  const handleThemeChange = () => {
    if (!context?.changeTheme) {
      console.error("PrimeReactContext not available");
      return;
    }
    context.changeTheme(theme, nextTheme, "theme-link", () => {
      setTheme(nextTheme);
    });
  };

  return (
    <Button
      icon={icon}
      onClick={handleThemeChange}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      rounded
      outlined
    />
  );
}
