/**
 * Componente Matriculas Abiertas Section
 * Sección de información sobre matrículas de bachillerato
 */

import styles from "./MatriculasAbiertas.module.css";
import { useInViewAnimation } from "../../../infrastructure/hooks";
import { openExternalLink } from "../../../infrastructure/utils";
import { CONTACT } from "../../../infrastructure/constants";

interface MatriculasAbiertasProps {
  whatsappNumber?: string;
}

export const MatriculasAbiertas: React.FC<MatriculasAbiertasProps> = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const handleInscripcionClick = () => {
    openExternalLink(CONTACT.inscriptionsUrl);
  };

  return (
    <section ref={sectionRef} className={styles.matriculasSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Contenido Principal */}
          <div className={styles.mainContent}>
            {/* Títulos */}
            <div className={styles.titleSection}>
              <h1
                className={`${styles.mainTitle} ${
                  isInView ? styles.mainTitleAnimated : ""
                }`}
              >
                Matrículas <span className={styles.highlight}>ABIERTAS!</span>
              </h1>
              <h2
                className={`${styles.subtitle} ${
                  isInView ? styles.subtitleAnimated : ""
                }`}
              >
                Desde <span className={styles.emphasis}>OCTAVO</span> a{" "}
                <span className={styles.emphasis}>TERCERO</span> de{" "}
                <span className={styles.emphasis}>BACHILLERATO</span>
              </h2>
              <p
                className={`${styles.duration} ${
                  isInView ? styles.durationAnimated : ""
                }`}
              >
                Gradúate en 15 meses!
              </p>
            </div>

            {/* Tarjeta de Inscripción */}
            <div
              className={`${styles.inscripcionCard} ${
                isInView ? styles.cardAnimated : ""
              }`}
            >
              <h3 className={styles.cardTitle}>Separa tu cupo!</h3>
              <p className={styles.cardDescription}>
                Obtén tu título de Bachiller legalizado y reconocido por el
                Ministerio de Educación
              </p>
              <p className={styles.resolucion}>
                <strong>Resolución</strong>
                <br />
                MINEDEC-CZ6-2025-869-R
              </p>
              <button
                className={styles.inscripcionButton}
                onClick={handleInscripcionClick}
              >
                Inscríbete ahora
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.arrowIcon}
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div
            className={`${styles.imageSection} ${
              isInView ? styles.imageAnimated : ""
            }`}
          >
            <div className={styles.imageContainer}>
              <img
                src="/images/fondoMatriculate.jpeg"
                alt="Estudiante en Electrónica - Transformación Solidaria"
                className={styles.studentImage}
                onError={(e) => {
                  // Fallback si la imagen no se encuentra
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.classList.add(styles.imagePlaceholder);
                }}
              />
              <div className={styles.placeholderContent}>
                <div className={styles.placeholderIcon}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                      stroke="#FEBE10"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="7.5,10.5 12,8 16.5,10.5"
                      stroke="#FEBE10"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="15" r="2" fill="#FEBE10" />
                  </svg>
                </div>
                <p className={styles.placeholderText}>
                  Imagen: Estudiante en Electrónica
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Características */}
        <div
          className={`${styles.featuresSection} ${
            isInView ? styles.featuresAnimated : ""
          }`}
        >
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00C851"
                strokeWidth="2"
              >
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h4 className={styles.featureTitle}>Estudia a distancia</h4>
              <p className={styles.featureDesc}>Dentro y fuera del país</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFA726"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h4 className={styles.featureTitle}>Horarios flexibles</h4>
              <p className={styles.featureDesc}>Nocturno o fines de semana</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F44336"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h4 className={styles.featureTitle}>Clases híbridas</h4>
              <p className={styles.featureDesc}>Virtuales y Presenciales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className={styles.decorativeElements}>
        <div className={styles.yellowShape1}></div>
        <div className={styles.yellowShape2}></div>
      </div>
    </section>
  );
};
