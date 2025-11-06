import { component$, $, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { Carusel } from "~/components/router-head/Menu/carusel";

export default component$(() => {
  const loc = useLocation();
  const TituloPagina =
    loc.url.pathname.split("/").filter(Boolean).pop() || "Home";

  // Convertimos changeImage a una QRL usando $
  const changeImage = $((src: string) => {
    const mainImage = document.getElementById(
      "mainImage",
    ) as HTMLImageElement | null;
    if (mainImage) {
      mainImage.src = src;
    }
  });

  return (
    <> 
      <img
        src="/images/image(1).jpg"
        alt=""
        class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div class=" flex justify-center mask-b-from-95% to-100% my-8 px-4">
        <div class="-mx-4 flex flex-wrap">
          <div class="mb-8 min-h-screen rounded bg-violet-600/45 px-4 md:w-11/12 lg:mb-0 lg:px-8 ">
            <Carusel/>
            </div>
          </div>

          {/* Product Details */}
          <div class="min-h-screen w-full rounded bg-fuchsia-200/80 px-4 md:w-1/2">
            <h2 class="mb-2 text-3xl font-bold">Titulo Producto</h2>
            <p class="mb-4 text-gray-600">Categorias:</p>
            <div class="mb-4">
              <span class="mr-2 text-2xl font-bold">$349.99</span>
            </div>
           
            <p class="mb-6 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorem! Quis quae cumque consequuntur placeat beatae consectetur ab in aliquam ipsa facilis, natus repudiandae laboriosam hic alias iste pariatur obcaecati?
            </p>

            <div class="mb-6 flex space-x-4">
              <button class="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Añadir al carrito
              </button>
              <button class="flex items-center gap-2 rounded-md bg-gray-200 px-6 py-2 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Lista de deseos
              </button>
            </div>
          </div>
        </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
