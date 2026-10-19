/**
 * Página: Contacto
 */

import { MainLayout } from "../layouts/MainLayout";
import { ContactForm } from "../components/contacto/index";
import styles from "./Contacto.module.css";

interface ContactoPageProps {
  onNavigate?: (path: string, pageId: string) => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = ({ onNavigate }) => {
  return (
    <MainLayout currentPage="contacto" onNavigate={onNavigate}>
      <div className={styles.container}>
        <ContactForm />
      </div>
    </MainLayout>
  );
};
