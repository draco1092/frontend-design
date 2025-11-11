import { component$, useSignal, useStore, useVisibleTask$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

type Game = { id: string; title: string; price: number; img?: string };
type User = { id: string; name: string; email: string; role: string };

const LS_GAMES = "admin_games_v1";
const LS_USERS = "admin_users_v1";
const LS_SITE = "admin_site_v1";

export default component$(() => {
  const tab = useSignal<"games" | "users" | "site">("games");

  const state = useStore({
    games: [] as Game[],
    users: [] as User[],
    site: { title: "Mi Tienda", description: "Descripción corta", footer: "Derechos reservados" },
  });

  const newGame = useStore({ title: "", price: "0", img: "" });
  const newUser = useStore({ name: "", email: "", role: "user" });

  useVisibleTask$(() => {
    try {
      const g = localStorage.getItem(LS_GAMES);
      const u = localStorage.getItem(LS_USERS);
      const s = localStorage.getItem(LS_SITE);
      if (g) state.games = JSON.parse(g);
      if (u) state.users = JSON.parse(u);
      if (s) state.site = JSON.parse(s);
    } catch (e) {
      console.warn("Failed to load admin data:", e);
    }
  });

  const saveGames = $(() => localStorage.setItem(LS_GAMES, JSON.stringify(state.games)));
  const saveUsers = $(() => localStorage.setItem(LS_USERS, JSON.stringify(state.users)));
  const saveSite = $(() => localStorage.setItem(LS_SITE, JSON.stringify(state.site)));

  const addGame = $(() => {
    const id = Date.now().toString();
    const game: Game = { id, title: newGame.title || "Untitled", price: Number(newGame.price) || 0, img: newGame.img || undefined };
    state.games = [game, ...state.games];
    newGame.title = "";
    newGame.price = "0";
    newGame.img = "";
    saveGames();
  });

  const removeGame = $((id: string) => {
    state.games = state.games.filter((g) => g.id !== id);
    saveGames();
  });

  const addUser = $(() => {
    const id = Date.now().toString();
    const user: User = { id, name: newUser.name || "User", email: newUser.email || "", role: newUser.role || "user" };
    state.users = [user, ...state.users];
    newUser.name = "";
    newUser.email = "";
    newUser.role = "user";
    saveUsers();
  });

  const removeUser = $((id: string) => {
    state.users = state.users.filter((u) => u.id !== id);
    saveUsers();
  });

  const updateSite = $(() => {
    saveSite();
  });

  return (
    <div class="min-h-screen bg-gray-50 p-4 md:p-8">
      <div class="max-w-6xl mx-auto text-black">
        <header class="mb-6 flex items-center justify-between">
          <h1 class="text-2xl font-bold text-black">Admin Panel</h1>
          <nav class="flex gap-2">
            <button onClick$={$(() => (tab.value = "games"))} class={`px-3 py-2 rounded ${tab.value === "games" ? "bg-violet-600 text-black" : "bg-white"}`}>
              Juegos
            </button>
            <button onClick$={$(() => (tab.value = "users"))} class={`px-3 py-2 rounded ${tab.value === "users" ? "bg-violet-600 text-black" : "bg-white"}`}>
              Usuarios
            </button>
            <button onClick$={$(() => (tab.value = "site"))} class={`px-3 py-2 rounded ${tab.value === "site" ? "bg-violet-600 text-black" : "bg-white"}`}>
              Datos del sitio
            </button>
          </nav>
        </header>

        <main class="bg-white rounded-lg shadow p-4 md:p-6">
          {tab.value === "games" && (
            <section>
              <h2 class="text-xl font-semibold mb-4">Juegos</h2>

              <form onSubmit$={$((e) => { e.preventDefault(); addGame(); })} class="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                <input placeholder="Título" value={newGame.title} onInput$={$((ev: any) => (newGame.title = ev.target.value))} class="px-3 py-2 border rounded" />
                <input placeholder="Precio" type="number" value={newGame.price} onInput$={$((ev: any) => (newGame.price = ev.target.value))} class="px-3 py-2 border rounded" />
                <input placeholder="Imagen (ruta)" value={newGame.img} onInput$={$((ev: any) => (newGame.img = ev.target.value))} class="px-3 py-2 border rounded" />
                <div class="sm:col-span-3 flex justify-end">
                  <button type="submit" class="px-4 py-2 bg-violet-600 text-black rounded">Agregar juego</button>
                </div>
              </form>

              <div class="space-y-3">
                {state.games.length === 0 ? (
                  <p class="text-sm text-gray-500">No hay juegos aún.</p>
                ) : (
                  state.games.map((g) => (
                    <div key={g.id} class="flex items-center justify-between border p-3 rounded">
                      <div class="flex items-center gap-3">
                        <div class="w-16 h-16 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                          {g.img ? <img src={g.img} alt={g.title} class="w-full h-full object-cover" /> : <span class="text-sm text-black">No image</span>}
                        </div>
                        <div>
                          <div class="font-semibold">{g.title}</div>
                          <div class="text-sm text-gray-600">${g.price}</div>
                        </div>
                      </div>
                      <div class="flex gap-2">
                        <button onClick$={$(() => removeGame(g.id))} class="px-3 py-1 bg-red-500 text-black rounded text-sm">Eliminar</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}

          {tab.value === "users" && (
            <section>
              <h2 class="text-xl font-semibold mb-4">Usuarios</h2>

              <form onSubmit$={$((e) => { e.preventDefault(); addUser(); })} class="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                <input placeholder="Nombre" value={newUser.name} onInput$={$((ev: any) => (newUser.name = ev.target.value))} class="px-3 py-2 border rounded" />
                <input placeholder="Email" type="email" value={newUser.email} onInput$={$((ev: any) => (newUser.email = ev.target.value))} class="px-3 py-2 border rounded" />
                <select value={newUser.role} onChange$={$((ev: any) => (newUser.role = ev.target.value))} class="px-3 py-2 border rounded">
                  <option value="user">Usuario</option>
                  <option value="admin">Administrador</option>
                </select>
                <div class="sm:col-span-3 flex justify-end">
                  <button type="submit" class="px-4 py-2 bg-violet-600 text-black rounded">Agregar usuario</button>
                </div>
              </form>

              <div class="space-y-3">
                {state.users.length === 0 ? (
                  <p class="text-sm text-gray-500">No hay usuarios aún.</p>
                ) : (
                  state.users.map((u) => (
                    <div key={u.id} class="flex items-center justify-between border p-3 rounded">
                      <div>
                        <div class="font-semibold">{u.name}</div>
                        <div class="text-sm text-gray-600">{u.email} · <span class="capitalize">{u.role}</span></div>
                      </div>
                      <div class="flex gap-2">
                        <button onClick$={$(() => removeUser(u.id))} class="px-3 py-1 bg-red-500 text-black rounded text-sm">Eliminar</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}

          {tab.value === "site" && (
            <section>
              <h2 class="text-xl font-semibold mb-4">Datos del sitio</h2>
              <div class="grid grid-cols-1 gap-3">
                <input value={state.site.title} onInput$={$((ev: any) => (state.site.title = ev.target.value))} class="px-3 py-2 border rounded" />
                <input value={state.site.description} onInput$={$((ev: any) => (state.site.description = ev.target.value))} class="px-3 py-2 border rounded" />
                <input value={state.site.footer} onInput$={$((ev: any) => (state.site.footer = ev.target.value))} class="px-3 py-2 border rounded" />
                <div class="flex justify-end">
                  <button onClick$={updateSite} class="px-4 py-2 bg-violet-600 text-black rounded">Guardar</button>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Admin - Mi Tienda",
  meta: [
    { name: "description", content: "Panel administrativo (frontend only)" },
  ],
};

