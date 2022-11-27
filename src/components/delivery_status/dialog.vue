<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
      <delivery_status-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useDelivery_statusStore} from '@/store/delivery_status'
  import { storeToRefs } from 'pinia';
  const Delivery_statusStore = useDelivery_statusStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(Delivery_statusStore)
  </script>
  