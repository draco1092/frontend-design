import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {Carrusel} from "~/components/router-head/carrusel/carrusel";
import { Mosaic } from "~/components/router-head/Menus/menu";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from '@builder.io/qwik-city';



export default component$(() => {
  const loc = useLocation();
  const TituloPagina = loc.url.pathname.split('/').filter(Boolean).pop() || 'Home';
  return (
    <>
    <section>
<br />
    <h1 class="text-9xl text-center ">{TituloPagina}</h1>
    <br />
          <h1 class="text-6xl text-center "> juegos nuevos</h1>
          <br />
          <Carrusel/>
          
          <h1 class="text-6xl text-center "> juegos destacados</h1>
          <br />
          <Carrusel/>
          <br />
        </section>
          

         
       
       
          
<h1 class="text-6xl text-center bg-[#110818]">lista de juegos </h1>
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
export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
