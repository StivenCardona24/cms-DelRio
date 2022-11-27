<template>
    <div class="container">
     <EmployeeHeader/>
     <el-divider border-style="double" />
     <EmployeeDialog/>
     <EmployeeList/>
    </div>
  </template>

<script setup lang="ts">

import { useEmployeeStore } from '@/store/employee';
const { loadEmployee} = useEmployeeStore();

onMounted(() => {
  loadEmployee();
});

definePageMeta({
    layout: "admin",
});
</script>