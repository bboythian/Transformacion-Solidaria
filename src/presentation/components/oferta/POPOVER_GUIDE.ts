/**
 * GUÍA: Modal Fullscreen de Información Detallada - Oferta Académica
 * ==================================================================
 *
 * CAMBIOS IMPLEMENTADOS:
 *
 * 1. COMPONENTE MODAL (src/presentation/components/common/Modal.tsx)
 *    - Componente reutilizable que muestra información en modo fullscreen
 *    - Ocupa el 90% del ancho (máx 900px) y 90% del alto de la ventana
 *    - Backdrop oscuro (rgba(0,0,0,0.6)) detrás del modal
 *    - Renderizado fuera del flujo del DOM usando React Portal
 *    - Cierre con Escape, clic en backdrop o botón X
 *
 * 2. INFORMACIÓN DETALLADA (src/presentation/components/oferta/ofertasDetailInfo.ts)
 *    - Base de datos con información completa de cada oferta:
 *      * Descripción corta
 *      * Objetivos (lista)
 *      * Beneficios (lista)
 *      * Duración
 *      * Horarios
 *      * Dirigido a
 *      * Incluye/Características
 *
 * 3. INTEGRACIÓN EN CARDS (src/presentation/components/oferta/OfertaCard.tsx)
 *    - Botón "Más información" abre el modal fullscreen
 *    - Información adaptada a cada oferta académica
 *    - Estado controlado para mostrar/ocultar modal
 *
 * FLUJO DE USO:
 * =============
 * 1. Usuario navega a Home
 * 2. Ve el carrusel de Oferta Académica
 * 3. Hace clic en "Más información" en cualquier card
 * 4. Se abre un modal fullscreen que ocupa toda la pantalla con:
 *    - Fondo oscuro (backdrop) detrás
 *    - Header con gradiente azul corporativo
 *    - Título de la oferta
 *    - Descripción completa
 *    - Objetivos
 *    - Beneficios
 *    - Duración y horarios
 *    - Información de a quién va dirigida
 *    - Qué incluye
 * 5. Puede:
 *    - Hacer scroll en el contenido si es muy largo
 *    - Cerrar con Escape
 *    - Cerrar haciendo clic en el backdrop oscuro
 *    - Cerrar con el botón X en la esquina
 *
 * CARACTERÍSTICAS DEL MODAL:
 * ==========================
 * ✓ Fullscreen (90% ancho, 90% alto máximo)
 * ✓ Backdrop oscuro semi-transparente (0.6 opacidad)
 * ✓ Z-index 2000 (por encima de todo, incluyendo carrusel)
 * ✓ Animación smooth: fade-in backdrop + slide-in modal
 * ✓ Previene scroll del body cuando está abierto
 * ✓ Portal rendering (fuera del DOM del carrusel)
 * ✓ Header con gradiente corporativo
 * ✓ Botón close con animación rotate
 * ✓ Scrollbar personalizada
 * ✓ Responsive: 95% tablet, 97% móvil
 * ✓ Accesible: Escape para cerrar, focus-visible
 *
 * PERSONALIZACIÓN:
 * ================
 * Para agregar información a una nueva oferta:
 * 1. Ve a: src/presentation/components/oferta/ofertasDetailInfo.ts
 * 2. Agrega un nuevo objeto en ofertasDetalleInfo con:
 *    - id: (debe coincidir con el id en OfertaSection.tsx)
 *    - descripcionCorta: string
 *    - objetivos: string[]
 *    - beneficios: string[]
 *    - duracion?: string
 *    - horarios?: string
 *    - dirigidoA?: string
 *    - incluye?: string[]
 *
 * ESTILOS:
 * ========
 * - Modal.module.css: Estilos del modal fullscreen
 * - Colores corporativos: Azul #004270 → #005a96, Amarillo #FEBE10
 * - Font: Red Hat Display (títulos), Red Hat Text (contenido)
 * - Responsive: Adapta ancho y padding en diferentes dispositivos
 * - Accesibilidad: Outline en focus-visible
 *
 * ARCHIVOS CREADOS:
 * =================
 * ✓ src/presentation/components/common/Modal.tsx
 * ✓ src/presentation/components/common/Modal.module.css
 * ✓ src/presentation/components/oferta/ofertasDetailInfo.ts
 *
 * ARCHIVOS MODIFICADOS:
 * =====================
 * ✓ src/presentation/components/oferta/OfertaCard.tsx (cambio: Popover → Modal)
 * ✓ src/presentation/components/common/index.ts
 *
 * NOTAS DE DESARROLLO:
 * ====================
 * - El modal usa React createPortal para renderizar fuera del flujo del DOM
 * - Z-index 2000 asegura que esté por encima del carrusel y otros elementos
 * - Body overflow hidden previene scroll detrás del modal
 * - Animaciones CSS para fade-in suave del backdrop
 * - Click en backdrop cierra el modal (similar a UX estándar)
 * - Escape key listener global para cerrar
 * - No requiere dependencias externas (sin librerías UI)
 */
