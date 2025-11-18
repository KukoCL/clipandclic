<template>
  <div class="home-body">
    <BannerComponent />
  </div>
</template>

<script setup lang="ts">
import BannerComponent from './BannerComponent.vue';
</script>

<style scoped>
.home-body {
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
