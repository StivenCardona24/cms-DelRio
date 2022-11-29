import { defineStore } from "pinia";
import { Client } from "~~/src/interfaces/client.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";

const newClient = (): Client => ({
  cedula: 0,
  nombre: "",
  estado: "",
  celular: "",
  correo: "",
  cantidad_compras: 0,
});

export const useClientStore = defineStore("client", () => {
  const dialog = useDialog();
  const loadingPage = ref(false);
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
  } = createCrud({ resource: "cliente" });

  const clients = ref<Client[]>([]);
  const currentClient = ref<Client>(newClient());

  const createNewClient = () => {
    currentClient;
    currentClient.value = newClient();
    dialogTitle.value = "Nuevo cliente:";
    dialog.openDialog();
  };

  const loadClient = async () => {
    loadingPage.value = true;
    const data = await loadApi();
    clients.value = data;
    console.log(clients);
    loadingPage.value = false;
  };

  const saveClient = async () => {
    if (!currentClient.value) {
      return mesageBox;
    }
    if (!currentClient.value.cedula) {
      await createApi(currentClient.value);
      mesageBox.value = {
        type: "success",
        message: `el cliente ${currentClient.value.nombre} ha sido creada correctamente`,
      };
    } else {
      await updateApi(currentClient.value.cedula, currentClient.value);
      mesageBox.value = {
        type: "success",
        message: `el cliente ${currentClient.value.nombre} se ha actualizado correctamente`,
      };
    }
    await loadClient();
    dialog.closeDialog();
  };

  const editClient = (client: Client) => {
    currentClient.value = JSON.parse(JSON.stringify(client));
    dialogTitle.value = `Editar cliente: ${currentClient.value.nombre} `;
    dialog.openDialog();
  };

  const deleteClient = async (client: Client) => {
    currentClient.value = JSON.parse(JSON.stringify(client));
    if (currentClient.value.cedula) {
      await deleteApi(currentClient.value.cedula);
    }

    await loadClient();
  };
  return {
    clients,
    currentClient,
    createNewClient,
    saveClient,
    editClient,
    loadClient,
    deleteClient,
    loadingPage,
    dialogTitle,
    mesageBox,
    ...dialog,
  };
});
