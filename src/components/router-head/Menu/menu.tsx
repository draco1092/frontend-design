import { component$ } from "@builder.io/qwik";

export const Menu = component$(() => {
  return (
    <ul class=" text-purple-200 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <li>
        <a href="/Productos/categorias/Display-producto" class="group">
          <img
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
          <h3 class="Pixelfont mt-4 text-xl text-purple-400">Earthen Bottle</h3>
          <p class="mt-1 text-xlg font-medium ">$48</p>
        </a>{" "}
        
      </li>
    </ul>
  );
});