import { component$ } from "@builder.io/qwik";

export const Footers = component$(() => {
  return (
    <footer class="flex-wrapflex absolute bottom-0 flex h-40 w-full flex-col flex-wrap items-center justify-center space-y-6 border-t-4 border-[#d4c0e4] bg-gradient-to-b from-[#230f34] to-[#050108] px-4 py-8 text-center text-gray-400">
      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Recursos
      </h2>
      <ul class="font-medium text-gray-500 dark:text-gray-400">
        <li class="mb-4">
          <a href="https://qwik.dev/" class="hover:underline">
            Qwick
          </a>
        </li>
        <li>
          <a href="https://tailwindcss.com/" class="hover:underline">
            Tailwind CSS
          </a>
        </li>
      </ul>
      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        
      </h2>
      <ul class="font-medium text-gray-500 dark:text-gray-400">
        <li class="mb-4">
          <a
            href="https://github.com/themesberg/flowbite"
            class="hover:underline"
          >
            Github
          </a>
        </li>
        <li>
          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">
            Discord
          </a>
        </li>
      </ul>

      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Legal
      </h2>
      <ul class="font-medium text-gray-500 dark:text-gray-400">
        <li class="mb-4">
          <a href="#" class="hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Terms &amp; Conditions
          </a>
        </li>
      </ul>
    </footer>
  );
});
