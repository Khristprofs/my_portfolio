// src/components/StarsCanvas.jsx
"use client";

import { useEffect, useState } from "react";
import StarBackgroundCanvas from "./starBackgroundCanvas";
import { useTheme } from "./themeContext";

export function StarsCanvas() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid flashing before hydration
  if (theme !== "dark") return null; // only render in dark mode

  return <StarBackgroundCanvas />;
}