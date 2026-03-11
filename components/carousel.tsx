import useEmblaCarousel from "embla-carousel-react";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="max-w-xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {["Slide 1", "Slide 2", "Slide 3"].map((slide) => (
            <div
              key={slide}
              className="flex-[0_0_100%] p-8 bg-slate-200 text-center text-xl"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          type="button"
          className="px-4 py-2 bg-black text-white rounded"
          onClick={() => emblaApi?.scrollPrev()}
        >
          Prev
        </button>

        <button
          type="button"
          className="px-4 py-2 bg-black text-white rounded"
          onClick={() => emblaApi?.scrollNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};
