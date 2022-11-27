import { defineStore } from "pinia";
import { Employee } from "~~/src/interfaces/employee.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";
import { data } from "autoprefixer";
import { isDate } from "element-plus/es/utils";


const newEmployee= (): Employee => ({
  cedula: 0,
  primer_nombre: "",
  segundo_nombre: "",
  primer_apellido: "",
  segundo_apellido: "",
  estudios: "",
  sueldo: 0,
  cargo: 1,
  fecha_nacimiento: "",
  dependencia: 1,
  oficina: 2,






  });

  export const useEmployeeStore = defineStore("employee", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "empleado" });
  
    const employees = ref<Employee[]>([]);
    const currentEmployee = ref<Employee>(newEmployee());
  
    const createNewEmployee= () => {currentEmployee
      currentEmployee.value = newEmployee();
      dialogTitle.value = "Nuevo empleado:";
      dialog.openDialog();
    };
  
    const loadEmployee = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      employees.value = data;
      console.log(employees);
      loadingPage.value = false;
    };
  
    const saveEmployee = async () => {
      if (!currentEmployee.value) {
          return mesageBox;
      }
      if (!currentEmployee.value.cedula) {
        await createApi(currentEmployee.value);
        mesageBox.value = {type:'success',message:`el empleado ${currentEmployee.value.primer_nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentEmployee.value.cedula, currentEmployee.value)
        mesageBox.value = {type:'success', message:`el empleado ${currentEmployee.value.primer_nombre} se ha actualizado correctamente`};
      }
      await loadEmployee();
      dialog.closeDialog();
      
    };
  
    const editEmployee = (employee: Employee) => {
      currentEmployee.value = JSON.parse(JSON.stringify(employee));
      dialogTitle.value = `Editar empleado: ${currentEmployee.value.primer_nombre} `;
      dialog.openDialog();
    };
  
    const deleteEmployee = async (employee: Employee) => {
      currentEmployee.value = JSON.parse(JSON.stringify(employee));
      if(currentEmployee.value.cedula){
        await deleteApi(currentEmployee.value.cedula);
      }
      
      await loadEmployee();
    };
    return {
      employees,
      currentEmployee,
      createNewEmployee,
      saveEmployee,
      editEmployee,
      loadEmployee,
      deleteEmployee,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
