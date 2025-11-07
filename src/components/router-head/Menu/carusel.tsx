import { component$, useSignal, $ } from "@builder.io/qwik";

export const Carusel = component$(() => {
  // Lista de imágenes
  const images = [
    //// estas imagenes so de ejemplo si es posible cambialas por las imagenes de los juegos, y has que cambien en base al juego
    "/images/Raccontest.jpeg",
    "/images/Raccontest.jpeg",
    "/images/Raccontest.jpeg",
    "/images/Raccontest.jpeg",
    "/images/Raccontest.jpeg",
  ];

  // índice de la imagen actual
  const current = useSignal(0);

  // Funciones para navegar (deben ser QRLs para usarse en onClick$)
  const next = $(() => (current.value = (current.value + 1) % images.length));
  const prev = $(
    () => (current.value = (current.value - 1 + images.length) % images.length),
  );

  return (
    <div class="flex flex-col items-center gap-6">
      {/* Imagen principal */}
      <div class="relative h-64 w-full max-w-4xl overflow-hidden rounded-lg md:h-96">
        <img
          src={images[current.value]}
          alt={`Imagen ${current.value + 1}`}
          class="h-full w-full object-cover transition-all duration-700"
        />

        {/* Controles */}
        <button
          onClick$={prev}
          class="absolute top-0 left-0 flex h-full items-center justify-center bg-black/20 px-4 text-white transition hover:bg-black/40"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick$={next}
          class="absolute top-0 right-0 flex h-full items-center justify-center bg-black/20 px-4 text-white transition hover:bg-black/40"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicadores */}
        <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick$={$(() => (current.value = i))}
              class={[
                "h-3 w-3 rounded-full",
                current.value === i ? "bg-white" : "bg-white/50",
              ]}
            ></button>
          ))}
        </div>
      </div>

      {/* Miniaturas */}
      <div class="grid max-w-4xl grid-cols-5 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick$={$(() => (current.value = i))}
            class={[
              "overflow-hidden rounded-lg border-2 transition",
              current.value === i
                ? "border-indigo-500"
                : "border-transparent hover:border-indigo-300",
            ]}
          >
            <img
              src={img}
              alt={`Miniatura ${i + 1}`}
              class="h-24 w-full object-cover opacity-80 hover:opacity-100"
            />
          </button>
        ))}
      </div>
    </div>
  );
});
