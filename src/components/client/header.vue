<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex container pt-4 justify-content-between" 
  >
    <h3 class="font-bold text-xl">Clientes</h3>
    <div>
      <el-button
        type="primary"
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