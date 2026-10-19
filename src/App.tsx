/**
 * Componente Principal de la Aplicación
 * Configuración de rutas y contexto global
 */

import { useState, useEffect } from "react";
import { routes } from "./infrastructure/router/routes";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Efecto para detectar cambios de URL
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || "/";

      // Encontrar la página actual basada en la ruta
      const currentRoute = routes.find((r) => r.path === path);
      setCurrentPage(currentRoute?.id || "home");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Navegar a una página
  const navigateTo = (path: string, pageId: string) => {
    setCurrentPage(pageId);
    window.history.pushState({}, "", path);
    // Scroll al top
    window.scrollTo(0, 0);
  };

  // Obtener componente actual
  const currentRoute = routes.find((r) => r.id === currentPage);
  const CurrentComponent = currentRoute?.component;

  if (!CurrentComponent) {
    return <div>Página no encontrada</div>;
  }

  return (
    <div className="app">
      <CurrentComponent onNavigate={navigateTo} />
    </div>
  );
}

export default App;
