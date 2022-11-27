<template>
    <div class="container">
    <city-header/>
     <city-list/>
     <city-dialog/>
    </div>
  </template>

<script setup lang="ts">

import { useCityStore } from '@/store/city';
const { loadCities} = useCityStore();

onMounted(() => {
    loadCities();
});

definePageMeta({
    layout: "admin",
});
</script>