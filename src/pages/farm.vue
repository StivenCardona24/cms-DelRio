<template>
    <div class="container">
     <farm-header/>
     <el-divider border-style="double" />
     <farm-dialog/>
     <farm-list/>
    </div>
  </template>

<script setup lang="ts">

import { useFarmStore } from '@/store/farm';
const { loadFarm} = useFarmStore();

onMounted(() => {
  loadFarm();
});

definePageMeta({
    layout: "admin",
});
</script>