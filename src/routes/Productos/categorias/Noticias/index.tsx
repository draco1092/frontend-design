import { component$, useResource$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Headers1 } from "~/components/router-head/footer/header/Headers";
import { Footers } from "~/components/router-head/footer/header/Footers";
import { head } from "../../..";



export default component$(() => {
  
  const commits = useResource$(async () => {
    const res = await fetch("https://api.github.com/repos/draco1092/frontend-design/commits");
    const data = await res.json();
    return data.slice(0, 5); 
  });

  
  return (
    <>  <main class="relative">
        <img
          src="/images/image(1).jpg"
          alt=""
          class="fixed inset-0 -z-10 h-full w-full object-cover object-center"
        /></main>
    <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900/10">
      <main class="flex-grow">
      </main>

        <h2 class="text-lg font-semibold mb-4">Cambios recientes</h2>

        <Resource
          value={commits}
          onPending={() => <p class="text-gray-400">Cargando historial...</p>}
          onRejected={(error) => (
            <p class="text-red-400">Error: {error.message}</p>
          )}
          onResolved={(data) => (
            <ul class="space-y-4">
              {data.map((commit: any) => {

                const [title, ...descLines] = commit.commit.message.split("\n");
                const description = descLines.join("\n").trim();

                return (
                  <li
                    key={commit.sha}
                    class="rounded-lg border border-gray-700 bg-purple-900/60 p-4 hover:bg-indigo-700/70 transition-colors"
                  >

                    <h3 class="text-base font-semibold text-white">
                      {title || "(Sin título)"}
                    </h3>


                    {description && (
                      <p class="text-sm text-gray-300 mt-1 whitespace-pre-line">
                        {description}
                      </p>
                    )}

                    <a
                      href={commit.html_url}
                      target="_blank"
                      class="text-blue-400 underline text-xs mt-1 inline-block"
                    >
                      Ver en GitHub →
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        />

    </div>
    <Footers />
    </>
  );
});
