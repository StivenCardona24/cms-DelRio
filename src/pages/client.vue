<template>
    <div class="container">
    <client-header/>
     <client-list/>
     <client-dialog/>
    </div>
  </template>

<script setup lang="ts">

import { useClientStore } from '@/store/client';
const { loadClient} = useClientStore();

onMounted(() => {
    loadClient();
});

definePageMeta({
    layout: "admin",
});
</script>