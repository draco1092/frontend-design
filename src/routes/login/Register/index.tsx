import { component$, } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {

  return (
    <><main data-transition="slide" class='text-2xl font-bold text-black'>
      <img
        src="/images/image(3).jpg"
        alt=""
        class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <main class="absolute left-0 flex flex-col h-screen w-[409px] bg-[#cc9dd1]/80 outline-4 outline-black transition-transform duration-700">
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold tracking-tight text-black">
              Registra tu Cuenta
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="post" class="space-y-6">

              <div>
                <label for="Usuario" class="block text-sm font-medium text-gray-900">
                  Nombre de Usuario
                </label>
                <div class="mt-2">
                  <input
                    id="Usuario"
                    type="text"
                    name="user"
                    required
                    autocomplete="username"
                    class="block w-full rounded-md bg-black/40 px-3 py-1.5 text-base text-white outline-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:outline-fuchsia-800 sm:text-sm"
                    placeholder="Tu nombre de usuario"
                  />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-900">
                  Correo Electrónico
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autocomplete="email"
                    class="block w-full rounded-md bg-black/40 px-3 py-1.5 text-base text-white outline-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:outline-fuchsia-800 sm:text-sm"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>


              <div>
                <label for="password" class="block text-sm font-medium text-gray-900">
                  Contraseña
                </label>
                <div class="mt-2">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    autocomplete="new-password"
                    class="block w-full rounded-md bg-black/40 px-3 py-1.5 text-base text-white outline-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:outline-fuchsia-800 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>


              <div>
                <label for="confirmPassword" class="block text-sm font-medium text-gray-900">
                  Confirmar Contraseña
                </label>
                <div class="mt-2">
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    required
                    autocomplete="new-password"
                    class="block w-full rounded-md bg-black/40 px-3 py-1.5 text-base text-white outline-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:outline-fuchsia-800 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>


              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-fuchsia-800 px-3 py-1.5 text-sm font-semibold text-white transition duration-300 hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Registrarse
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-black">
              ¿Ya estás registrado? 
              <a
                href="/login/Sign-in/"
                class="font-semibold text-fuchsia-600 hover:text-violet-700"
              >
                    Sign-In
              </a>
            </p>
          </div>
        </div>
      </main>
    </main>

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
