import { Lang } from "../i18n/i18n.ts";
import { AboutSection } from "./about-section.tsx";
import { ContactSection } from "./contact-section.tsx";
import { HomeSection } from "./home-section.tsx";
import { Navbar } from "./navbar.tsx";
import { ProjectsSection } from "./projects-section.tsx";
import { SubNav } from "./subnav.tsx";

interface PageContentProps {
  lang: Lang;
}

export function PageContent({ lang }: PageContentProps) {
  return (
    <>
      <header class="sticky top-0 border-b border-(--border-subtle) bg-(--bg-secondary)/80 backdrop-blur">
        <Navbar lang={lang} />
      </header>

      <main>
        <HomeSection />

        <SubNav />

        <ProjectsSection />

        <AboutSection />

        <ContactSection />
      </main>

      <footer class="border-t border-(--border-subtle) px-6 py-6 text-center text-sm text-(--text-subtle)">
        © {new Date().getFullYear()} Łukasz Gil
      </footer>
    </>
  );
}
