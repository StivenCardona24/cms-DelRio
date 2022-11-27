
import { defineStore } from "pinia";
import { Delivery_status } from "~~/src/interfaces/delivery_status.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";


const newDelivery_status= (): Delivery_status => ({
  nombre: "",
  
  });

  export const useDelivery_statusStore = defineStore("delivery_status", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "estado_entrega" });
  
    const delivery_states = ref<Delivery_status[]>([]);
    const currentDelivery_status = ref<Delivery_status>(newDelivery_status());
  
    const createNewDelivery_status= () => {currentDelivery_status
      currentDelivery_status.value = newDelivery_status();
      dialogTitle.value = "Nuevo estado de entrega:";
      dialog.openDialog();
    };
  
    const loadDelivery_status  = async () => {
      loadingPage.value = true;
      const  data  = await loadApi();
      delivery_states.value = data;
      console.log(delivery_states);
      loadingPage.value = false;
    };
  
    const saveDelivery_status = async () => {
      if (!currentDelivery_status.value) {
          return mesageBox;
      }
      if (!currentDelivery_status.value.id) {
        await createApi(currentDelivery_status.value);
        mesageBox.value = {type:'success',message:`el estado de la entrega ${currentDelivery_status.value.nombre} ha sido creada correctamente`};
      } else {
        await updateApi(currentDelivery_status.value.id, currentDelivery_status.value)
        mesageBox.value = {type:'success', message:`el estado de la entrega ${currentDelivery_status.value.nombre} se ha actualizado correctamente`};
      }
      await loadDelivery_status();
      dialog.closeDialog();
      
    };
  
    const editDelivery_status = (delivery_status: Delivery_status) => {
      currentDelivery_status.value = JSON.parse(JSON.stringify(delivery_status));
      dialogTitle.value = `Editar estado de entrega: ${currentDelivery_status.value.nombre} `;
      dialog.openDialog();
    };
  
    const deleteDelivery_status = async (delivery_status: Delivery_status) => {
      currentDelivery_status.value = JSON.parse(JSON.stringify(delivery_status));
      if(currentDelivery_status.value.id){
        await deleteApi(currentDelivery_status.value.id);
      }
      
      await loadDelivery_status();
    };
    return {
      delivery_states,
      currentDelivery_status,
      createNewDelivery_status,
      saveDelivery_status,
      editDelivery_status,
      loadDelivery_status,
      deleteDelivery_status,
      loadingPage,
      dialogTitle,
      mesageBox,
      ...dialog,
    };
  });
