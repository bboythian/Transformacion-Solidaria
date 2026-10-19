import React from "react";
import styles from "./OfertaCompletaSection.module.css";
import { ofertasData } from "./ofertasData";
import { ofertasDetalleInfo } from "./ofertasDetailInfo";

const navegarA = (path: string) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const abrirWhatsApp = (titulo: string) => {
  const phoneNumber = "593985106717";
  const message = encodeURIComponent(
    `Hola, deseo información detallada sobre ${titulo}.`,
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

export const OfertaCompletaSection: React.FC = () => {
  const ofertasAgrupadas = ofertasData.map((oferta) => ({
    ...oferta,
    detalle: ofertasDetalleInfo[oferta.id],
  }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Transformación Solidaria</p>
          <h1 className={styles.title}>Oferta académica</h1>
          <p className={styles.lead}>
            A continuación, encontrarás toda la información consolidada de
            nuestros programas educativos. Explora cada sección para conocer los
            detalles, beneficios y requisitos de cada oferta académica. Si
            tienes alguna pregunta o deseas asesoría personalizada, no dudes en
            contactarnos.
          </p>

          <div className={styles.chips}>
            {ofertasAgrupadas.map((oferta) => (
              <a key={oferta.id} href={`#${oferta.id}`} className={styles.chip}>
                {oferta.titulo}
              </a>
            ))}
          </div>
        </header>

        <div className={styles.grid}>
          {ofertasAgrupadas.map((oferta) => (
            <article key={oferta.id} id={oferta.id} className={styles.card}>
              <div className={styles.mediaColumn}>
                <img
                  src={oferta.imagen}
                  alt={oferta.altText}
                  className={styles.mainImage}
                />
              </div>

              <div className={styles.contentColumn}>
                <h2 className={styles.programTitle}>{oferta.titulo}</h2>

                {oferta.detalle?.descripcionCorta && (
                  <p className={styles.shortDescription}>
                    {oferta.detalle.descripcionCorta}
                  </p>
                )}

                <section className={styles.inlineInfo}>
                  {oferta.detalle?.duracion ? (
                    <p>
                      <strong>Duración:</strong> {oferta.detalle.duracion}
                    </p>
                  ) : null}

                  {oferta.detalle?.dirigidoA ? (
                    <p>
                      <strong>Dirigido a:</strong> {oferta.detalle.dirigidoA}
                    </p>
                  ) : null}
                </section>

                {oferta.detalle?.detalleEspecial?.modalidades?.length ? (
                  <section className={styles.block}>
                    <h3>Modalidades</h3>
                    <div className={styles.tags}>
                      {oferta.detalle.detalleEspecial.modalidades.map(
                        (modalidad) => (
                          <span key={modalidad.nombre} className={styles.tag}>
                            {modalidad.nombre}: {modalidad.horario}
                          </span>
                        ),
                      )}
                    </div>
                  </section>
                ) : null}

                {oferta.detalle?.detalleEspecial?.requisitos?.length ? (
                  <section className={styles.block}>
                    <h3>Requisitos</h3>
                    <div className={styles.columns}>
                      {oferta.detalle.detalleEspecial.requisitos.map((req) => (
                        <div key={req.nivel} className={styles.miniCard}>
                          <h4>{req.nivel}</h4>
                          <ul>
                            {req.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {oferta.detalle?.detalleEspecial?.costos?.length ? (
                  <section className={styles.block}>
                    <h3>Costos de referencia</h3>
                    <div className={styles.tags}>
                      {oferta.detalle.detalleEspecial.costos.map((costo) => (
                        <span key={costo.concepto} className={styles.tag}>
                          {costo.concepto}: {costo.valor}
                        </span>
                      ))}
                    </div>
                  </section>
                ) : null}

                {oferta.detalle?.detalleEspecial?.cursos?.length ? (
                  <section className={styles.block}>
                    <h3>Cursos disponibles</h3>
                    <div className={styles.columns}>
                      {oferta.detalle.detalleEspecial.cursos.map((curso) => (
                        <div key={curso.id} className={styles.miniCard}>
                          <h4>{curso.titulo}</h4>
                          <p>{curso.resumen}</p>
                          <ul>
                            {curso.puntosClave.map((punto) => (
                              <li key={punto}>{punto}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                <div className={styles.actions}>
                  <button
                    className={`${styles.button} ${styles.primary}`}
                    type="button"
                    onClick={() => navegarA("/contacto")}
                  >
                    Solicitar asesoría
                  </button>
                  <button
                    className={`${styles.button} ${styles.secondary}`}
                    type="button"
                    onClick={() => abrirWhatsApp(oferta.titulo)}
                  >
                    Más información por WhatsApp
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
