<template>
  <el-form
    ref="formRef"
    :model="currentDependence"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="Nombre: " prop="nombre">
      <el-input v-model="currentDependence.nombre" placeholder="Ingresa el nombre de la dependencia" />
    </el-form-item>
    
    
    <el-form-item>
      <el-button @click="save" type="primary" >GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useDependenceStore } from '@/store/dependence'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre de la dependencia",
      trigger: "blur",
    },
  ],
 
})

const DependenceStore = useDependenceStore();
const { currentDependence, mesageBox} = storeToRefs(DependenceStore);
const { saveDependence } = DependenceStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveDependence();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>