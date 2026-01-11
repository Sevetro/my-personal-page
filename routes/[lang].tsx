import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { useSignal } from "@preact/signals";
import { getDictionary, Lang } from "../i18n/i18n.ts";
import { LangSwitch } from "../components/lang-switch.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default define.page(function Home(ctx) {
  const lang = ctx.params.lang as Lang;
  return (
    <>
      <Navbar lang={lang} />
      <LangSwitch currLang={lang} />

      <div class="bg-red-50">elo from Home</div>
    </>
  );
});
