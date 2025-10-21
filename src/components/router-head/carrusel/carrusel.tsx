import { component$, useSignal, $ } from "@builder.io/qwik";

export const Carrusel = component$(() => {
 
  return (<div>


 <div class="max-w-4xl mx-auto">
        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <div class="relative h-96 overflow-hidden rounded-lg md:h-[423px]">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="flex items-center justify-center w-full h-full bg-gray-200">
                        <img src="https://via.placeholder.com/789x423/4F46E5/FFFFFF?text=Imagen+1" 
                             class="w-full h-full object-contain" alt="Imagen 1"/>
                    </div>
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="flex items-center justify-center w-full h-full bg-gray-200">
                        <img src="images/Raccontest.jpeg" 
                             class="w-full h-full object-contain" alt="Imagen 2"/>
                    </div>
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="flex items-center justify-center w-full h-full bg-gray-200">
                        <img src="images/descarga.jpeg" 
                             class="w-full h-full object-contain" alt="Imagen 3"/>
                    </div>
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="flex items-center justify-center w-full h-full bg-gray-200">
                        <img src="https://via.placeholder.com/789x423/EF4444/FFFFFF?text=Imagen+4" 
                             class="w-full h-full object-contain" alt="Imagen 4"/>
                    </div>
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div class="flex items-center justify-center w-full h-full bg-gray-200">
                        <img src="https://via.placeholder.com/789x423/8B5CF6/FFFFFF?text=Imagen+5" 
                             class="w-full h-full object-contain" alt="Imagen 5"/>
                    </div>
                </div>
            </div>
            
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" class="w-3 h-3 rounded-full bg-white/70 hover:bg-white" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-white/70 hover:bg-white" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-white/70 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-white/70 hover:bg-white" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-white/70 hover:bg-white" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 group-hover:bg-white/90 group-focus:ring-4 group-focus:ring-white/50 group-focus:outline-none transition">
                    <svg class="w-4 h-4 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Anterior</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 group-hover:bg-white/90 group-focus:ring-4 group-focus:ring-white/50 group-focus:outline-none transition">
                    <svg class="w-4 h-4 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Siguiente</span>
                </span>
            </button>
        </div>
    </div>

 </div>);
});
export default Carrusel;
