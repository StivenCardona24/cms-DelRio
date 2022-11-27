<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="Ofices "
      style="width: 100%" >
      <el-table-column prop="id" label="Id" align="center" />     
      <el-table-column prop="nombre" label="Nombre" align="center" />
      <el-table-column prop="direccion" label="Direccion" align="center" />      
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editOfice(scope.row)">
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
import { useOficeStore } from '@/store/ofice';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const OficeStore = useOficeStore();
const { Ofices, loadingPage } = storeToRefs(OficeStore);
const { editOfice, deleteOfice } = OficeStore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar la oficina ${value.name}?`,
    'Eliminando la oficina!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteOfice(value)
      ElMessage({
        type: 'success',
        message: `oficina ${value.name} eliminada`,
      })
    })
}

</script>
