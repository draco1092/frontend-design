import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {Headers2 } from "~/components/router-head/footer/header/Headers";
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
    <Headers2/>
    <main class="Pixelfont text-fuchsia-200 ">
      <img
          src="/images/image.jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        />
          <Slot />
      </main>
    </>
  );
});
