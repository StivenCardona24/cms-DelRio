<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
    <dependence-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useDependenceStore} from '@/store/dependence'
  import { storeToRefs } from 'pinia';
  const DependenceStore = useDependenceStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(DependenceStore)
  </script>
  