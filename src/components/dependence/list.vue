<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="dependencies "
      style="width: 100%" >
      <el-table-column prop="nombre" label="Nombre" align="center" />      
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editDependence(scope.row)">
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
import { useDependenceStore } from '@/store/dependence';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const DependenceStore = useDependenceStore();
const { dependencies, loadingPage } = storeToRefs(DependenceStore);
const { editDependence, deleteDependence } = DependenceStore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar la dependecia ${value.name}?`,
    'Eliminando la dependencia!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteDependence(value)
      ElMessage({
        type: 'success',
        message: `dependencia ${value.name} eliminada`,
      })
    })
}

</script>
