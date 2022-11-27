<template>
  <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
    <department-form/>
  </el-dialog>
</template>
<script lang="ts" setup>
  import { useDepartmentStore} from '@/store/department'
import { storeToRefs } from 'pinia';
const DepartmentStore = useDepartmentStore()
const { dialogIsOpen, dialogTitle } = storeToRefs(DepartmentStore)
</script>
