<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import CallToActionSection from '../components/CallToActionSection.vue';
import HomeBody from '@/components/HomeBody.vue';
</script>

<template>
  <div class="home">
    <HeroSection />
    <HomeBody />
    <CallToActionSection />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
