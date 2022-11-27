<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="shoopings "
      style="width: 100%" >
      <el-table-column prop="num_compra" label="numero de compra" align="center" />
      <el-table-column prop="total" label="total" align="center" />
      <el-table-column prop="id_finca" label="id de finca" align="center" />     
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editShopping(scope.row)">
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
import { useShoppingStore } from '@/store/shopping';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const ShoppingStore = useShoppingStore();
const { shoopings, loadingPage } = storeToRefs(ShoppingStore);
const { editShopping, deleteShopping } = ShoppingStore;
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
      await deleteShopping(value)
      ElMessage({
        type: 'success',
        message: `finca ${value.name} eliminada`,
      })
    })
}

</script>
