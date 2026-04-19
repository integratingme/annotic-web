<script setup lang="ts">
import {
  AlertTriangle,
  Brain,
  Clock,
  FileCheck,
  LayoutDashboard,
  Microscope,
  Sparkles,
  Target,
  XCircle,
  Zap,
} from "lucide-vue-next";
</script>

<template>
  <div class="bg-white dark:bg-slate-950 transition-colors duration-200">
    <section
      class="py-24 px-6 [font-family:Inter,ui-sans-serif,system-ui,sans-serif]"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <h2
            class="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors duration-200"
          >
            The Problem with
            <span
              class="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent"
              >Traditional Annotation</span
            >
          </h2>
          <p
            class="mt-5 text-base text-slate-500 dark:text-slate-400 leading-7 transition-colors duration-200"
          >
            See how Annotic transforms the annotation workflow.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <article
            class="rounded-2xl border border-slate-200 bg-[#f9fafb] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_16px_38px_rgba(139,92,246,0.18)] dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-violet-500/40 dark:hover:shadow-[0_18px_44px_rgba(139,92,246,0.22)]"
          >
            <div class="flex items-center gap-3 mb-7">
              <span
                class="w-12 h-12 rounded-xl bg-purple-500/10 grid place-items-center shrink-0"
              >
                <Zap class="w-6 h-6 text-purple-400" stroke-width="1.9" />
              </span>
              <h3
                class="text-2xl font-semibold text-slate-800 dark:text-white transition-colors duration-200"
              >
                With Annotic
              </h3>
            </div>

            <ul class="space-y-6">
              <li
                class="flex items-center gap-4 text-base leading-7 text-slate-600 dark:text-gray-400"
              >
                <span
                  class="w-12 h-12 rounded-xl bg-purple-500/10 grid place-items-center shrink-0"
                >
                  <Brain class="w-6 h-6 text-purple-400" stroke-width="1.9" />
                </span>
                <span>AI detects and suggests annotations automatically</span>
              </li>
              <li
                class="flex items-center gap-4 text-base leading-7 text-slate-600 dark:text-gray-400"
              >
                <span
                  class="w-12 h-12 rounded-xl bg-purple-500/10 grid place-items-center shrink-0"
                >
                  <Target class="w-6 h-6 text-purple-400" stroke-width="1.9" />
                </span>
                <span>Smart labeling with confidence scores</span>
              </li>
              <li
                class="flex items-center gap-4 text-base leading-7 text-slate-600 dark:text-gray-400"
              >
                <span
                  class="w-12 h-12 rounded-xl bg-purple-500/10 grid place-items-center shrink-0"
                >
                  <Sparkles
                    class="w-6 h-6 text-purple-400"
                    stroke-width="1.9"
                  />
                </span>
                <span>Batch approve to save hours of work</span>
              </li>
            </ul>
          </article>

          <article
            class="rounded-2xl border border-slate-200 bg-[#f9fafb] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-[0_16px_38px_rgba(248,113,113,0.18)] dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-red-500/40 dark:hover:shadow-[0_18px_44px_rgba(248,113,113,0.22)]"
          >
            <div class="flex items-center gap-3 mb-7">
              <span
                class="w-12 h-12 rounded-xl bg-red-500/10 grid place-items-center shrink-0"
              >
                <XCircle class="w-6 h-6 text-red-400" stroke-width="1.9" />
              </span>
              <h3
                class="text-xl font-semibold text-slate-800 dark:text-white transition-colors duration-200"
              >
                Without Annotic
              </h3>
            </div>

            <ul class="space-y-6">
              <li
                class="flex items-center gap-4 text-base leading-7 text-slate-600 dark:text-slate-300"
              >
                <span
                  class="w-12 h-12 rounded-xl bg-red-500/10 grid place-items-center shrink-0"
                >
                  <Clock class="w-6 h-6 text-red-400" stroke-width="1.9" />
                </span>
                <span>Manual annotation is painfully slow</span>
              </li>
              <li
                class="flex items-center gap-4 text-base leading-7 text-slate-600 dark:text-slate-300"
              >
                <span
                  class="w-12 h-12 rounded-xl bg-red-500/10 grid place-items-center shrink-0"
                >
                  <AlertTriangle
                    class="w-6 h-6 text-red-400"
                    stroke-width="1.9"
                  />
                </span>
                <span>Repetitive tasks drain productivity</span>
              </li>
              <li
                class="flex items-center gap-4 text-base leading-7 text-slate-600 dark:text-slate-300"
              >
                <span
                  class="w-12 h-12 rounded-xl bg-red-500/10 grid place-items-center shrink-0"
                >
                  <XCircle class="w-6 h-6 text-red-400" stroke-width="1.9" />
                </span>
                <span>Human errors reduce dataset quality</span>
              </li>
            </ul>
          </article>
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
            class="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-purple-400 hover:shadow-md hover:-translate-y-1 dark:bg-[#0B1220] dark:border-white/10 dark:hover:border-purple-500/60 dark:hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)]"
          >
            <div
              class="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-cyan-600 mb-4 dark:bg-purple-500/10 dark:text-purple-400"
            >
              <Brain class="w-6 h-6 text-purple-400" stroke-width="1.9" />
            </div>
            <h3
              class="mt-5 text-gray-900 font-semibold dark:text-white transition-colors duration-200"
            >
              AI-Assisted Annotation
            </h3>
            <p
              class="mt-3 text-gray-500 text-sm dark:text-gray-400 transition-colors duration-200"
            >
              Detect similar objects, suggest labels, and batch approve
              annotations.
            </p>
          </article>
          <article
            class="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-purple-400 hover:shadow-md hover:-translate-y-1 dark:bg-[#0B1220] dark:border-white/10 dark:hover:border-purple-500/60 dark:hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)]"
          >
            <div
              class="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-cyan-600 mb-4 dark:bg-purple-500/10 dark:text-purple-400"
            >
              <LayoutDashboard
                class="w-6 h-6 text-purple-400"
                stroke-width="1.9"
              />
            </div>
            <h3
              class="mt-5 text-gray-900 font-semibold dark:text-white transition-colors duration-200"
            >
              Smart Workflow
            </h3>
            <p
              class="mt-3 text-gray-500 text-sm dark:text-gray-400 transition-colors duration-200"
            >
              Single-window interface with fast navigation and shortcuts.
            </p>
          </article>
          <article
            class="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-purple-400 hover:shadow-md hover:-translate-y-1 dark:bg-[#0B1220] dark:border-white/10 dark:hover:border-purple-500/60 dark:hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)]"
          >
            <div
              class="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-cyan-600 mb-4 dark:bg-purple-500/10 dark:text-purple-400"
            >
              <FileCheck class="w-6 h-6 text-purple-400" stroke-width="1.9" />
            </div>
            <h3
              class="mt-5 text-gray-900 font-semibold dark:text-white transition-colors duration-200"
            >
              Dataset Ready
            </h3>
            <p
              class="mt-3 text-gray-500 text-sm dark:text-gray-400 transition-colors duration-200"
            >
              Export in YOLO, JSON, or Pascal VOC formats instantly.
            </p>
          </article>
          <article
            class="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-purple-400 hover:shadow-md hover:-translate-y-1 dark:bg-[#0B1220] dark:border-white/10 dark:hover:border-purple-500/60 dark:hover:shadow-[0_20px_50px_rgba(124,92,255,0.25)]"
          >
            <div
              class="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-cyan-600 mb-4 dark:bg-purple-500/10 dark:text-purple-400"
            >
              <Microscope class="w-6 h-6 text-purple-400" stroke-width="1.9" />
            </div>
            <h3
              class="mt-5 text-gray-900 font-semibold dark:text-white transition-colors duration-200"
            >
              AI Post-Processing
            </h3>
            <p
              class="mt-3 text-gray-500 text-sm dark:text-gray-400 transition-colors duration-200"
            >
              Cleanup, patch extraction, and duplicate detection.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
