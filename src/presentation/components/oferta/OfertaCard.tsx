import React, { useState, useRef, useEffect } from "react";
import styles from "./OfertaCard.module.css";
import { generateStableKey } from "../../../infrastructure/utils";
import Modal from "../common/Modal";
import { getOfertaDetalle } from "./ofertasDetailInfo";

export interface OfertaCardProps {
  id: string;
  titulo: string;
  descripcion: string | string[] | { descripcion: string; items: string[] };
  imagen: string;
  altText: string;
  onMasInformacion?: (id: string) => void;
}

const OfertaCard: React.FC<OfertaCardProps> = ({
  id,
  titulo,
  descripcion,
  imagen,
  altText,
  onMasInformacion,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mixedRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Detectar si el texto requiere más de 4 líneas
  useEffect(() => {
    const checkOverflow = () => {
      const currentRef = mixedRef.current || listRef.current || textRef.current;
      if (currentRef) {
        // Crear un elemento temporal para medir el texto completo
        const tempElement = document.createElement("div");
        tempElement.style.position = "absolute";
        tempElement.style.visibility = "hidden";
        tempElement.style.width = `${currentRef.offsetWidth}px`;
        tempElement.style.fontSize =
          window.getComputedStyle(currentRef).fontSize;
        tempElement.style.fontFamily =
          window.getComputedStyle(currentRef).fontFamily;
        tempElement.style.lineHeight =
          window.getComputedStyle(currentRef).lineHeight;

        // Manejar los diferentes tipos de descripción
        if (typeof descripcion === "object" && !Array.isArray(descripcion)) {
          // Formato mixto: descripción + items
          const listItems = descripcion.items
            .map((item) => `<li style="margin-bottom: 0.5rem;">${item}</li>`)
            .join("");
          tempElement.innerHTML = `
            <p>${descripcion.descripcion}</p>
            <ul style="padding-left: 1.2rem; margin: 0.5rem 0 0 0;">${listItems}</ul>
          `;
        } else if (Array.isArray(descripcion)) {
          // Solo lista
          const listItems = descripcion
            .map((item) => `<li style="margin-bottom: 0.5rem;">${item}</li>`)
            .join("");
          tempElement.innerHTML = `<ul style="padding-left: 1.2rem; margin: 0;">${listItems}</ul>`;
        } else {
          // Solo texto
          tempElement.innerHTML = descripcion;
        }

        document.body.appendChild(tempElement);

        const fullTextHeight = tempElement.offsetHeight;

        // Crear otro elemento para medir exactamente 4 líneas
        const fourLinesElement = document.createElement("div");
        fourLinesElement.style.position = "absolute";
        fourLinesElement.style.visibility = "hidden";
        fourLinesElement.style.width = `${currentRef.offsetWidth}px`;
        fourLinesElement.style.fontSize =
          window.getComputedStyle(currentRef).fontSize;
        fourLinesElement.style.fontFamily =
          window.getComputedStyle(currentRef).fontFamily;
        fourLinesElement.style.lineHeight =
          window.getComputedStyle(currentRef).lineHeight;
        fourLinesElement.innerHTML =
          "Texto de prueba<br>Línea 2<br>Línea 3<br>Línea 4";

        document.body.appendChild(fourLinesElement);

        const fourLinesHeight = fourLinesElement.offsetHeight;

        document.body.removeChild(tempElement);
        document.body.removeChild(fourLinesElement);

        // Si el texto completo es más alto que 4 líneas, mostrar "ver más"
        setHasOverflow(fullTextHeight > fourLinesHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [descripcion]);

  const handleClick = () => {
    setIsModalOpen(true);
    if (onMasInformacion) {
      onMasInformacion(id);
    }
  };

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasOverflow) {
      setIsExpanded(!isExpanded);
    }
  };

  const navigateToRoute = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
  };

  const openWhatsApp = () => {
    const phoneNumber = "593985106717";
    const message = encodeURIComponent(
      `Hola, quiero más información sobre ${titulo}.`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const ofertaDetalle = getOfertaDetalle(id);

  const renderColegioDistanciaDetalle = () => {
    const detalle = ofertaDetalle?.detalleEspecial;

    if (!detalle) {
      return null;
    }

    return (
      <div className={styles.modalSpecialLayout}>
        <section className={styles.modalHighlightCard}>
          <div className={styles.modalBadge}>{detalle.experiencia}</div>
          <h3 className={styles.modalSectionTitle}>{detalle.institucion}</h3>
          <p className={styles.modalIntroText}>
            Aquí encontrarás un resumen claro de la propuesta académica, sus
            modalidades, requisitos y costos para que puedas orientarte con
            facilidad.
          </p>

          <div className={styles.modalPillsRow}>
            <span className={styles.modalPill}>{detalle.edades}</span>
            <span className={styles.modalPill}>5 meses por curso</span>
            <span className={styles.modalPill}>
              Octavo a tercero de bachillerato
            </span>
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>Modalidades</h4>
          <p className={styles.modalSectionIntro}>
            Estas son las formas de estudio disponibles y sus horarios para que
            elijas la que mejor se adapta a tu rutina.
          </p>
          <div className={styles.modalCardsGrid}>
            {detalle.modalidades.map((modalidad) => (
              <article key={modalidad.nombre} className={styles.modalInfoCard}>
                <span className={styles.modalCardEyebrow}>
                  {modalidad.horario}
                </span>
                <h5 className={styles.modalCardTitle}>{modalidad.nombre}</h5>
                <p className={styles.modalCardText}>{modalidad.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>Niveles disponibles</h4>
          <p className={styles.modalSectionIntro}>
            Revisa los niveles que puedes cursar dentro de esta modalidad y el
            recorrido académico que ofrece el programa.
          </p>
          <div className={styles.modalLevelsGrid}>
            {detalle.niveles.map((nivel) => (
              <article key={nivel} className={styles.modalLevelCard}>
                {nivel}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>Requisitos</h4>
          <p className={styles.modalSectionIntro}>
            Cada nivel tiene documentos específicos de ingreso; aquí se resumen
            de forma ordenada para facilitar tu revisión.
          </p>
          <div className={styles.modalRequirementsGrid}>
            {detalle.requisitos.map((requisito) => (
              <article
                key={requisito.nivel}
                className={styles.modalRequirementCard}
              >
                <h5 className={styles.modalRequirementTitle}>
                  {requisito.nivel}
                </h5>
                <ul className={styles.modalRequirementList}>
                  {requisito.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>Costos</h4>
          <p className={styles.modalSectionIntro}>
            Estos valores te sirven como referencia inicial para matrícula y
            pensión dentro del programa.
          </p>
          <div className={styles.modalCostsGrid}>
            {detalle.costos.map((costo) => (
              <article key={costo.concepto} className={styles.modalCostCard}>
                <span className={styles.modalCostLabel}>{costo.concepto}</span>
                <strong className={styles.modalCostValue}>{costo.valor}</strong>
              </article>
            ))}
          </div>
        </section>
        <div className={styles.modalButtonRow}>
          <button
            className={`${styles.modalLinkButton} ${styles.modalPrimaryButton}`}
            type="button"
            onClick={() => navigateToRoute("/contacto")}
          >
            Matricúlate ahora
          </button>
          <button
            className={`${styles.modalLinkButton} ${styles.modalSecondaryButton}`}
            type="button"
            onClick={() => navigateToRoute("/contacto")}
          >
            Más información
          </button>
        </div>

        {detalle.notaFinal && (
          <p className={styles.modalNote}>{detalle.notaFinal}</p>
        )}
      </div>
    );
  };

  const renderCapacitacionTecnicaDetalle = () => {
    const detalle = ofertaDetalle?.detalleEspecial;

    if (!detalle || !detalle.cursos) {
      return null;
    }

    return (
      <div className={styles.modalSpecialLayout}>
        <section className={styles.modalHighlightCard}>
          <div className={styles.modalBadge}>{detalle.experiencia}</div>
          <h3 className={styles.modalSectionTitle}>{detalle.institucion}</h3>
          <p className={styles.modalLeadText}>
            {ofertaDetalle.descripcionCorta}
          </p>
          <p className={styles.modalIntroText}>
            Aquí encontrarás una referencia breve de los cursos disponibles y
            podrás ir directamente al detalle de cada uno.
          </p>

          <div className={styles.modalPillsRow}>
            <span className={styles.modalPill}>{ofertaDetalle.duracion}</span>
            <span className={styles.modalPill}>{ofertaDetalle.horarios}</span>
            <span className={styles.modalPill}>{ofertaDetalle.dirigidoA}</span>
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>Cursos disponibles</h4>
          <p className={styles.modalSectionIntro}>
            A continuación encontrarás los cursos técnicos disponibles.
          </p>
          <div className={styles.modalCardsGrid}>
            {detalle.cursos.map((curso) => (
              <article key={curso.id} className={styles.modalCourseCard}>
                <h5 className={styles.modalCardTitle}>{curso.titulo}</h5>
                <p className={styles.modalCardText}>{curso.resumen}</p>
                <ul className={styles.modalMiniList}>
                  {curso.puntosClave.map((punto) => (
                    <li key={punto}>{punto}</li>
                  ))}
                </ul>
                <div className={styles.modalButtonRow}>
                  <button
                    className={`${styles.modalLinkButton} ${styles.modalPrimaryButton}`}
                    type="button"
                    onClick={() => navigateToRoute("/contacto")}
                  >
                    Inscríbete
                  </button>
                  <button
                    className={`${styles.modalLinkButton} ${styles.modalSecondaryButton}`}
                    type="button"
                    onClick={openWhatsApp}
                  >
                    Más información
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  };

  const renderPreuniversitarioStemDetalle = () => {
    if (!ofertaDetalle) {
      return null;
    }

    return (
      <div className={styles.modalSpecialLayout}>
        <section className={styles.modalHighlightCard}>
          <div className={styles.modalBadge}>
            15 años de experiencia educativa
          </div>
          <h3 className={styles.modalSectionTitle}>PRE - UNIVERSITARIO STEM</h3>
          <p className={styles.modalLeadText}>
            {ofertaDetalle.descripcionCorta}
          </p>
          <p className={styles.modalIntroText}>
            El Centro de Capacitación STEM y la Unidad Educativa Transformación
            Solidaria presentan este programa para que puedas rendir con
            preparación estratégica y mayor confianza tu examen de admisión.
          </p>

          <div className={styles.modalPillsRow}>
            <span className={styles.modalPill}>{ofertaDetalle.horarios}</span>
            <span className={styles.modalPill}>Simuladores MOODLE 24/7</span>
            <span className={styles.modalPill}>
              Acompañamiento hasta postulación
            </span>
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>Áreas de preparación</h4>
          <p className={styles.modalSectionIntro}>
            STEM te prepara en las áreas clave evaluadas en el proceso de
            admisión de universidades e institutos públicos.
          </p>
          <div className={styles.modalLevelsGrid}>
            <article className={styles.modalLevelCard}>Matemáticas</article>
            <article className={styles.modalLevelCard}>Lenguaje</article>
            <article className={styles.modalLevelCard}>
              Ciencias Sociales (Historia y Ciudadanía)
            </article>
            <article className={styles.modalLevelCard}>
              Ciencias Naturales (Física, Química y Biología)
            </article>
            <article className={styles.modalLevelCard}>
              Razonamiento Abstracto
            </article>
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>Soporte adicional</h4>
          <p className={styles.modalSectionIntro}>
            Además de las clases presenciales, contarás con recursos virtuales
            para práctica continua y temario actualizado según el último examen.
          </p>
          <div className={styles.modalCardsGrid}>
            <article className={styles.modalInfoCard}>
              <h5 className={styles.modalCardTitle}>Plataforma virtual</h5>
              <p className={styles.modalCardText}>
                Acceso 24/7 a simuladores en todas las áreas desde MOODLE.
              </p>
            </article>
            <article className={styles.modalInfoCard}>
              <h5 className={styles.modalCardTitle}>Temario actualizado</h5>
              <p className={styles.modalCardText}>
                Contenido alineado con la estructura del último examen de
                admisión.
              </p>
            </article>
            <article className={styles.modalInfoCard}>
              <h5 className={styles.modalCardTitle}>Acompañamiento integral</h5>
              <p className={styles.modalCardText}>
                Seguimiento continuo en todo el proceso hasta la postulación.
              </p>
            </article>
          </div>
        </section>

        <div className={styles.modalButtonRow}>
          <button
            className={`${styles.modalLinkButton} ${styles.modalPrimaryButton}`}
            type="button"
            onClick={() => navigateToRoute("/contacto")}
          >
            Matricúlate ahora
          </button>
          <button
            className={`${styles.modalLinkButton} ${styles.modalSecondaryButton}`}
            type="button"
            onClick={openWhatsApp}
          >
            Más información
          </button>
        </div>
      </div>
    );
  };

  const renderClasesNivelacionDetalle = () => {
    if (!ofertaDetalle) {
      return null;
    }

    return (
      <div className={styles.modalSpecialLayout}>
        <section className={styles.modalHighlightCard}>
          <div className={styles.modalBadge}>
            Acompañamiento académico integral
          </div>
          <h3 className={styles.modalSectionTitle}>
            Clases de nivelación en todas las asignaturas
          </h3>
          <p className={styles.modalLeadText}>
            {ofertaDetalle.descripcionCorta}
          </p>
          <p className={styles.modalIntroText}>
            Nuestro enfoque se centra en que cada estudiante comprenda,
            practique y gane seguridad para rendir mejor en clase y en exámenes.
          </p>

          <div className={styles.modalPillsRow}>
            <span className={styles.modalPill}>
              Desde inicial a 3ro de Bachillerato
            </span>
            <span className={styles.modalPill}>
              Modalidad individual o grupal
            </span>
            <span className={styles.modalPill}>
              Seguimiento a padres y representantes
            </span>
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>¿Cómo lo hacemos?</h4>
          <p className={styles.modalSectionIntro}>
            Intervenimos en tres frentes clave para mejorar el rendimiento de
            forma sostenida.
          </p>
          <div className={styles.modalCardsGrid}>
            <article className={styles.modalInfoCard}>
              <h5 className={styles.modalCardTitle}>Clases de refuerzo</h5>
              <p className={styles.modalCardText}>
                Reforzamos los temas que no quedaron claros y trabajamos la
                comprensión de fondo para evitar la memorización mecánica.
              </p>
            </article>
            <article className={styles.modalInfoCard}>
              <h5 className={styles.modalCardTitle}>Control de tareas</h5>
              <p className={styles.modalCardText}>
                Guiamos al estudiante paso a paso para que resuelva sus deberes
                por sí mismo, corrigiendo errores en el momento.
              </p>
            </article>
            <article className={styles.modalInfoCard}>
              <h5 className={styles.modalCardTitle}>
                Preparación para exámenes
              </h5>
              <p className={styles.modalCardText}>
                Realizamos simulacros y práctica dirigida para que llegue al
                examen con confianza y sin nervios.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.modalSectionBlock}>
          <h4 className={styles.modalSubsectionTitle}>Modalidades</h4>
          <p className={styles.modalSectionIntro}>
            Elige el formato de estudio que mejor se adapte a su ritmo de
            aprendizaje.
          </p>
          <div className={styles.modalCardsGrid}>
            <article className={styles.modalInfoCard}>
              <h5 className={styles.modalCardTitle}>Clases personalizadas</h5>
              <p className={styles.modalCardText}>
                Atención individual y avance al ritmo del estudiante,
                focalizando las dificultades específicas.
              </p>
            </article>
            <article className={styles.modalInfoCard}>
              <h5 className={styles.modalCardTitle}>Clases grupales</h5>
              <p className={styles.modalCardText}>
                Aprendizaje colaborativo en un entorno dinámico donde comparten
                dudas, refuerzan contenidos y se motivan entre pares.
              </p>
            </article>
          </div>
        </section>

        <div className={styles.modalButtonRow}>
          <button
            className={`${styles.modalLinkButton} ${styles.modalSecondaryButton}`}
            type="button"
            onClick={openWhatsApp}
          >
            Más información
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={imagen} alt={altText} className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.titulo}>{titulo}</h3>

          <div
            ref={containerRef}
            className={`${styles.descripcionContainer} ${isExpanded ? styles.expanded : ""}`}
          >
            {/* Caso: objeto con descripcion e items */}
            {typeof descripcion === "object" && !Array.isArray(descripcion) ? (
              <div
                ref={mixedRef}
                className={`${styles.descripcionMixed} ${!isExpanded ? styles.clamped : ""} ${hasOverflow && !isExpanded ? styles.hasOverflow : ""}`}
                onClick={hasOverflow ? toggleExpanded : undefined}
                style={hasOverflow ? { cursor: "pointer" } : undefined}
                title={
                  hasOverflow && !isExpanded
                    ? "Haz clic para ver más"
                    : isExpanded
                      ? "Haz clic para ver menos"
                      : undefined
                }
              >
                <p className={styles.descripcionText}>
                  {descripcion.descripcion}
                </p>
                {descripcion.items && descripcion.items.length > 0 && (
                  <ul className={styles.itemsList}>
                    {descripcion.items.map((item, index) => (
                      <li
                        key={generateStableKey(item, index)}
                        className={styles.itemsListItem}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : Array.isArray(descripcion) ? (
              <ul
                ref={listRef}
                className={`${styles.descripcionList} ${!isExpanded ? styles.clamped : ""} ${hasOverflow && !isExpanded ? styles.hasOverflow : ""}`}
                onClick={hasOverflow ? toggleExpanded : undefined}
                style={hasOverflow ? { cursor: "pointer" } : undefined}
                title={
                  hasOverflow && !isExpanded
                    ? "Haz clic para ver más"
                    : isExpanded
                      ? "Haz clic para ver menos"
                      : undefined
                }
              >
                {descripcion.map((item, index) => (
                  <li
                    key={generateStableKey(item, index)}
                    className={styles.descripcionItem}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p
                ref={textRef}
                className={`${styles.descripcion} ${!isExpanded ? styles.clamped : ""} ${hasOverflow && !isExpanded ? styles.hasOverflow : ""}`}
                onClick={hasOverflow ? toggleExpanded : undefined}
                style={hasOverflow ? { cursor: "pointer" } : undefined}
                title={
                  hasOverflow && !isExpanded
                    ? "Haz clic para ver más"
                    : isExpanded
                      ? "Haz clic para ver menos"
                      : undefined
                }
              >
                {descripcion}
              </p>
            )}
          </div>

          <button
            ref={buttonRef}
            className={styles.ctaButton}
            onClick={handleClick}
            type="button"
          >
            Más información
          </button>
        </div>
      </div>

      {/* Modal con información detallada */}
      {ofertaDetalle && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={titulo}
          className={styles.modalContentSpecial}
        >
          {id === "capacitacion-tecnica" &&
          ofertaDetalle.detalleEspecial?.cursos ? (
            renderCapacitacionTecnicaDetalle()
          ) : id === "preuniversitario-stem" ? (
            renderPreuniversitarioStemDetalle()
          ) : id === "clases-nivelacion" ? (
            renderClasesNivelacionDetalle()
          ) : ofertaDetalle.detalleEspecial ? (
            renderColegioDistanciaDetalle()
          ) : (
            <div>
              {ofertaDetalle.descripcionCorta && (
                <p>
                  <strong>Descripción:</strong> {ofertaDetalle.descripcionCorta}
                </p>
              )}

              {ofertaDetalle.duracion && (
                <p>
                  <strong>Duración:</strong> {ofertaDetalle.duracion}
                </p>
              )}

              {ofertaDetalle.horarios && (
                <p>
                  <strong>Horarios:</strong> {ofertaDetalle.horarios}
                </p>
              )}

              {ofertaDetalle.dirigidoA && (
                <p>
                  <strong>Dirigido a:</strong> {ofertaDetalle.dirigidoA}
                </p>
              )}

              {ofertaDetalle.objetivos &&
                ofertaDetalle.objetivos.length > 0 && (
                  <div>
                    <strong>Objetivos:</strong>
                    <ul>
                      {ofertaDetalle.objetivos.map((obj, idx) => (
                        <li key={idx}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {ofertaDetalle.beneficios &&
                ofertaDetalle.beneficios.length > 0 && (
                  <div>
                    <strong>Beneficios:</strong>
                    <ul>
                      {ofertaDetalle.beneficios.map((ben, idx) => (
                        <li key={idx}>{ben}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {ofertaDetalle.incluye && ofertaDetalle.incluye.length > 0 && (
                <div>
                  <strong>Incluye:</strong>
                  <ul>
                    {ofertaDetalle.incluye.map((inc, idx) => (
                      <li key={idx}>{inc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default OfertaCard;
