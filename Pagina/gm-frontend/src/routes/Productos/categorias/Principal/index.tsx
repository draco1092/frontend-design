import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { Menu } from "../../../../components/router-head/Menu/menu";
import { Category } from "../../../../components/router-head/Menu/Category";
import { Footers } from "../../../../components/router-head/footer/header/Footers";

export default component$(() => {
  const loc = useLocation();
  const TituloPagina =
    loc.url.pathname.split("/").filter(Boolean).pop() || "Home";
  return (
    <>
      <main class="Pixelfont text-fuchsia-200">
        <img
          src="/images/image.jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        />{" "}
        <section>
          <br />
          <h1 class="mx-auto box-border flex w-fit max-w-fit rounded border-b-2 border-dotted border-purple-900 bg-purple-950/2 px-1.5 text-center text-9xl">
            {TituloPagina}
          </h1>
          <br />
          <h1 class="text-center text-6xl"> Categorias y Generos</h1>
          <Category />
        </section>
        <h1 class="mx-auto box-border flex w-fit max-w-fit border-2 border-[#110818] bg-[#201229] px-1.5 text-6xl">
          lista de juegos{" "}
        </h1>
        <section class="relative grid min-h-screen place-items-center bg-[url('/images/image(6).jpg')] bg-cover bg-fixed px-4 py-16 text-white sm:px-6 lg:px-8">
          <Menu />
        </section>
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
