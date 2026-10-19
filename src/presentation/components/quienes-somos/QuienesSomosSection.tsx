/**
 * Componente Quiénes Somos - Sección completa e interactiva
 */

import React, { useState } from "react";
import styles from "./QuienesSomosSection.module.css";
import { useInViewAnimation } from "../../../infrastructure/hooks";

export const QuienesSomosSection: React.FC = () => {
  // Referencias para cada sección con su propio hook de animación
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: introRef, isInView: introInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: missionRef, isInView: missionInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: valuesRef, isInView: valuesInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: socialRef, isInView: socialInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: deceRef, isInView: deceInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: ubicacionRef, isInView: ubicacionInView } = useInViewAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const [expandedSection, setExpandedSection] = useState<string | null>(
    "bienvenida",
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HERO SECTION - Bienvenida */}
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`${styles.heroSection} ${heroInView ? styles.heroAnimated : ""}`}
        >
          <h1 className={styles.heroTitle}>
            ¡Bienvenidos a Transformación Solidaria!
          </h1>
          <p className={styles.heroSubtitle}>
            Tu meta es nuestro compromiso: bachillerato, oficio y universidad en
            un solo lugar.
          </p>
          {/* <div className={styles.heroImage}>
            <img
              src="/images/banner.png"
              alt="Bienvenida a Transformación Solidaria"
              className={styles.image}
            />
            <div className={styles.imageOverlay}></div>
          </div> */}
        </div>

        {/* INTRODUCCIÓN */}
        <div
          ref={introRef as React.RefObject<HTMLDivElement>}
          className={`${styles.introSection} ${introInView ? styles.introAnimated : ""}`}
        >
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>Nuestra historia</h2>
            <p className={styles.introText}>
              En Transformación Solidaria, entendemos que la vida a veces nos
              obliga a pausar nuestros sueños, pero nunca es tarde para
              retomarlos. Somos una institución educativa diseñada para jóvenes
              y adultos que buscan culminar su formación desde Octavo hasta
              Tercero de Bachillerato con la flexibilidad que el mundo actual
              exige.
            </p>
            <p className={styles.introText}>
              A través de nuestras modalidades semipresencial y virtual a
              distancia, rompemos las barreras del tiempo y el espacio,
              integrando la innovación tecnológica con una formación basada en
              la disciplina y la inclusión. No solo te preparamos para
              graduarte; te equipamos para el éxito inmediato con nuestras
              certificaciones técnicas, y te proyectamos al futuro con nuestro
              Pre-Universitario de alto nivel.
            </p>
            <p className={styles.motto}>
              "Transforma tu esfuerzo en resultados. Aquí, tu experiencia cuenta
              y tu progreso es nuestra prioridad."
            </p>
          </div>
          <div className={styles.introImage}>
            <img
              src="/images/nuestra-historia.jpeg"
              alt="Introducción Transformación Solidaria"
              className={styles.image}
            />
          </div>
        </div>

        {/* MISIÓN Y VISIÓN - Cards Interactivos */}
        <div
          ref={missionRef as React.RefObject<HTMLDivElement>}
          className={`${styles.missionVisionGrid} ${missionInView ? styles.gridAnimated : ""}`}
        >
          {/* MISIÓN */}
          <div className={`${styles.card} ${styles.missionCard}`}>
            <h3 className={styles.cardTitle}>Nuestra misión</h3>
            <p className={styles.cardContent}>
              Brindar una educación integral y accesible a jóvenes y adultos con
              escolaridad inconclusa, desde Octavo de Básica hasta Tercero de
              Bachillerato, a través de modalidades semipresenciales y virtuales
              a distancia. Nos fundamentamos en la inclusión, fomentando la
              disciplina y la innovación constante en nuestras metodologías.
              Capacitamos a nuestros estudiantes no solo para obtener su Título
              de Bachiller, sino con competencias técnicas y preparación
              preuniversitaria.
            </p>
          </div>

          {/* VISIÓN */}
          <div className={`${styles.card} ${styles.visionCard}`}>
            <h3 className={styles.cardTitle}>Nuestra visión</h3>
            <p className={styles.cardContent}>
              Consolidarnos para el año 2031 como la institución referente en la
              modalidad PCEI, reconocida por nuestra innovación en entornos de
              aprendizaje flexibles y la excelencia disciplinaria de nuestra
              comunidad. Aspiramos a ser un espacio de inclusión donde cada
              estudiante encuentre las herramientas necesarias para alcanzar su
              máximo potencial profesional y humano, siendo agentes activos de
              cambio en nuestra sociedad.
            </p>
          </div>

          {/* FILOSOFÍA */}
          <div className={`${styles.card} ${styles.visionCard}`}>
            <h3 className={styles.cardTitle}>Nuestra filosofía</h3>
            <p className={styles.cardContent}>
              Formar personas críticas, solidarias, humanistas, innovadoras,
              respetuosas con las diferencias individuales y colectivas de sus
              semejantes; total respeto de actos culturales y contextuales. Con
              estas características pretendemos contribuir a la transformación
              de una sociedad justa, responsable, empoderada con la ayuda
              social, respetuosa y tolerante de las falencias en el caminar de
              la vida, finalmente comprometida con el cuidado y respeto por el
              medio ambiente.
            </p>
          </div>
        </div>

        {/* VALORES INSTITUCIONALES */}
        <div
          ref={valuesRef as React.RefObject<HTMLDivElement>}
          className={`${styles.valuesSection} ${valuesInView ? styles.valuesAnimated : ""}`}
        >
          <h2 className={styles.sectionTitle}>Valores institucionales</h2>
          <div className={styles.valuesGrid}>
            <div className={`${styles.valueCard} ${styles.value1}`}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Inclusión</h3>
              <p>
                Creemos que la educación es un derecho, no un privilegio.
                Adaptamos nuestro modelo para que nadie se quede atrás, sin
                importar su edad o situación personal.
              </p>
            </div>

            <div className={`${styles.valueCard} ${styles.value2}`}>
              <div className={styles.valueIcon}>💪</div>
              <h3>Disciplina</h3>
              <p>
                Entendemos que el éxito es el resultado del esfuerzo sostenido.
                Fomentamos la constancia y el compromiso como el motor principal
                para alcanzar las metas académicas y técnicas.
              </p>
            </div>

            <div className={`${styles.valueCard} ${styles.value3}`}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Innovación</h3>
              <p>
                Evolucionamos al ritmo de las necesidades actuales. Utilizamos
                herramientas digitales y técnicas vanguardistas para ofrecer una
                enseñanza dinámica, flexible y efectiva.
              </p>
            </div>
          </div>
        </div>

        {/* OBRA SOCIAL */}
        <div
          ref={socialRef as React.RefObject<HTMLDivElement>}
          className={`${styles.socialSection} ${socialInView ? styles.socialAnimated : ""}`}
        >
          <div className={styles.socialContent}>
            <h2 className={styles.sectionTitle}>Obra social</h2>
            <h3 className={styles.socialSubtitle}>
              Más que educación, transformación de vida
            </h3>

            <p className={styles.socialText}>
              En la Unidad Educativa Transformación Solidaria, entendemos que la
              educación es el puente hacia la libertad, pero la solidaridad es
              el cimiento que sostiene a nuestra comunidad. Nuestra misión
              trasciende las aulas de Octavo a Tercero de Bachillerato; nos
              define un compromiso inquebrantable con el bienestar de quienes
              más lo necesitan.
            </p>

            <h4 className={styles.subsectionTitle}>
              Educación con sentido humano
            </h4>
            <p className={styles.socialText}>
              No solo formamos bachilleres con excelencia académica; cultivamos
              ciudadanos empáticos. Nuestro programa para personas con
              escolaridad inconclusa es, en sí mismo, un acto de justicia
              social, devolviendo la oportunidad de superación a quienes el
              sistema dejó atrás.
            </p>

            <h4 className={styles.subsectionTitle}>
              Nuestros pilares de responsabilidad social
            </h4>
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🌍</div>
                <h5>Impacto comunitario</h5>
                <p>
                  A través de nuestros programas de obra social, nuestros
                  estudiantes y docentes se involucran directamente en proyectos
                  que alivian necesidades reales en sectores vulnerables.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>💡</div>
                <h5>Formación en valores</h5>
                <p>
                  Integramos la acción solidaria como parte del currículo,
                  asegurando que cada título entregado lleve consigo una huella
                  de servicio y gratitud.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🤲</div>
                <h5>Sostenibilidad y apoyo</h5>
                <p>
                  Generamos alianzas y actividades para apoyar no solo el
                  crecimiento intelectual de nuestros alumnos, sino también su
                  entorno familiar y social.
                </p>
              </div>
            </div>

            <p className={styles.socialMotto}>
              "En Transformación Solidaria, no solo entregamos un Título de
              Bachiller; entregamos una nueva oportunidad de vida y el
              compromiso de construir una sociedad más justa para todos."
            </p>
          </div>

          <div className={styles.socialImage}>
            <img
              src="/images/obra-social-2.jpeg"
              alt="Obra Social Transformación Solidaria"
              className={styles.image}
            />
            <img
              src="/images/obra-social.jpeg"
              alt="Obra Social Transformación Solidaria"
              className={styles.image}
            />
            <img
              src="/images/obra-social-3.jpeg"
              alt="Obra Social Transformación Solidaria"
              className={styles.image}
            />
          </div>
        </div>

        {/* BIENESTAR ESTUDIANTIL - DECE */}
        <div
          ref={deceRef as React.RefObject<HTMLDivElement>}
          className={`${styles.deceSection} ${deceInView ? styles.deceAnimated : ""}`}
        >
          <h2 className={styles.sectionTitle}>Bienestar estudiantil y DECE</h2>

          <div className={styles.deceContent}>
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <video
                  className={styles.presentationVideo}
                  poster="/images/miniatura-video.png"
                  controls
                  preload="metadata"
                >
                  <source
                    src="/videos/presentacion-transformacion-solidaria.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <p className={styles.videoCaption}>
                Conoce nuestra historia y compromiso con la educación de calidad
              </p>
            </div>

            <div className={styles.deceText}>
              <p className={styles.deceIntro}>
                En la Unidad Educativa Transformación Solidaria, creemos que el
                éxito académico es inseparable del bienestar emocional y la
                equidad social. Por ello, nuestro Departamento de Consejería
                Estudiantil (DECE) trabaja incansablemente para garantizar que
                cada estudiante, desde octavo hasta tercero de bachillerato,
                cuente con un entorno seguro, inclusivo y lleno de
                oportunidades.
              </p>

              <h3 className={styles.subsectionTitle}>
                Educación sin barreras: inclusión y apoyo integral
              </h3>
              <p className={styles.deceText}>
                Nuestra misión es derribar los obstáculos que impiden el acceso
                a una educación de calidad. El DECE lidera nuestras iniciativas
                de apoyo personalizado:
              </p>

              {/* Secciones desplegables */}
              <div className={styles.expandableSection}>
                <button
                  className={`${styles.expandButton} ${expandedSection === "diversidad" ? styles.active : ""}`}
                  onClick={() => toggleSection("diversidad")}
                >
                  <span className={styles.icon}>➕</span>
                  <span>Apoyo a la diversidad</span>
                </button>
                {expandedSection === "diversidad" && (
                  <div className={styles.expandedContent}>
                    <p>
                      Contamos con protocolos especializados para el
                      acompañamiento de estudiantes con necesidades educativas
                      específicas (NEE) y diferentes capacidades, asegurando una
                      adaptación curricular que respete sus ritmos de
                      aprendizaje.
                    </p>
                  </div>
                )}
              </div>

              <div className={styles.expandableSection}>
                <button
                  className={`${styles.expandButton} ${expandedSection === "becas" ? styles.active : ""}`}
                  onClick={() => toggleSection("becas")}
                >
                  <span className={styles.icon}>➕</span>
                  <span>Programa de becas y ayudas económicas</span>
                </button>
                {expandedSection === "becas" && (
                  <div className={styles.expandedContent}>
                    <p>
                      Entendemos las realidades de la escolaridad inconclusa;
                      por ello, ofrecemos un sistema de becas y descuentos
                      diseñado para que la situación económica nunca sea un
                      impedimento para alcanzar el Título de Bachiller.
                    </p>
                  </div>
                )}
              </div>

              <div className={styles.expandableSection}>
                <button
                  className={`${styles.expandButton} ${expandedSection === "emocional" ? styles.active : ""}`}
                  onClick={() => toggleSection("emocional")}
                >
                  <span className={styles.icon}>➕</span>
                  <span>Acompañamiento emocional</span>
                </button>
                {expandedSection === "emocional" && (
                  <div className={styles.expandedContent}>
                    <p>
                      Brindamos un espacio de escucha activa y orientación
                      profesional para fortalecer la resiliencia y la salud
                      mental de nuestra comunidad educativa.
                    </p>
                  </div>
                )}
              </div>

              <p className={styles.deceCommitment}>
                "Más que una institución educativa, somos una red de apoyo. En
                el DECE, transformamos las dificultades en oportunidades de
                superación, garantizando que nadie se quede atrás en su camino
                hacia el éxito profesional y personal."
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* UBICACIÓN */}
        <div
          ref={ubicacionRef as React.RefObject<HTMLDivElement>}
          className={`${styles.ubicacionSection} ${ubicacionInView ? styles.ubicacionAnimated : ""}`}
        >
          <div className={styles.ubicacionContent}>
            <h2 className={styles.sectionTitle}>Estamos ubicados en:</h2>
            <p className={styles.ubicacionText}>
              Nuestra sede se encuentra en la ciudad de Cuenca, Ecuador, con
              acceso conveniente para estudiantes de toda la ciudad y sus
              alrededores.
            </p>
            <p className={styles.ubicacionAddress}>
              <strong>Dirección:</strong> Av. Solano y Florencia Astudillo
              (Interior del Sindicato de Choferes Profesionales del Azuay).
              <br />
            </p>
          </div>

          <div className={styles.ubicacionMap}>
            <div className={styles.mapaContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6915152190913!2d-79.0102962755052!3d-2.904898689536521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd186d618edb75%3A0x6e4ad8f990783fb5!2sAv.%20Fray%20Vicente%20Solano%20y%20Sentenario%203-96%2C%20010203%20Cuenca!5e0!3m2!1ses!2sec!4v1780958664402!5m2!1ses!2sec"
                width="600"
                height="450"
                loading="lazy"
                className={styles.mapaIframe}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
