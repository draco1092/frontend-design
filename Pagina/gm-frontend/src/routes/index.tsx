import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Headers1 } from "~/components/router-head/footer/header/Headers";
import { Footers } from "~/components/router-head/footer/header/Footers";



export default component$(() => {
  return (
    <>
<main class=" text-fuchsia-200 pixel-font ">
      <Headers1 />
      <main class="relative">
        <img
          src="/images/image.jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        /></main>
      
   <section>
  <div class="relative isolate overflow-hidden bg-gray-900/35 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Proyecto Pagina Web Tipo Tienda para Juegos</h2>
        <p class="mt-8 text-3xl font-medium text-pretty text-gray-300 sm:text-xl/8">Proyecto creado por Mauricio Lopez, Carlos Morales, y Yai Rignay. Al proyecto se aplicarion las siguientes tecnologias:</p>
      </div>
    
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <section>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 text-4xl font-semibold text-white">
                <a href="https://qwik.dev/" class="block p-4  hover:bg-gray-700 transition">Qwik<span aria-hidden="true">&rarr;</span></a>
                <a href="https://tailwindcss.com/" class="block p-4 hover:bg-gray-700 rounded transition">TailwindCSS<span aria-hidden="true">&rarr;</span></a>
                <a href="https://www.typescriptlang.org/" class="block p-4 hover:bg-gray-700 rounded transition">Typescript <span aria-hidden="true">&rarr;</span></a>
                <a href="https://www.prisma.io/" class="block p-4 hover:bg-gray-700 rounded transition">Prisma <span aria-hidden="true">&rarr;</span></a>
                <a href="https://react.dev/" class="block p-4 hover:bg-gray-700 rounded transition">React <span aria-hidden="true">&rarr;</span></a>
                <a href="#" class="block p-4 hover:bg-gray-700 rounded transition">Prisma <span aria-hidden="true">&rarr;</span></a>
            </div>
        </section>
    </div>
      </div>
    </div>
</section>
      <Footers />
    </main>
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
