<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex container pt-4 justify-content-between" 
  >
    <h3 class="font-bold ">Oficinas</h3>
    <div>
      <el-button
        type="primary"
        size="large"
        class="font-bold"
        @click="createNewOfice"
      >
        <template #icon>
          <el-icon>
            <icon-plus />
          </el-icon>
        </template>
        NUEVA OFICINA
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