import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const email = useSignal("");
  const password = useSignal("");
  const confirmPassword = useSignal("");
  const isLoading = useSignal(false);
  const message = useSignal({ text: "", isError: false });

  useVisibleTask$(() => {
    history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  });

  const handleSignUp = $(async () => {
    // Reset message
    message.value = { text: "", isError: false };

    // Validate inputs
    if (!email.value || !password.value || !confirmPassword.value) {
      message.value = { text: "Por favor complete todos los campos", isError: true };
      return;
    }

    if (password.value !== confirmPassword.value) {
      message.value = { text: "Las contraseñas no coinciden", isError: true };
      return;
    }

    if (password.value.length < 6) {
      message.value = { text: "La contraseña debe tener al menos 6 caracteres", isError: true };
      return;
    }

    // Show loading state
    isLoading.value = true;

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if user exists
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.some((user: any) => user.email === email.value)) {
        message.value = { text: "Este correo ya está registrado", isError: true };
        return;
      }

      // Save new user
      users.push({ email: email.value, password: password.value });
      localStorage.setItem("users", JSON.stringify(users));

      // Show success message
      message.value = { text: "¡Cuenta creada exitosamente!", isError: false };
      
      // Clear form
      email.value = "";
      password.value = "";
      confirmPassword.value = "";

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/User/sign-in";
      }, 2000);

    } catch (error) {
      message.value = { text: "Error al crear la cuenta", isError: true };
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      <div class="relative flex min-h-screen items-center justify-center">
        <section class="bg-[url('/images/image(3)copia.jpg')] bg-cover absolute flex h-screen flex-col items-center justify-center rounded-lg border-x-8 border-x-purple-900/50">

          <section class="m-3x-auto flex min-h-screen w-full flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div class="mx-auto w-full max-w-md">
              <div class="mb-12 text-center">
                <h2 class="mb-2 text-3xl font-bold text-violet-400">
                  Crear una cuenta
                </h2>
                <p class="text-purple-300">Ingresa tus datos para registrarte</p>
              </div>
              <div class="space-y-6">
                {message.value.text && (
                  <div class={`p-4 rounded-md ${message.value.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {message.value.text}
                  </div>
                )}
                <div>
                  <label class="mb-2 block text-sm font-medium text-purple-200">
                    Correo Electronico
                  </label>
                  <input
                    value={email.value}
                    onInput$={(e) => email.value = (e.target as HTMLInputElement).value}
                    type="email"
                    maxLength={50}
                    class="w-80 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-black"
                    placeholder="abc@ejemplo.com"
                  />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-purple-200">
                    Contraseña
                  </label>
                  <input
                    value={password.value}
                    onInput$={(e) => password.value = (e.target as HTMLInputElement).value}
                    type="password"
                    maxLength={15}
                    class="w-80 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-black"
                  />
                  <p class="mt-1 text-xs text-purple-300">Mínimo 6 caracteres</p>
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-purple-200">
                    Confirmar Contraseña
                  </label>
                  <input
                    value={confirmPassword.value}
                    onInput$={(e) => confirmPassword.value = (e.target as HTMLInputElement).value}
                    type="password"
                    maxLength={15}
                    class="w-80 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-black"
                  />

                  <div class="mt-12">
                    <button
                      onClick$={handleSignUp}
                      disabled={isLoading.value}
                      class={`w-80 rounded-md px-4 py-3 text-sm font-medium tracking-wider text-white focus:outline-none
                        ${isLoading.value 
                          ? 'bg-fuchsia-400 cursor-not-allowed' 
                          : 'bg-fuchsia-600 hover:bg-fuchsia-700 cursor-pointer'}`}
                    >
                      {isLoading.value ? (
                        <span class="flex items-center justify-center">
                          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Procesando...
                        </span>
                      ) : 'Crear una cuenta'}
                    </button>
                  </div>
                  <p class="mt-6 text-center text-sm text-purple-300">
                    Ya tienes una cuenta?{" "}
                    <a
                      href="/User/sign-in"
                      class="ml-1 font-medium text-indigo-500 hover:underline"
                    >
                      Inicia sesión aquí!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Registrarse",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
