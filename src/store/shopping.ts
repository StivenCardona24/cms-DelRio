import { defineStore } from "pinia";
import { Shopping } from "~~/src/interfaces/shopping.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newShopping= (): Shopping => ({
  
  total: 0,
  id_finca: 1,

  });

  export const useShoppingStore = defineStore("shopping", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "compra" });
  
    const shoopings = ref<Shopping[]>([]);
    const currentShopping = ref<Shopping>(newShopping());
  
    const createNewShopping= () => {currentShopping
      currentShopping.value = newShopping();
      dialogTitle.value = "Nueva Finca:";
      dialog.openDialog();
    };
  
    const loadShopping = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      shoopings.value = data;
      console.log(shoopings);
      loadingPage.value = false;
    };
  
    const saveShopping = async () => {
      if (!currentShopping.value) {
          return mesageBox;
      }
      if (!currentShopping.value.id_finca) {
        await createApi(currentShopping.value);
        mesageBox.value = {type:'success',message:`La finca ${currentShopping.value.num_compra} ha sido creada correctamente`};
      } else {
        await updateApi(currentShopping.value.num_compra, currentShopping.value)
        mesageBox.value = {type:'success', message:`La finca ${currentShopping.value.num_compra} se ha actualizado correctamente`};
      }
      await loadShopping();
      dialog.closeDialog();
      
    };
  
    const editShopping = (shopping: Shopping) => {
      currentShopping.value = JSON.parse(JSON.stringify(shopping));
      dialogTitle.value = `Editar Banco: ${currentShopping.value.num_compra} `;
      dialog.openDialog();
    };
  
    const deleteShopping = async (shopping: Shopping) => {
      currentShopping.value = JSON.parse(JSON.stringify(shopping));
      if(currentShopping.value.num_compra){
        await deleteApi(currentShopping.value.num_compra);
      }
      
      await loadShopping();
    };
    return {
      shoopings,
      currentShopping,
      createNewShopping,
      saveShopping,
      editShopping,
      loadShopping,
      deleteShopping,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
