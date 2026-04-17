<template>
  <section
    id="how-it-works"
    class="py-24 px-6 bg-white dark:bg-[radial-gradient(circle_at_top,rgba(76,29,149,0.24),transparent_32%),linear-gradient(180deg,#0b1020_0%,#090d18_100%)] transition-colors duration-200"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2
          class="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white transition-colors duration-200"
        >
          How It
          <span
            class="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            >Works</span
          >
        </h2>
        <p
          class="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 transition-colors duration-200"
        >
          From upload to export in four simple steps.
        </p>
      </div>

      <div class="relative grid gap-8 md:grid-cols-4 md:gap-8">
        <div
          class="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden md:block h-px bg-slate-200 dark:bg-gradient-to-r dark:from-white/0 dark:via-white/15 dark:to-white/0 transition-colors duration-200"
        ></div>

        <article class="text-center relative z-10">
          <div
            class="relative mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#0B1220] border border-white/10 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(124,92,255,0.35)] hover:-translate-y-1"
          >
            <svg
              class="w-7 h-7 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 15V3" />
              <path d="m7 8 5-5 5 5" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            </svg>
            <span
              class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-semibold grid place-items-center"
              >1</span
            >
          </div>
          <h3
            class="mt-4 text-xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-200"
          >
            Upload Image
          </h3>
          <p
            class="mt-2 max-w-xs mx-auto text-sm leading-7 text-slate-600 dark:text-slate-400 transition-colors duration-200"
          >
            Import your images or image folders into Annotic.
          </p>
        </article>

        <article class="text-center relative z-10">
          <div
            class="relative mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#0B1220] border border-white/10 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(124,92,255,0.35)] hover:-translate-y-1"
          >
            <svg
              class="w-7 h-7 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 9 5 12 1.8-5.2L21 14 9 9z" />
              <path d="M7.2 2.2 8 5.1" />
              <path d="M5.1 8H2.2" />
              <path d="m14 4-2 2" />
            </svg>
            <span
              class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-semibold grid place-items-center"
              >2</span
            >
          </div>
          <h3
            class="mt-4 text-xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-200"
          >
            Annotate a Few
          </h3>
          <p
            class="mt-2 max-w-xs mx-auto text-sm leading-7 text-slate-600 dark:text-slate-400 transition-colors duration-200"
          >
            Manually annotate a small set of objects to train the AI.
          </p>
        </article>

        <article class="text-center relative z-10">
          <div
            class="relative mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#0B1220] border border-white/10 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(124,92,255,0.35)] hover:-translate-y-1"
          >
            <svg
              class="w-7 h-7 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="m12 3.5 2.2 5.3 5.3 2.2-5.3 2.2-2.2 5.3-2.2-5.3-5.3-2.2 5.3-2.2Z"
              />
              <path d="M19.2 5.1v2.2" />
              <path d="M18.1 6.2h2.2" />
              <path d="M5 15.9v1.8" />
              <path d="M4.1 16.8h1.8" />
            </svg>
            <span
              class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-semibold grid place-items-center"
              >3</span
            >
          </div>
          <h3
            class="mt-4 text-xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-200"
          >
            AI Suggests the Rest
          </h3>
          <p
            class="mt-2 max-w-xs mx-auto text-sm leading-7 text-slate-600 dark:text-slate-400 transition-colors duration-200"
          >
            The AI detects similar objects and suggests annotations
            automatically.
          </p>
        </article>

        <article class="text-center relative z-10">
          <div
            class="relative mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#0B1220] border border-white/10 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(124,92,255,0.35)] hover:-translate-y-1"
          >
            <svg
              class="w-7 h-7 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 4v11" />
              <path d="m7.5 11.5 4.5 4.5 4.5-4.5" />
              <path d="M5 20h14" />
            </svg>
            <span
              class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-semibold grid place-items-center"
              >4</span
            >
          </div>
          <h3
            class="mt-4 text-xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-200"
          >
            Export Dataset
          </h3>
          <p
            class="mt-2 max-w-xs mx-auto text-sm leading-7 text-slate-600 dark:text-slate-400 transition-colors duration-200"
          >
            Export in YOLO, JSON, or Pascal VOC - ready for ML training.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
