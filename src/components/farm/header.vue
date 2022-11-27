<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex container pt-4 justify-content-between" 
  >
    <h3 class="font-bold ">Fincas</h3>
    <div>
      <el-button
        type="primary"
        size="large"
        class="font-bold"
        @click="createNewFarm"
      >
        <template #icon>
          <el-icon>
            <icon-plus />
          </el-icon>
        </template>
        NUEVA FINCA
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useFarmStore } from '@/store/farm'
import { storeToRefs} from 'pinia'
const { createNewFarm } = useFarmStore()
const FarmStore = useFarmStore();
const { loadingPage } = storeToRefs(FarmStore);
</script>