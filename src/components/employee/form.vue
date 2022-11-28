<template>
  <el-form
    ref="formRef"
    :model="currentEmployee"
    :rules="rules"
    label-width="190px"
    label-position="left"
  >
  <el-form-item class="mb-6" label="Cedula: " prop="cedula">
      <el-input v-model="currentEmployee.cedula" placeholder="Ingresa el primer cedula del empleado" />
    </el-form-item>
    <el-form-item class="mb-6" label="primer nombre: " prop="primer_nombre">
      <el-input v-model="currentEmployee.primer_nombre" placeholder="Ingresa el primer nombre del empleado" />
    </el-form-item>
    <el-form-item class="mb-6" label="segundo nombre: " prop="segundo_nombre">
      <el-input v-model="currentEmployee.segundo_nombre" placeholder="Ingresa el segundo nombre" /> 
    </el-form-item> 
    <el-form-item class="mb-6" label="primerapellido: " prop="primer_apellido">
      <el-input v-model="currentEmployee.primer_apellido" placeholder="Ingresa el primer apellido" /> 
    </el-form-item> 
    <el-form-item class="mb-6" label="segundo apellido: " prop="segundo_apellido">
      <el-input v-model="currentEmployee.segundo_apellido" placeholder="Ingresa el segundo apellido" /> 
    </el-form-item> 
    <el-form-item class="mb-6" label="estudios: " prop="estudios">
      <el-input v-model="currentEmployee.estudios" placeholder="Ingresa los  estudios" /> 
    </el-form-item> 
    <el-form-item class="mb-6" label="sueldo: " prop="sueldo">
      <el-input v-model="currentEmployee.sueldo" placeholder="Ingresa el sueldo" /> 
    </el-form-item> 
    <el-form-item class="mb-6" label="cargo: " prop="cargo">
      <el-input v-model="currentEmployee.cargo" placeholder="Ingresa el cargo" /> 
    </el-form-item> 
    <el-form-item class="mb-6" label="fecha_nacimiento: " prop="fecha_nacimiento">
      <el-date-picker
        v-model="currentEmployee.fecha_nacimiento"
        type="date"
        placeholder="Pick a day"
          />
    </el-form-item> 
    <el-form-item class="mb-6" label="dependencia: " prop="dependencia">
      <el-input v-model="currentEmployee.dependencia" placeholder="Ingresa la dependencia" /> 
    </el-form-item> 
    <el-form-item class="mb-6" label="oficina: " prop="oficina">
      <el-input v-model="currentEmployee.oficina" placeholder="Ingresa la oficina" /> 
    </el-form-item> 
    <el-form-item>
      <el-button @click="save" type="primary" plain>GUARDAR</el-button>
    </el-form-item>


  </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { useEmployeeStore } from '@/store/employee'
import {ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
const formRef :any = ref<FormInstance>();
const rules :any = reactive<FormRules>({
  primer_nombre: [
    {
      required: true,
      message: "Por favor ingrese el primer nombre ",
      trigger: "blur",
    },
  ],
  segundo_nombre:[
    {
      required: true,
      message:"Por favor ingrese el segundo nombre",
      trigger: "blur",
    }
  ],
  primer_apellido: [
    {
      required: true,
      message: "Por favor ingrese el primer apellido ",
      trigger: "blur",
    },
  ],
  segundo_apellido: [
    {
      required: true,
      message: "Por favor ingrese el segundo apellido",
      trigger: "blur",
    },
  ],
  estudios: [
    {
      required: true,
      message: "Por favor ingrese el estudios de la empleado",
      trigger: "blur",
    },
  ],
  sueldo: [
    {
      required: true,
      message: "Por favor ingrese el sueldo",
      trigger: "blur",
    },
  ],
  cargo: [
    {
      required: true,
      message: "Por favor ingrese el cargo",
      trigger: "blur",
    },
  ],
  fecha_nacimiento: [
    {
      required: true,
      message: "Por favor ingrese la fecha de nacimiento",
      trigger: "blur",
    },
  ],
  dependencia: [
    {
      required: true,
      message: "Por favor ingrese el dependencia del empleado",
      trigger: "blur",
    },
  ],
  oficina: [
    {
      required: true,
      message: "Por favor ingrese la oficina del empleado",
      trigger: "blur",
    },
  ],
  

})

const EmployeeStore = useEmployeeStore();
const { currentEmployee, mesageBox, edit} = storeToRefs(EmployeeStore);
const { saveEmployee, updateEmployee } = EmployeeStore;
const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {

      if(!edit.value){
        await saveEmployee();
      }else{
        await updateEmployee();
      }
      
        ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        })
      formRef.value.resetFields();
    }
  });
};
</script>