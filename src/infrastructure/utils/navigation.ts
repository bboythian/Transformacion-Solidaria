/**
 * Utilidades de navegación segura
 * Previene vulnerabilidades de tabnabbing al abrir enlaces externos
 */

/**
 * Abre un enlace externo de manera segura
 * Previene vulnerabilidad de tabnabbing usando rel="noopener noreferrer"
 * @param url - URL a abrir
 * @param target - Target del enlace (por defecto '_blank')
 */
export const openExternalLink = (
  url: string,
  target: string = "_blank",
): void => {
  const link = document.createElement("a");
  link.href = url;
  link.target = target;
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Genera URL de WhatsApp con mensaje predefinido
 * @param phoneNumber - Número de teléfono (formato internacional sin +)
 * @param message - Mensaje a enviar
 * @returns URL de WhatsApp formateada
 */
export const generateWhatsAppURL = (
  phoneNumber: string,
  message: string,
): string => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Abre chat de WhatsApp de manera segura
 * @param phoneNumber - Número de teléfono
 * @param message - Mensaje a enviar
 */
export const openWhatsAppChat = (
  phoneNumber: string,
  message: string,
): void => {
  const whatsappUrl = generateWhatsAppURL(phoneNumber, message);
  openExternalLink(whatsappUrl);
};
