import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Headers } from "~/components/router-head/footer/header/Headers";
import { Footers } from "~/components/router-head/footer/header/Footers";
import {Carrusel} from "~/components/router-head/carrusel/carrusel";
import { Mosaic } from "~/components/router-head/Menus/menu";


export default component$(() => {
  return (
    <>
    <section>
          <Carrusel/>
          <Carrusel/>
          <Carrusel/>
        </section>
          

          <div class="absolute inset-0 bg-gradient-to-t from-[#230f34]/75 from-5% to-transparent" />

      
      <section class="relative min-h-screen bg-[url('/images/image(6).jpg')] bg-cover bg-fixed text-white">
            <Mosaic/>
            <Mosaic/>
            <Mosaic/>
            <Mosaic/>
            <Mosaic/>        
          
        </section>
    </>
  );
});