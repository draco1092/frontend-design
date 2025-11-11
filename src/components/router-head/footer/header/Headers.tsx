import { component$, useSignal } from "@builder.io/qwik";

export const Headers1 = component$(() => {// en este no ahi mensaje cuando conectes la base de datos, me avisas y yo lo termino despues del usuario
  const open = useSignal(false);

  return (
    <header class="Pixelfont text-md text-purple-200">
      <nav class="border-b-3 border-[#230f34] bg-[#230f34]/25 shadow-md shadow-[#8f55c2]">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
          <a class="flex items-center h-10">
            <img
              src="/images/M-Logo.svg"
              class="h-8 w-auto"
              alt="Midnight Logo"
              loading="lazy"
            />
          </a>

          <div class="flex items-center lg:order-2">
             <div class="relative inline-block text-left">
                <input
                  type="checkbox"
                  id="dropdown-toggle"
                  class="peer hidden"
                />

                <label
                  htmlFor="dropdown-toggle"
                  class="block text-2xl h-fit px-6 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Usuario
                </label>

                <div class="pointer-events-none absolute right-0 z-10 mt-2 w-40 origin-top-right scale-95 rounded bg-indigo-950 text-white opacity-0 shadow-lg outline-1 -outline-offset-1 outline-purple-900/60 transition-discrete duration-200 ease-out peer-checked:pointer-events-auto peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:opacity-100">
                  <a
                    href="/User/sign-in/"
                    class="block px-4 py-2 hover:bg-indigo-900"
                  >
                    Iniciar Sesion
                  </a>
                  <a
                    href="/User/Sign-up/"
                    class="block px-4 py-2 hover:bg-indigo-900"
                  >
                    Registrarse
                  </a>
                </div>
              </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open.value}
              onClick$={() => (open.value = !open.value)}
              class="ml-2 inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-fuchsia-950/20 lg:hidden"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={open.value ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          <div
            class="hidden w-full space-x-4 items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
                <a
                  href="/"
                  class="block px-3 h-8 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Info Principal
                </a>
                <a
                  href="/Productos/categorias/Principal"
                  class="block px-3 h-8 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Pagina Principal
                </a>
                <a
                  href="/Productos/categorias/Noticias"
                  class="block px-3 h-8 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Noticias
                </a>
                <a
                  href="/Productos/categorias/Carrito"
                  class="block px-3 h-8 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Carrito
                </a>
            </div>
        </div>

        <div class={open.value ? "block lg:hidden px-4 pb-4" : "hidden lg:hidden px-4 pb-4"}>
          <ul class="space-y-2">
            <li>
<a
                  href="/"
                  class="block h-8 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Info Principal
                </a>
                <a
                  href="/Productos/categorias/Principal"
                  class="block h-8 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Pagina Principal
                </a>
                <a
                  href="/Productos/categorias/Noticias"
                  class="block h-8 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Noticias
                </a>            
                <a
                  href="/Productos/categorias/Carrito"
                  class="block h-8 rounded border-b border-dotted border-purple-900 hover:bg-purple-950/20 hover:text-indigo-500"
                >
                  Carrito
                </a>  
                </li>
          </ul>
        </div>
      </nav>
    </header>
  );
});
