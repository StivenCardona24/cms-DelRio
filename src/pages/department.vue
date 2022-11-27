<template>
    <div class="container">
     <department-header/>
     <el-divider border-style="double"  />
     <department-dialog/>
     <department-list/>
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