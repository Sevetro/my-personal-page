import { Carousel } from "../islands/carousel.tsx";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      class="h-(--section-h) bg-(--bg-secondary) pt-40 pl-30"
    >
      <h2 class="text-3xl font-semibold">Projekty</h2>

      <Carousel />
    </section>
  );
}
