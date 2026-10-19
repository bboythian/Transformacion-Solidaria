/**
 * Componente para formulario de Contacto (integrado con Google Forms)
 */

import styles from "./ContactForm.module.css";

export const ContactForm: React.FC = () => {
  // Reemplaza esta URL con la que copiaste de Google Forms
  const googleFormIframeSrc =
    "https://docs.google.com/forms/d/e/1FAIpQLSdxowKgrY-tsvc2pGQQTulTLvwHWShjXUTjC4OverMrJuDBYw/viewform?usp=dialog";

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Formulario de contacto</h2>
      <p className={styles.subtitle}>Ponte en contacto con nosotros</p>

      <div className={styles.frameCard}>
        <div className={styles.frameHeader}>
          <p className={styles.frameLabel}>Solicitud de información</p>
          <span className={styles.secureBadge}>Transformación Solidaria</span>
        </div>

        <div className={styles.iframeWrapper}>
          <iframe
            src={googleFormIframeSrc}
            title="Formulario de contacto Google"
            className={styles.googleIframe}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Cargando formulario...
          </iframe>
        </div>
      </div>
    </div>
  );
};
