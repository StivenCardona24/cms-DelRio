<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="farms "
      style="width: 100%" >
      <el-table-column prop="id" label="Id" align="center" />
      <el-table-column prop="nombre" label="Nombre" align="center" />
      <el-table-column prop="direccion" label="Direccion" align="center" />
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editFarm(scope.row)">
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
import { useFarmStore } from '@/store/farm';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const FarmStore = useFarmStore();
const { farms, loadingPage } = storeToRefs(FarmStore);
const { editFarm, deleteFarm } = FarmStore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar la finca ${value.name}?`,
    'Eliminando la finca!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteFarm(value)
      ElMessage({
        type: 'success',
        message: `finca ${value.name} eliminada`,
      })
    })
}

</script>
