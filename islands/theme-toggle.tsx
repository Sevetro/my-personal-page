import { useEffect, useState } from "preact/hooks";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      class="my-2 cursor-pointer rounded-full px-2 text-lg transition-shadow duration-300 ease-out hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
