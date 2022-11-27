<template>
    <div class="container">
     <product-header/>
     <product-dialog/>
     <product-list/>
    </div>
  </template>

<script setup lang="ts">

import { useProductStore } from '@/store/product';
const { loadProduct} = useProductStore();

onMounted(() => {
  loadProduct();
});

definePageMeta({
    layout: "admin",
});
</script>