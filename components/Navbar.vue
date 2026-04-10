<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-800/60 bg-[#0a0d18]/80 backdrop-blur-xl"
  >
    <div
      class="max-w-7xl mx-auto h-[70px] px-6 flex items-center justify-between"
    >
      <div class="flex items-center gap-3">
        <img src="/logo.png" alt="Annotic logo" class="h-8 w-auto mr-2" />
        <span
          class="text-3xl leading-none font-semibold tracking-tight text-white"
          >Annotic</span
        >
      </div>

      <div class="hidden md:flex items-center gap-8 text-sm">
        <a
          href="#features"
          class="text-slate-400 hover:text-white transition-colors duration-200"
          >Features</a
        >
        <a
          href="#how-it-works"
          class="text-slate-400 hover:text-white transition-colors duration-200"
          >How It Works</a
        >
        <a
          href="#use-cases"
          class="text-slate-400 hover:text-white transition-colors duration-200"
          >Use Cases</a
        >
        <a
          href="#why-annotic"
          class="text-slate-400 hover:text-white transition-colors duration-200"
          >Why Annotic</a
        >
      </div>

      <div class="flex items-center gap-3">
        <button
          class="px-5 py-2 rounded-xl border border-slate-700 bg-slate-900/40 text-sm font-semibold text-white hover:border-slate-500 hover:bg-slate-800/40 transition-colors duration-200"
        >
          Try Demo
        </button>
        <button
          class="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-blue-500 hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)] transition-all duration-200"
        >
          Download
        </button>
      </div>
    </div>
  </nav>
</template>
