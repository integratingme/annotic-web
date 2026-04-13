<template>
  <div class="bg-white dark:bg-slate-950 transition-colors duration-200">
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <h2
            class="text-5xl font-extrabold tracking-tight text-black dark:text-white transition-colors duration-200"
          >
            The Problem with
            <span
              class="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
              >Traditional Annotation</span
            >
          </h2>
          <p
            class="mt-4 text-slate-600 dark:text-slate-400 text-xl transition-colors duration-200"
          >
            See how Annotic transforms the annotation workflow.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="rounded-2xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-slate-900/60 p-8 transition-colors duration-200"
          >
            <h3
              class="text-3xl font-bold mb-8 text-black dark:text-white transition-colors duration-200"
            >
              Without Annotic
            </h3>
            <ul
              class="space-y-6 text-slate-700 dark:text-slate-300 text-2xl transition-colors duration-200"
            >
              <li class="flex gap-4">
                <span class="text-red-500 dark:text-red-400">✕</span
                ><span>Manual annotation is painfully slow</span>
              </li>
              <li class="flex gap-4">
                <span class="text-red-500 dark:text-red-400">✕</span
                ><span>Repetitive tasks drain productivity</span>
              </li>
              <li class="flex gap-4">
                <span class="text-red-500 dark:text-red-400">✕</span
                ><span>Human errors reduce dataset quality</span>
              </li>
            </ul>
          </div>

          <div
            class="rounded-2xl border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-slate-900/60 p-8 dark:shadow-[0_0_80px_rgba(109,40,217,0.25)] transition-colors duration-200"
          >
            <h3
              class="text-3xl font-bold mb-8 text-black dark:text-white transition-colors duration-200"
            >
              With Annotic
            </h3>
            <ul
              class="space-y-6 text-slate-700 dark:text-slate-300 text-2xl transition-colors duration-200"
            >
              <li class="flex gap-4">
                <span class="text-violet-600 dark:text-violet-400">✓</span
                ><span>AI detects and suggests annotations automatically</span>
              </li>
              <li class="flex gap-4">
                <span class="text-violet-600 dark:text-violet-400">✓</span
                ><span>Smart labeling with confidence scores</span>
              </li>
              <li class="flex gap-4">
                <span class="text-violet-600 dark:text-violet-400">✓</span
                ><span>Batch approve to save hours of work</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      id="features"
      class="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-200"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <h2
            class="text-5xl font-extrabold tracking-tight text-black dark:text-white transition-colors duration-200"
          >
            Powerful
            <span
              class="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
              >Features</span
            >
          </h2>
          <p
            class="mt-4 text-slate-600 dark:text-slate-400 text-xl transition-colors duration-200"
          >
            Everything you need to build high-quality datasets, faster.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article
            class="rounded-2xl border border-slate-300 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/60 p-7 transition-colors duration-200"
          >
            <div
              class="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 grid place-items-center text-xl transition-colors duration-200"
            >
              AI
            </div>
            <h3
              class="mt-5 text-2xl font-bold text-black dark:text-white transition-colors duration-200"
            >
              AI-Assisted Annotation
            </h3>
            <p
              class="mt-3 text-slate-600 dark:text-slate-400 text-lg transition-colors duration-200"
            >
              Detect similar objects, suggest labels, and batch approve
              annotations.
            </p>
          </article>
          <article
            class="rounded-2xl border border-slate-300 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/60 p-7 transition-colors duration-200"
          >
            <div
              class="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 grid place-items-center text-xl transition-colors duration-200"
            >
              WF
            </div>
            <h3
              class="mt-5 text-2xl font-bold text-black dark:text-white transition-colors duration-200"
            >
              Smart Workflow
            </h3>
            <p
              class="mt-3 text-slate-600 dark:text-slate-400 text-lg transition-colors duration-200"
            >
              Single-window interface with fast navigation and shortcuts.
            </p>
          </article>
          <article
            class="rounded-2xl border border-slate-300 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/60 p-7 transition-colors duration-200"
          >
            <div
              class="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 grid place-items-center text-xl transition-colors duration-200"
            >
              EX
            </div>
            <h3
              class="mt-5 text-2xl font-bold text-black dark:text-white transition-colors duration-200"
            >
              Dataset Ready
            </h3>
            <p
              class="mt-3 text-slate-600 dark:text-slate-400 text-lg transition-colors duration-200"
            >
              Export in YOLO, JSON, or Pascal VOC formats instantly.
            </p>
          </article>
          <article
            class="rounded-2xl border border-slate-300 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/60 p-7 transition-colors duration-200"
          >
            <div
              class="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 grid place-items-center text-xl transition-colors duration-200"
            >
              PP
            </div>
            <h3
              class="mt-5 text-2xl font-bold text-black dark:text-white transition-colors duration-200"
            >
              AI Post-Processing
            </h3>
            <p
              class="mt-3 text-slate-600 dark:text-slate-400 text-lg transition-colors duration-200"
            >
              Cleanup, patch extraction, and duplicate detection.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
