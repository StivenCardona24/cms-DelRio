<template>
  <el-form
    ref="formRef"
    :model="currentFarm"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="Nombre: " prop="nombre">
      <el-input v-model="currentFarm.nombre" placeholder="Ingresa el nombre de la finca" />
    </el-form-item>
    <el-form-item class="mb-6" label="direccion: " prop="direccion">
      <el-input v-model="currentFarm.direccion" placeholder="Ingresa la direccion" />
    </el-form-item>
    <el-form-item class="mb-6" label="Celular: " prop="celular">
      <el-input v-model="currentFarm.celular" placeholder="Ingresa el nombre de la finca" />
    </el-form-item>
    <el-form-item class="mb-6" label="Cuenta: " prop="cuenta">
      <el-input v-model="currentFarm.cuenta" placeholder="Ingresa la direccion" />
    </el-form-item>
    
    <el-form-item>
      <el-button @click="save" type="primary" plain>GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useFarmStore } from '@/store/farm'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre del Banco",
      trigger: "blur",
    },
  ],
  direccion:[
    {
      required: true,
      message:"Por favor ingrese la direccion",
      trigger: "blur",
    }
  ],
})

const FarmStore = useFarmStore();
const { currentFarm, mesageBox} = storeToRefs(FarmStore);
const { saveFarm } = FarmStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveFarm();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>