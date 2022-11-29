<template>
    <div class="container">
     <farm-header/>
     <el-divider border-style="double" />
     <farm-dialog/>
     <farm-list/>
    </div>
  </template>

<script setup lang="ts">

import { useFarmStore } from '@/store/farm';
import { useCityStore } from '@/store/city';
import { useOficeStore } from "@/store/ofice"
import { useDepartmentStore } from '@/store/department';
import { useType_farmStore } from '@/store/confi'

const { loadFarm} = useFarmStore();
const { loadCities} = useCityStore();
const { loadOfice } = useOficeStore();
const { loadDepartment} = useDepartmentStore();
const { loadType_farm} = useType_farmStore();

onMounted(() => {
  loadFarm();
  loadCities();
  loadOfice();
  loadDepartment();
  loadType_farm();
});

definePageMeta({
    layout: "admin",
});
</script>