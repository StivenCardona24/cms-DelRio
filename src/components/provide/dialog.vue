<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
      <provide-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useProvideStore} from '@/store/provide'
  import { storeToRefs } from 'pinia';
  const ProvideStore = useProvideStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(ProvideStore)
  </script>
  