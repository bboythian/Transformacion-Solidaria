/**
 * Página: Quiénes Somos
 */

import { MainLayout } from "../layouts/MainLayout";
import { QuienesSomosSection } from "../components/quienes-somos/index";

interface QuienesSomosPageProps {
  onNavigate?: (path: string, pageId: string) => void;
}

export const QuienesSomosPage: React.FC<QuienesSomosPageProps> = ({
  onNavigate,
}) => {
  return (
    <MainLayout currentPage="quienes-somos" onNavigate={onNavigate}>
      <QuienesSomosSection />
    </MainLayout>
  );
};
