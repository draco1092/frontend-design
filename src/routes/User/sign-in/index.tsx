import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  useVisibleTask$(() => {
    history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  });
  return (
    <>
      {" "}
      <div class="relative flex min-h-screen items-center justify-center">
        <section class="bg-[url('/images/image(2)copia.jpg')] bg-cover absolute flex h-screen flex-col items-center justify-center rounded-lg border-x-8 border-x-purple-900/50">
          <section class="m-3x-auto flex min-h-screen w-full flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
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
                    class="w-80 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-purple-400"
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
                    class="w-80 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-purple-400"
                  />
                </div>
                <div>
                  <div class="mt-12">
                    <button
                      type="button"
                      class="w-80 cursor-pointer rounded-md bg-purple-700 px-4 py-3 text-sm font-medium tracking-wider text-white hover:bg-purple-800 focus:outline-none"
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
