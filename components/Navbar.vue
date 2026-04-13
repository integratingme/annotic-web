<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTheme } from "@/composables/useTheme";

const { toggleTheme } = useTheme();
const isDark = ref(false);

const syncThemeIcon = () => {
  isDark.value = document.documentElement.classList.contains("dark");
};

const handleToggle = () => {
  toggleTheme();
  syncThemeIcon();
};

onMounted(() => {
  syncThemeIcon();
});
</script>

<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-200/70 dark:border-slate-800/60 bg-white dark:bg-slate-950 backdrop-blur-xl transition-colors duration-200"
  >
    <div
      class="max-w-7xl mx-auto h-[70px] px-6 flex items-center justify-between"
    >
      <div class="flex items-center gap-3">
        <img src="/logo.png" alt="Annotic logo" class="h-8 w-auto mr-2" />
        <span
          class="text-3xl leading-none font-semibold tracking-tight text-slate-900 dark:text-white transition-colors duration-200"
          >Annotic</span
        >
      </div>

      <div class="hidden md:flex items-center gap-8 text-sm">
        <a
          href="#features"
          class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
          >Features</a
        >
        <a
          href="#how-it-works"
          class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
          >How It Works</a
        >
        <a
          href="#use-cases"
          class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
          >Use Cases</a
        >
        <a
          href="#why-annotic"
          class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
          >Why Annotic</a
        >
      </div>

      <div class="flex items-center gap-3">
        <!-- Theme Toggle Button -->
        <button
          @click="handleToggle"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="h-9 w-9 rounded-lg border-0 ring-0 outline-none shadow-none focus:outline-none focus:ring-0 appearance-none grid place-items-center text-slate-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <!-- Moon Icon (shown in dark mode) -->
          <svg
            v-if="isDark"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>

          <!-- Sun Icon (shown in light mode) -->
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>

        <button
          class="px-5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 text-sm font-semibold text-slate-900 dark:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors duration-200"
        >
          Try Demo
        </button>
        <button
          class="px-5 py-2 rounded-xl text-sm font-semibold text-white dark:text-white bg-gradient-to-r from-violet-500 to-blue-500 hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)] dark:hover:shadow-[0_14px_40px_rgba(99,102,241,0.25)] transition-all duration-200"
        >
          Download
        </button>
      </div>
    </div>
  </nav>
</template>
