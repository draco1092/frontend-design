import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Headers1 } from "~/components/router-head/footer/header/Headers";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  descripcion?: string;
  tamano?: string;
}

export default component$(() => {
  const productos = useSignal<Producto[]>([]);
  const categoriaSeleccionada = useSignal("todos");
  const isLoading = useSignal(true);

  // Cargar productos desde localStorage
  useVisibleTask$(() => {
    const productosGuardados = localStorage.getItem("productos");
    if (productosGuardados) {
      productos.value = JSON.parse(productosGuardados);
    } else {
      // Productos por defecto si no hay nada en localStorage
      productos.value = [
        {
          id: 1,
          nombre: "Mapache",
          precio: 299,
          imagen: "/images/Raccontest.jpeg",
          categoria: "aventura",
          descripcion: "e un mapuche",
          tamano: "10000002 GB"
        },
       
      ];
    }
    isLoading.value = false;
  });

  const productosFiltrados = categoriaSeleccionada.value === "todos" 
    ? productos.value 
    : productos.value.filter(p => p.categoria === categoriaSeleccionada.value);

  return (
    <>
        <Headers1 />
        <a href="/User/user-page" class=" max-w-fit rounded flex bg-violet-500 px-4 py-2 font-medium text-black hover:brightness-95 m-5">Volver</a>
      <div class="text-slate-100 antialiased">
        <div class="mx-auto max-w-7xl p-6">
          <section class="rounded-2xl bg-violet-950/40 p-6">
            <div class="md:col-span-3">
              {isLoading.value ? (
                <div class="flex justify-center items-center min-h-[380px]">
                  <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
                </div>
              ) : (
                <div class="flex min-h-[380px] flex-col rounded-2xl p-6 shadow-md">
                  <div class="details flex-1">
                    {productosFiltrados.map((producto) => (
                      <article key={producto.id} class="detail detail-1 rounded-lg p-4 mb-6 bg-violet-900/30">
                        <div class="md:flex md:gap-6">
                          <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            class="w-full rounded-lg border border-slate-700 object-cover md:w-1/3"
                          />
                          <div class="mt-4 md:mt-0 md:flex-1">
                            <h3 class="text-2xl font-semibold">{producto.nombre}</h3>
                            <p class="mt-2 text-slate-400">
                              {producto.descripcion || "Sin descripción disponible"}
                            </p>
                            <div class="mt-4 flex flex-wrap gap-2">
                              <span class="rounded bg-slate-800 px-2 py-1 text-xs capitalize">
                                {producto.categoria}
                              </span>
                              <span class="rounded bg-slate-800 px-2 py-1 text-xs">
                                Singleplayer
                              </span>
                              {producto.tamano && (
                                <span class="rounded bg-slate-800 px-2 py-1 text-xs">
                                  Tamaño: {producto.tamano}
                                </span>
                              )}
                            </div>

                            <div class="mt-6 flex gap-3">
                              <button class="rounded bg-emerald-500 px-4 py-2 font-medium text-black hover:brightness-95">
                                Jugar
                              </button>
                              <button class="rounded border border-slate-700 px-4 py-2 text-slate-200 hover:bg-violet-800/30">
                                Detalles
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div class="mt-6 flex items-center justify-between text-sm text-slate-400">
                    <div class="flex items-center gap-2">
                      Filtrar: 
                      <select 
                        value={categoriaSeleccionada.value}
                        onChange$={(e) => categoriaSeleccionada.value = (e.target as HTMLSelectElement).value}
                        class="rounded bg-slate-800 px-2 py-1 text-slate-200 cursor-pointer"
                      >
                        <option value="todos">Todos</option>
                        <option value="accion">Acción</option>
                        <option value="aventura">Aventura</option>
                        <option value="rol">Rol</option>
                      </select>
                    </div>
                    <div class="flex items-center gap-3">
                      <a href="/Productos/categorias/Principal/" class="text-slate-400 hover:text-slate-200">
                        Ver tienda
                      </a>
                      <button 
                        onClick$={() => window.location.reload()}
                        class="text-slate-400 hover:text-slate-200"
                      >
                        Actualizar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
});
