import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Headers } from "~/components/router-head/footer/header/Headers";
import { Footers } from "~/components/router-head/footer/header/Footers";
import {Carrusel} from "~/components/router-head/carrusel/carrusel";
import { Mosaic } from "~/components/router-head/Menus/menu";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <Headers />{" "}
      <main class="relative">
        <img
          src="/images/image.jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <section>
          <Carrusel/>
          <Carrusel/>
          <Carrusel/>
        </section>
          

          <div class="absolute inset-0 bg-gradient-to-t from-[#230f34]/75 from-5% to-transparent" />

          <Slot />

          <section class="relative min-h-screen bg-[url('/images/image(6).jpg')] bg-cover bg-fixed text-white">
            <Mosaic/>
            <Mosaic/>
            <Mosaic/>
            <Mosaic/>
            <Mosaic/>        
          
        </section>
      </main>
      <Footers />
    </>
  );
});
