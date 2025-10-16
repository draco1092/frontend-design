import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Headers } from "~/components/router-head/footer/header/Headers";
import { Footers } from "~/components/router-head/footer/header/Footers";
import {Carrusel} from "~/components/router-head/carrusel/carrusel";
import { Mosaic } from "~/components/router-head/Menus/menu";


export default component$(() => {
  return (<>
  
  </>);
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
