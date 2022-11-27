<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle">
      <city-form/>
    </el-dialog>
</template>
  <script lang="ts" setup>
  import { useCityStore} from '@/store/city'
  import { storeToRefs } from 'pinia';
  const CityStore = useCityStore()
  const { dialogIsOpen, dialogTitle } = storeToRefs(CityStore)
  </script>
  