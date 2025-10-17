import { component$, } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {

  return (
    <><main   data-transition="slide" class="absolute right-0 flex flex-col h-screen w-[409px] bg-[#cc9dd1]/80 outline-4 outline-black">
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Ingresa con tu Cuenta</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" class="space-y-6">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Correo Electronico</label>
          <div class="mt-2">
            <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-black/40 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-800 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Copntraseña</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-fuchsia-600 hover:text-violet-700">Olvidaste la Contraseña?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-black/40 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-800 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" class="delay-05 flex w-full justify-center rounded-md bg-fuchsia-800 px-3 py-1.5 text-sm/6 font-semibold text-white transition duration-300 hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-black">
        No Tienes Cuenta? 
        <a href="/login/Register" class="font-semibold text-fuchsia-600 hover:text-violet-700"> Registrate</a>
      </p>
    </div>
  </div>
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
