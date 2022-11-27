<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex container pt-4 justify-content-between"  
  >
    <h3 class="font-bold text-xl">Dependencias</h3>
    <div>
      <el-button
        type="primary"
        size="large"
        class="font-bold"
        @click="createNewDependence"
      >
        <template #icon>
          <el-icon>
            <icon-plus />
          </el-icon>
        </template>
        NUEVA DEPENDENCIA
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDependenceStore } from '@/store/dependence'
import { storeToRefs} from 'pinia'
const { createNewDependence } = useDependenceStore()
const DependenceStore = useDependenceStore();
const { loadingPage } = storeToRefs(DependenceStore);
</script>