<template>
  <el-form
    ref="formRef"
    :model="currentOfice"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="Nombre: " prop="nombre">
      <el-input v-model="currentOfice.nombre" placeholder="Ingresa el nombre de la oficina" />
    </el-form-item>
    <el-form-item class="mb-6" label="direccion: " prop="direccion">
      <el-input v-model="currentOfice.direccion" placeholder="Ingresa la direccion" />
    </el-form-item>
   
    <el-form-item>
      <el-button @click="save" type="primary" plain>GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useOficeStore } from '@/store/ofice'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  
  direccion:[
    {
      required: true,
      message:"Por favor ingrese la oficina",
      trigger: "blur",
    }
  ],
  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre del oficina",
      trigger: "blur",
    },
  ],
})

const OficeStore = useOficeStore();
const { currentOfice, mesageBox} = storeToRefs(OficeStore);
const { saveOfice } = OficeStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveOfice();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>