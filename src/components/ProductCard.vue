<template>
  <div class="product-card shadow-lg">
    <div class="product-header">
      <h3>{{ product.title }}</h3>
    </div>
    <div class="product-image">
      <img
        :src="getProductImage(product.id)"
        :alt="product.title"
        class="product-img"
      />
    </div>
    <div class="product-body">
      <p class="product-description">{{ product.description }}</p>
      <div class="product-price">
        <span class="price">{{ formatPrice(product.price) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Product } from '@/composables/data/products';

defineProps<{
  product: Product;
}>();

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(price);
};

const getProductImage = (productId: number): string => {
  // Using placeholder images from picsum.photos
  // Each product gets a unique placeholder image based on its ID
  return `https://picsum.photos/400/300?random=${productId}`;
};
</script>

<style scoped>
:root {
  --color-bisque: #ffe4c4;
  --color-bisque-light: #f0d4e8;
}

.product-card {
  border: none;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(151, 40, 5, 0.15) !important;
}

.product-header {
  background: linear-gradient(135deg, #972805 0%, #c94000 100%);
  padding: 1.5rem;
  color: white;
  border-bottom: 3px solid var(--color-bisque);
}

.product-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

.product-image {
  background-color: #f9f9f9;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border-bottom: 1px solid #e9ecef;
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 3rem;
}

.product-body {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
  margin: 0 0 1rem 0;
}

.product-price {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e9ecef;
  padding-top: 1rem;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #972805;
}
</style>
