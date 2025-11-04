import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Headers1 } from "~/components/router-head/footer/header/Headers";
export default component$(() => {
  return (
    <>
      <Headers1 />
      <div class="mt-10 flex flex-row justify-center">
        <section class="mt-16 h-screen items-center justify-center rounded-lg border-x-4 border-indigo-700 bg-[url('/images/image(6).jpg')] outline-8 outline-indigo-900 outline-double">
          <div class="relative z-10 flex flex-col items-center justify-center p-8 text-center">
            <img
              src="/images/descarga.jpeg"
              alt="Foto de perfil"
              class="mb-6 h-32 w-32 shrink-0 rounded-full bg-gray-300"
            />
            <h1 class="mb-1 text-3xl font-bold text-indigo-700">User Name</h1>
            <br />
            <p class="max-w-md text-base font-normal text-violet-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto porro voluptate dolorem? Non excepturi aliquid itaque
              consequuntur nemo minus ipsam consequatur quo perspiciatis
              reiciendis. Nihil ea consectetur consequatur nam ab.
            </p>
            <br />
          </div>
        </section>
      </div>
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
