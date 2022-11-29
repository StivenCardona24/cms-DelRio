<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <div class="d-flex container pt-4 justify-content-between" 
  >
    <h3 class="font-bold ">Fincas</h3>
    <div  class="mt-2">
      <el-select @change="filter" clearable v-model="departament" placeholder="Buscar por departamento">
        <el-option v-for="departament in departments" :key="departament.id" :label="`${departament.nombre}`"
          :value="departament.id" />
      </el-select>
    </div>

    <div  class="mt-2">
      <el-select @change="filter" v-model="city" clearable placeholder="Buscar por ciudad">
        <el-option v-for="city in cities" :key="city.id" :label="`${city.nombre}`" :value="city.id" />
      </el-select>
    </div>
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
import { useCityStore} from '@/store/city'
import { useDepartmentStore} from '@/store/department'
const { createNewFarm, loadFarm } = useFarmStore()
const FarmStore = useFarmStore();
const CityStore = useCityStore();
const DepartmentStore = useDepartmentStore();


const {cities} = storeToRefs(CityStore);
const { departments} = storeToRefs(DepartmentStore)
const { loadingPage, departament, city, type } = storeToRefs(FarmStore);

const clearField = () => {
  city.value = null;
}

const filter = () => {
  loadFarm();
}
</script>