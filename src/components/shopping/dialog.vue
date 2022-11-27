<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
      <shopping-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useShoppingStore} from '@/store/shopping'
  import { storeToRefs } from 'pinia';
  const ShoppingStore = useShoppingStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(ShoppingStore)
  </script>
  