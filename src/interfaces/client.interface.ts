export enum StatusClient {
  ACTIVO = 'Activo',
  PAZYSALVO = 'Paz y Salvo',
  PASIVO= 'Pasivo',
  
}
export interface Client {
    cedula?: number;
    nombre: string;
    celular: string;
    correo: string;
    estado: string | StatusClient
    cantidad_compras: number;
   
  }
  