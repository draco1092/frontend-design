import { component$, useSignal, $ } from "@builder.io/qwik";

export const Carrusel = component$(() => {
 
  return (
  <><div class="flex justify-center items-center w-full py-10">
          <div id="default-carousel" class="relative w-[789px] h-[423px]" data-carousel="slide">

              <div class="relative w-full h-full overflow-hidden rounded-lg">

                  <div class="hidden duration-800 ease-in-out" data-carousel-item="active">
                      <img src="/images/image(2).jpg" class="w-full h-full object-contain" alt="Imagen 1"/>
                      </div>

                  <div class="hidden duration-800 ease-in-out" data-carousel-item>
                      <img src="/images/image.jpg" class="w-full h-full object-contain" alt="Imagen 2"/>
                      </div>

                  <div class="hidden duration-800 ease-in-out" data-carousel-item>
                      <img src="/images/Raccontest.jpeg" class="w-full h-full object-contain" alt="Imagen 3"/>
                      </div>

                  <div class="hidden duration-800 ease-in-out" data-carousel-item>
                      <img src="/images/descarga.jpeg" class="w-full h-full object-contain" alt="Imagen 4"/>
                      </div>

                  <div class="hidden duration-800 ease-in-out" data-carousel-item>
                      <img src="/images/arroz-chaufa-peruano-receta.jpg.webp" class="w-full h-full object-contain" alt="Imagen 5"/>
                      </div>
              </div>

              <button type="button" data-carousel-prev class="absolute bg-fuchsia-900/25 border-2 border-violet-900/25 top-0 left-0 h-full px-4">◀</button>
              <button type="button" data-carousel-next class="absolute  bg-fuchsia-900/25 border-2 border-violet-900/25  top-0 right-0 h-full px-4">▶</button>
          </div>
      </div><script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script></>

);
});
export default Carrusel;
