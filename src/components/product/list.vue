<template>
  <div>
    <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="products "
      style="width: 100%" >
      <el-table-column prop="id" label="Id" align="center" />
      <el-table-column prop="precio" label="precio" align="center" />
      <el-table-column prop="cantidad" label="cantidad" align="center" />
      <el-table-column prop="descripcion" label="descripcion" align="center" />
      <el-table-column prop="tipo" label="tipo" align="center" />
      <el-table-column prop="finca" label="finca" align="center" />
      <el-table-column prop="nombre" label="nombre" align="center" />
      <el-table-column label="Acciones" align="center">
        <template #default="scope">
          <div>
            <el-button plain type="primary" @click="editProduct(scope.row)">
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
import { useProductStore } from '@/store/product';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const ProductStore = useProductStore();
const { products, loadingPage } = storeToRefs(ProductStore);
const { editProduct, deleteProduct } = ProductStore;
const delMessageBox = (value: any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar el product  ${value.name}?`,
    'Eliminando el producto!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
    .then(async () => {
      await deleteProduct(value)
      ElMessage({
        type: 'success',
        message: `producto ${value.name} eliminada`,
      })
    })
}

</script>
