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
const { loadProduct} = useProductStore();
const { loadType_product } = useType_productStore();
onMounted(() => {
  loadProduct();
  loadType_product();
});

definePageMeta({
    layout: "admin",
});
</script>