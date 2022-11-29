<template>
  <el-form
    ref="formRef"
    :model="currentAuth"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="Correo: " prop="correo">
      <el-input v-model="currentAuth.correo" placeholder="Ingresa el correo" />
    </el-form-item>
    <el-form-item class="mb-6" label="Contraseña: " prop="contrasenia">
      <el-input type="password" v-model="currentAuth.contrasenia" placeholder="Ingresa la constraseña" />
    </el-form-item>
    
    <el-form-item>
      <el-button @click="save" type="primary" >INICIAR SESION</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useAuthStore } from '@/store/auth'

import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  correo: [
    {
      required: true,
      message: "Por favor ingrese el correo ",
      trigger: "blur",
    },
  ],
  contrasenia:[
    {
      required: true,
      message:"Por favor ingrese la contraseña",
      trigger: "blur",
    }
  ],
})

const AuthStore = useAuthStore();
const { currentAuth, mesageBox} = storeToRefs(AuthStore);

const { saveAuth } = AuthStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveAuth();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>