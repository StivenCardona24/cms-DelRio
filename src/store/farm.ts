import { defineStore } from "pinia";
import { Farm } from "~~/src/interfaces/farm.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";

import exportFromJSON from "export-from-json";
import { jsPDF } from "jspdf";

const newFarm = (): Farm => ({
  nombre: "",
  ciudad: null,
  direccion: "",
  celular: "",
  tipo_finca: 2,
  cuenta: "",
  oficina: null,
});

export const useFarmStore = defineStore("farm", () => {
  const dialog = useDialog();
  const loadingPage = ref(false);
  const departament = ref<null | number>(null);
  const city = ref<null | number>(null);
  const type = ref<null | number>(null);
  let mesageBox = ref<{
    type: "success" | "warning" | "info" | "error";
    message: string;
  }>();
  let dialogTitle = ref("");

  
  const {
    getAll: loadApi,
    create: createApi,
    update: updateApi,
    deleteOne: deleteApi,
  } = createCrud({ resource: "finca" });

  const farms = ref<Farm[]>([]);
  const currentFarm = ref<Farm>(newFarm());

  const createNewFarm = () => {
    currentFarm.value = newFarm();
    dialogTitle.value = "Nueva Finca:";
    dialog.openDialog();
  };

  const loadFarm = async () => {
    loadingPage.value = true;
    
    let filters:any = {
      
    };

    if(departament.value){
      filters.departamento = departament.value;
    }
    if(city.value){
      filters.ciudad = city.value;
    }
    if(type.value){
      filters.tipo_finca = type.value;
    }
    console.log(filters)
    const data = await loadApi(filters);
    farms.value = data;
    loadingPage.value = false;
  };

  const saveFarm = async () => {
    if (!currentFarm.value) {
      return mesageBox;
    }
    if (!currentFarm.value.id) {
      await createApi(currentFarm.value);
      mesageBox.value = {
        type: "success",
        message: `La finca ${currentFarm.value.nombre} ha sido creada correctamente`,
      };
    } else {
      await updateApi(currentFarm.value.id, currentFarm.value);
      mesageBox.value = {
        type: "success",
        message: `La finca ${currentFarm.value.nombre} se ha actualizado correctamente`,
      };
    }
    await loadFarm();
    dialog.closeDialog();
  };

  const editFarm = (farm: Farm) => {
    currentFarm.value = JSON.parse(JSON.stringify(farm));
    dialogTitle.value = `Editar Finca: ${currentFarm.value.nombre} `;
    dialog.openDialog();
  };

  const deleteFarm = async (farm: Farm) => {
    currentFarm.value = JSON.parse(JSON.stringify(farm));
    if (currentFarm.value.id) {
      await deleteApi(currentFarm.value.id);
    }

    await loadFarm();
  };

  const downloadPDF = async () => {
    //await loadFarm();
    // const fileName = "download";
    // const exportType = exportFromJSON.types.xls;
    // const data = farms.value;
    // await exportFromJSON({ data, fileName, exportType });
    // const doc = new jsPDF();
    // const data = JSON.stringify(farms.value)
    // doc.text(data, 10, 10);
    // doc.save("a4.pdf");
    javascript:window.print()
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
    downloadPDF,
    departament,
    city,
    type,
    ...dialog,
  };
});
