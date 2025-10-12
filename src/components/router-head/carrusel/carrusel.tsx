import { component$, useSignal, $ } from "@builder.io/qwik";

export const Carrusel = component$(() => {
  const currentIndex = useSignal(0);
  const products = [
    { id: 1, name: "Product 1", image: "/images/Raccontest.jpeg" },
    { id: 2, name: "Product 2", image: "/images/descarga.jpeg" },
  ];
  const prevSlide = $(() => {
    currentIndex.value =
      (currentIndex.value - 1 + products.length) % products.length;
  });

  const nextSlide = $(() => {
    currentIndex.value = (currentIndex.value + 1) % products.length;
  });
  return (
    <div
      id="controls-carousel"
      class="relative w-full flex items-center justify-center"
      data-carousel="static"
    >
      <div class="relative h-56 w-full max-w-3xl overflow-hidden rounded-lg shadow-md md:h-96">
        {products.map((product, index) => (
          <div
            key={product.id}
            class={
              index === currentIndex.value
                ? "duration-700 ease-in-out"
                : "hidden duration-700 ease-in-out"
            }
            data-carousel-item={
              index === currentIndex.value ? "active" : undefined
            }
          >
            <img
  src={product.image}
  alt={product.name}
  class="object-fill h-72 w-full bg-gray-000"
/>

          </div>
        ))}
      </div>
      <button
        type="button"
        class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
        onClick$={prevSlide}
      >
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
        onClick$={nextSlide}
      >
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
});
export default Carrusel;
