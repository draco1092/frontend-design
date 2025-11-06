import { component$ } from "@builder.io/qwik";

export const Category = component$(() => {
  return (
    <section class="bg-gray-50 py-8 antialiased md:py-16 dark:bg-gray-900/10">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="grid gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">

      <label class="flex items-center rounded border border-purple-900 hover:bg-purple-950 hover:text-indigo-500 cursor-pointer transition-colors duration-200">
        <input type="checkbox" class="hidden peer" />
        <span class="text-2xl font-medium peer-checked:text-indigo-100 peer-checked:bg-purple-800 w-full text-center  py-1 transition-colors duration-200">
          Acción
        </span>
      </label>


    </div>
  </div>
</section>

  );
});