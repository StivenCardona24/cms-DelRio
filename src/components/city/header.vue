<template>
    <div>
      <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
    </div>
    <div class="d-flex container pt-4 justify-content-between" 
    >
      <h3 class="font-bold ">Ciudades</h3>
      <div>
        <el-button
          type="primary"
          size="large"
          class="font-bold"
          @click="createNewCity"
        >
          <template #icon>
            <el-icon>
              <icon-plus />
            </el-icon>
          </template>
          NUEVA CIUDAD
        </el-button>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { useCityStore } from '@/store/city'
  import { storeToRefs} from 'pinia'
  const { createNewCity } = useCityStore()
  const CityStore = useCityStore();
  const { loadingPage } = storeToRefs(CityStore);
  </script>