import { component$, useSignal, } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  const rightPanelActive = useSignal(false);

  return (
    <><section class="mx-auto flex h-screen min-h-[480px] w-[768px] items-center">
      <div
        class={{
          'relative rounded-lg  overflow-hidden w-[768px] max-w-full min-h-[480px] transition-all duration-[600ms] ease-in-out':
            true,
          'right-panel-active': rightPanelActive.value,
        }}
      >
        {/* Sign Up */}
        <div class="absolute top-0 h-full left-0 w-1/2 opacity-0 z-[1] transition-all duration-[600ms] ease-in-out sign-up-container">
          <form class="bg-fuchsia-900 flex flex-col items-center justify-center p-12 h-full text-center">
            <h1 class="font-bold text-2xl">Create Account</h1>

            

            <span class="text-xs">or use your email for registration</span>
            <input type="text" placeholder=" Name" class="text-black bg-gray-200 py-3 px-4 my-2 w-full rounded" />
            <input type="email" placeholder="Email" class="text-black bg-gray-200 py-3 px-4 my-2 w-full rounded" />
            <input type="password" placeholder="Password" class="text-black bg-gray-200 py-3 px-4 my-2 w-full rounded" />
            <button
              type="button"
              class="rounded-full border border-[#210212] bg-[#460c3b] text-white text-xs font-bold py-3 px-12 uppercase tracking-wider active:scale-95 transition-transform"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In */}
        <div class="absolute top-0 left-0 w-1/2 h-full z-[2] transition-all duration-[600ms] ease-in-out sign-in-container">
          <form class="bg-violet-950 flex flex-col items-center justify-center p-12 h-full text-center">
            <h1 class="font-bold text-2xl">Sign In</h1>

           

            <span class="text-xs">or use your account</span>
            <input type="email" placeholder="Email" class="text-black bg-gray-200 py-3 px-4 my-2 w-full rounded" />
            <input type="password" placeholder="Password" class="text-black bg-gray-200 py-3 px-4 my-2 w-full rounded" />
            <a href="#" class="text-gray-400 text-sm my-3">Forgot your password?</a>
            <button
              type="button"
              class="rounded-full border border-[#210212] bg-[#460c3b] text-white text-xs font-bold py-3 px-12 uppercase tracking-wider active:scale-95 transition-transform"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay */}
       <div class="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-[600ms] ease-in-out z-[100] overlay-container">
  
  <div class="relative left-[-100%] h-full w-[200%] transform transition-transform duration-[600ms] ease-in-out overlay">

    <div 
      class="absolute flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 transform transition-transform duration-[600ms] ease-in-out overlay-left bg-cover bg-center bg-no-repeat text-white"
      style="background-image: url('/images/image(2).jpg');"
    >
      <h1 class="text-3xl font-bold">Welcome Back!</h1>
      <p class="text-sm mt-3 mb-6">To keep connected with us please login with your personal info</p>
      <button
        class="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 uppercase tracking-wider"
        onClick$={() => (rightPanelActive.value = false)}
      >
        Sign In
      </button>
    </div>

    <div 
      class="absolute right-0 flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 transform transition-transform duration-[600ms] ease-in-out overlay-right bg-cover bg-center bg-no-repeat text-white"
      style="background-image: url('/images/image(3).jpg');"
    >
      <h1 class="text-3xl font-bold">Hello, Friend!</h1>
      <p class="text-sm mt-3 mb-6">Enter your personal details and start journey with us</p>
      <button
        class="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 uppercase tracking-wider"
        onClick$={() => (rightPanelActive.value = true)}
      >
        Sign Up
      </button>
    </div>
  </div>
</div>
</div>

</section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
