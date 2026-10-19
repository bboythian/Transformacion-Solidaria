/**
 * Layout Principal
 * Contiene Header, Footer y contexto general
 */

import styles from "./MainLayout.module.css";
import {
  Header,
  Footer,
  FloatingAsesorButton,
} from "../components/common/index";

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  onNavigate?: (path: string, pageId: string) => void;
}

interface NavLink {
  label: string;
  href: string;
  id: string;
}

const navLinks: NavLink[] = [
  { label: "Inicio", href: "/", id: "home" },
  { label: "Oferta académica", href: "/oferta", id: "oferta" },
  {
    label: "Preuniversitario",
    href: "/preuniversitario",
    id: "preuniversitario",
  },
  { label: "Quiénes somos", href: "/quienes-somos", id: "quienes-somos" },
  { label: "Contacto", href: "/contacto", id: "contacto" },
];

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  currentPage,
  onNavigate,
}) => {
  const navLinksWithActive = navLinks.map((link) => ({
    ...link,
    active: link.id === currentPage,
  }));

  return (
    <div className={styles.layout}>
      <Header
        navLinks={navLinksWithActive}
        instituteTitle="Transformación Solidaria"
        onNavigate={onNavigate}
      />

      <main className={styles.main}>{children}</main>

      <Footer />

      {/* Botón flotante de asesor */}
      <FloatingAsesorButton whatsappNumber="+593985106717" />
    </div>
  );
};
