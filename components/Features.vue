<template>
  <div>
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <h2 class="text-5xl font-extrabold tracking-tight">
            The Problem with
            <span
              class="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
              >Traditional Annotation</span
            >
          </h2>
          <p class="mt-4 text-slate-400 text-xl">
            See how Annotic transforms the annotation workflow.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="rounded-2xl border border-red-500/20 bg-slate-900/60 p-8">
            <h3 class="text-3xl font-bold mb-8">Without Annotic</h3>
            <ul class="space-y-6 text-slate-300 text-2xl">
              <li class="flex gap-4">
                <span class="text-red-400">✕</span
                ><span>Manual annotation is painfully slow</span>
              </li>
              <li class="flex gap-4">
                <span class="text-red-400">✕</span
                ><span>Repetitive tasks drain productivity</span>
              </li>
              <li class="flex gap-4">
                <span class="text-red-400">✕</span
                ><span>Human errors reduce dataset quality</span>
              </li>
            </ul>
          </div>

          <div
            class="rounded-2xl border border-violet-500/20 bg-slate-900/60 p-8 shadow-[0_0_80px_rgba(109,40,217,0.25)]"
          >
            <h3 class="text-3xl font-bold mb-8">With Annotic</h3>
            <ul class="space-y-6 text-slate-300 text-2xl">
              <li class="flex gap-4">
                <span class="text-violet-400">✓</span
                ><span>AI detects and suggests annotations automatically</span>
              </li>
              <li class="flex gap-4">
                <span class="text-violet-400">✓</span
                ><span>Smart labeling with confidence scores</span>
              </li>
              <li class="flex gap-4">
                <span class="text-violet-400">✓</span
                ><span>Batch approve to save hours of work</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <h2 class="text-5xl font-extrabold tracking-tight">
            Powerful
            <span
              class="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
              >Features</span
            >
          </h2>
          <p class="mt-4 text-slate-400 text-xl">
            Everything you need to build high-quality datasets, faster.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article
            class="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-7"
          >
            <div
              class="w-11 h-11 rounded-xl bg-violet-500/20 text-violet-300 grid place-items-center text-xl"
            >
              AI
            </div>
            <h3 class="mt-5 text-2xl font-bold">AI-Assisted Annotation</h3>
            <p class="mt-3 text-slate-400 text-lg">
              Detect similar objects, suggest labels, and batch approve
              annotations.
            </p>
          </article>
          <article
            class="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-7"
          >
            <div
              class="w-11 h-11 rounded-xl bg-violet-500/20 text-violet-300 grid place-items-center text-xl"
            >
              WF
            </div>
            <h3 class="mt-5 text-2xl font-bold">Smart Workflow</h3>
            <p class="mt-3 text-slate-400 text-lg">
              Single-window interface with fast navigation and shortcuts.
            </p>
          </article>
          <article
            class="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-7"
          >
            <div
              class="w-11 h-11 rounded-xl bg-violet-500/20 text-violet-300 grid place-items-center text-xl"
            >
              EX
            </div>
            <h3 class="mt-5 text-2xl font-bold">Dataset Ready</h3>
            <p class="mt-3 text-slate-400 text-lg">
              Export in YOLO, JSON, or Pascal VOC formats instantly.
            </p>
          </article>
          <article
            class="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-7"
          >
            <div
              class="w-11 h-11 rounded-xl bg-violet-500/20 text-violet-300 grid place-items-center text-xl"
            >
              PP
            </div>
            <h3 class="mt-5 text-2xl font-bold">AI Post-Processing</h3>
            <p class="mt-3 text-slate-400 text-lg">
              Cleanup, patch extraction, and duplicate detection.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
