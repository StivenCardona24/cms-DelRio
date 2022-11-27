<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex  justify-content-between" 
  >
    <h1 class="font-bold text-xl">Compras</h1>
    <div>
      <el-button
        plain
        type="warning"
        size="large"
        class="font-bold"
        @click="createNewShopping"
      >
        <template #icon>
          <el-icon>
            <icon-plus />
          </el-icon>
        </template>
        NUEVA COMPRA
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useShoppingStore } from '@/store/shopping'
import { storeToRefs} from 'pinia'
const { createNewShopping } = useShoppingStore()
const ShoppingStore = useShoppingStore();
const { loadingPage } = storeToRefs(ShoppingStore);
</script>