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
import { usePositionStore } from '@/store/confi';
import { useDependenceStore} from '@/store/dependence'
import { useOficeStore } from '@/store/ofice';

const { loadOfice} = useOficeStore();
const { loadPosition} = usePositionStore();
const { loadDependence } = useDependenceStore();
const { loadEmployee} = useEmployeeStore();

onMounted(() => {
  loadEmployee();
  loadPosition();
  loadDependence();
  loadOfice();
});

definePageMeta({
    layout: "admin",
});
</script>