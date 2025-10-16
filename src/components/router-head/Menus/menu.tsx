import { component$, useSignal, $ } from "@builder.io/qwik";

export const Mosaic = component$(() => {

  return (
    <div class="m-4 grid grid-cols-4 flex-row gap-4 rounded-lg border-4 border-[#110818] p-4">
      <div>
        <img
          class="bg-gray-000 h-72 w-full object-fill"
        />
      </div>

      <div>
        <img
          
          class="bg-gray-000 h-72 w-full object-fill"
        />
      </div>

      <div>
        <img
          
          class="bg-gray-000 h-72 w-full object-fill"
        />
      </div>

      <div>
        <img
          
          class="bg-gray-000 h-72 w-full object-fill"
        />
      </div>
    </div>
  );
});
