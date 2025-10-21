import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Headers1 } from "~/components/router-head/footer/header/Headers";
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
       <main class=" text-fuchsia-200 pixel-font ">

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
