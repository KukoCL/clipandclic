<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const whatsappNumber = '+56945069359';
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
</script>

<template>
  <div class="whatsapp-container">
    <span class="whatsapp-label">Chatear por WhatsApp</span>
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
    </a>
  </div>
</template>

<style scoped>
.whatsapp-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1000;
}

.whatsapp-label {
  background-color: #25d366;
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(20px);
  pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.whatsapp-button {
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.whatsapp-container:hover .whatsapp-label {
  opacity: 1;
  transform: translateX(0);
}

.whatsapp-button:hover {
  background-color: #20ba5a;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: white;
}

.whatsapp-button:active {
  transform: scale(0.95);
}

@media (max-width: 576px) {
  .whatsapp-container {
    bottom: 20px;
    right: 20px;
  }

  .whatsapp-button {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }

  .whatsapp-label {
    display: none;
  }
}
</style>
