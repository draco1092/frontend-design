import { component$ } from "@builder.io/qwik";
import { Category } from "./Category";

export const Menu = component$(() => {
  const productos =[ ///Si se te es posible conecta el menu.tsx y categorias.tsx, para que al dar click en una o en mas categorias se muestren los productos de esa categoria
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      imagen: "/images/Raccontest.jpeg",
      categoria: "accion",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 200,
      categoria: "aventura",
      imagen: "/images/Raccontest.jpeg"
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 300,
      imagen: "/images/Raccontest.jpeg",
      categoria: "rol"
    }
  ];
  return (
    <ul class=" text-purple-200 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productos.map((producto) => (
      <li key={producto.id}>
        <a href={`/Productos/categorias/Display-producto/${producto.id}`} class="group">
          <img
            src={producto.imagen} 
            alt={producto.nombre}
            class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
          <h3 class="Pixelfont mt-4 text-xl text-purple-400">{producto.nombre}</h3>
          <p class="mt-1 text-xlg font-medium ">{`$${producto.precio}`}</p>
        </a>{" "}
        
      </li>
    ))}
    </ul>
  );
});