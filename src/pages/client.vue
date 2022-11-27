<template>
    <div class="container">
    <client-header/>
    <el-divider border-style="double" />
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