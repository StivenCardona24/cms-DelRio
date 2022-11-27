<template>
    <div class="container">
    <dependence-header/>
     <dependence-list/>
     <dependence-dialog/>
    </div>
  </template>

<script setup lang="ts">

import { useDependenceStore } from '@/store/dependence';
const { loadDependence} = useDependenceStore();

onMounted(() => {
    loadDependence();
});

definePageMeta({
    layout: "admin",
});
</script>