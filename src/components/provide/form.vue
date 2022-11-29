<template>
  <el-form
    ref="formRef"
    :model="currentProvide"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="Nombre: " prop="nombre">
      <el-input v-model="currentProvide.nombre" placeholder="Ingresa el nombre de la proveedor" />
    </el-form-item>
 
    <el-form-item>
      <el-button @click="save" type="primary" >GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useProvideStore } from '@/store/provide'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  
  
  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre del proveedor",
      trigger: "blur",
    },
  ],
})

const ProvideStore = useProvideStore();
const { currentProvide, mesageBox} = storeToRefs(ProvideStore);
const { saveProvide } = ProvideStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveProvide();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>