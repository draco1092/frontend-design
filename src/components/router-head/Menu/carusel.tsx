import { component$, useSignal, $ } from "@builder.io/qwik";

export const Carusel = component$(() => {
  // Lista de imágenes
  const images = [
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  ];

  // índice de la imagen actual
  const current = useSignal(0);

  // Funciones para navegar (deben ser QRLs para usarse en onClick$)
  const next = $(() => (current.value = (current.value + 1) % images.length));
  const prev = $(() => (current.value = (current.value - 1 + images.length) % images.length));

  return (
    <div class="flex flex-col items-center gap-6">
      {/* Imagen principal */}
      <div class="relative w-full max-w-4xl h-64 md:h-96 overflow-hidden rounded-lg">
        <img
          src={images[current.value]}
          alt={`Imagen ${current.value + 1}`}
          class="w-full h-full object-cover transition-all duration-700"
        />

        {/* Controles */}
        <button
          onClick$={prev}
          class="absolute top-0 left-0 flex items-center justify-center h-full px-4 bg-black/20 hover:bg-black/40 text-white transition"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick$={next}
          class="absolute top-0 right-0 flex items-center justify-center h-full px-4 bg-black/20 hover:bg-black/40 text-white transition"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores */}
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick$={$(() => (current.value = i))}
              class={[
                "w-3 h-3 rounded-full",
                current.value === i ? "bg-white" : "bg-white/50",
              ]}
            ></button>
          ))}
        </div>
      </div>

      {/* Miniaturas */}
      <div class="grid grid-cols-5 gap-4 max-w-4xl">
        {images.map((img, i) => (
          <button
            key={i}
            onClick$={$(() => (current.value = i))}
            class={[
              "rounded-lg overflow-hidden border-2 transition",
              current.value === i
                ? "border-indigo-500"
                : "border-transparent hover:border-indigo-300",
            ]}
          >
            <img
              src={img}
              alt={`Miniatura ${i + 1}`}
              class="w-full h-24 object-cover opacity-80 hover:opacity-100"
            />
          </button>
        ))}
      </div>
    </div>
  );
});
