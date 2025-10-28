import { component$, $, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Carrusel } from "~/components/router-head/carrusel/carrusel";
import { Mosaic } from "~/components/router-head/Menus/menu";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";

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
      <div class="mask-b-from-70% container mx-auto px-4 py-8">
        <div class="-mx-4 flex flex-wrap">
          <div class="mb-8 min-h-screen w-full rounded bg-violet-600/45 px-4 md:w-1/2">
            <img
              src="/images/Raccontest.jpg"
              alt="Product"
              class="mb-4 h-auto w-full rounded-lg shadow-md"
              id="mainImage"
            />
            <div class="flex justify-center gap-4 overflow-x-auto py-4">
              <img
                src="/images/descarga.jpg"
                alt="Thumbnail 1"
                class="size-16 cursor-pointer rounded-md object-cover opacity-60 transition duration-300 hover:opacity-100 sm:size-20"
                onClick$={() => changeImage("/images/thumbnail1.jpg")}
              />
              <img
                src="/images/thumbnail2.jpg"
                alt="Thumbnail 2"
                class="size-16 cursor-pointer rounded-md object-cover opacity-60 transition duration-300 hover:opacity-100 sm:size-20"
                onClick$={() => changeImage("/images/thumbnail2.jpg")}
              />
              <img
                src="/images/thumbnail3.jpg"
                alt="Thumbnail 3"
                class="size-16 cursor-pointer rounded-md object-cover opacity-60 transition duration-300 hover:opacity-100 sm:size-20"
                onClick$={() => changeImage("/images/thumbnail3.jpg")}
              />
              <img
                src="/images/thumbnail4.jpg"
                alt="Thumbnail 4"
                class="size-16 cursor-pointer rounded-md object-cover opacity-60 transition duration-300 hover:opacity-100 sm:size-20"
                onClick$={() => changeImage("/images/thumbnail4.jpg")}
              />
            </div>
          </div>

          {/* Product Details */}
          <div class="min-h-screen w-full rounded bg-fuchsia-200/80 px-4 md:w-1/2">
            <h2 class="mb-2 text-3xl font-bold">Premium Wireless Headphones</h2>
            <p class="mb-4 text-gray-600">Categorias:</p>
            <div class="mb-4">
              <span class="mr-2 text-2xl font-bold">$349.99</span>
            </div>
            <div class="mb-4 flex items-center">
              {/* Star Ratings */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ))}
              <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p class="mb-6 text-gray-700">
              Experience premium sound quality and industry-leading noise
              cancellation with these wireless headphones. Perfect for music
              lovers and frequent travelers.
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
                Add to Cart
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
                Wishlist
              </button>
            </div>
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
