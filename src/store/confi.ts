import { defineStore } from "pinia";
import { Position } from "~~/src/interfaces/position.interface";
import { createCrud } from "@/api/crud";
import { useDialog } from "../composables/useDialog";

export const usePositionStore = defineStore("Position", () => {
  const { getAll: loadApi } = createCrud({ resource: "cargo" });

  const positions = ref<Position[]>([]);

  const loadPosition = async () => {
    const data = await loadApi();
    positions.value = data;
  };

  return {
    positions,
    loadPosition,
  };
});

export const useType_farmStore = defineStore("Type_farm", () => {
  const { getAll: loadApi } = createCrud({ resource: "tipo_finca" });

  const type_farms = ref<Position[]>([]);

  const loadType_farm = async () => {
    const data = await loadApi();
    type_farms.value = data;
  };

  return {
    type_farms,
    loadType_farm,
  };
});

export const useType_deliveryStore = defineStore("Type_delivery", () => {
  const { getAll: loadApi } = createCrud({ resource: "tipo_entrega" });

  const type_deliverys = ref<Position[]>([]);

  const loadType_delivery = async () => {
    const data = await loadApi();
    type_deliverys.value = data;
  };

  return {
    type_deliverys,
    loadType_delivery,
  };
});


export const useType_productStore = defineStore("Type_product", () => {
  const { getAll: loadApi } = createCrud({ resource: "tipo_entrega" });

  const type_products = ref<Position[]>([]);

  const loadType_product = async () => {
    const data = await loadApi();
    type_products.value = data;
  };

  return {
    type_products,
    loadType_product,
  };
});

export const useSaleStore = defineStore("Sale", () => {
  const { getAll: loadApi } = createCrud({ resource: "venta" });

  const Sales = ref<Position[]>([]);

  const loadSale = async () => {
    const data = await loadApi();
    Sales.value = data;
  };

  return {
    Sales,
    loadSale,
  };
});


export const useProducProvideStore = defineStore("Sale", () => {
  const { getAll: loadApi } = createCrud({ resource: "venta" });

  const producProvides = ref<Position[]>([]);

  const loadProducProvide = async () => {
    const data = await loadApi();
    producProvides.value = data;
  };

  return {
    producProvides,
    loadProducProvide,
  };
});

