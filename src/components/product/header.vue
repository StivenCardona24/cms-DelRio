<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex  justify-content-between" 
  >
    <h1 class="font-bold text-xl">Productos</h1>
    <div>
      <el-button
        plain
        type="warning"
        size="large"
        class="font-bold"
        @click="createNewProduct"
      >
        <template #icon>
          <el-icon>
            <icon-plus />
          </el-icon>
        </template>
        NUEVO PRODUCTO
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useProductStore } from '@/store/product'
import { storeToRefs} from 'pinia'
const { createNewProduct } = useProductStore()
const ProductStore = useProductStore();
const { loadingPage } = storeToRefs(ProductStore);
</script>