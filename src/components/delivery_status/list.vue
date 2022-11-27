<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="delivery_states"
      style="width: 100%" >
      <el-table-column prop="id" label="Id" align="center" />
      <el-table-column prop="nombre" label="Nombre" align="center" />    
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editDelivery_status(scope.row)">
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
import { useDelivery_statusStore } from '@/store/delivery_status';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const Delivery_statusStore = useDelivery_statusStore();
const { delivery_states, loadingPage } = storeToRefs(Delivery_statusStore);
const { editDelivery_status, deleteDelivery_status } = Delivery_statusStore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar el estado de entrega ${value.name}?`,
    'Eliminando el estado de entrega!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteDelivery_status(value)
      ElMessage({
        type: 'success',
        message: `Estado de entrega a sido ${value.name} eliminado`,
      })
    })
}

</script>
