<template>
    <div class="container">
     <provide-header/>
     <el-divider border-style="double" />
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