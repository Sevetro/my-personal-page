export function ProjectsSection() {
  return (
    <section
      id="projects"
      class="h-(--section-h) bg-(--bg-secondary) pt-40 pl-30"
    >
      <h2 class="text-3xl font-semibold">Projekty</h2>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article class="rounded-2xl border border-(--border-subtle) bg-(--bg-card) p-6 transition hover:bg-(--bg-hover)">
          <h3 class="text-xl font-medium">Stock Analyzer</h3>
          <p class="mt-3 text-(--text-muted)">
            Desktopowa aplikacja do analizy spółek giełdowych.
          </p>
          <p class="mt-4 text-sm text-(--text-subtle)">
            React • Electron • PostgreSQL
          </p>
        </article>

        <article class="rounded-2xl border border-(--border-subtle) bg-(--bg-card) p-6 transition hover:bg-(--bg-hover)">
          <h3 class="text-xl font-medium">Headless CMS</h3>
          <p class="mt-3 text-(--text-muted)">
            CMS oparty o Deno Fresh i Lexical Editor.
          </p>
          <p class="mt-4 text-sm text-(--text-subtle)">
            Deno • Fresh • TypeScript
          </p>
        </article>
      </div>
    </section>
  );
}
