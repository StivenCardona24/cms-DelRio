<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
      <employee-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useEmployeeStore} from '@/store/employee'
  import { storeToRefs } from 'pinia';
  const EmployeeStore = useEmployeeStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(EmployeeStore)
  </script>
  