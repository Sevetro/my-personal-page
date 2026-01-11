import { getDictionary, Lang } from "../i18n/i18n.ts";

interface NavbarProps {
  lang: Lang;
}

export function Navbar({ lang }: NavbarProps) {
  const txt = getDictionary(lang);

  return (
    <nav
      aria-label="Main navigation"
      class="border-b border-(--bg-section) bg-(--bg-dark)"
    >
      <ul class="flex justify-center gap-6 px-6 py-4 font-medium text-(--text-main)">
        <li>
          <a
            href="#about"
            class="transition-colors duration-200 hover:text-(--accent-primary) focus:text-(--accent-primary) focus:outline-none"
          >
            {txt.about}
          </a>
        </li>
        <li>
          <a
            href="#projects"
            class="transition-colors duration-200 hover:text-(--accent-primary) focus:text-(--accent-primary) focus:outline-none"
          >
            {txt.projects}
          </a>
        </li>
        <li>
          <a
            href="#services"
            class="transition-colors duration-200 hover:text-(--accent-primary) focus:text-(--accent-primary) focus:outline-none"
          >
            {txt.services}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="transition-colors duration-200 hover:text-(--accent-primary) focus:text-(--accent-primary) focus:outline-none"
          >
            {txt.contact}
          </a>
        </li>
      </ul>
    </nav>
  );
}
