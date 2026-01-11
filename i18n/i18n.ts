import pl from "./pl.json" with { type: "json" };
import en from "./en.json" with { type: "json" };

export type Lang = "pl" | "en";

export function getDictionary(lang: Lang) {
  return lang === "pl" ? pl : en;
}
