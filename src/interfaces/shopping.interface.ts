import { Farm } from "./farm.interface";

export interface Shopping {
    num_compra?: number;
    total:number;
    id_finca: Farm |  number;
  }
  