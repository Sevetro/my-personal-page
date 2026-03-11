export function SubNav() {
  return (
    <nav class="sticky top-20 flex h-(--subnav-h) gap-3 px-4 pb-(--subnav-pb)">
      <a
        href="#projects"
        class="group flex-1 rounded-md border border-(--border-default) bg-(--bg-card) py-4 text-center text-lg font-medium text-(--text-main) transition-all duration-200 hover:border-(--accent-primary) hover:bg-[color-mix(in_oklab,var(--accent-primary)_8%,transparent)] focus-visible:ring-(--focus-ring) focus-visible:outline-none"
      >
        <span class="relative inline-block">
          Moje projekty
          <span class="absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 bg-(--accent-primary) transition-transform duration-200 group-hover:scale-x-100" />
        </span>
      </a>

      <a
        href="#about"
        class="group flex-1 rounded-md border border-(--border-default) bg-(--bg-card) py-4 text-center text-lg font-medium text-(--text-main) transition-all duration-200 hover:border-(--accent-secondary) hover:bg-[color-mix(in_oklab,var(--accent-secondary)_8%,transparent)] focus-visible:ring-(--focus-ring) focus-visible:outline-none"
      >
        <span class="relative inline-block">
          Poznaj mnie
          <span class="absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 bg-(--accent-secondary) transition-transform duration-200 group-hover:scale-x-100" />
        </span>
      </a>

      <a
        href="#contact"
        class="group flex-1 rounded-md border border-(--border-default) bg-(--bg-card) py-4 text-center text-lg font-medium text-(--text-main) transition-all duration-200 hover:border-[color-mix(in_oklab,var(--accent-primary)_60%,var(--accent-secondary))] hover:bg-[color-mix(in_oklab,var(--accent-primary)_6%,transparent)] focus-visible:ring-(--focus-ring) focus-visible:outline-none"
      >
        <span class="relative inline-block">
          Skontaktuj się
          <span class="absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 bg-[color-mix(in_oklab,var(--accent-primary)_60%,var(--accent-secondary))] transition-transform duration-200 group-hover:scale-x-100" />
        </span>
      </a>
    </nav>
  );
}
