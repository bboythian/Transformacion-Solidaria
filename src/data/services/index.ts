/**
 * API Service Layer
 * Comunicación con el backend
 */

import { API_ENDPOINTS } from "../../config/api";
import {
  Instituto,
  Programa,
  Seccion,
  ContactMessage,
  ContactResponse,
} from "../../domain/entities/index.js";

class InstituteService {
  async getInfo(): Promise<Instituto> {
    try {
      const response = await fetch(API_ENDPOINTS.info.general);
      if (!response.ok) throw new Error("Error al obtener información");
      return await response.json();
    } catch (error) {
      console.error("Error en getInfo:", error);
      throw error;
    }
  }

  async getSections(): Promise<Seccion[]> {
    try {
      const response = await fetch(API_ENDPOINTS.info.sections);
      if (!response.ok) throw new Error("Error al obtener secciones");
      return await response.json();
    } catch (error) {
      console.error("Error en getSections:", error);
      throw error;
    }
  }
}

class ProgramaService {
  async getProgramas(): Promise<Programa[]> {
    try {
      const response = await fetch(API_ENDPOINTS.info.programas);
      if (!response.ok) throw new Error("Error al obtener programas");
      return await response.json();
    } catch (error) {
      console.error("Error en getProgramas:", error);
      throw error;
    }
  }

  async getProgramaById(id: string): Promise<Programa | null> {
    try {
      const programas = await this.getProgramas();
      return programas.find((p) => p.id === id) || null;
    } catch (error) {
      console.error("Error en getProgramaById:", error);
      throw error;
    }
  }
}

class ContactService {
  async sendMessage(data: ContactMessage): Promise<ContactResponse> {
    try {
      const response = await fetch(API_ENDPOINTS.contact.send, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error al enviar mensaje");
      return await response.json();
    } catch (error) {
      console.error("Error en sendMessage:", error);
      throw error;
    }
  }
}

// Exportar instancias singleton
export const instituteService = new InstituteService();
export const programaService = new ProgramaService();
export const contactService = new ContactService();
