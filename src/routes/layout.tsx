import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
        <main>
          <img
          src="/images/image(2).jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        />
          <Slot />
        </main>
    </>
  );
});
