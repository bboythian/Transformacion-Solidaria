/**
 * Componente para sección de Preuniversitario STEM
 */

import { useState } from "react";
import styles from "./PreuniversitarioSection.module.css";
import { useInViewAnimation } from "../../../infrastructure/hooks";

export const PreuniversitarioSection: React.FC = () => {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation({
    threshold: 0.3,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: areasRef, isInView: areasInView } = useInViewAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: platformRef, isInView: platformInView } =
    useInViewAnimation<HTMLDivElement>({
      threshold: 0.3,
      triggerOnce: true,
    });

  const { ref: infoRef, isInView: infoInView } = useInViewAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [openArea, setOpenArea] = useState<string | null>(null);

  const toggleArea = (areaName: string) => {
    setOpenArea(openArea === areaName ? null : areaName);
  };

  const areas = [
    {
      name: "Matemáticas",
      topics: [
        "Álgebra: Ecuaciones, inecuaciones y sistemas",
        "Geometría: Figuras planas y sólidos",
        "Trigonometría: Funciones e identidades",
        "Cálculo: Límites y derivadas básicas",
      ],
    },
    {
      name: "Lenguaje",
      topics: [
        "Lengua: Norma estándar y variedades dialectales",
        "Comunicación: Factores, funciones del lenguaje y vicios",
        "Texto: Coherencia, cohesión y adecuación discursiva",
        "Literatura: Géneros (narrativo, lírico, dramático)",
        "Recursos: Figuras retóricas (metáfora, hipérbole, etc.)",
        "Movimientos: Períodos literarios y contexto histórico",
      ],
    },
    {
      name: "Ciencias Sociales",
      topics: [
        "Historia del Ecuador: Períodos y culturas",
        "Geografía: Regiones y recursos naturales",
        "Cívica: Constitución y derechos ciudadanos",
        "Economía: Conceptos básicos y mercados",
      ],
    },
    {
      name: "Ciencias Naturales",
      topics: [
        "Biología: Célula, genética y ecosistemas",
        "Química: Tabla periódica y reacciones",
        "Física: Mecánica y termodinámica",
        "Anatomía: Sistemas del cuerpo humano",
      ],
    },
    {
      name: "Razonamiento Abstracto",
      topics: [
        "Lógica matemática: Proposiciones y conectivos",
        "Series numéricas: Sucesiones y patrones",
        "Analogías: Relaciones conceptuales",
        "Razonamiento espacial: Figuras y transformaciones",
      ],
    },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Sección Hero */}
      <section ref={heroRef} className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            <div className={styles.heroMedia}>
              <div className={styles.videoContainer}>
                <video
                  className={styles.heroVideo}
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source
                    src="/videos/TS-Preuniversitario.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta el elemento de video.
                  <a href="/videos/TS-Preuniversitario.mp4">Descargar video</a>
                </video>
              </div>
            </div>

            <div className={styles.heroText}>
              <h1
                className={`${styles.heroTitle} ${
                  heroInView ? styles.heroTitleAnimated : ""
                }`}
              >
                PRE - UNIVERSITARIO
              </h1>

              <h2
                className={`${styles.heroSubtitle} ${
                  heroInView ? styles.heroSubtitleAnimated : ""
                }`}
              >
                STEM
              </h2>

              <div
                className={`${styles.heroDescription} ${
                  heroInView ? styles.heroDescriptionAnimated : ""
                }`}
              >
                <p>
                  El Centro de Capacitación STEM y la Unidad Educativa
                  Transformación Solidaria, instituciones con 15 años de
                  experiencia en la formación educativa de jóvenes, adultos y
                  adultos mayores; presentan el proyecto PRE UNIVERSITARIO que
                  tiene como objetivo dotar de las mejores estrategias para que
                  los aspirantes a Universidades o Institutos Públicos puedan
                  superar e ingresar con total seguridad el examen de admisión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Áreas y Plataforma */}
      <section ref={areasRef} className={styles.areasAndPlatformSection}>
        <div className={styles.container}>
          <div className={styles.areasAndPlatformGrid}>
            {/* Columna Áreas */}
            <div className={styles.areasColumn}>
              <h2
                className={`${styles.areasTitle} ${
                  areasInView ? styles.areasTitleAnimated : ""
                }`}
              >
                Áreas de preparación
              </h2>

              <p
                className={`${styles.areasDescription} ${
                  areasInView ? styles.areasDescriptionAnimated : ""
                }`}
              >
                STEM te prepara en:
              </p>

              <div className={styles.areasAccordion}>
                {areas.map((area, index) => (
                  <div
                    key={area.name}
                    className={`${styles.accordionItem} ${
                      areasInView
                        ? styles[
                            `accordionItem${index + 1}Animated` as keyof typeof styles
                          ]
                        : ""
                    }`}
                  >
                    <button
                      className={`${styles.accordionHeader} ${
                        openArea === area.name ? styles.accordionHeaderOpen : ""
                      }`}
                      onClick={() => toggleArea(area.name)}
                    >
                      <span>{area.name}</span>
                      <span className={styles.accordionIcon}>
                        {openArea === area.name ? "▴" : "▾"}
                      </span>
                    </button>

                    {openArea === area.name && (
                      <div className={styles.accordionContent}>
                        <ul className={styles.topicsList}>
                          {area.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className={styles.topicItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Plataforma */}
            <div ref={platformRef} className={styles.platformColumn}>
              <h2
                className={`${styles.platformTitle} ${
                  platformInView ? styles.platformTitleAnimated : ""
                }`}
              >
                Plataforma virtual
              </h2>
              <br />
              <br />
              <div
                className={`${styles.platformContent} ${
                  platformInView ? styles.platformContentAnimated : ""
                }`}
              >
                <p className={styles.platformText}>
                  Adicional a las clases presenciales, tendrás acceso a la
                  plataforma virtual para practicar los simuladores en todas las
                  áreas <strong>24/7</strong>.
                </p>

                <p className={styles.platformText}>
                  Acceso a la plataforma MOODLE:
                </p>

                <a
                  href="https://tsolidaria.edu.ec/tsolidaria/moodle/login/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.moodleLink}
                >
                  🔗 Ir a MOODLE
                </a>

                <p
                  className={styles.platformText}
                  style={{ marginTop: "1.5rem", fontSize: "0.9rem" }}
                >
                  <em>(*) Acceso exclusivo al portal de Preuniversitario</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Información Adicional */}
      <section ref={infoRef} className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div
              className={`${styles.infoCard} ${
                infoInView ? styles.infoCardAnimated : ""
              }`}
            >
              <h3>📚 Temario actualizado</h3>
              <p>
                Contamos con temario actualizado de acuerdo al último examen de
                admisión de las universidades e institutos públicos del país.
              </p>
            </div>

            <div
              className={`${styles.infoCard} ${
                infoInView ? styles.infoCardAnimated : ""
              }`}
              style={{ animationDelay: infoInView ? "0.5s" : "" }}
            >
              <h3>🤝 Acompañamiento permanente</h3>
              <p>
                Acompañamiento permanente en todos los procesos, hasta la
                postulación en la Universidad o Instituto de tu elección.
              </p>
            </div>
          </div>

          <button
            className={styles.ctaButton}
            style={{ animationDelay: "0.8s" }}
          >
            📧 Matrículate Ahora
          </button>
        </div>
      </section>
    </div>
  );
};
