<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
    <client-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useClientStore} from '@/store/client'
  import { storeToRefs } from 'pinia';
  const ClientStore = useClientStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(ClientStore)
  </script>
  