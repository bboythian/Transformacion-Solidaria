/**
 * ESTRUCTURA DEL PROYECTO FRONTEND
 * Clean Architecture + React + TypeScript
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                          CAPAS DE LA APLICACIÓN                            ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  PRESENTATION (presentation/)                                            │
 * │  ├── pages/           → 5 Páginas principales                           │
 * │  ├── components/      → Componentes reutilizables                       │
 * │  ├── layouts/         → Estructura general (Header + Footer + Main)    │
 * │  └── styles/          → Estilos CSS Modules + Global                    │
 * └──────────────────────────────────────────────────────────────────────────┘
 *                                    ↓
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  DOMAIN (domain/)                                                        │
 * │  ├── entities/        → Modelos de datos (Instituto, Programa, etc)    │
 * │  └── interfaces/      → Contratos (IService, IRepository)              │
 * └──────────────────────────────────────────────────────────────────────────┘
 *                                    ↓
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  DATA (data/)                                                            │
 * │  ├── services/        → Llamadas a API                                  │
 * │  └── repositories/    → Acceso a datos (preparado para BD local)       │
 * └──────────────────────────────────────────────────────────────────────────┘
 *                                    ↓
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  BACKEND API                                                             │
 * │  └── http://localhost:5000                                              │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  INFRASTRUCTURE (infrastructure/)                                        │
 * │  ├── hooks/           → Custom Hooks para lógica reutilizable          │
 * │  ├── router/          → Configuración de rutas                          │
 * │  ├── context/         → React Context (preparado para futuro)          │
 * │  └── utils/           → Funciones auxiliares                            │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  CONFIG (config/)                                                        │
 * │  └── api.ts           → Configuración de endpoints                     │
 * └──────────────────────────────────────────────────────────────────────────┘
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                              COMPONENTES PRINCIPALES                       ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * PÁGINAS (5 rutas):
 * ├── HomePage                  → /
 * ├── OfertaPage               → /oferta
 * ├── PreuniversitarioPage     → /preuniversitario
 * ├── QuienesSomosPage         → /quienes-somos
 * └── ContactoPage             → /contacto
 *
 * COMPONENTES COMUNES:
 * ├── Header                   → Navegación
 * ├── Footer                   → Pie de página
 * ├── Loading                  → Spinner de carga
 * └── ErrorAlert               → Alertas de error
 *
 * COMPONENTES HOME:
 * ├── Hero                     → Sección principal
 * └── ProgramaCard             → Tarjeta de programa
 *
 * COMPONENTES ESPECÍFICOS:
 * ├── OfertaSection            → Oferta académica
 * ├── PreuniversitarioSection  → Preuniversitario
 * ├── QuienesSomosSection      → Quiénes somos
 * └── ContactForm              → Formulario de contacto
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                           FLUJO DE DATOS                                   ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * [Componente React]
 *        ↓
 * [Custom Hook (useData)]
 *        ↓
 * [Service (API Call)]
 *        ↓
 * [Backend API]
 *        ↓
 * [Respuesta JSON]
 *        ↓
 * [State en Hook]
 *        ↓
 * [Re-render Componente]
 *
 * Ejemplo: Cargar Programas
 * ────────────────────────
 * HomePage Component
 *        ↓
 * useProgramas() Hook
 *        ↓
 * ProgramaService.getProgramas()
 *        ↓
 * fetch(API_ENDPOINTS.info.programas)
 *        ↓
 * Backend: GET /api/info/programas
 *        ↓
 * [programas, loading, error] Estado
 *        ↓
 * ProgramaCard x N
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                         CUSTOM HOOKS DISPONIBLES                           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * useInstitute()
 * ├── institute: Instituto | null
 * ├── loading: boolean
 * └── error: string | null
 *
 * useSections()
 * ├── sections: Seccion[]
 * ├── loading: boolean
 * └── error: string | null
 *
 * useProgramas()
 * ├── programas: Programa[]
 * ├── loading: boolean
 * └── error: string | null
 *
 * usePrograma(id)
 * ├── programa: Programa | null
 * ├── loading: boolean
 * └── error: string | null
 *
 * useContactForm()
 * ├── formData: ContactMessage
 * ├── loading: boolean
 * ├── error: string | null
 * ├── success: boolean
 * ├── handleChange: (e) => void
 * ├── handleSubmit: (e) => void
 * └── resetForm: () => void
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                      TIPOS Y ENTIDADES PRINCIPALES                         ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Instituto
 * ├── id: string
 * ├── nombre: string
 * ├── descripcion: string
 * ├── email: string
 * ├── telefono: string
 * ├── ubicacion: string
 * └── redesSociales: RedesSociales
 *
 * Programa
 * ├── id: string
 * ├── titulo: string
 * ├── descripcion: string
 * ├── imagen: string
 * ├── duracion?: string
 * └── nivel?: string
 *
 * ContactMessage
 * ├── nombre: string
 * ├── email: string
 * ├── asunto: string
 * ├── mensaje: string
 * └── telefono?: string
 *
 * Seccion
 * ├── id: string
 * ├── nombre: string
 * ├── slug: string
 * └── descripcion?: string
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                         ENDPOINTS DE API UTILIZADOS                        ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * GET /api/info
 * └── Obtener información general del instituto
 *
 * GET /api/info/sections
 * └── Obtener todas las secciones
 *
 * GET /api/info/programas
 * └── Obtener todos los programas
 *
 * POST /api/contact/send
 * └── Enviar mensaje de contacto
 *
 * GET /api/health
 * └── Verificar estado del backend
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                          ESTILOS Y DISEÑO                                  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Estructura de Estilos:
 * ├── CSS Modules (.module.css)
 *     └── Encapsulación: Cada componente con su propio archivo
 * ├── App.css
 *     └── Variables CSS y estilos globales
 * └── index.css
 *     └── Reset y base
 *
 * Breakpoints Responsive:
 * ├── Desktop:  > 1200px
 * ├── Tablet:   768px - 1200px
 * └── Mobile:   < 768px
 *
 * Colores (Variables CSS):
 * ├── --primary-color: #004270 (Azul Oscuro)
 * ├── --primary-dark: #003a5c
 * ├── --accent-color: #FEBE10 (Amarillo)
 * ├── --accent-dark: #ffd43b
 * ├── --text-dark: #1a1a1a
 * ├── --text-light: #666
 * └── --bg-light: #f9f9f9
 *
 * Animaciones:
 * ├── fadeIn
 * ├── slideInUp
 * └── slideInDown
 */

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                        PRÓXIMAS IMPLEMENTACIONES                           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * ☐ React Router DOM (actual: hash-based routing)
 * ☐ Framer Motion (animaciones avanzadas)
 * ☐ Redux o Zustand (estado global)
 * ☐ Jest + React Testing Library (testing)
 * ☐ Storybook (documentación de componentes)
 * ☐ PWA (Progressive Web App)
 * ☐ Dark Mode
 * ☐ i18n (Internacionalización)
 * ☐ SEO (Meta tags, Open Graph, Sitemap)
 * ☐ Analytics (Google Analytics, Mixpanel)
 * ☐ CMS integrado
 * ☐ Admin Panel
 */

export {};
