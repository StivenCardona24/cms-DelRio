<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
      <farm-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useFarmStore} from '@/store/farm'
  import { storeToRefs } from 'pinia';
  const FarmStore = useFarmStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(FarmStore)
  </script>
  