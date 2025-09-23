"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi"; // Feather icons for a minimal style

export const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures correct theme on initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitch = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleSwitch}
      className="fixed right-4 bottom-4 z-50 p-3 rounded-full border border-foreground bg-background text-foreground hover:bg-foreground/10 transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <FiSun size={20} className="text-yellow-400" />
      ) : (
        <FiMoon size={20} className="text-purple-700" />
      )}
    </button>
  );
};
