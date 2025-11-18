<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { appTexts } from '@/infrastructure/lang/spanish';

const isNavCollapsed = ref(true);

const toggleNav = () => {
  isNavCollapsed.value = !isNavCollapsed.value;
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">
        <img
          src="/favicon.ico"
          alt="Logo"
          width="45"
          height="40"
          class="d-inline-block align-top me-2 fennec-logo"
        />
        <span class="brand-text"
          >{{ appTexts.navbar.brand1 }}<span class="text-fennec-orange">{{ appTexts.navbar.brand2 }}</span></span
        >
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        :aria-label="appTexts.navbar.toggleNavigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: !isNavCollapsed }" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click="isNavCollapsed = true">{{
              appTexts.navbar.navigation.home
            }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products/utiles" @click="isNavCollapsed = true">{{
              appTexts.navbar.navigation.schoolSupplies
            }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products/navidad" @click="isNavCollapsed = true">{{
              appTexts.navbar.navigation.christmasSpecial
            }}</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ appTexts.navbar.navigation.technology }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink
                  class="dropdown-item"
                  to="/products/mouses"
                  @click="isNavCollapsed = true"
                >
                  {{ appTexts.navbar.navigation.mousesKeyboards }}
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/products/audio" @click="isNavCollapsed = true">
                  {{ appTexts.navbar.navigation.audio }}
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/products/cables" @click="isNavCollapsed = true">
                  {{ appTexts.navbar.navigation.cables }}
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  class="dropdown-item"
                  to="/products/almacenamiento"
                  @click="isNavCollapsed = true"
                >
                  {{ appTexts.navbar.navigation.storage }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
:root {
  --color-bisque: #ffe4c4;
}

.navbar {
  background-color: #732626 !important;
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(151, 40, 5, 0.2);
}

.custom-navbar {
  background-color: #732626 !important;
}

.navbar-brand {
  font-size: 1.5rem;
  padding: 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar-brand:hover {
  transform: translateY(-1px);
  background: transparent;
}

.brand-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-bisque);
  transition: all 0.3s ease;
}

.navbar-brand:hover .brand-text {
  color: #ffd4e5;
}

.navbar-brand:hover .text-fennec-orange {
  color: #972805;
}

.text-fennec-orange {
  color: #972805;
  transition: color 0.3s ease;
}

.nav-link {
  font-weight: 500;
  color: var(--color-bisque) !important;
  transition: color 0.3s ease;
  position: relative;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  background: transparent;
}

.nav-link:hover, .nav-link.router-link-active {
  color: #972805 !important;
  background: transparent;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #972805;
}

.navbar-toggler {
  border-color: rgba(151, 40, 5, 0.3);
  padding: 0.5rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.dropdown-menu {
  background-color: var(--color-bisque);
  border: 1px solid rgba(151, 40, 5, 0.2);
  box-shadow: 0 4px 15px rgba(115, 38, 38, 0.2);
  border-radius: 8px;
  padding: 0.5rem;
}

.dropdown-item {
  color: #972805;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  border-radius: 4px;
  background: transparent;
}

.dropdown-item:hover {
  background: transparent;
  color: #972805;
}

.dropdown-item.active {
  background: transparent;
  color: #972805;
  font-weight: 600;
}

.fennec-logo {
  transition: all 0.3s ease;
  background: transparent;
}

.fennec-logo:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 8px rgba(151, 40, 5, 0.4));
  background: transparent;
}

/* Línea separadora en el menú de idiomas */
.vr {
  background-color: rgba(151, 40, 5, 0.2);
  opacity: 0.5;
}

hr {
  opacity: 0.1;
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: #732626;
    backdrop-filter: blur(8px);
    padding: 1rem;
    border-radius: 8px;
    margin-top: 0.5rem;
    border: 1px solid rgba(151, 40, 5, 0.2);
  }

  .nav-link {
    padding: 0.75rem 1rem;
  }

  .nav-link.router-link-active::after {
    display: none;
  }
}
</style>
