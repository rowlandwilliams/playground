"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeColor = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return { isDark: false, isLight: false, mounted };
  }
  const isDark = theme === "dark";
  const isLight = theme === "light";

  return { isDark, isLight, mounted };
};
