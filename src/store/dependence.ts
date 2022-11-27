import { defineStore } from "pinia";
import { Dependence } from "~~/src/interfaces/dependence.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newDependence= (): Dependence => ({
  nombre: "",
  });

  export const useDependenceStore = defineStore("dependence", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "dependencia" });
  
    const dependencies = ref<Dependence[]>([]);
    const currentDependence = ref<Dependence>(newDependence());
  
    const createNewDependence= () => {currentDependence
      currentDependence.value = newDependence();
      dialogTitle.value = "Nueva dependencia:";
      dialog.openDialog();
    };
  
    const loadDependence = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      dependencies.value = data;
      console.log(dependencies);
      loadingPage.value = false;
    };
  
    const saveDependence = async () => {
      if (!currentDependence.value) {
          return mesageBox;
      }
      if (!currentDependence.value.id) {
        await createApi(currentDependence.value);
        mesageBox.value = {type:'success',message:`La dependencia ${currentDependence.value.nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentDependence.value.id, currentDependence.value)
        mesageBox.value = {type:'success', message:`La dependencia ${currentDependence.value.nombre} se ha actualizado correctamente`};
      }
      await loadDependence();
      dialog.closeDialog();
      
    };
  
    const editDependence = (dependence: Dependence) => {
      currentDependence.value = JSON.parse(JSON.stringify(dependence));
      dialogTitle.value = `Editar dependencia: ${currentDependence.value.nombre} `;
      dialog.openDialog();
    };
  
    const deleteDependence = async (dependence: Dependence) => {
      currentDependence.value = JSON.parse(JSON.stringify(dependence));
      if(currentDependence.value.id){
        await deleteApi(currentDependence.value.id);
      }
      
      await loadDependence();
    };
    return {
      dependencies,
      currentDependence,
      createNewDependence,
      saveDependence,
      editDependence,
      loadDependence,
      deleteDependence,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
