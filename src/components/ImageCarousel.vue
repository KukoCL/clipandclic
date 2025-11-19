<template>
  <div class="image-carousel-container">
    <div class="image-display">
      <img :src="currentImage" :alt="imageAlt" class="carousel-image" />
      <div v-if="images.length > 1" class="image-counter">
        {{ currentImageIndex + 1 }} / {{ images.length }}
      </div>
    </div>
    <div v-if="images.length > 1" class="carousel-controls">
      <button
        class="carousel-btn carousel-btn-prev"
        @click="previousImage"
        aria-label="Imagen anterior"
      >
        <FontAwesomeIcon icon="chevron-left" />
      </button>
      <button
        class="carousel-btn carousel-btn-next"
        @click="nextImage"
        aria-label="Siguiente imagen"
      >
        <FontAwesomeIcon icon="chevron-right" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface Props {
  images: string[];
  imageAlt: string;
}

const props = defineProps<Props>();

const currentImageIndex = ref(0);

const currentImage = computed(() => props.images[currentImageIndex.value]);

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};
</script>

<style scoped>
.image-carousel-container {
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
  border-bottom: 1px solid #e9ecef;
  overflow: hidden;
}

.image-display {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-counter {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  pointer-events: none;
}

.carousel-btn {
  pointer-events: all;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #333;
  font-size: 1rem;
}

.carousel-btn:hover {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.carousel-btn:active {
  transform: scale(0.95);
}

.carousel-btn-prev,
.carousel-btn-next {
  flex-shrink: 0;
}
</style>
