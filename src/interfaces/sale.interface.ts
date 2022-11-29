import { Client } from "./client.interface";
import { Delivery_status } from "./delivery_status.interface";
import { Type_delibery } from "./type_delivery.interface";

export interface Sale {
    num_factura?: number;
    tipoEntrega: Type_delibery | number  ;
    valor: number ;
    estado_entrega: Delivery_status | number;
    cliente: Client | number; 






 
  }
  

