<template>
    <div class="container">
    <ofice-header/>
    <el-divider border-style="double"  />
     <ofice-list/>
     <ofice-dialog/>
    </div>
  </template>

<script setup lang="ts">

import { useOficeStore } from '@/store/ofice';
const { loadOfice} = useOficeStore();

onMounted(() => {
    loadOfice();

});

definePageMeta({
    layout: "admin",
});
</script>