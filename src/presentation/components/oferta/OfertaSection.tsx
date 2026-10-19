import React, { useState, useRef, useEffect } from "react";
import OfertaCard from "./OfertaCard";
import styles from "./OfertaSection.module.css";
import { BREAKPOINTS, CAROUSEL } from "../../../infrastructure/constants";
import { ofertasData } from "./ofertasData";

export const OfertaSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Configuración del carrusel - 2 cards por defecto
  const cardsToShow = CAROUSEL.cardsToShow;

  const [currentCardsToShow, setCurrentCardsToShow] = useState<number>(
    cardsToShow.desktop,
  );

  // Efecto para manejar el responsive
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= BREAKPOINTS.tablet) {
        setCurrentCardsToShow(cardsToShow.desktop);
      } else if (width >= BREAKPOINTS.mobile) {
        setCurrentCardsToShow(cardsToShow.tablet);
      } else {
        setCurrentCardsToShow(cardsToShow.mobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // En móvil navega de 1 en 1, en desktop/tablet de 2 en 2
    if (currentCardsToShow === 1) {
      // Navegación móvil: 1 en 1
      setCurrentIndex((prev) =>
        prev + 1 >= ofertasData.length ? 0 : prev + 1,
      );
    } else {
      // Navegación desktop/tablet: 2 en 2
      const nextIndex = currentIndex + 2;
      setCurrentIndex(nextIndex >= ofertasData.length ? 0 : nextIndex);
    }

    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // En móvil navega de 1 en 1, en desktop/tablet de 2 en 2
    if (currentCardsToShow === 1) {
      // Navegación móvil: 1 en 1
      setCurrentIndex((prev) =>
        prev <= 0 ? ofertasData.length - 1 : prev - 1,
      );
    } else {
      // Navegación desktop/tablet: 2 en 2
      const prevIndex = currentIndex - 2;
      setCurrentIndex(prevIndex < 0 ? 2 : prevIndex);
    }

    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleMasInformacion = (_id: string) => {};

  const navigateToRoute = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Capacitación de calidad</p>
          <h2 className={styles.title}>Oferta académica</h2>
        </div>

        <div className={styles.carouselContainer}>
          {/* Botón anterior */}
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Oferta anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Carrusel */}
          <div className={styles.carousel} ref={carouselRef}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${
                  currentCardsToShow === 1
                    ? currentIndex * 25 // Móvil: 25% por cada card
                    : (currentIndex / 2) * 50 // Desktop: 50% por cada set de 2 cards
                }%)`,
                transition: isTransitioning
                  ? "transform 0.3s ease-in-out"
                  : "none",
              }}
            >
              {ofertasData.map((oferta) => (
                <div key={oferta.id} className={styles.carouselSlide}>
                  <OfertaCard
                    {...oferta}
                    onMasInformacion={handleMasInformacion}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botón siguiente */}
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Siguiente oferta"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Indicadores de paginación */}
        <div className={styles.pagination}>
          {Array.from(
            { length: currentCardsToShow === 1 ? ofertasData.length : 2 },
            (_, index) => {
              const slideIndex = currentCardsToShow === 1 ? index : index * 2;
              return (
                <button
                  key={index}
                  className={`${styles.dot} ${slideIndex === currentIndex ? styles.activeDot : ""}`}
                  onClick={() => goToSlide(slideIndex)}
                  aria-label={`Ir a la página ${index + 1}`}
                />
              );
            },
          )}
        </div>

        {/* Botón adicional de más información */}
        <div className={styles.moreInfoContainer}>
          <button
            className={styles.moreInfoButton}
            onClick={() => navigateToRoute("/oferta")}
          >
            Más información
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className={styles.downloadIcon}
            >
              <path
                d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M7 10L12 15M12 15L17 10M12 15V3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
