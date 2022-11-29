import { Provide } from "./provide.interface";

export interface Product_provide {
    id?: number;     
    nombre: string;    
    descripcion: string;
    precio: number;
    proveedor: Provide | number; 
  }
  