<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="cities"
      style="width: 100%" >
      <el-table-column prop="id" label="Id" align="center" />
      <el-table-column prop="nombre" label="Nombre" align="center" />
      <el-table-column prop="departamento" label="Departamento" align="center" />
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editCity(scope.row)">
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
import { useCityStore } from '@/store/city';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const CityStore = useCityStore();
const { cities, loadingPage } = storeToRefs(CityStore);
const { editCity, deleteCity } = CityStore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar la ciudad ${value.name}?`,
    'Eliminando la ciudad!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteCity(value)
      ElMessage({
        type: 'success',
        message: `Ciudad ${value.name} eliminada`,
      })
    })
}

</script>
