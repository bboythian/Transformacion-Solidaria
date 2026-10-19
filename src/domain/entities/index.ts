/**
 * Entidades de dominio
 * Modelos centrales de la aplicación
 */

export interface Instituto {
  id: string;
  nombre: string;
  descripcion: string;
  email: string;
  telefono: string;
  ubicacion: string;
  redesSociales: RedesSociales;
}

export interface RedesSociales {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface Programa {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  duracion?: string;
  nivel?: string;
}

export interface Seccion {
  id: string;
  nombre: string;
  slug: string;
  descripcion?: string;
}

export interface ContactMessage {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
  telefono?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: ContactMessage;
}

export interface Equipo {
  id: string;
  nombre: string;
  puesto: string;
  imagen: string;
  descripcion?: string;
}

export interface Mision {
  titulo: string;
  descripcion: string;
  icono?: string;
}
