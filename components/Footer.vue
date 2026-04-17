<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { Car, Factory, HeartPulse, Leaf, ShoppingBag } from "lucide-vue-next";
import PreviewDemo from "./PreviewDemo.vue";

const isDark = ref(false);
let themeObserver: MutationObserver | null = null;

onMounted(() => {
  const syncTheme = () => {
    isDark.value = document.documentElement.classList.contains("dark");
  };

  syncTheme();
  themeObserver = new MutationObserver(syncTheme);
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
});

onUnmounted(() => {
  themeObserver?.disconnect();
  themeObserver = null;
});
</script>

<template>
  <div class="bg-white dark:bg-slate-950 transition-colors duration-200">
    <section
      class="pt-24 pb-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-200"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h2
            class="text-4xl md:text-5xl font-semibold text-center mb-4 text-black dark:text-white"
          >
            See It in
            <span
              class="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              >Action</span
            >
          </h2>
          <p
            class="text-gray-500 text-center text-base max-w-2xl mx-auto mb-12"
          >
            A clean, powerful interface designed for speed and accuracy.
          </p>
        </div>

        <div class="mt-12">
          <PreviewDemo />
        </div>
      </div>
    </section>

    <section
      id="use-cases"
      class="py-20 px-6 bg-white dark:bg-[linear-gradient(180deg,#020617_0%,#020617_56%,#020617_100%)] transition-colors duration-200"
    >
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <h2
            class="[font-family:Inter,ui-sans-serif,system-ui,sans-serif] text-[32px] md:text-[40px] lg:text-[56px] font-bold tracking-[-0.02em] leading-[1.1] text-center text-white mb-3 transition-colors duration-200"
          >
            Built for
            <span
              class="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >Every Industry</span
            >
          </h2>
          <p
            class="mt-0 text-slate-600 dark:text-slate-400 text-lg transition-colors duration-200"
          >
            From factory floors to research labs.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          <article
            class="lg:col-span-2 bg-[#0B1220] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)] hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4"
            >
              <Factory class="w-6 h-6 text-cyan-400" />
            </div>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-200"
            >
              Manufacturing
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 transition-colors duration-200"
            >
              Defect detection and quality control.
            </p>
          </article>
          <article
            class="lg:col-span-2 bg-[#0B1220] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)] hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4"
            >
              <HeartPulse class="w-6 h-6 text-cyan-400" />
            </div>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-200"
            >
              Medical Imaging
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 transition-colors duration-200"
            >
              Annotate X-rays, MRIs, and pathology slides.
            </p>
          </article>
          <article
            class="lg:col-span-2 bg-[#0B1220] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)] hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4"
            >
              <Car class="w-6 h-6 text-cyan-400" />
            </div>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-200"
            >
              Autonomous Driving
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 transition-colors duration-200"
            >
              Label roads, vehicles, and pedestrians.
            </p>
          </article>
          <article
            class="lg:col-span-2 lg:col-start-2 bg-[#0B1220] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)] hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4"
            >
              <Leaf class="w-6 h-6 text-cyan-400" />
            </div>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-200"
            >
              Agriculture
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 transition-colors duration-200"
            >
              Identify crop diseases and estimate yield.
            </p>
          </article>
          <article
            class="lg:col-span-2 lg:col-start-4 bg-[#0B1220] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)] hover:-translate-y-1"
          >
            <div
              class="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4"
            >
              <ShoppingBag class="w-6 h-6 text-cyan-400" />
            </div>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-200"
            >
              Retail
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 transition-colors duration-200"
            >
              Shelf analysis and inventory tracking.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      id="why-annotic"
      class="py-20 px-6 bg-white dark:bg-[#020617] transition-colors duration-200"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <h2
            class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-200"
          >
            Why
            <span
              class="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
              >Annotic</span
            >
          </h2>
          <p
            class="mt-4 text-slate-600 dark:text-slate-400/70 text-lg transition-colors duration-200"
          >
            Purpose-built for ML teams who need speed and precision.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <article
            class="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition-all duration-300 hover:-translate-y-1 dark:border-blue-500/10 dark:hover:border-purple-500/50 dark:bg-[#0f172a] dark:shadow-[0_0_30px_rgba(59,130,246,0.08)] dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-violet-100 grid place-items-center shrink-0 dark:bg-[rgba(139,92,246,0.20)] dark:shadow-[0_0_0_1px_rgba(139,92,246,0.10),0_0_18px_rgba(59,130,246,0.10)]"
              >
                <svg
                  class="w-6 h-6 text-violet-600 dark:text-violet-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
                </svg>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-200"
                >
                  10x Faster Annotation
                </h3>
                <p
                  class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400/70 transition-colors duration-200"
                >
                  AI handles repetitive labeling so you can focus on edge cases.
                </p>
              </div>
            </div>
          </article>
          <article
            class="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition-all duration-300 hover:-translate-y-1 dark:border-blue-500/10 dark:hover:border-purple-500/50 dark:bg-[#0f172a] dark:shadow-[0_0_30px_rgba(59,130,246,0.08)] dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-violet-100 grid place-items-center shrink-0 dark:bg-[rgba(139,92,246,0.20)] dark:shadow-[0_0_0_1px_rgba(139,92,246,0.10),0_0_18px_rgba(59,130,246,0.10)]"
              >
                <svg
                  class="w-6 h-6 text-violet-600 dark:text-violet-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M9 3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
                  />
                  <path d="M8 8h8" />
                  <path d="M8 12h8" />
                  <path d="M8 16h5" />
                </svg>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-200"
                >
                  AI-Assisted Workflow
                </h3>
                <p
                  class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400/70 transition-colors duration-200"
                >
                  Smart suggestions, confidence scoring, and fast review loops.
                </p>
              </div>
            </div>
          </article>
          <article
            class="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition-all duration-300 hover:-translate-y-1 dark:border-blue-500/10 dark:hover:border-purple-500/50 dark:bg-[#0f172a] dark:shadow-[0_0_30px_rgba(59,130,246,0.08)] dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-violet-100 grid place-items-center shrink-0 dark:bg-[rgba(139,92,246,0.20)] dark:shadow-[0_0_0_1px_rgba(139,92,246,0.10),0_0_18px_rgba(59,130,246,0.10)]"
              >
                <svg
                  class="w-6 h-6 text-violet-600 dark:text-violet-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12 3a7 7 0 0 0-7 7c0 2.2 1 4.2 2.6 5.5V19h1.8v-2.3a7 7 0 0 0 2.6.5c.9 0 1.7-.1 2.5-.4V19h1.8v-3.2A7 7 0 0 0 19 10a7 7 0 0 0-7-7Z"
                  />
                  <path d="M9 11h6" />
                  <path d="M10 8.5v5" />
                  <path d="M14 8.5v5" />
                </svg>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-200"
                >
                  Clean, Intuitive UI
                </h3>
                <p
                  class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400/70 transition-colors duration-200"
                >
                  Simple, focused interface with minimal friction.
                </p>
              </div>
            </div>
          </article>
          <article
            class="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition-all duration-300 hover:-translate-y-1 dark:border-blue-500/10 dark:hover:border-purple-500/50 dark:bg-[#0f172a] dark:shadow-[0_0_30px_rgba(59,130,246,0.08)] dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-violet-100 grid place-items-center shrink-0 dark:bg-[rgba(139,92,246,0.20)] dark:shadow-[0_0_0_1px_rgba(139,92,246,0.10),0_0_18px_rgba(59,130,246,0.10)]"
              >
                <svg
                  class="w-6 h-6 text-violet-600 dark:text-violet-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="4" y="5" width="16" height="11" rx="2" />
                  <path d="M8 18h8" />
                  <path d="M12 16v2" />
                </svg>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-200"
                >
                  Desktop Performance
                </h3>
                <p
                  class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400/70 transition-colors duration-200"
                >
                  Responsive and stable for large image datasets.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden px-6 py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:bg-gradient-to-br dark:from-[#0b0f2a] dark:via-[#050816] dark:to-[#0b0f2a] transition-colors duration-200"
    >
      <div
        class="pointer-events-none absolute inset-0 dark:hidden bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]"
      ></div>
      <div
        class="pointer-events-none absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_70%)]"
      ></div>
      <div class="max-w-[900px] mx-auto">
        <div
          class="rounded-3xl border border-gray-200 bg-white shadow-sm dark:rounded-2xl dark:border-white/10 dark:bg-[#0B1225] dark:shadow-lg dark:shadow-[0_0_60px_rgba(168,85,247,0.25)] px-8 py-14 sm:px-14 sm:py-16 text-center"
        >
          <h3
            class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-4xl dark:md:text-5xl dark:font-semibold dark:text-white"
          >
            Start Annotating
            <span
              class="bg-gradient-to-r from-violet-500 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
              >Smarter</span
            >
            Today
          </h3>
          <p
            class="mt-6 max-w-[600px] mx-auto text-lg leading-8 text-slate-600 dark:text-base dark:text-gray-400"
          >
            Join ML teams worldwide using Annotic to build better datasets in
            less time.
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <button
              class="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3v10" />
                <path d="m8 9 4 4 4-4" />
                <path d="M4 17v2h16v-2" />
              </svg>
              Download App
            </button>
            <button
              class="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-cyan-500 text-slate-900 dark:text-white dark:hover:bg-cyan-600 font-semibold"
            >
              Request Demo
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="border-t border-slate-200 dark:border-white/10 py-16 px-6 bg-white dark:bg-[#0B0F1A] transition-colors duration-200"
    >
      <div class="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div class="flex items-center gap-3 mb-5">
            <img
              :src="
                isDark ? '/images/logo white.png' : '/images/logo black.png'
              "
              alt="Annotic logo"
              class="h-10 w-auto"
            />
            <span
              class="text-gray-900 dark:text-white text-[22px] font-semibold tracking-tight"
              >Annotic</span
            >
          </div>
          <p
            class="text-sm leading-8 text-gray-500 dark:text-gray-400 transition-colors duration-200"
          >
            AI-powered image annotation for machine learning teams.
          </p>
          <p
            class="mt-3 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200"
          >
            By
            <a
              href="#"
              class="text-cyan-500 hover:text-cyan-400 transition-colors duration-200"
              >Integrating.me</a
            >
          </p>
        </div>

        <div>
          <h4
            class="font-semibold mb-5 text-lg text-gray-900 dark:text-white transition-colors duration-200"
          >
            Product
          </h4>
          <ul
            class="space-y-3 text-base text-gray-500 dark:text-gray-400 transition-colors duration-200"
          >
            <li
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              Features
            </li>
            <li
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              How It Works
            </li>
            <li
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              Use Cases
            </li>
            <li
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              Download
            </li>
          </ul>
        </div>

        <div>
          <h4
            class="font-semibold mb-5 text-lg text-gray-900 dark:text-white transition-colors duration-200"
          >
            Resources
          </h4>
          <ul
            class="space-y-3 text-base text-gray-500 dark:text-gray-400 transition-colors duration-200"
          >
            <li
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              Documentation
            </li>
            <li
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              API Reference
            </li>
            <li
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              Research Paper
            </li>
            <li
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              Changelog
            </li>
          </ul>
        </div>

        <div>
          <h4
            class="font-semibold mb-5 text-lg text-gray-900 dark:text-white transition-colors duration-200"
          >
            Contact
          </h4>
          <p
            class="flex items-center gap-2 text-base text-gray-500 dark:text-gray-400 transition-colors duration-200"
          >
            <span aria-hidden="true">✉</span>
            <a
              href="mailto:contact@annotic.app"
              class="hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >contact@annotic.app</a
            >
          </p>

          <div class="mt-6 flex items-center gap-3">
            <button
              class="w-10 h-10 rounded-full grid place-items-center bg-slate-100 border border-slate-200 text-gray-500 hover:bg-slate-200 transition-colors duration-200 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/10"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4a3.5 3.5 0 0 0-1-2.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.6a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.7 3.7c0 5.4 3.4 6.6 6.7 7A3.5 3.5 0 0 0 9 18v4"
                />
              </svg>
            </button>
            <button
              class="w-10 h-10 rounded-full grid place-items-center bg-slate-100 border border-slate-200 text-gray-500 hover:bg-slate-200 transition-colors duration-200 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/10"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.1 1.5A4.5 4.5 0 0 0 12 7.5v1A10.7 10.7 0 0 1 3 4s-4 9 5 13a11.7 11.7 0 0 1-7 2c9 5 20 0 20-11.5a4.3 4.3 0 0 0 0-.8A7.7 7.7 0 0 0 23 3"
                />
              </svg>
            </button>
            <button
              class="w-10 h-10 rounded-full grid place-items-center bg-slate-100 border border-slate-200 text-gray-500 hover:bg-slate-200 transition-colors duration-200 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/10"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
                <path
                  d="M10 9h4v2a4 4 0 0 1 4-2c3 0 5 2 5 6v6h-4v-5c0-2-1-3-2.5-3S14 14 14 16v5h-4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        class="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-white/10"
      >
        <p
          class="text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200"
        >
          © 2026 Annotic. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
