<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="providers "
      style="width: 100%" >
      <el-table-column prop="id" label="Id" align="center" />     
      <el-table-column prop="nombre" label="Nombre" align="center" /> 
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editProvide(scope.row)">
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
import { useProvideStore } from '@/store/provide';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const ProvideStore = useProvideStore();
const { providers, loadingPage } = storeToRefs(ProvideStore);
const { editProvide, deleteProvide } = ProvideStore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar el proveedor ${value.nombre}?`,
    'Eliminando el proveedor!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteProvide(value)
      ElMessage({
        type: 'success',
        message: `proveedor ${value.nombre} eliminada`,
      })
    })
}

</script>
