import React, { useEffect, useState } from 'react';
import * as API from '../../../api';

export default function Profile(){
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const raw = localStorage.getItem('user');
    if(raw) setUser(JSON.parse(raw));
    else {
      // try to fetch /auth/me
      API.me().then(u=>{ setUser(u); localStorage.setItem('user', JSON.stringify(u)); }).catch(()=>{});
    }
  },[]);
  if(!user) return <div>No estás logueado. <a href="/sign-in">Entrar</a></div>;
  return (
    <div>
      <h2>Perfil</h2>
      <p><strong>Nombre:</strong> {user.name || user.username || user.email}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}