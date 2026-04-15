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
      class="py-24 px-6 bg-slate-50 text-slate-900 dark:bg-[linear-gradient(180deg,#020617_0%,#030712_100%)] dark:text-white transition-colors duration-200"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14 max-w-3xl mx-auto">
          <h2
            class="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white transition-colors duration-200"
          >
            Powerful
            <span
              class="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
              >Features</span
            >
          </h2>
          <p
            class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal transition-colors duration-200"
          >
            Everything you need to build high-quality datasets, faster.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article
            class="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 dark:border-gray-800 dark:bg-[#0B1120] dark:hover:border-violet-500/60"
          >
            <div
              class="w-12 h-12 rounded-xl bg-violet-100 border border-violet-200 grid place-items-center text-violet-600 shadow-[0_8px_20px_rgba(99,102,241,0.18)] transition-all duration-300 group-hover:scale-105 dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-violet-300"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8.7 6.4C7 6.4 5.6 7.7 5.6 9.5c0 .9.4 1.7 1 2.3-.6.5-1 1.3-1 2.1 0 1.4 1 2.6 2.4 2.8.2 1.5 1.4 2.7 3 2.7.6 0 1.2-.2 1.7-.6"
                />
                <path
                  d="M15.3 6.4c1.7 0 3.1 1.3 3.1 3.1 0 .9-.4 1.7-1 2.3.6.5 1 1.3 1 2.1 0 1.4-1 2.6-2.4 2.8-.2 1.5-1.4 2.7-3 2.7-.6 0-1.2-.2-1.7-.6"
                />
                <path d="M12 6.2v11.6" />
                <path d="M9.2 10.1c.7.2 1.2.7 1.6 1.4" />
                <path d="M14.8 10.1c-.7.2-1.2.7-1.6 1.4" />
              </svg>
            </div>
            <h3
              class="mt-5 text-xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-200"
            >
              AI-Assisted Annotation
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-400 transition-colors duration-200"
            >
              Detect similar objects, suggest labels, and batch approve
              annotations.
            </p>
          </article>
          <article
            class="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 dark:border-gray-800 dark:bg-[#0B1120] dark:hover:border-violet-500/60"
          >
            <div
              class="w-12 h-12 rounded-xl bg-violet-100 border border-violet-200 grid place-items-center text-violet-600 shadow-[0_8px_20px_rgba(99,102,241,0.18)] transition-all duration-300 group-hover:scale-105 dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-violet-300"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M8 4v16" />
                <path d="M4 9h16" />
                <path d="M8 13h8" />
              </svg>
            </div>
            <h3
              class="mt-5 text-xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-200"
            >
              Smart Workflow
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-400 transition-colors duration-200"
            >
              Single-window interface with fast navigation and shortcuts.
            </p>
          </article>
          <article
            class="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 dark:border-gray-800 dark:bg-[#0B1120] dark:hover:border-violet-500/60"
          >
            <div
              class="w-12 h-12 rounded-xl bg-violet-100 border border-violet-200 grid place-items-center text-violet-600 shadow-[0_8px_20px_rgba(99,102,241,0.18)] transition-all duration-300 group-hover:scale-105 dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-violet-300"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M7 5h6l4 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                />
                <path d="M13 5v4h4" />
                <path d="M15 12H9" />
                <path d="m11 10-2 2 2 2" />
              </svg>
            </div>
            <h3
              class="mt-5 text-xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-200"
            >
              Dataset Ready
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-400 transition-colors duration-200"
            >
              Export in YOLO, JSON, or Pascal VOC formats instantly.
            </p>
          </article>
          <article
            class="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 dark:border-gray-800 dark:bg-[#0B1120] dark:hover:border-violet-500/60"
          >
            <div
              class="w-12 h-12 rounded-xl bg-violet-100 border border-violet-200 grid place-items-center text-violet-600 shadow-[0_8px_20px_rgba(99,102,241,0.18)] transition-all duration-300 group-hover:scale-105 dark:bg-purple-500/10 dark:border-purple-500/20 dark:text-violet-300"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8 5h8l3 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9l3-4z" />
                <path d="M9 11h6" />
                <path d="M9 15h6" />
              </svg>
            </div>
            <h3
              class="mt-5 text-xl font-semibold text-slate-900 dark:text-white tracking-tight transition-colors duration-200"
            >
              AI Post-Processing
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-400 transition-colors duration-200"
            >
              Cleanup, patch extraction, and duplicate detection.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
