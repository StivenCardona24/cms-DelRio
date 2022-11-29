<template>
  <el-form
    ref="formRef"
    :model="currentClient"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
    <el-form-item class="mb-6" label="cedula: " prop="cedula">
      <el-input v-model="currentClient.cedula" placeholder="Ingresa el cedula " />
    </el-form-item>
    <el-form-item class="mb-6" label="nombre: " prop="nombre">
      <el-input v-model="currentClient.nombre" placeholder="Ingresa el nombre" />
    </el-form-item>
    <el-form-item class="mb-6" label="celular: " prop="celular">
      <el-input v-model="currentClient.celular" placeholder="Ingresa el celular" />
    </el-form-item>
    <el-form-item class="mb-6" label="correo: " prop="correo">
      <el-input v-model="currentClient.correo" placeholder="Ingresa el correo" />
    </el-form-item>
    <el-form-item class="mb-6" label="cantidad de compras: " prop="cantidad_compras">
      <el-input v-model="currentClient.cantidad_compras" placeholder="Ingresa el cantidad de compras " />
    </el-form-item>
    <el-form-item class="mb-6" label="estado: " prop="estado">
      <el-select v-model="currentClient.estado" placeholder="Selecciona el estado del cliente" clearable class="w-full">
        <el-option
          label="Activo"
          :value="StatusClient.ACTIVO"
        />
        <el-option
          label="Pasivo"
          :value="StatusClient.PASIVO"
        />
        <el-option
          label="Paz y salvo"
          :value="StatusClient.PAZYSALVO"
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
import { useClientStore } from '@/store/client'
import { StatusClient } from '@/interfaces/client.interface'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  cedula: [
    {
      required: true,
      message: "Por favor ingrese la cedula del cliente ",
      trigger: "blur",
    },
  ],
  nombre:[
    {
      required: true,
      message:"Por favor ingrese el nombre",
      trigger: "blur",
    }
  ],
  celular:[
    {
      required: true,
      message:"Por favor ingrese el celular",
      trigger: "blur",
    }
  ],
  correo:[
    {
      required: true,
      message:"Por favor ingrese el correo",
      trigger: "blur",
    }
  ],
  cantidad_compras:[
    {
      required: true,
      message:"Por favor ingrese la cantidad de compras",
      trigger: "blur",
    }
  ],
  estado:[
    {
      required: true,
      message:"Por favor ingrese el estado",
      trigger: "blur",
    }
  ],
})

const ClientStore = useClientStore();
const { currentClient, mesageBox} = storeToRefs(ClientStore);
const { saveClient } = ClientStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveClient();
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>