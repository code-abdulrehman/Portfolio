"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon, LaptopIcon } from "lucide-react";

type Theme = "system" | "light" | "dark";

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const resolved = theme === "system" ? getSystemTheme() : theme;
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
}

function setThemeValue(theme: Theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
}

export function ThemeTabs() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? "system";
    setTheme(stored);
    applyTheme(stored);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const current = (localStorage.getItem("theme") as Theme | null) ?? "system";
      if (current === "system") applyTheme("system");
    };
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return (
    <div className="inline-flex items-center gap-1 rounded-full border bg-background p-0.5">
      <button
        type="button"
        onClick={() => {
          setTheme("system");
          setThemeValue("system");
        }}
        className={[
          "inline-flex h-7 w-7 items-center justify-center rounded-full",
          "transition-colors",
          theme === "system" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60",
        ].join(" ")}
        title="System"
      >
        <LaptopIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => {
          setTheme("light");
          setThemeValue("light");
        }}
        className={[
          "inline-flex h-7 w-7 items-center justify-center rounded-full",
          "transition-colors",
          theme === "light" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60",
        ].join(" ")}
        title="Light"
      >
        <SunIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => {
          setTheme("dark");
          setThemeValue("dark");
        }}
        className={[
          "inline-flex h-7 w-7 items-center justify-center rounded-full",
          "transition-colors",
          theme === "dark" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60",
        ].join(" ")}
        title="Dark"
      >
        <MoonIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

