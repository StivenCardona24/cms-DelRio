<template>
    <div>
      <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
    </div>
    <div class="d-flex container pt-4 justify-content-between" 
    >
      <h3 class="font-bold text-xl">estado de entrega</h3>
      <div>
        <el-button
          type="primary"
          size="large"
          class="font-bold"
          @click="createNewDelivery_status"
        >
          <template #icon>
            <el-icon>
              <icon-plus />
            </el-icon>
          </template>
          NUEVA ESTADO DE ENTREGA
        </el-button>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { useDelivery_statusStore } from '@/store/delivery_status'
  import { storeToRefs} from 'pinia'
  const { createNewDelivery_status } = useDelivery_statusStore()
  const Delivery_statusStore = useDelivery_statusStore();
  const { loadingPage } = storeToRefs(Delivery_statusStore);
  </script>