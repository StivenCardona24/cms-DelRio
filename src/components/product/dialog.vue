<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
      <product-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useProductStore} from '@/store/product'
  import { storeToRefs } from 'pinia';
  const ProductStore = useProductStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(ProductStore)
  </script>
  