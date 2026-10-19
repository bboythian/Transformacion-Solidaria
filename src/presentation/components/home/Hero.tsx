/**
 * Componente Hero Section (Home)
 * Sección principal de la página de inicio
 */

import styles from "./Hero.module.css";
import { useInViewAnimation } from "../../../infrastructure/hooks";

interface HeroProps {
  title?: string;
  subtitle?: string;
  tertiaryText?: string;
  quaternaryText?: string;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  subtitle = "Educación moderna para un futuro mejor",
  tertiaryText = "",
  quaternaryText = "",
  backgroundImage = "",
}) => {
  const { ref: heroRef, isInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const heroStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section ref={heroRef} className={styles.hero} style={heroStyle}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {/* Título - Lado Izquierdo Superior */}
        <div className={styles.leftSide}>
          <h1
            className={`${styles.title} ${isInView ? styles.titleAnimated : ""}`}
          >
            <span className={styles.titleSmall}>Gradúate de</span> BACHILLER
            <span className={styles.titleSmall}> en </span>
            CORTO TIEMPO!!!
          </h1>

          {/* Subtítulo - Debajo del Título */}
          <p
            className={`${styles.subtitle} ${isInView ? styles.subtitleAnimated : ""}`}
          >
            {subtitle}
          </p>
        </div>

        {/* Textos Derecha Inferior */}
        <div className={styles.rightSide}>
          {(tertiaryText || quaternaryText) && (
            <div
              className={`${styles.rightContent} ${isInView ? styles.rightContentAnimated : ""}`}
            >
              {tertiaryText && (
                <p
                  className={`${styles.tertiaryText} ${isInView ? styles.tertiaryTextAnimated : ""}`}
                >
                  {tertiaryText}
                </p>
              )}
              {quaternaryText && (
                <p
                  className={`${styles.quaternaryText} ${isInView ? styles.quaternaryTextAnimated : ""}`}
                >
                  {quaternaryText}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Logo en esquina inferior derecha */}
      <div
        className={`${styles.logoContainer} ${isInView ? styles.logoContainerAnimated : ""}`}
      >
        <img
          src="/images/logo.png"
          alt="Transformación Solidaria"
          className={styles.logo}
        />
      </div>
    </section>
  );
};
