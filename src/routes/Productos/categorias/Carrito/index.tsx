import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <><img
          src="/images/image.jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        />
      <div class="container mx-auto mt-10 bg-[url('/images/image(6).jpg')] bg-cover bg-fixed">
        <div class="my-10 shadow-md sm:flex">
          <div class="w-full  px-10 py-10 sm:w-3/4">
            <div class="flex justify-between border-b pb-8">
              <h1 class="text-2xl font-semibold text-fuchsia-200">CARRITO DE COMPRAS</h1>
              <h2 class="text-2xl font-semibold text-fuchsia-200">JUEGOS.CANTIDAD</h2>
            </div>

            <div class="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8">
              <div class="w-full md:w-4/12 2xl:w-1/4">
                <img
                  src="/images/Raccontest.jpeg"
                  alt="Black Leather Purse"
                  class="hidden h-full object-cover object-center md:block"
                />
              </div>
              <div class="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4">
                <div class="flex w-full items-center justify-between">
                  <p class="text-base leading-none font-black text-fuchsia-200">
                    Juego.nombre
                  </p>
                </div>
                <p class="pt-2 text-xs leading-3 text-fuchsia-200">
                  Categorias: Juego.Categorias
                </p>

                <div class="flex items-center justify-between grid-cols-2 gap-0.5 pt-5">
                  <div class="itemms-center flex">
                    <p class="cursor-pointer text-xs  text-fuchsia-200 bg-violet-900/50 rounded-md hover:bg-violet-800  p-1">
                    Añadir a lista de deseos
                    </p><br />
                    <p class="mx-1 border-black cursor-pointer px-2 text-xs text-center pt-0.5 text-white border rounded bg-red-900 w-fit hover:bg-red-500 ">
                    Remover
                    </p>
                  </div>
                  <p class="text-base leading-none font-black text-white border-b">
                    juego.precio
                  </p>
                </div>
              </div>
            </div>
         
            <a
              href="#"
              class="mt-10 flex cursor-pointer rounded border border-purple-900 bg-violet-500 p-0.5 text-sm font-semibold text-fuchsia-100 transition-colors duration-200 hover:bg-purple-950 max-w-fit"
            >
              Continuar Comprando
            </a>
          </div>

          <div id="summary" class="bg-purple-300 w-full px-8 py-10 sm:w-1/4 md:w-1/2">
            <h1 class="border-b pb-8 text-2xl font-semibold">
              Totales de Compra
            </h1>
            <div class="mt-10 mb-5 flex justify-between">
              <span class="text-sm font-semibold uppercase">Items 3</span>
              <span class="text-sm font-semibold">590$</span>
            </div>

            <div class="mt-8 border-t">
              <div class="flex justify-between py-6 text-sm font-semibold uppercase">
                <span>Precio total</span>
                <span>Precio.total</span>
              </div>
              <button class="flex w-full cursor-pointer justify-center rounded border border-purple-900 bg-violet-500 font-semibold text-fuchsia-100 uppercase transition-colors duration-200 hover:bg-purple-950">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Carrito de Compras",
  meta: [
    {
      name: "description",
      content: "Carrito de compras de la tienda",
    },
  ],
};