/**
 * Configuración de la API
 */

// Configuración de la aplicación
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const API_ENDPOINTS = {
  health: `${API_BASE_URL}/api/health`,

  // Contacto
  contact: {
    send: `${API_BASE_URL}/api/contact/send`,
    status: `${API_BASE_URL}/api/contact/status`,
  },

  // Información
  info: {
    general: `${API_BASE_URL}/api/info`,
    sections: `${API_BASE_URL}/api/info/sections`,
    programas: `${API_BASE_URL}/api/info/programas`,
  },
} as const;
