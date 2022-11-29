<template>
  <el-form
    ref="formRef"
    :model="currentCity"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="Nombre: " prop="nombre">
      <el-input v-model="currentCity.nombre" placeholder="Ingresa el nombre de la finca" />
    </el-form-item>
    <el-form-item class="mb-6" label="Departamento: " prop="departamento">
      <el-select v-model="currentCity.departamento" placeholder="Selecciona el departamento" clearable class="w-100" >
        <el-option
          v-for="department in departments"
          :key="department.id"
          :label="`${department.nombre}`"
          :value="department.id"
        />
      </el-select>
    </el-form-item> 
    <el-form-item>
      <el-button @click="save" type="primary" >GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useCityStore } from '@/store/city'
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
  departamento:[
    {
      required: true,
      message:"Por favor ingrese el departamento",
      trigger: "blur",
    }
  ],
})

const CityStore = useCityStore();
const { currentCity, mesageBox} = storeToRefs(CityStore);
const DepartmentStore = useDepartmentStore();
const { departments } = storeToRefs(DepartmentStore)
const { saveCity } = CityStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveCity();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>