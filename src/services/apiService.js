import { API_ENDPOINTS } from "../config/api";

/**
 * Función genérica para hacer requests a la API
 * @param {string} url - URL del endpoint
 * @param {object} options - Opciones del fetch
 * @returns {Promise} Respuesta de la API
 */
export const apiCall = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error en apiCall:", error);
    throw error;
  }
};

/**
 * Obtener información general del instituto
 */
export const getInstituteInfo = async () => {
  return apiCall(API_ENDPOINTS.info.general);
};

/**
 * Obtener secciones disponibles
 */
export const getSections = async () => {
  return apiCall(API_ENDPOINTS.info.sections);
};

/**
 * Obtener programas/servicios
 */
export const getProgramas = async () => {
  return apiCall(API_ENDPOINTS.info.programas);
};

/**
 * Enviar mensaje de contacto
 * @param {object} data - Datos del formulario {nombre, email, asunto, mensaje}
 */
export const sendContactMessage = async (data) => {
  return apiCall(API_ENDPOINTS.contact.send, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

/**
 * Verificar salud del backend
 */
export const checkBackendHealth = async () => {
  return apiCall(API_ENDPOINTS.health);
};
