import { defineStore } from "pinia";
import { Auth } from "~~/src/interfaces/auth.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";
import { Employee} from '@/interfaces/employee.interface'
import { Client } from "../interfaces/client.interface";


const newAuth = (): Auth => ({
  correo: "",
  contrasenia: "",
  });


  export const useAuthStore = defineStore("auth", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
    dialogTitle.value = "Iniciar Sesión:";
    dialog.openDialog();
  
    const {
      create: createApi,
     
    } = createCrud({ resource: "login" });
  
    const currentAuth = ref<Auth>(newAuth());
    const user = ref <Employee | Client >(null);

    // const createNewAuth= () => {
    //     currentAuth.value = newAuth();
      
    // };
  

    const saveAuth = async () => {
      if (!currentAuth.value) {
          return mesageBox;
      }
      else {
        user.value =  await createApi(currentAuth.value);
        mesageBox.value = {type:'success',message:`Has iniciado sesión ${user.value.cedula} correctamente`};
      }
      dialog.closeDialog();
      
    };
  
    return {
        user,
      currentAuth,
      saveAuth,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
