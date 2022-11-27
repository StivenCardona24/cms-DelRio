<template>
    <div>
      <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
    </div>
    <div class="d-flex  justify-content-between" 
    >
      <h1 class="font-bold text-xl">Ciudades</h1>
      <div>
        <el-button
          plain
          type="warning"
          size="large"
          class="font-bold"
          @click="createNewEmployee"
        >
          <template #icon>
            <el-icon>
              <icon-plus />
            </el-icon>
          </template>
          NUEVA CIUDAD
        </el-button>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { useEmployeeStore } from '@/store/employee'
  import { storeToRefs} from 'pinia'
  const { createNewEmployee } = useEmployeeStore()
  const EmployeeStore = useEmployeeStore();
  const { loadingPage } = storeToRefs(EmployeeStore);
  </script>