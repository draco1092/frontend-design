import { component$ } from "@builder.io/qwik";

export const Headers1 = component$(() => {
  return (
    <header>
      <nav class="border-b-3 border-[#230f34] bg-[#230f34]/25 shadow-md shadow-[#8f55c2]">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a class="flex items-center">
            <img src="images/logo.svg" class="mr-3 h-6 md:h-9" alt="Midnight-Logo" />
          </a>
          <div class="flex items-center lg:order-2">
            <a href="/login/Sign-in/" class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 focus:ring-4 focus:ring-fuchsia-950 focus:outline-none lg:px-5 lg:py-2.5 dark:text-white dark:hover:bg-violet-950 dark:focus:ring-gray-800">Log in</a>
           
          </div>
          <div class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">
            <ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <a href="#" class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-white dark:text-white dark:hover:bg-fuchsia-700 dark:hover:text-fuchsia-700 lg:dark:hover:bg-transparent lg:dark:hover:text-fuchsia-600">Principal</a>
              </li>
              <li>
                <a href="#" class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-white dark:text-white dark:hover:bg-fuchsia-700 dark:hover:text-fuchsia-700 lg:dark:hover:bg-transparent lg:dark:hover:text-fuchsia-600">Categorias</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>


  );
});
export const Headers2 = component$(() => {
  return (
    <header>
      <nav class="border-b-3 border-[#230f34] bg-[#230f34]/25 shadow-md shadow-[#8f55c2]">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a class="flex items-center">
            <img src="images/logo.svg" class="mr-3 h-6 md:h-9" alt="Midnight-Logo" />
          </a>
          <div class="flex items-center lg:order-2">
            <a href="/login/Sign-in/" class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 focus:ring-4 focus:ring-fuchsia-950 focus:outline-none lg:px-5 lg:py-2.5 dark:text-white dark:hover:bg-violet-950 dark:focus:ring-gray-800">Log in</a>
           
          </div>
          <div class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">
            <ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <a href="#" class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-white dark:text-white dark:hover:bg-fuchsia-700 dark:hover:text-fuchsia-700 lg:dark:hover:bg-transparent lg:dark:hover:text-fuchsia-600">Pagina Principal</a>
              </li>
              <li>
                <a href="#" class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-white dark:text-white dark:hover:bg-fuchsia-700 dark:hover:text-fuchsia-700 lg:dark:hover:bg-transparent lg:dark:hover:text-fuchsia-600">Categorias</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>


  );
});
