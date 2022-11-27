<template>
    <div lass="container">
    <delivery_status-header/>
    <el-divider border-style="double" />
     <delivery_status-list/>
     <delivery_status-dialog/>
    </div>
  </template>

<script setup lang="ts">

import { useDelivery_statusStore } from '@/store/delivery_status';
const { loadDelivery_status} = useDelivery_statusStore();

onMounted(() => {
    loadDelivery_status();
});

definePageMeta({
    layout: "admin",
});
</script>