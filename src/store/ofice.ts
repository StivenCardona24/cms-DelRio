import { defineStore } from "pinia";
import { Ofice } from "~~/src/interfaces/ofice.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newOfice = (): Ofice => ({
       
    direccion: "",
    nombre: "",
  
  });

  export const useOficeStore = defineStore("Ofice", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "oficina" });
  
    const Ofices = ref<Ofice[]>([]);
    const currentOfice = ref<Ofice>(newOfice());
  
    const createNewOfice= () => {
      currentOfice.value = newOfice();
      dialogTitle.value = "Nueva oficina:";
      dialog.openDialog();
    };
  
    const loadOfice = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      Ofices.value = data;
      loadingPage.value = false;
    };
  
    const saveOfice = async () => {
      if (!currentOfice.value) {
          return mesageBox;
      }
      if (!currentOfice.value.id) {
        await createApi(currentOfice.value);
        mesageBox.value = {type:'success',message:`La oficina ${currentOfice.value.nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentOfice.value.id, currentOfice.value)
        mesageBox.value = {type:'success', message:`La oficina ${currentOfice.value.nombre} se ha actualizado correctamente`};
      }
      await loadOfice();
      dialog.closeDialog();
      
    };
  
    const editOfice = (ofice: Ofice) => {
        currentOfice.value = JSON.parse(JSON.stringify(ofice));
      dialogTitle.value = `Editar oficina: ${currentOfice.value.nombre} `;
      dialog.openDialog();
    };
  
    const deleteOfice = async (ofice: Ofice) => {
      currentOfice.value = JSON.parse(JSON.stringify(ofice));
      if(currentOfice.value.id){
        await deleteApi(currentOfice.value.id);
      }
      
      await loadOfice();
    };
    return {
      Ofices,
      currentOfice,
      createNewOfice,
      saveOfice,
      editOfice,
      loadOfice,
      deleteOfice,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
