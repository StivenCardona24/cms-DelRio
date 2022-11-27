import { defineStore } from "pinia";
import { Product } from "~~/src/interfaces/product.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newProduct= (): Product => ({

  precio: 0,
  cantidad: 0,
  descripcion: "",
  tipo: 1,
  finca: 1,
  nombre: "",

 
  });

  export const useProductStore = defineStore("product", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "producto" });
  
    const products = ref<Product[]>([]);
    const currentProduct = ref<Product>(newProduct());
  
    const createNewProduct= () => {currentProduct
      currentProduct.value = newProduct();
      dialogTitle.value = "Nueva Finca:";
      dialog.openDialog();
    };
  
    const loadProduct= async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      products.value = data;
      console.log(products);
      loadingPage.value = false;
    };
  
    const saveProduct = async () => {
      if (!currentProduct.value) {
          return mesageBox;
      }
      if (!currentProduct.value.id) {
        await createApi(currentProduct.value);
        mesageBox.value = {type:'success',message:`La finca ${currentProduct.value.nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentProduct.value.id, currentProduct.value)
        mesageBox.value = {type:'success', message:`La finca ${currentProduct.value.nombre} se ha actualizado correctamente`};
      }
      await loadProduct();
      dialog.closeDialog();
      
    };
  
    const editProduct = (product: Product) => {
      currentProduct.value = JSON.parse(JSON.stringify(product));
      dialogTitle.value = `Editar Banco: ${currentProduct.value.nombre} `;
      dialog.openDialog();
    };
  
    const deleteProduct = async (product: Product) => {
      currentProduct.value = JSON.parse(JSON.stringify(product));
      if(currentProduct.value.id){
        await deleteApi(currentProduct.value.id);
      }
      
      await loadProduct();
    };
    return {
      products,
      currentProduct,
      createNewProduct,
      saveProduct,
      editProduct,
      loadProduct,
      deleteProduct,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
