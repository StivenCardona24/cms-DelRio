<template>
    <div class="container">
     <provide-header/>
     <provide-dialog/>
     <provide-list/>
    </div>
  </template>

<script setup lang="ts">

import { useProvideStore } from '@/store/provide';
const { loadProvide} = useProvideStore();

onMounted(() => {
  loadProvide();
});

definePageMeta({
    layout: "admin",
});
</script>