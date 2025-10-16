import { component$, useSignal, $ } from "@builder.io/qwik";

export const Carrusel = component$(() => {
  const currentIndex = useSignal(0);
  const products = [
  {
      id: 1,
      name: "Producto 1",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Producto 2",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Producto 3",
      image: "images\Raccontest.jpeg"
    },
    {
      id: 4,
      name: "Producto 4",
      image: "images\descarga.jpeg"
    },
    {
      id: 5,
      name: "Producto 5",
      image: "images\arroz-chaufa-peruano-receta.jpg"
    },
    {
      id: 6,
      name: "Producto 6",
      image: "images\_b2097173-527b-48dc-a161-499696fc4a8a.jpeg"
    }
  ];

    const nextSlide = $(() => {
    currentIndex.value = (currentIndex.value + 1) % products.length;
  });

  const prevSlide = $(() => {
    currentIndex.value = (currentIndex.value - 1 + products.length) % products.length;
  });

  const goToSlide = $((index: number) => {
    currentIndex.value = index;
  });
  
  return (
   <div class="w-full relative">
      <div class="swiper centered-slide-carousel swiper-container relative">
        <div class="swiper-wrapper">
          {products.map((product, index) => (
            <div
              key={product.id}
              class={`swiper-slide transition-opacity duration-700 ease-in-out ${
                index === currentIndex.value ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Paginación */}
        <div class="swiper-pagination flex justify-center mt-4 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick$={() => goToSlide(index)}
              class={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex.value 
                  ? 'bg-indigo-600 scale-125' 
                  : 'bg-indigo-300 hover:bg-indigo-400'
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Botones de navegación */}
      <button
        type="button"
        class="group absolute start-0 top-1/2 z-30 flex -translate-y-1/2 cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick$={prevSlide}
      >
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 group-hover:bg-white/90 group-focus:ring-4 group-focus:ring-white/50 group-focus:outline-none transition-colors duration-300">
          <svg
            class="h-6 w-6 text-indigo-600"
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
          <span class="sr-only">Anterior</span>
        </span>
      </button>
      
      <button
        type="button"
        class="group absolute end-0 top-1/2 z-30 flex -translate-y-1/2 cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick$={nextSlide}
      >
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 group-hover:bg-white/90 group-focus:ring-4 group-focus:ring-white/50 group-focus:outline-none transition-colors duration-300">
          <svg
            class="h-6 w-6 text-indigo-600"
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
          <span class="sr-only">Siguiente</span>
        </span>
      </button>
    </div>
  );
});
export default Carrusel;
