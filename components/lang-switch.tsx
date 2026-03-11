import { Lang } from "../i18n/i18n.ts";

interface LangSwitchProps {
  currLang: Lang;
}

export function LangSwitch({ currLang }: LangSwitchProps) {
  return (
    <div class="flex items-center gap-2">
      <a
        href="/"
        class={`transition-colors duration-200 ${
          currLang === "pl"
            ? "pointer-events-none cursor-default text-(--text-accent)"
            : "hover:text-(--text-accent)"
        }`}
      >
        PL
      </a>

      <span class="h-4 w-px bg-(--divider)" aria-hidden="true" />

      <a
        href="/en"
        class={`transition-colors duration-200 ${
          currLang === "en"
            ? "pointer-events-none cursor-default text-(--text-accent)"
            : "hover:text-(--text-accent)"
        }`}
      >
        EN
      </a>
    </div>
  );
}
