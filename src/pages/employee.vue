<template>
    <div class="container">
     <EmployeeHeader/>
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