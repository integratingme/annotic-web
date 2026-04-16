<template>
  <div
    class="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-gray-800 bg-[#0B1120] shadow-lg"
  >
    <div
      class="h-12 px-4 border-b border-gray-800 bg-[#0B1120] flex items-center gap-4 text-xs text-gray-400"
    >
      <div
        class="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/15 border border-purple-400/60 text-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.35)]"
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
          <path d="M12 2c4 3 6 7 6 11a6 6 0 1 1-12 0c0-4 2-8 6-11Z" />
          <path d="M12 8v8" />
        </svg>
      </div>
      <div class="flex items-center gap-7 h-full">
        <button
          class="h-full text-purple-400 border-b border-purple-400 font-medium"
        >
          Suggestions
        </button>
        <button
          class="h-full hover:text-purple-400 transition-colors duration-200"
        >
          Annotation tools
        </button>
        <button
          class="h-full hover:text-purple-400 transition-colors duration-200"
        >
          AI suggestions
        </button>
      </div>
    </div>

    <div class="flex min-h-[490px] bg-[#0B1120]">
      <aside
        class="w-16 shrink-0 border-r border-gray-800 flex flex-col items-center py-6"
      >
        <div class="flex flex-col items-center gap-6">
          <button
            class="flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors duration-200"
            aria-label="Names"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="4" width="14" height="16" rx="2" />
              <path d="M7 9h6" />
              <path d="M7 13h6" />
              <path d="M20 8v8" />
            </svg>
            <span class="text-xs text-gray-500 mt-2">Names</span>
          </button>
          <button
            class="flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors duration-200"
            aria-label="Ingress"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3v18" />
              <path d="m7 8 5-5 5 5" />
              <path d="m7 16 5 5 5-5" />
            </svg>
            <span class="text-xs text-gray-500 mt-2 text-center">Ingress</span>
          </button>
          <button
            class="flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors duration-200"
            aria-label="Tagging"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 10V4h-6" />
              <path d="M4 14v6h6" />
              <path d="m20 4-8 8" />
              <path d="m4 20 8-8" />
            </svg>
            <span class="text-xs text-gray-500 mt-2 text-center">Tagging</span>
          </button>
          <button
            class="flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors duration-200"
            aria-label="Merge"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
            <span class="text-xs text-gray-500 mt-2 text-center">Merge</span>
          </button>
          <button
            class="flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors duration-200"
            aria-label="Review"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span class="text-xs text-gray-500 mt-2 text-center">Review</span>
          </button>
          <button
            class="flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors duration-200"
            aria-label="Smart tools"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3v4" />
              <path d="M12 17v4" />
              <path d="M3 12h4" />
              <path d="M17 12h4" />
              <path d="m7.5 7.5 2.8 2.8" />
              <path d="m13.7 13.7 2.8 2.8" />
              <path d="m16.5 7.5-2.8 2.8" />
              <path d="m10.3 13.7-2.8 2.8" />
            </svg>
            <span class="text-xs text-gray-500 mt-2 text-center"
              >Smart tools</span
            >
          </button>
        </div>
      </aside>

      <div class="flex-1 p-6">
        <div
          class="relative h-[410px] rounded-xl overflow-hidden border border-gray-800 bg-black/20"
        >
          <img
            src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1800&q=80"
            alt="Car factory assembly line with multiple cars"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"
          ></div>

          <div
            class="absolute left-[3%] top-[30%] w-[10%] h-[28%] border-2 border-green-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[10%] top-[34%] w-[11%] h-[26%] border-2 border-green-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[17%] top-[24%] w-[14%] h-[35%] border-2 border-green-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[23%] top-[41%] w-[13%] h-[27%] border-2 border-green-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[27%] top-[27%] w-[10%] h-[24%] border-2 border-green-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[31%] top-[36%] w-[11%] h-[28%] border-2 border-green-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[35%] top-[22%] w-[13%] h-[31%] border-2 border-green-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[41%] top-[31%] w-[14%] h-[35%] border-2 border-green-400 rounded-sm"
          ></div>

          <div
            class="absolute left-[47%] top-[30%] w-[12%] h-[26%] border-2 border-purple-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[52%] top-[24%] w-[12%] h-[34%] border-2 border-purple-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[59%] top-[30%] w-[12%] h-[29%] border-2 border-purple-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[66%] top-[26%] w-[13%] h-[32%] border-2 border-purple-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[73%] top-[29%] w-[14%] h-[30%] border-2 border-purple-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[81%] top-[26%] w-[11%] h-[27%] border-2 border-purple-400 rounded-sm"
          ></div>

          <div
            class="absolute left-[28%] top-[38%] w-[36%] h-[37%] border-2 border-cyan-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[31%] top-[42%] w-[16%] h-[25%] border-2 border-cyan-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[48%] top-[46%] w-[12%] h-[20%] border-2 border-cyan-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[19%] top-[48%] w-[13%] h-[22%] border-2 border-cyan-400 rounded-sm"
          ></div>
          <div
            class="absolute left-[57%] top-[41%] w-[18%] h-[24%] border-2 border-cyan-400 rounded-sm"
          ></div>

          <div
            class="absolute left-[8%] top-[18%] w-[8%] h-[20%] border-2 border-purple-400 rounded-sm opacity-90"
          ></div>
          <div
            class="absolute left-[87%] top-[20%] w-[8%] h-[17%] border-2 border-green-400 rounded-sm opacity-90"
          ></div>
          <div
            class="absolute left-[4%] top-[58%] w-[9%] h-[14%] border-2 border-purple-400 rounded-sm opacity-75"
          ></div>
        </div>
      </div>

      <aside class="w-64 shrink-0 border-l border-gray-800 p-4">
        <div class="text-white font-semibold text-xl mb-5">AI Suggestions</div>
        <ul class="space-y-4 text-sm">
          <li class="flex items-center justify-between">
            <span class="inline-flex items-center gap-2 text-white">
              <svg
                class="w-4 h-4 text-purple-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>95% Person</span>
            </span>
            <span class="text-gray-400 text-xs">8%</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="inline-flex items-center gap-2 text-white">
              <svg
                class="w-4 h-4 text-purple-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>95% Person</span>
            </span>
            <span class="text-gray-400 text-xs">8%</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="inline-flex items-center gap-2 text-white">
              <svg
                class="w-4 h-4 text-purple-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>47% Person</span>
            </span>
            <span class="text-gray-400 text-xs">8%</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="inline-flex items-center gap-2 text-white">
              <svg
                class="w-4 h-4 text-purple-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>AI Suggestion</span>
            </span>
            <span class="text-gray-400 text-xs">8%</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="inline-flex items-center gap-2 text-white">
              <svg
                class="w-4 h-4 text-purple-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>87% Car</span>
            </span>
            <span class="text-gray-400 text-xs">8%</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="inline-flex items-center gap-2 text-white">
              <svg
                class="w-4 h-4 text-purple-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>85% Person</span>
            </span>
            <span class="text-gray-400 text-xs">8%</span>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>
