<template>
  <section class="relative px-6 pt-12 pb-16 overflow-hidden">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(139,92,246,0.28),transparent_44%),radial-gradient(circle_at_82%_28%,rgba(59,130,246,0.24),transparent_44%)]"
    ></div>

    <div class="relative max-w-7xl mx-auto text-center">
      <div
        class="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-slate-900/60 backdrop-blur"
      >
        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
        <span class="text-sm text-slate-300"
          >AI-Powered Annotation Platform</span
        >
      </div>

      <h1
        class="mx-auto max-w-5xl text-[52px] sm:text-[68px] lg:text-[86px] font-extrabold leading-[0.95] tracking-[-0.03em]"
      >
        <span class="text-white">AI-Powered Image Annotation.</span>
        <br />
        <span
          class="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_34px_rgba(96,165,250,0.35)]"
        >
          Faster Than Ever.
        </span>
      </h1>

      <p
        class="mx-auto mt-8 max-w-3xl text-slate-400 text-lg md:text-2xl leading-[1.45]"
      >
        Automate labeling, reduce manual work, and build high-quality datasets
        <br class="hidden md:block" />
        with intelligent assistance.
      </p>

      <div
        class="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <button
          class="inline-flex items-center gap-2 px-9 py-3.5 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-500 hover:shadow-[0_16px_40px_rgba(124,58,237,0.35)] transition-all duration-200"
        >
          <span class="text-xs">▶</span>
          <span>Try Demo</span>
        </button>
        <button
          class="inline-flex items-center gap-2 px-9 py-3.5 rounded-2xl text-base font-semibold text-white border border-slate-700 bg-slate-900/40 hover:bg-slate-800/70 transition-colors duration-200"
        >
          <span>Download App</span>
          <span>→</span>
        </button>
      </div>

      <div
        class="mt-12 max-w-[1040px] mx-auto rounded-3xl overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_0_120px_rgba(79,70,229,0.34)]"
      >
        <div
          class="h-12 px-4 flex items-center gap-6 border-b border-slate-800 text-xs text-slate-400 bg-slate-900/80"
        >
          <span class="text-violet-300 border-b border-violet-400 pb-2"
            >Suggestions</span
          >
          <span>Annotic tools</span>
          <span>AI suggestioners</span>
        </div>

        <div class="grid grid-cols-12 min-h-[340px] bg-[#0b0f1a]">
          <div class="col-span-1 border-r border-slate-800 p-3 space-y-5">
            <div
              class="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700"
            ></div>
            <div class="h-2 w-7 rounded bg-slate-700"></div>
            <div class="h-2 w-7 rounded bg-slate-700"></div>
            <div class="h-2 w-7 rounded bg-slate-700"></div>
            <div class="h-2 w-7 rounded bg-slate-700"></div>
          </div>

          <div class="col-span-8 p-4 flex items-center justify-center">
            <div
              class="w-full h-[260px] rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-[linear-gradient(transparent_24px,rgba(51,65,85,0.22)_25px),linear-gradient(90deg,transparent_24px,rgba(51,65,85,0.22)_25px)] bg-[size:25px_25px]"
              ></div>
              <div
                class="absolute left-12 top-14 w-28 h-20 border-2 border-cyan-400/80"
              ></div>
              <div
                class="absolute left-40 top-24 w-24 h-24 border-2 border-fuchsia-400/80"
              ></div>
              <div
                class="absolute left-64 top-12 w-32 h-24 border-2 border-lime-400/80"
              ></div>
            </div>
          </div>

          <div class="col-span-3 border-l border-slate-800 p-4">
            <div class="text-left text-slate-100 font-medium mb-3">
              AI Suggestions
            </div>
            <div class="space-y-3 text-xs text-slate-400">
              <div class="flex justify-between">
                <span>95% Person</span><span>8%</span>
              </div>
              <div class="flex justify-between">
                <span>85% Car</span><span>7%</span>
              </div>
              <div class="flex justify-between">
                <span>47% Person</span><span>8%</span>
              </div>
              <div class="flex justify-between">
                <span>AI Suggestion</span><span>6%</span>
              </div>
              <div class="flex justify-between">
                <span>87% Person</span><span>8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
