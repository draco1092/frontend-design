import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {Carrusel} from "~/components/router-head/carrusel/carrusel";
import { Mosaic } from "~/components/router-head/Menus/menu";


export default component$(() => {
  return (
    <>
    <section>
<br />
    <h1 class="text-9xl text-center ">Titulo categoria</h1>
    <br />
          <h1 class="text-6xl text-center "> juegos nuevos</h1>
          <br />
          <Carrusel/>
          
          <h1 class="text-6xl text-center "> juegos destacados</h1>
          <br />
          <Carrusel/>
          <br />
        </section>
          

          <div class="absolute inset-0 bg-gradient-to-t from-[#230f34]/75 from-5% to-transparent" />

          <h1 class="text-6xl text-center">lista de juegos</h1>
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