<template>
    <div class="container">
     <DepartmentHeader/>
     <DepartmentDialog/>
     <DepartmentList/>
    </div>
  </template>

<script setup lang="ts">

import { useDepartmentStore } from '@/store/department';
const { loadDepartment} = useDepartmentStore();

onMounted(() => {
  loadDepartment();
});

definePageMeta({
    layout: "admin",
});
</script>