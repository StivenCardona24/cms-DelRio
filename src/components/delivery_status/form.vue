<template>
  <el-form
    ref="formRef"
    :model="currentDelivery_status"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="Nombre: " prop="nombre">
      <el-input v-model="currentDelivery_status.nombre" placeholder="Ingresa el nombre del estado de entrega" />
    </el-form-item>    
    <el-form-item>
      <el-button @click="save" type="primary" plain>GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useDelivery_statusStore } from '@/store/delivery_status'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre del estado de entrega",
      trigger: "blur",
    },
  ],
  
})

const Delivery_statusStore = useDelivery_statusStore();
const { currentDelivery_status, mesageBox} = storeToRefs(Delivery_statusStore);
const { saveDelivery_status } = Delivery_statusStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveDelivery_status();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>