
export interface Employee {
    cedula?: number;
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    estudios: string;
    sueldo: number;
    cargo: any |  number;
    fecha_nacimiento: string | Date;
    dependencia: any |  number;
    oficina: any |  number;
  }
  