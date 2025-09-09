"use client";

import { useTheme } from "../context/themeContext";
import { Button } from "../components/ui/button1";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
