<template>
  <el-form
    ref="formRef"
    :model="currentProduct"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="precio: " prop="precio">
      <el-input v-model="currentProduct.precio " placeholder="Ingresa el precio del producto" />
    </el-form-item>
    <el-form-item class="mb-6" label="cantidad: " prop="cantidad">
      <el-input v-model="currentProduct.cantidad" placeholder="Ingresa la cantidad" />
    </el-form-item>
    <el-form-item class="mb-6" label="descripcion: " prop="descripcion">
      <el-input v-model="currentProduct.descripcion" placeholder="Ingres la descripcion del producto" />
    </el-form-item>
    <el-form-item class="mb-6" label="tipo: " prop="tipo">
      <el-select v-model="currentProduct.tipo" placeholder="Selecciona el tipo de producto" clearable class="w-100" >
        <el-option
          v-for="type_product in type_products"
          :key="type_product.id"
          :label="`${type_product.nombre}`"
          :value="type_product.id"
        />
      </el-select>
      </el-form-item>
    <el-form-item class="mb-6" label="finca: " prop="finca">
      <el-select v-model="currentProduct.finca" placeholder="Selecciona la finca" clearable class="w-100" >
        <el-option
          v-for="farm in farms"
          :key="farm.id"
          :label="`${farm.nombre}`"
          :value="farm.id"
        />
      </el-select>
      </el-form-item>
    <el-form-item class="mb-6" label="nombre: " prop="nombre">
      <el-input v-model="currentProduct.nombre" placeholder="Ingresa el nombre" />
    </el-form-item>
    
    <el-form-item>
      <el-button @click="save" type="primary" plain>GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useProductStore } from '@/store/product'
import { useType_productStore } from '@/store/confi'
import { useFarmStore } from '@/store/farm'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
 
  precio: [
    {
      required: true,
      message: "Por favor ingrese el precio del producto",
      trigger: "blur",
    },
  ],
  cantidad: [
    {
      required: true,
      message: "Por favor ingrese la cantidad de productos",
      trigger: "blur",
    },
  ],
  descripcion: [
    {
      required: true,
      message: "Por favor ingrese la desceipcion del producto",
      trigger: "blur",
    },
  ],
  tipo: [
    {
      required: true,
      message: "Por favor ingrese el tipo",
      trigger: "blur",
    },
  ],
  finca: [
    {
      required: true,
      message: "Por favor ingrese la finca",
      trigger: "blur",
    },
  ],

  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre del producto",
      trigger: "blur",
    },
  ],
  
})

const ProductStore = useProductStore();
const { currentProduct, mesageBox} = storeToRefs(ProductStore);
const Type_productStore = useType_productStore();
const { type_products } = storeToRefs(Type_productStore)
const FarmStore = useFarmStore();
const { farms } = storeToRefs(FarmStore)
const { saveProduct } = ProductStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveProduct();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>