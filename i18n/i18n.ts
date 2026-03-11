import { en } from "./en.ts";
import { pl } from "./pl.ts";

export interface Dictionary {
  html: {
    description: string;
  };
  navbar: {
    home: string;
    about: string;
    projects: string;
    services: string;
    contact: string;
  };
}

export type Lang = "pl" | "en";

export function getTranslations(lang: Lang) {
  return lang === "pl" ? pl : en;
}
