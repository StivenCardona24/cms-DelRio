<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex  justify-content-between" 
  >
    <h1 class="font-bold text-xl">Clientes</h1>
    <div>
      <el-button
        plain
        type="warning"
        size="large"
        class="font-bold"
        @click="createNewClient"
      >
        <template #icon>
          <el-icon>
            <icon-plus />
          </el-icon>
        </template>
        NUEVO CLIENTE
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useClientStore } from '@/store/client'
import { storeToRefs} from 'pinia'
const { createNewClient } = useClientStore()
const ClientStore = useClientStore();
const { loadingPage } = storeToRefs(ClientStore);
</script>