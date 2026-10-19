/**
 * Configuración de Rutas
 * Define la navegación de la aplicación
 */

import { HomePage } from "../../presentation/pages/Home";
import { OfertaPage } from "../../presentation/pages/Oferta";
import { PreuniversitarioPage } from "../../presentation/pages/Preuniversitario";
import { QuienesSomosPage } from "../../presentation/pages/QuienesSomos";
import { ContactoPage } from "../../presentation/pages/Contacto";

export interface Route {
  id: string;
  path: string;
  label: string;
  component: React.ComponentType<{
    onNavigate?: (path: string, pageId: string) => void;
  }>;
}

export const routes: Route[] = [
  {
    id: "home",
    path: "/",
    label: "Inicio",
    component: HomePage,
  },
  {
    id: "oferta",
    path: "/oferta",
    label: "Oferta académica",
    component: OfertaPage,
  },
  {
    id: "preuniversitario",
    path: "/preuniversitario",
    label: "Preuniversitario",
    component: PreuniversitarioPage,
  },
  {
    id: "quienes-somos",
    path: "/quienes-somos",
    label: "Quiénes somos",
    component: QuienesSomosPage,
  },
  {
    id: "contacto",
    path: "/contacto",
    label: "Contacto",
    component: ContactoPage,
  },
];

/**
 * Obtener componente de página por ID
 */
export const getPageComponent = (pathOrId: string) => {
  const route = routes.find((r) => r.path === pathOrId || r.id === pathOrId);
  return route?.component || HomePage;
};

/**
 * Obtener ruta por ID
 */
export const getRoute = (id: string) => {
  return routes.find((r) => r.id === id);
};
