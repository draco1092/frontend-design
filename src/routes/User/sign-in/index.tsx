import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  useVisibleTask$(() => {
    // Limpia el historial previo al cargar la página
    history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  });
  return (
    <>
      {" "}
      <div class="relative flex min-h-screen items-center">
        <section class="absolute flex h-screen w-120 flex-col items-center justify-center rounded-lg border-r-8 border-r-purple-900/50 object-cover">
          <img
            src="/images/image(2).jpg"
            alt=""
            class="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div class="mx-auto w-full max-w-md">
            <div class="mb-12 text-center">
              <h2 class="mb-2 text-3xl font-bold text-violet-400">
                Inicio de Sesion
              </h2>
              <p class="text-purple-300">
                Ingresa tus datos para iniciar sesion
              </p>
            </div>
            <div class="space-y-6">
              <div>
                <label class="mb-2 block text-sm font-medium text-purple-400">
                  {" "}
                  Correo Electronico{" "}
                </label>
                <input
                  name="email"
                  type="text"
                  class="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-purple-400"
                  placeholder="abc@ejemplo.com"
                />
              </div>
              <div>
                <label class="mb-2 block text-sm font-medium text-purple-400">
                  {" "}
                  Contraseña{" "}
                </label>
                <input
                  name="password"
                  type="password"
                  class="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-purple-400"
                />
              </div>
              <div>
                <div class="mt-12">
                  <button
                    type="button"
                    class="w-full cursor-pointer rounded-md bg-purple-700 px-4 py-3 text-sm font-medium tracking-wider text-white hover:bg-purple-800 focus:outline-none"
                  >
                    iniciar Sesion
                  </button>
                </div>
                <p class="mt-6 text-center text-sm text-purple-300">
                  No tienes una cuenta?
                  <a
                    href="/User/Sign-up"
                    class="ml-1 font-medium text-indigo-500 hover:underline"
                  >
                    {" "}
                    haste una cuenta aqui!{" "}
                  </a>
                </p>
              </div>
            </div>
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
