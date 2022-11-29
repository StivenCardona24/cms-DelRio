import { City } from "./city.interface";
import { Ofice } from "./ofice.interface";
import { Type_farm } from "./type_farm.interface";
import { Type_product } from "./type_product.interface";

export interface Farm {
  id?: number;
  nombre: string;
  ciudad: City | number;
  direccion: string;
  celular: string;
  tipo_finca: Type_farm | number;
  cuenta: string;
  oficina: Ofice | number;
}
