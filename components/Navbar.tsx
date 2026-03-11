import { getTranslations, Lang } from "../i18n/i18n.ts";
import { ThemeToggle } from "../islands/theme-toggle.tsx";
import { LangSwitch } from "./lang-switch.tsx";
import { NavbarItem } from "./navbar-item.tsx";

interface NavbarProps {
  lang: Lang;
}

export function Navbar({ lang }: NavbarProps) {
  const { navbar } = getTranslations(lang);

  return (
    <nav
      aria-label="Main navigation"
      class="flex w-full justify-between bg-(--bg-secondary) px-6"
    >
      <ul class="flex gap-6 py-4">
        <NavbarItem href="#home" label={navbar.home} />
        <NavbarItem href="#projects" label={navbar.projects} />
        <NavbarItem href="#services" label={navbar.services} />
        <NavbarItem href="#contact" label={navbar.contact} />
      </ul>

      <div class="flex gap-2">
        <ThemeToggle />
        <LangSwitch currLang={lang} />
      </div>
    </nav>
  );
}
