import { component$, Slot} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {;
  return (
    <><header>
      <nav class="navbar h-20 border-b-3 border-dashed border-[#230f34] bg-[#230f34]/25 flex items-center justify-between flex-wrap">
        <button>a</button>
      </nav>
    </header>
     

    

    <section class="relative bg-[url('/images/image(2).jpg')] bg-cover bg-fixed min-h-screen text-white">

      <main class="">
    <figure class=" "> 
    </figure>
     <Slot />
      </main>
    </section>

      <footer class="navbar h-40 border-t-7 border-solid border-[100217]
        bg-[#140521] 
       flex items-center justify-center flex-wrap">  </footer>
    </>
  );
});
