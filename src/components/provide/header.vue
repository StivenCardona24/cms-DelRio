<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex  justify-content-between" 
  >
    <h1 class="font-bold text-xl">Proveedores</h1>
    <div>
      <el-button
        plain
        type="warning"
        size="large"
        class="font-bold"
        @click="createNewProvide"
      >
        <template #icon>
          <el-icon>
            <icon-plus />
          </el-icon>
        </template>
        NUEVO PROVEEDOR
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useProvideStore } from '@/store/provide'
import { storeToRefs} from 'pinia'
const { createNewProvide } = useProvideStore()
const ProvideStore = useProvideStore();
const { loadingPage } = storeToRefs(ProvideStore);
</script>