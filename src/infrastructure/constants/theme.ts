/**
 * Constantes de tema y configuración
 * Centraliza valores reutilizables del proyecto
 */

/**
 * Breakpoints responsive
 */
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
} as const;

/**
 * Colores del tema
 */
export const COLORS = {
  primary: "#004270",
  primaryDark: "#003a5c",
  secondary: "#FEBE10",
  white: "#ffffff",
  textGray: "#666666",
  backgroundLight: "#f8f9fa",
} as const;

/**
 * Configuración de animaciones
 */
export const ANIMATION = {
  transitionDuration: 300,
  easeInOut: "ease-in-out",
} as const;

/**
 * Configuración de carrusel
 */
export const CAROUSEL = {
  cardsToShow: {
    desktop: 2,
    tablet: 2,
    mobile: 1,
  },
} as const;

/**
 * Información de contacto
 */
export const CONTACT = {
  whatsapp: "+593985106717",
  preuniversitarioUrl:
    "https://tsolidaria.edu.ec/tsolidaria/moodle/login/index.php",
  studentsPortal: "https://solidaria.academi-cloud.net/",
  inscriptionsUrl:
    "https://solidaria.academi-cloud.net/public/inscripciones/general#/",
} as const;
