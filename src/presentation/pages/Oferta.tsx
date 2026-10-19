/**
 * Página: Oferta Académica
 */

import { MainLayout } from "../layouts/MainLayout";
import { OfertaCompletaSection } from "../components/oferta/index";

interface OfertaPageProps {
  onNavigate?: (path: string, pageId: string) => void;
}

export const OfertaPage: React.FC<OfertaPageProps> = ({ onNavigate }) => {
  return (
    <MainLayout currentPage="oferta" onNavigate={onNavigate}>
      <OfertaCompletaSection />
    </MainLayout>
  );
};
