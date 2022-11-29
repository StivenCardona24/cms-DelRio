import { Farm } from "./farm.interface";
import { Type_product } from "./type_product.interface";

export interface Product {
    id?: number;
    precio: number;
    cantidad: number;
    descripcion: string;
    tipo:  Type_product| number;
    finca: Farm | number;
    nombre: string;   
  }
  