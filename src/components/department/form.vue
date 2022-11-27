<template>
  <el-form
    ref="formRef"
    :model="currentDepartment"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="Nombre: " prop="nombre">
      <el-input v-model="currentDepartment.nombre" placeholder="Ingresa el nombre del departamento" />
    </el-form-item>  
    <el-form-item>
      <el-button @click="save" type="primary" plain>GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useDepartmentStore } from '@/store/department'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre de la ciudad",
      trigger: "blur",
    },
  ],
  
})

const DepartmentStore = useDepartmentStore();
const { currentDepartment, mesageBox} = storeToRefs(DepartmentStore);
const { saveDepartment } =DepartmentStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveDepartment();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>