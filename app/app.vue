<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Features from "../components/Features.vue";
import HowItWorks from "../components/HowItWorks.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div
    class="min-h-screen bg-[#0b0f1a] text-white [font-family:Inter,ui-sans-serif,system-ui,sans-serif]"
  >
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(59,130,246,0.14),transparent_40%)]"
    ></div>
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <Footer />
  </div>
</template>

