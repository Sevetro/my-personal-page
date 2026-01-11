import { Lang } from "../i18n/i18n.ts";

interface LangSwitchProps {
  currLang: Lang;
}

export function LangSwitch({ currLang }: LangSwitchProps) {
  const langs: Lang[] = ["pl", "en"];

  return (
    <div class="mt-2 flex justify-center gap-2">
      {langs.map((lang) => {
        const isCurrent = lang === currLang;
        return (
          <a
            key={lang}
            href={`/${lang}`}
            class={`rounded px-3 py-1 transition-colors duration-200 ${
              isCurrent
                ? "pointer-events-none cursor-default bg-(--bg-section) text-(--text-accent)"
                : "text-(--text-main) hover:bg-(--bg-section) hover:text-(--text-accent)"
            }`}
          >
            {lang.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
