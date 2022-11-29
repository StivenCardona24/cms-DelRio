<template>
    <div class="container">
    <city-header/>
    <el-divider border-style="double" />
     <city-list/>
     <city-dialog/>
    </div>
  </template>

<script setup lang="ts">

import { useCityStore } from '@/store/city';
import { useDepartmentStore } from "@/store/department"
const { loadCities} = useCityStore();
const { loadDepartment} = useDepartmentStore();

onMounted(() => {
    loadCities();
    loadDepartment();
});

definePageMeta({
    layout: "admin",
});
</script>