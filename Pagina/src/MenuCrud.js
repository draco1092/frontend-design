import React, {useEffect, useState} from 'react';
import * as API from './api';

export default function MenuCrud(){
  const [items,setItems] = useState([]);
  useEffect(()=>{ API.fetchProducts().then(setItems).catch(e=>console.error(e)); },[]);
  return (
    <div>
      <h3>Menu - Lista de productos (CRUD demo)</h3>
      <ul>
        {items.map(it=>(
          <li key={it.id}>
            {it.title} - ${it.price}
            <button onClick={()=>navigator.clipboard.writeText(JSON.stringify(it))}>Copiar</button>
          </li>
        ))}
      </ul>
      <p>Nota: Implementar editar/eliminar en backend, aquí mostramos cómo consumir la API con fetch.</p>

    </div>
  );
}