import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { title } from "process";
import { Headers1 } from "~/components/router-head/footer/header/Headers";
export default component$(() => {
  return (
    <>
      <Headers1 />

      <div class="mx-auto mt-10 max-w-6xl px-4">
  
  <div class="relative overflow-hidden rounded-lg border border-[#582a5e] shadow-lg">
    <img
      src="/images/steam-banner.jpg"
      alt="Banner"
      class="h-56 w-full object-cover opacity-90"
    />
    <div class="absolute right-0 bottom-0 left-0 h-24 bg-linear-to-t from-[#1e1721] to-transparent"></div>

    <div class="absolute bottom-4 left-6 flex items-end gap-4">
      <img
        src="/images/descarga.jpeg"
        alt="Avatar"
        class="h-20 w-20 rounded-full border-4 border-violet-950/65 shadow-xl"
      />
      <div>
        <h1 class="text-2xl font-bold text-white drop-shadow-lg">User.name</h1>
        <p class="mt-1 text-sm text-cyan-100">User.Role</p>
      </div>
    </div>
  </div>

  
  <div class="mt-8 flex flex-col-reverse gap-6 lg:flex-row">
    
    <div class="w-full space-y-3 lg:w-64">
   
      <div class="grid grid-cols-2 gap-2 rounded-lg border border-[#582a5e] bg-[#171122] p-3 shadow-lg">
        <button
          class="bg-[#0e141b] border border-[#582a5e] rounded-md p-2 text-sm text-white font-semibold text-center hover:bg-[#2b1b38] transition"
        ><a href="/User/Biblioteca">
          Biblioteca</a>
        </button>
        <button
          class="bg-[#0e141b] border border-[#582a5e] rounded-md p-2 text-sm text-white font-semibold text-center hover:bg-[#251b38] transition"
        >
          Editar
        </button>
        <button
          class="bg-[#0e141b] border border-[#582a5e] rounded-md p-2 text-sm text-white font-semibold text-center hover:bg-[#251b38] transition"
        >
          Amigos
        </button>
        
      </div>

      <div class="grid grid-cols-2 gap-2 rounded-lg border border-[#582a5e] bg-[#171122] p-3 shadow-lg">
        <div class="bg-[#0e141b] border border-[#582a5e] rounded-md p-2 text-center hover:bg-[#251b38] transition">
          <p class="text-lg font-bold text-white">124</p>
          <p class="text-xs text-gray-400">Juegos</p>
        </div>

        <div class="bg-[#0e141b] border border-[#582a5e] rounded-md p-2 text-center hover:bg-[#251b38] transition">
          <p class="text-lg font-bold text-white">12</p>
          <p class="text-xs text-gray-400">Amigos</p>
        </div>
      </div>
    </div>


    <div class="flex-1 rounded-lg border border-[#582a5e] bg-[#16121d] shadow-lg">
      <div class="border-b border-[#582a5e] p-6">
        <h2 class="mb-2 text-xl font-semibold text-[#a866f4]">Descripción</h2>
        <p class="leading-relaxed text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate soluta totam excepturi autem et qui quidem
          architecto odio, provident, quisquam fugiat dolor explicabo est tempora! Odio deserunt veritatis sequi quas.
        </p>
      </div>

      <div class="p-6">
        <h2 class="mb-4 text-xl font-semibold text-[#a866f4]">Actividad reciente</h2>

        <div class="space-y-4">
          <div class="flex gap-4">
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_184x69.jpg"
              class="h-20 w-32 rounded-md border border-[#582a5e]"
              alt=""
            />
            <div class="flex-1">
              <h3 class="font-semibold text-white">Counter-Strike 2</h3>
              <p class="text-sm text-gray-400">Últimas 2 semanas: 14 h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>

  );
});

export const head: DocumentHead = {
  title: "User Page",
  meta: [
    {
      name: "description",
      content: "User page description",
    },
  ],
};  