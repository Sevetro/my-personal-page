export function HomeSection() {
  return (
    <section id="home" class="h-(--home-h) pt-30 pl-30">
      <header class="max-w-3xl">
        <h1 class="text-5xl font-semibold tracking-tight md:text-6xl">
          Łukasz Gil — Software Developer
        </h1>

        <h2 class="mt-4 text-2xl font-medium md:text-3xl">
          Oprogramowanie szyte na miarę dla webu i desktopu
        </h2>

        <p class="mt-6 text-lg leading-relaxed text-(--text-muted)">
          Projektuję i tworzę spersonalizowane aplikacje webowe oraz natywne
          aplikacje desktopowe. Buduję nowoczesne strony internetowe, systemy
          wewnętrzne oraz rozwiązania dopasowane do realnych potrzeb biznesowych
          — od pomysłu po wdrożenie.
        </p>

        <p class="mt-4 text-lg text-(--text-muted)">
          Full-stack developer specjalizujący się w technologiach:
          <strong>React</strong>, <strong>Deno</strong>,{" "}
          <strong>TypeScript</strong>,<strong>PostgreSQL</strong>.
        </p>
      </header>
    </section>
  );
}
