<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex  justify-content-between" 
  >
    <h1 class="font-bold text-xl">Fincas</h1>
    <div>
      <el-button
        plain
        type="warning"
        size="large"
        class="font-bold"
        @click="createNewOfice"
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
import { useOficeStore } from '@/store/ofice'
import { storeToRefs} from 'pinia'
const { createNewOfice } = useOficeStore()
const OficeStore = useOficeStore();
const { loadingPage } = storeToRefs(OficeStore);
</script>