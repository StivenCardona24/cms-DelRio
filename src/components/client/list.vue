<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="clients "
      style="width: 100%" >
      <el-table-column prop="cedula" label="cedula" align="center" />
      <el-table-column prop="nombre" label="nombre" align="center" />
      <el-table-column prop="celular" label="celular" align="center" />
      <el-table-column prop="correo" label="correo" align="center" />
      <el-table-column prop="cantidad_compras" label="cantidad de compras" align="center" />
      <el-table-column prop="estado" label="estado" align="center" />
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editClient(scope.row)">
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
import { useClientStore } from '@/store/client';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const Clientstore = useClientStore();
const { clients, loadingPage } = storeToRefs(Clientstore);
const { editClient, deleteClient } = Clientstore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar el cliente ${value.name}?`,
    'Eliminando el cliente!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteClient(value)
      ElMessage({
        type: 'success',
        message: `cliente ${value.name} eliminado`,
      })
    })
}

</script>
