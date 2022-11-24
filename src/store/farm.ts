import { defineStore } from "pinia";
import { Farm } from "~~/src/interfaces/farm.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newFarm= (): Farm => ({
  nombre: "",
  ciudad: 2,
  direccion: "",
  celular: "",
  tipo_finca: 2,
  cuenta: "",
  oficina: 2
  });

  export const useFarmStore = defineStore("farm", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "finca" });
  
    const farms = ref<Farm[]>([]);
    const currentFarm = ref<Farm>(newFarm());
  
    const createNewFarm= () => {currentFarm
      currentFarm.value = newFarm();
      dialogTitle.value = "Nueva Finca:";
      dialog.openDialog();
    };
  
    const loadFarm = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      farms.value = data;
      console.log(farms);
      loadingPage.value = false;
    };
  
    const saveFarm = async () => {
      if (!currentFarm.value) {
          return mesageBox;
      }
      if (!currentFarm.value.id) {
        await createApi(currentFarm.value);
        mesageBox.value = {type:'success',message:`La finca ${currentFarm.value.nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentFarm.value.id, currentFarm.value)
        mesageBox.value = {type:'success', message:`La finca ${currentFarm.value.nombre} se ha actualizado correctamente`};
      }
      await loadFarm();
      dialog.closeDialog();
      
    };
  
    const editFarm = (farm: Farm) => {
      currentFarm.value = JSON.parse(JSON.stringify(farm));
      dialogTitle.value = `Editar Banco: ${currentFarm.value.nombre} `;
      dialog.openDialog();
    };
  
    const deleteFarm = async (farm: Farm) => {
      currentFarm.value = JSON.parse(JSON.stringify(farm));
      if(currentFarm.value.id){
        await deleteApi(currentFarm.value.id);
      }
      
      await loadFarm();
    };
    return {
      farms,
      currentFarm,
      createNewFarm,
      saveFarm,
      editFarm,
      loadFarm,
      deleteFarm,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
