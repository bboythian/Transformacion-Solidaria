/**
 * Componente FAQ Section (Home)
 * Sección de preguntas frecuentes
 */

import { useState } from "react";
import styles from "./FaqSection.module.css";
import { useInViewAnimation } from "../../../infrastructure/hooks";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState<boolean>(false);
  const { ref: faqRef, isInView } = useInViewAnimation({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "¿Cómo me matriculo?",
      answer:
        "Una vez que hayas recibido toda la información por parte de la institución, debes preparar la documentación y entregar los documentos originales si estás en la ciudad de Cuenca o enviar por Servientrega si están en otra provincia.",
    },
    {
      id: 2,
      question: "¿Cuándo inician clases?",
      answer:
        "Al ser una institución de modalidad intensiva, las clases inician dos veces por año: en febrero y septiembre de cada año.",
    },
    {
      id: 3,
      question: "¿Qué costo tienen los cursos?",
      answer:
        "Nuestros costos son muy accesibles, contamos con becas y descuentos para personas con situaciones de vulnerabilidad.",
    },
    {
      id: 4,
      question: "¿Qué necesito para inscribirme?",
      answer:
        "Necesitas: copia de cédula, dos fotos tamaño carnet, planilla de luz y documentos originales de la aprobación de cursos anteriores.",
    },
    {
      id: 5,
      question: "¿Cómo puedo contactarlos?",
      answer:
        "Puedes escribirnos al 0985106717 - 0988989118. Estamos ubicados en la ciudad de Cuenca, Av. Solano y Florencia Astudillo (interior del Sindicato de Choferes profesionales del Azuay).",
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const toggleShowAllFaqs = () => {
    setShowAllFaqs(!showAllFaqs);
  };

  const displayedFaqs = showAllFaqs ? faqItems : faqItems.slice(0, 2);

  return (
    <section ref={faqRef} className={styles.faqSection}>
      <div className={styles.container}>
        {/* Título Principal */}
        <div
          className={`${styles.headerContent} ${isInView ? styles.headerAnimated : ""}`}
        >
          <h2 className={styles.mainTitle}>
            Tu ingreso a la universidad no depende del azar,
            <br />
            depende de la preparación que elijas.
          </h2>
          <p className={styles.subtitle}>No te quedes afuera</p>
        </div>

        {/* Layout de dos columnas */}
        <div className={styles.twoColumnLayout}>
          {/* Columna Izquierda - Preguntas Frecuentes */}
          <div
            className={`${styles.faqContainer} ${isInView ? styles.faqContainerAnimated : ""}`}
          >
            <h3 className={styles.faqTitle}>Preguntas frecuentes</h3>

            <div className={styles.faqList}>
              {displayedFaqs.map((item, index) => (
                <div
                  key={item.id}
                  className={`${styles.faqItem} ${isInView ? styles.faqItemAnimated : ""}`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <button
                    className={`${styles.faqQuestion} ${openFaq === item.id ? styles.faqQuestionOpen : ""}`}
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={openFaq === item.id}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <span
                      className={`${styles.faqIcon} ${openFaq === item.id ? styles.faqIconOpen : ""}`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`${styles.faqAnswer} ${openFaq === item.id ? styles.faqAnswerOpen : ""}`}
                  >
                    <div className={styles.answerContent}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón para mostrar más preguntas */}
            {!showAllFaqs && faqItems.length > 2 && (
              <div className={styles.showMoreContainer}>
                <button
                  className={styles.showMoreButton}
                  onClick={toggleShowAllFaqs}
                  aria-label="Más preguntas"
                >
                  <span>Más preguntas</span>
                  <span className={styles.arrowDown}>▼</span>
                </button>
              </div>
            )}

            {/* Botón para mostrar menos preguntas */}
            {showAllFaqs && (
              <div className={styles.showMoreContainer}>
                <button
                  className={styles.showMoreButton}
                  onClick={toggleShowAllFaqs}
                  aria-label="Menos preguntas"
                >
                  <span>Menos preguntas</span>
                  <span className={styles.arrowUp}>▲</span>
                </button>
              </div>
            )}
          </div>

          {/* Columna Derecha - Logo */}
          <div
            className={`${styles.logoColumn} ${isInView ? styles.logoColumnAnimated : ""}`}
          >
            <div className={styles.logoContainer}>
              <img
                src="/images/logo.png"
                alt="Transformación Solidaria"
                className={styles.logo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
