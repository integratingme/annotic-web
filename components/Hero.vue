<script setup lang="ts">
import PreviewDemo from "./PreviewDemo.vue";
</script>

<template>
  <section
    class="relative px-6 pt-12 pb-16 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-200"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(139,92,246,0.08),transparent_44%),radial-gradient(circle_at_82%_28%,rgba(59,130,246,0.04),transparent_44%)] dark:bg-[radial-gradient(circle_at_18%_16%,rgba(139,92,246,0.28),transparent_44%),radial-gradient(circle_at_82%_28%,rgba(59,130,246,0.24),transparent_44%)]"
    ></div>

    <div class="relative max-w-7xl mx-auto text-center">
      <div
        class="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-slate-300 dark:border-cyan-400/20 bg-slate-100 dark:bg-slate-900/60 backdrop-blur transition-colors duration-200"
      >
        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
        <span
          class="text-sm text-slate-700 dark:text-slate-300 transition-colors duration-200"
          >AI-Powered Annotation Platform</span
        >
      </div>

      <h1
        class="mx-auto max-w-5xl text-[52px] sm:text-[68px] lg:text-[86px] font-extrabold leading-[0.95] tracking-[-0.03em]"
      >
        <span class="text-black dark:text-white transition-colors duration-200"
          >AI-Powered Image Annotation.</span
        >
        <br />
        <span
          class="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_34px_rgba(96,165,250,0.35)]"
        >
          Faster Than Ever.
        </span>
      </h1>

      <p
        class="mx-auto mt-8 max-w-3xl text-slate-600 dark:text-slate-400 text-lg md:text-2xl leading-[1.45] transition-colors duration-200"
      >
        Automate labeling, reduce manual work, and build high-quality datasets
        <br class="hidden md:block" />
        with intelligent assistance.
      </p>

      <div
        class="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <button
          class="inline-flex items-center gap-2 px-9 py-3.5 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-500 hover:shadow-[0_16px_40px_rgba(124,58,237,0.35)] transition-all duration-200 dark:text-white"
        >
          <span class="text-xs">▶</span>
          <span>Try Demo</span>
        </button>
        <button
          class="inline-flex items-center gap-2 px-9 py-3.5 rounded-2xl text-base font-semibold text-black dark:text-white border border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/40 hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-colors duration-200"
        >
          <span>Download App</span>
          <span>→</span>
        </button>
      </div>

      <div class="mt-12">
        <PreviewDemo />
      </div>
    </div>
  </section>
</template>
