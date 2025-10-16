import { component$ } from "@builder.io/qwik";

export const Headers = component$(() => {
  return (
    <header>
  <div class=" ">
    <nav class="navbar flex h-15 items-center-safe justify-between space-x-1.5 border-b-3 border-[#230f34] bg-[#230f34]/25 shadow-md shadow-[#8f55c2]">
      <button class="h-[35px] w-[90px] space-x-3 rounded border-x-3 border-fuchsia-950 border-x-fuchsia-800 bg-[#2b282d]/37 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 hover:text-amber-50">Categorias</button>
      <div class="flex flex-row-reverse gap-0 space-x-1.5">
        <button class="h-[30px] w-[70px] rounded border-x-3 border-fuchsia-950 bg-[#2b282d]/37 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 hover:text-amber-50">Login</button>
        <button class="h-[30px] w-[70px] rounded border-x-3 border-fuchsia-950 bg-[#2b282d]/37 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 hover:text-amber-50">Register</button>
      </div>
    </nav>
  </div>
</header>

  );
});
