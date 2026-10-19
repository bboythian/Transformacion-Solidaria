/**
 * Interfaces de dominio
 * Contratos para servicios y repositorios
 */

import {
  Instituto,
  Programa,
  Seccion,
  ContactMessage,
  ContactResponse,
} from "../entities/index.js";

export interface IInstituteRepository {
  getInfo(): Promise<Instituto>;
  getSections(): Promise<Seccion[]>;
}

export interface IProgramaRepository {
  getAllProgramas(): Promise<Programa[]>;
  getProgramaById(id: string): Promise<Programa | null>;
}

export interface IContactRepository {
  sendMessage(data: ContactMessage): Promise<ContactResponse>;
}

export interface IInstituteService {
  getInstituteInfo(): Promise<Instituto>;
  getAllSections(): Promise<Seccion[]>;
}

export interface IProgramaService {
  listAllProgramas(): Promise<Programa[]>;
  getProgramByIdDetails(id: string): Promise<Programa | null>;
}

export interface IContactService {
  submitContactForm(data: ContactMessage): Promise<ContactResponse>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
