import { Position } from "postcss";
import { Dependence } from "./dependence.interface";
import { Ofice } from "./ofice.interface";

export interface Employee {
    cedula: any;
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    estudios: string;
    sueldo: number;
    cargo:  Position|  number;
    fecha_nacimiento: string | Date;
    dependencia: Dependence |  number;
    oficina: Ofice |  number;
  }
  