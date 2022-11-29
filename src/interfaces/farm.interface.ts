import { City } from "./city.interface";
import { Ofice } from "./ofice.interface";

export interface Farm {
  id?: number;
  nombre: string;
  ciudad: City | number;
  direccion: string;
  celular: string;
  tipo_finca: any | number;
  cuenta: string;
  oficina: Ofice | number;
}
