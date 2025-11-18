<template>
  <div class="banner">
    <section class="banner-header">
      <h1>Meet the Clip &amp; Clic Crew</h1>
      <p>Tap through the featured shots to jump into each creator's profile.</p>
    </section>

    <section class="image-banner" aria-label="Featured team carousel">
      <div class="banner-window">
        <div
          class="banner-track"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          aria-live="polite"
        >
          <a
            v-for="banner in bannerItems"
            :key="banner.alt"
            class="banner-card"
            :href="banner.link"
            rel="noopener"
          >
            <img :src="banner.src" :alt="banner.alt" loading="lazy" />
            <div class="banner-overlay">
              <span>{{ banner.title }}</span>
            </div>
          </a>
        </div>
      </div>

      <div class="banner-controls" role="tablist">
        <button
          v-for="(banner, index) in bannerItems"
          :key="`control-${banner.title}`"
          class="control-dot"
          :class="{ active: index === activeIndex }"
          type="button"
          :aria-label="`Show ${banner.title}`"
          :aria-selected="index === activeIndex"
          role="tab"
          @click="goToSlide(index)"
        ></button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

type BannerItem = {
  title: string;
  alt: string;
  link: string;
  src: string;
};

const bannerItems: BannerItem[] = [
  {
    title: 'Christian · Creative Director',
    alt: 'Christian directing a commercial set',
    link: '/team/christian',
    src: new URL('../assets/images/team/christian.png', import.meta.url).href,
  },
  {
    title: 'Daniel · Lead Editor',
    alt: 'Daniel editing footage on a monitor wall',
    link: '/team/daniel',
    src: new URL('../assets/images/team/daniel.png', import.meta.url).href,
  },
  {
    title: 'Francisco · Cinematographer',
    alt: 'Francisco filming on location with camera rig',
    link: '/team/francisco',
    src: new URL('../assets/images/team/francisco.png', import.meta.url).href,
  },
  {
    title: 'Gonzalo · Producer',
    alt: 'Gonzalo reviewing storyboard with client',
    link: '/team/gonzalo',
    src: new URL('../assets/images/team/gonzalo.png', import.meta.url).href,
  },
  {
    title: 'Jaime · Post Supervisor',
    alt: 'Jaime color grading in studio',
    link: '/team/jaime',
    src: new URL('../assets/images/team/jaime.png', import.meta.url).href,
  },
];

const activeIndex = ref(0);
const intervalMs = 4500;
let timer: ReturnType<typeof setInterval> | null = null;

const goToSlide = (index: number) => {
  activeIndex.value = index;
  restartAutoSlide();
};

const showNextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % bannerItems.length;
};

const startAutoSlide = () => {
  timer = setInterval(showNextSlide, intervalMs);
};

const stopAutoSlide = () => {
  if (!timer) return;
  clearInterval(timer);
  timer = null;
};

const restartAutoSlide = () => {
  stopAutoSlide();
  startAutoSlide();
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>

<style scoped>
:root {
  --color-bisque: #ffe4c4;
}

.banner {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.banner-header h1 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin-bottom: 0.75rem;
}

.banner-header p {
  color: #972805;
  font-size: 1rem;
}

.image-banner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.banner-window {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
}

.banner-track {
  display: flex;
  transition: transform 600ms ease;
}

.banner-card {
  min-width: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
  display: block;
}

.banner-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(115, 38, 38, 0.5), rgba(115, 38, 38, 0));
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-bisque);
  letter-spacing: 0.02em;
}

.banner-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: none;
  background: rgba(235, 184, 230, 0.35);
  cursor: pointer;
  transition: all 200ms ease;
}

.control-dot.active {
  width: 36px;
  background: #972805;
}

@media (hover: hover) {
  .banner-card:hover .banner-overlay {
    background: linear-gradient(120deg, rgba(115, 38, 38, 0.65), rgba(115, 38, 38, 0.15));
  }
}

@media (max-width: 600px) {
  .banner-overlay {
    font-size: 1rem;
    padding: 1rem;
  }
}
</style>
