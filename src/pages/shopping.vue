<template>
    <div class="container">
     <shopping-header/>
     <el-divider border-style="double" />
     <shopping-dialog/>
     <shopping-list/>
    </div>
  </template>

<script setup lang="ts">

import { useShoppingStore } from '@/store/shopping';
const { loadShopping} = useShoppingStore();

onMounted(() => {
  loadShopping();
});

definePageMeta({
    layout: "admin",
});
</script>