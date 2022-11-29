import { Department } from "./department.interface";

export interface City {
    id?: number;
    nombre: string;
    departamento: Department | number;
  }
  