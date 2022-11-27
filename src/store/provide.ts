
import { defineStore } from "pinia";
import { Provide } from "~~/src/interfaces/provide.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newProvide= (): Provide => ({
  nombre: "",
  });

  export const useProvideStore = defineStore("provide", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "proveedor" });
  
    const providers = ref<Provide[]>([]);
    const currentProvide = ref<Provide>(newProvide());
  
    const createNewProvide= () => {currentProvide
      currentProvide.value = newProvide();
      dialogTitle.value = "Nuevo Proveedor:";
      dialog.openDialog();
    };
  
    const loadProvide = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      providers.value = data;
      console.log(providers);
      loadingPage.value = false;
    };
  
    const saveProvide = async () => {
      if (!currentProvide.value) {
          return mesageBox;
      }
      if (!currentProvide.value.id) {
        await createApi(currentProvide.value);
        mesageBox.value = {type:'success',message:`El proveedor ${currentProvide.value.nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentProvide.value.id, currentProvide.value)
        mesageBox.value = {type:'success', message:`EL proveedor ${currentProvide.value.nombre} se ha actualizado correctamente`};
      }
      await loadProvide();
      dialog.closeDialog();
      
    };
  
    const editProvide = (provide: Provide) => {
      currentProvide.value = JSON.parse(JSON.stringify(provide));
      dialogTitle.value = `Editar proveedor : ${currentProvide.value.nombre} `;
      dialog.openDialog();
    };
  
    const deleteProvide = async (provide: Provide) => {
      currentProvide.value = JSON.parse(JSON.stringify(provide));
      if(currentProvide.value.id){
        await deleteApi(currentProvide.value.id);
      }
      
      await loadProvide();
    };
    return {
      providers,
      currentProvide,
      createNewProvide,
      saveProvide,
      editProvide,
      loadProvide,
      deleteProvide,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
