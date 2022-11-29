<template>
  <el-form
    ref="formRef"
    :model="currentShopping"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="total: " prop="total">
      <el-input v-model="currentShopping.total" placeholder="Ingresa el total de la compra" />
    </el-form-item>
    <el-form-item class="mb-6" label="id de finca: " prop="id_finca">
      <el-input v-model="currentShopping.id_finca" placeholder="Ingresa el id de la finca" />
    </el-form-item>    
    <el-form-item>
      <el-button @click="save" type="primary" >GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useShoppingStore } from '@/store/shopping'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  total: [
    {
      required: true,
      message: "Por favor ingrese el total de la finca",
      trigger: "blur",
    },
  ],
  id_finca:[
    {
      required: true,
      message:"Por favor ingrese la el id de la finca",
      trigger: "blur",
    }
  ],
})

const ShoppingStore = useShoppingStore();
const { currentShopping, mesageBox} = storeToRefs(ShoppingStore);
const { saveShopping } = ShoppingStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveShopping();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>