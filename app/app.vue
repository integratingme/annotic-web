<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
import HowItWorks from "../components/HowItWorks.vue";
import Footer from "../components/Footer.vue";

const { initTheme } = useTheme();

if (import.meta.client) {
  initTheme();
}
</script>
<template>
  <div
    class="min-h-screen bg-white text-black dark:bg-[#0b0f1a] dark:text-white [font-family:Inter,ui-sans-serif,system-ui,sans-serif] transition-colors duration-200"
  >
    <div class="pointer-events-none fixed inset-0 -z-10"></div>
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <Footer />
  </div>
</template>
