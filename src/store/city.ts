import { defineStore } from "pinia";
import { City } from "~~/src/interfaces/city.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newCity = (): City => ({
  nombre: "",
  departamento: null,
  });

  export const useCityStore = defineStore("city", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "ciudad" });
  
    const cities = ref<City[]>([]);
    const currentCity = ref<City>(newCity());
  
    const createNewCity= () => {
      currentCity.value = newCity();
      dialogTitle.value = "Nueva Ciudad:";
      dialog.openDialog();
    };
  
    const loadCities = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      cities.value = data;
      loadingPage.value = false;
    };
  
    const saveCity = async () => {
      if (!currentCity.value) {
          return mesageBox;
      }
      if (!currentCity.value.id) {
        await createApi(currentCity.value);
        mesageBox.value = {type:'success',message:`La ciudad ${currentCity.value.nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentCity.value.id, currentCity.value)
        mesageBox.value = {type:'success', message:`La ciudad ${currentCity.value.nombre} se ha actualizado correctamente`};
      }
      await loadCities();
      dialog.closeDialog();
      
    };
  
    const editCity = (city: City) => {
    currentCity.value = JSON.parse(JSON.stringify(city));
      dialogTitle.value = `Editar Ciudad: ${currentCity.value.nombre} `;
      dialog.openDialog();
    };
  
    const deleteCity = async (city: City) => {
        currentCity.value = JSON.parse(JSON.stringify(city));
      if(currentCity.value.id){
        await deleteApi(currentCity.value.id);
      }
      
      await loadCities();
    };
    return {
      cities,
      currentCity,
      createNewCity,
      saveCity,
      editCity,
      loadCities,
      deleteCity,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
