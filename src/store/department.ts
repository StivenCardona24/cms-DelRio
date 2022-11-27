import { defineStore } from "pinia";
import { Department } from "~~/src/interfaces/department.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newDepartment= (): Department => ({

  nombre: "",
  
  });

  export const useDepartmentStore = defineStore("department", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "departamento" });
  
    const departments = ref<Department[]>([]);
    const currentDepartment = ref<Department>(newDepartment());
  
    const createNewDepartment= () => {currentDepartment
      currentDepartment.value = newDepartment();
      dialogTitle.value = "Nuevo departamento:";
      dialog.openDialog();
    };
  
    const loadDepartment = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      departments.value = data;
      console.log(departments);
      loadingPage.value = false;
    };
  
    const saveDepartment = async () => {
      if (!currentDepartment.value) {
          return mesageBox;
      }
      if (!currentDepartment.value.id) {
        await createApi(currentDepartment.value);
        mesageBox.value = {type:'success',message:`el departamento ${currentDepartment.value.nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentDepartment.value.id, currentDepartment.value)
        mesageBox.value = {type:'success', message:`el departamento ${currentDepartment.value.nombre} se ha actualizado correctamente`};
      }
      await loadDepartment();
      dialog.closeDialog();
      
    };
  
    const editDepartment = (department: Department) => {
      currentDepartment.value = JSON.parse(JSON.stringify(department));
      dialogTitle.value = `Editar departamento: ${currentDepartment.value.nombre} `;
      dialog.openDialog();
    };
  
    const deleteDepartment = async (department: Department) => {
      currentDepartment.value = JSON.parse(JSON.stringify(department));
      if(currentDepartment.value.id){
        await deleteApi(currentDepartment.value.id);
      }
      
      await loadDepartment();
    };
    return {
      departments,
      currentDepartment,
      createNewDepartment,
      saveDepartment,
      editDepartment,
      loadDepartment,
      deleteDepartment,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
