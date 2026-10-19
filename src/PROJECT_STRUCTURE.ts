/**
 * ESTRUCTURA VISUAL DEL PROYECTO
 *
 * ts-app/
 * │
 * ├── src/
 * │   ├── domain/
 * │   │   ├── entities/
 * │   │   │   └── index.ts
 * │   │   │       ├── Instituto
 * │   │   │       ├── Programa
 * │   │   │       ├── ContactMessage
 * │   │   │       ├── Seccion
 * │   │   │       ├── RedesSociales
 * │   │   │       ├── Equipo
 * │   │   │       └── Mision
 * │   │   │
 * │   │   └── interfaces/
 * │   │       └── index.ts
 * │   │           ├── IInstituteRepository
 * │   │           ├── IProgramaRepository
 * │   │           ├── IContactRepository
 * │   │           ├── IInstituteService
 * │   │           ├── IProgramaService
 * │   │           └── IContactService
 * │   │
 * │   ├── data/
 * │   │   ├── services/
 * │   │   │   └── index.ts
 * │   │   │       ├── InstituteService
 * │   │   │       ├── ProgramaService
 * │   │   │       └── ContactService
 * │   │   │
 * │   │   └── repositories/ (preparado)
 * │   │       └── (future: implementation)
 * │   │
 * │   ├── infrastructure/
 * │   │   ├── hooks/
 * │   │   │   ├── useDataFetching.ts
 * │   │   │   │   ├── useInstitute
 * │   │   │   │   ├── useSections
 * │   │   │   │   ├── useProgramas
 * │   │   │   │   └── usePrograma(id)
 * │   │   │   │
 * │   │   │   ├── useContactForm.ts
 * │   │   │   │   └── useContactForm
 * │   │   │   │
 * │   │   │   └── index.ts (exporta todos)
 * │   │   │
 * │   │   ├── router/
 * │   │   │   └── routes.ts
 * │   │   │       ├── getPageComponent()
 * │   │   │       ├── getRoute()
 * │   │   │       └── routes[] array
 * │   │   │
 * │   │   ├── context/ (preparado)
 * │   │   │   └── (future: AuthContext, etc)
 * │   │   │
 * │   │   └── utils/ (preparado)
 * │   │       └── (future: helpers)
 * │   │
 * │   ├── presentation/
 * │   │   ├── components/
 * │   │   │   ├── common/
 * │   │   │   │   ├── Header.tsx
 * │   │   │   │   ├── Header.module.css
 * │   │   │   │   ├── Footer.tsx
 * │   │   │   │   ├── Footer.module.css
 * │   │   │   │   ├── Loading.tsx
 * │   │   │   │   ├── Loading.module.css
 * │   │   │   │   ├── ErrorAlert.tsx
 * │   │   │   │   ├── ErrorAlert.module.css
 * │   │   │   │   └── index.ts
 * │   │   │   │
 * │   │   │   ├── home/
 * │   │   │   │   ├── Hero.tsx
 * │   │   │   │   ├── Hero.module.css
 * │   │   │   │   ├── ProgramaCard.tsx
 * │   │   │   │   ├── ProgramaCard.module.css
 * │   │   │   │   └── index.ts
 * │   │   │   │
 * │   │   │   ├── oferta/
 * │   │   │   │   ├── OfertaSection.tsx
 * │   │   │   │   ├── OfertaSection.module.css
 * │   │   │   │   └── index.ts
 * │   │   │   │
 * │   │   │   ├── preuniversitario/
 * │   │   │   │   ├── PreuniversitarioSection.tsx
 * │   │   │   │   ├── PreuniversitarioSection.module.css
 * │   │   │   │   └── index.ts
 * │   │   │   │
 * │   │   │   ├── quienes-somos/
 * │   │   │   │   ├── QuienesSomosSection.tsx
 * │   │   │   │   ├── QuienesSomosSection.module.css
 * │   │   │   │   └── index.ts
 * │   │   │   │
 * │   │   │   └── contacto/
 * │   │   │       ├── ContactForm.tsx
 * │   │   │       ├── ContactForm.module.css
 * │   │   │       └── index.ts
 * │   │   │
 * │   │   ├── layouts/
 * │   │   │   ├── MainLayout.tsx
 * │   │   │   └── MainLayout.module.css
 * │   │   │
 * │   │   ├── pages/
 * │   │   │   ├── Home.tsx
 * │   │   │   ├── Home.module.css
 * │   │   │   ├── Oferta.tsx
 * │   │   │   ├── Preuniversitario.tsx
 * │   │   │   ├── QuienesSomos.tsx
 * │   │   │   ├── Contacto.tsx
 * │   │   │   ├── Contacto.module.css
 * │   │   │   └── index.ts
 * │   │   │
 * │   │   └── styles/
 * │   │       └── (preparado para estilos compartidos)
 * │   │
 * │   ├── config/
 * │   │   └── api.ts
 * │   │       ├── API_ENDPOINTS
 * │   │       ├── API_BASE_URL
 * │   │       └── DEFAULT_HEADERS
 * │   │
 * │   ├── App.tsx
 * │   ├── App.css (global styles)
 * │   ├── index.css (reset)
 * │   ├── main.tsx
 * │   ├── vite-env.d.ts
 * │   ├── ARCHITECTURE_GUIDE.ts (este archivo)
 * │   └── PROJECT_STRUCTURE.ts (visual guide)
 * │
 * ├── public/
 * │   └── (assets estáticos)
 * │
 * ├── index.html (punto de entrada)
 * ├── package.json
 * ├── tsconfig.json
 * ├── tsconfig.node.json
 * ├── vite.config.ts
 * ├── README.md
 * └── FRONTEND_ARCHITECTURE.md
 */

/**
 * MAPEO DE RUTAS
 *
 * /                      → HomePage
 *                           └── Hero
 *                           └── ProgramasGrid (con useProgramas)
 *                           └── InfoCards
 *
 * /oferta                → OfertaPage
 *                           └── OfertaSection
 *
 * /preuniversitario      → PreuniversitarioPage
 *                           └── PreuniversitarioSection
 *
 * /quienes-somos         → QuienesSomosPage
 *                           └── QuienesSomosSection
 *
 * /contacto              → ContactoPage
 *                           └── ContactForm (con useContactForm)
 */

/**
 * DEPENDENCIAS ENTRE CAPAS
 *
 * App.tsx (root)
 *    ↓
 * MainLayout.tsx (layout principal)
 *    ├── Header.tsx
 *    ├── routes.ts (router)
 *    │   ├── HomePage
 *    │   ├── OfertaPage
 *    │   ├── PreuniversitarioPage
 *    │   ├── QuienesSomosPage
 *    │   └── ContactoPage
 *    └── Footer.tsx
 *
 * HomePage.tsx
 *    ├── Hero.tsx
 *    ├── useProgramas() hook
 *    │   └── ProgramaService.getProgramas()
 *    ├── ProgramaCard.tsx x N
 *    ├── ErrorAlert.tsx (si hay error)
 *    └── Loading.tsx (si está cargando)
 *
 * ContactoPage.tsx
 *    ├── ContactForm.tsx
 *    │   └── useContactForm() hook
 *    │       └── ContactService.sendMessage()
 *    ├── ErrorAlert.tsx
 *    └── Loading.tsx
 */

/**
 * FLUJO DE RENDERIZADO
 *
 * 1. App.tsx monta
 * 2. Lee window.location.pathname
 * 3. Busca ruta coincidente en routes.ts
 * 4. Renderiza MainLayout
 * 5. MainLayout renderiza Header
 * 6. MainLayout renderiza componente de página
 * 7. Componente de página:
 *    a. Monta hooks (ej: useProgramas)
 *    b. Hook dispara fetch en useEffect
 *    c. Service llama API
 *    d. Respuesta actualiza state en hook
 *    e. Componente re-renderiza con datos
 * 8. MainLayout renderiza Footer
 */

/**
 * PATRONES UTILIZADOS
 *
 * 1. Clean Architecture
 *    - Separación clara entre capas
 *    - Domain layer independiente de framework
 *    - Data layer con servicios
 *    - Presentation layer sin lógica de negocio
 *
 * 2. Custom Hooks Pattern
 *    - Lógica extraída en hooks reutilizables
 *    - useDataFetching para operaciones CRUD
 *    - useContactForm para manejo de formularios
 *
 * 3. Service Layer
 *    - Abstracción de API calls
 *    - Fácil de testear
 *    - Reutilizable
 *
 * 4. Component Composition
 *    - Componentes pequeños y reutilizables
 *    - Props para configuración
 *    - Children para contenido dinámico
 *
 * 5. CSS Modules
 *    - Evita conflictos de nombres
 *    - Encapsulación de estilos
 *    - Mantiene selectores simples
 *
 * 6. Type Safety
 *    - TypeScript en todo
 *    - Interfaces para contratos
 *    - Types para entidades
 */

export {};
