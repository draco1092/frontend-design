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
      <main class="text-2xl font-bold text-white">
        <img
          src="/images/image(3).jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        />
      </main>
      <section class="-right absolute flex h-screen w-120 flex-col items-center justify-center rounded-lg border-r-8 border-r-purple-900/50 bg-[url('/images/image(4).jpg')] object-cover">
        <div class="mx-auto w-full max-w-md">
          <div class="mb-12 text-center">
            <h2 class="mb-2 text-3xl font-bold text-violet-400">
              Crear una cuenta
            </h2>
            <p class="text-purple-300">Ingresa tus datos para registrarte</p>
          </div>
          <div class="space-y-6">
            <div>
              <label class="mb-2 block text-sm font-medium text-purple-400">
                Correo Electronico
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
                Contraseña
              </label>
              <input
                name="password"
                type="password"
                class="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-purple-400"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium text-purple-400">
                Confirmar Contraseña
              </label>
              <input
                name="cpassword"
                type="password"
                class="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-purple-400"
              />

              <div class="mt-12">
                <button
                  type="button"
                  class="w-full cursor-pointer rounded-md bg-fuchsia-600 px-4 py-3 text-sm font-medium tracking-wider text-white hover:bg-fuchsia-700 focus:outline-none"
                >
                  Crear una cuenta
                </button>
              </div>
              <p class="mt-6 text-center text-sm text-purple-300">
                Ya tienes una cuenta?{" "}
                <a
                  href="/User/sign-in"
                  class="ml-1 font-medium text-indigo-500 hover:underline"
                >
                  Inicia sesión aquí!
                </a>
              </p>
            </div>
          </div>
        </div>
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
