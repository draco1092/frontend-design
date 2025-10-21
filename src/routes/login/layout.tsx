import { component$, Slot} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useServerTimeLoader = routeLoader$(() => { 
  return  {
    date: new Date().toISOString(),
  };
});

export default component$(() => {;
  return (
    <><main class='text-2xl font-bold text-white relative min-h-screen flex flex-col items-center justify-center overflow-hidden'>
          <img
          src="/images/image(4).jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        />
          <Slot />
        </main>
    </>
  );
});
