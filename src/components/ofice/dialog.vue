<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
      <ofice-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useOficeStore} from '@/store/ofice'
  import { storeToRefs } from 'pinia';
  const OficeStore = useOficeStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(OficeStore)
  </script>
  