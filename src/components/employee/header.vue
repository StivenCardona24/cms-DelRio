<template>
    <div>
      <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
    </div>
    <div class="d-flex container pt-4 justify-content-between" 
    >
      <h3 class="font-bold ">Empleados</h3>
      <div>
        <el-button
          type="primary"
          size="large"
          class="font-bold"
          @click="createNewEmployee"
        >
          <template #icon>
            <el-icon>
              <icon-plus />
            </el-icon>
          </template>
          NUEVO EMPLEADO
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