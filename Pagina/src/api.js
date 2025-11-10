// simple fetch wrapper to talk to the backend (assumes backend runs on http://localhost:3000)
const BASE = process.env.REACT_APP_API_BASE || "http://localhost:3000";

function authHeaders() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function handleRes(res) {
  const text = await res.text();
  try { const json = JSON.parse(text); if (!res.ok) throw json; return json; } catch(e) {
    if (!res.ok) throw { status: res.status, message: text || 'Error' };
    try { return JSON.parse(text); } catch(_){ return text; }
  }
}

export async function fetchCategories() {
  const res = await fetch(`${BASE}/categories`, { headers: {...authHeaders()} });
  return handleRes(res);
}

export async function fetchProducts() {
  const res = await fetch(`${BASE}/products`, { headers: {...authHeaders()} });
  return handleRes(res);
}

export async function fetchProduct(id) {
  const res = await fetch(`${BASE}/products/${id}`, { headers: {...authHeaders()} });
  return handleRes(res);
}

export async function login(body) {
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(body)
  });
  return handleRes(res);
}

export async function register(body) {
  const res = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(body)
  });
  return handleRes(res);
}

export async function me() {
  const res = await fetch(`${BASE}/auth/me`, { headers: {...authHeaders()} });
  return handleRes(res);
}

export default {fetchCategories, fetchProducts, fetchProduct, login, register, me};