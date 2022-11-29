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
       <el-select v-model="currentEmployee.cargo" placeholder="Selecciona el departamento" clearable class="w-100" >
        <el-option
          v-for="position in positions "
          :key="position.id"
          :label="`${position.nombre}`"
          :value="position.id"
        />
      </el-select>
    </el-form-item> 
    <el-form-item class="mb-6" label="fecha_nacimiento: " prop="fecha_nacimiento">
      <el-date-picker
        v-model="currentEmployee.fecha_nacimiento"
        type="date"
        placeholder="Pick a day"
          />
    </el-form-item> 
    <el-form-item  class="mb-6" label="dependencia: " prop="dependencia">
      <el-select v-model="currentEmployee.dependencia" placeholder="Selecciona el departamento" clearable class="w-100" >
        <el-option
          v-for="dependence in dependencies"
          :key="dependence.id"
          :label="`${dependence.nombre}`"
          :value="dependence.id"
        />
      </el-select>
    </el-form-item> 
    <el-form-item class="mb-6" label="oficina: " prop="oficina">
      <el-select v-model="currentEmployee.oficina" placeholder="Selecciona el departamento" clearable class="w-100" >
        <el-option
          v-for="ofice in Ofices"
          :key="ofice.id"
          :label="`${ofice.nombre}`"
          :value="ofice.id"
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
import { useEmployeeStore } from '@/store/employee'
import { useOficeStore} from '@/store/ofice'
import { useDependenceStore } from '@/store/dependence'
import { usePositionStore } from '@/store/confi'


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
const OficeStore = useOficeStore();
const DependenceStore = useDependenceStore();
const PositionStore = usePositionStore();
const { Ofices } = storeToRefs(OficeStore)
const { dependencies } = storeToRefs(DependenceStore)
const { positions } = storeToRefs(PositionStore)
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