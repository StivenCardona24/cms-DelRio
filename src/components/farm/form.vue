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
    <el-form-item class="mb-6" label="Ciudad: " prop="ciudad">
      <el-select v-model="currentFarm.ciudad" placeholder="Selecciona la ciudad" clearable class="w-100" >
        <el-option
          v-for="city in cities"
          :key="city.id"
          :label="`${city.nombre}`"
          :value="city.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item class="mb-6" label="direccion: " prop="direccion">
      <el-input v-model="currentFarm.direccion" placeholder="Ingresa la direccion" />
    </el-form-item>
    <el-form-item class="mb-6" label="Oficina: " prop="oficina">
      <el-select v-model="currentFarm.oficina" placeholder="Selecciona la oficina" clearable class="w-100" >
        <el-option
          v-for="ofice in Ofices"
          :key="ofice.id"
          :label="`${ofice.nombre}`"
          :value="ofice.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item class="mb-6" label="Celular: " prop="celular">
      <el-input v-model="currentFarm.celular" placeholder="Ingresa el nombre de la finca" />
    </el-form-item>
    <el-form-item class="mb-6" label="Cuenta: " prop="cuenta">
      <el-input v-model="currentFarm.cuenta" placeholder="Ingresa la direccion" />
    </el-form-item>

    
    <el-form-item>
      <el-button @click="save" type="primary" >GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useFarmStore } from '@/store/farm'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
import { useCityStore} from '@/store/city';
import { useOficeStore } from '@/store/ofice'


const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre del finca",
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
  celular:[
    {
      required: true,
      message:"Por favor ingrese el celular",
      trigger: "blur",
    }
  ],
  cuenta:[
    {
      required: true,
      message:"Por favor ingrese la cuenta",
      trigger: "blur",
    }
  ],
  oficina:[
    {
      required: true,
      message:"Por favor ingrese la oficina",
      trigger: "blur",
    }
  ],
  ciudad:[
    {
      required: true,
      message:"Por favor ingrese la ciudad",
      trigger: "blur",
    }
  ],
  
  

})


const FarmStore = useFarmStore();
const cityStore = useCityStore();
const oficeStore = useOficeStore();
const { Ofices } = storeToRefs(oficeStore)
const { cities } = storeToRefs(cityStore);
const { currentFarm, mesageBox} = storeToRefs(FarmStore);
const { saveFarm } = FarmStore;
const { loadCities } = useCityStore();


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