export function ContactSection() {
  return (
    <section
      id="contact"
      class="border-t border-(--border-subtle) bg-(--bg-elevated)"
    >
      <div class="mx-auto max-w-6xl px-6 py-24">
        <h2 class="text-3xl font-semibold">Kontakt</h2>

        <p class="mt-6 text-(--text-muted)">
          Masz pomysł na projekt lub potrzebujesz wsparcia?
        </p>

        <a
          href="mailto:kontakt@example.com"
          class="mt-8 inline-block rounded-xl bg-(--accent-primary) px-6 py-3 font-medium text-(--text-inverse) transition hover:bg-(--accent-primary-hover)"
        >
          Napisz do mnie
        </a>
      </div>
    </section>
  );
}
