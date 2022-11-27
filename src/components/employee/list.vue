<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="employees"
      style="width: 100%" >
      <el-table-column prop="cedula" label="cedula" align="center" />
      <el-table-column prop="primer_nombre" label="primer nombre" align="center" />
      <el-table-column prop="segundo_nombre" label="segundo nombre" align="center" />
      <el-table-column prop="primer_apellido" label="primer apellido" align="center" />
      <el-table-column prop="segundo_apellido" label="segundo apellido" align="center" />
      <el-table-column prop="estudios" label="estudios" align="center" />
      <el-table-column prop="sueldo" label="sueldo" align="center" />
      <el-table-column prop="cargo" label="cargo" align="center" />
      <el-table-column prop="fecha_nacimiento" label="fecha nacimiento" align="center" />
      <el-table-column prop="dependencia" label="dependencia" align="center" />
      <el-table-column prop="oficina" label="oficina" align="center" />
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editEmployee(scope.row)">
              <template #icon>
                <el-icon>
                  <icon-edit />
                </el-icon>
              </template>
            </el-button>
            <el-button plain type="danger" @click="delMessageBox(scope.row)">
              <template #icon>
                <el-icon>
                  <icon-delete />
                </el-icon>
              </template>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { useEmployeeStore } from '@/store/employee';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const EmployeeStore = useEmployeeStore();
const { employees, loadingPage } = storeToRefs(EmployeeStore);
const { editEmployee, deleteEmployee } = EmployeeStore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar el empleado ${value.name}?`,
    'Eliminando la ciudad!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteEmployee(value)
      ElMessage({
        type: 'success',
        message: `Empleado ${value.name} eliminada`,
      })
    })
}

</script>
