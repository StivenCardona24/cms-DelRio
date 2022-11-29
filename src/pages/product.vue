<template>
    <div class="container">
     <product-header/>
     <el-divider border-style="double" />
     <product-dialog/>
     <product-list/>
    </div>
  </template>

<script setup lang="ts">

import { useProductStore } from '@/store/product';
import {useType_productStore } from '@/store/confi'
import { useFarmStore} from '@/store/farm'
const { loadProduct} = useProductStore();
const { loadType_product } = useType_productStore();
const {loadFarm} = useFarmStore();

onMounted(() => {
  loadProduct();
  loadType_product();
  loadFarm();
});

definePageMeta({
    layout: "admin",
});
</script>