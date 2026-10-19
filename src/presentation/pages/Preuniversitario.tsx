/**
 * Página: Preuniversitario
 */

import { MainLayout } from "../layouts/MainLayout";
import { PreuniversitarioSection } from "../components/preuniversitario/index";

interface PreuniversitarioPageProps {
  onNavigate?: (path: string, pageId: string) => void;
}

export const PreuniversitarioPage: React.FC<PreuniversitarioPageProps> = ({
  onNavigate,
}) => {
  return (
    <MainLayout currentPage="preuniversitario" onNavigate={onNavigate}>
      <PreuniversitarioSection />
    </MainLayout>
  );
};
