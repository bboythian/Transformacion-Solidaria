/**
 * Página: Home
 */

import { MainLayout } from "../layouts/MainLayout";
import { Hero, MatriculasAbiertas, FaqSection } from "../components/home/index";
import { OfertaSection } from "../components/oferta/index";
import styles from "./Home.module.css";

interface HomePageProps {
  onNavigate?: (path: string, pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <MainLayout currentPage="home" onNavigate={onNavigate}>
      <Hero
        title="Gradúate de BACHILLER EN CORTO TIEMPO"
        subtitle="Y OBTÉN TU LICENCIA PROFESIONAL DE CONDUCIR"
        tertiaryText="Virtual y a distancia"
        quaternaryText="Semipresencial"
        backgroundImage="/images/fondoHome.png"
      />

      <MatriculasAbiertas />

      <OfertaSection />

      {/* Sección Quiénes Somos */}
      <section className={styles.quienesSomosSection}>
        <div className={styles.container}>
          <p className={styles.sectionDescription}>ACERCA DE NOSOTROS</p>
          <h2 className={styles.sectionTitle}>Quiénes somos</h2>

          <div className={styles.quienesSomosContent}>
            {/* Video de Presentación */}
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <video
                  className={styles.presentationVideo}
                  poster="/images/miniatura-presentacion.png"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/TS-ubicacion.mp4" type="video/mp4" />
                  <source src="/videos/TS-ubicacion.webm" type="video/webm" />
                  Tu navegador no soporta el elemento de video.
                  <a href="/videos/TS-ubicacion.mp4">Descargar video</a>
                </video>
              </div>
              <p className={styles.videoCaption}>
                Conoce nuestra historia y compromiso con la educación de calidad
              </p>
            </div>

            {/* Misión y Visión */}
            <div className={styles.misionVisionContainer}>
              <div className={styles.misionCard}>
                {/* <div className={styles.cardIcon}>🎯</div> */}
                <h3>Nuestra misión</h3>
                <p>
                  Brindar una educación integral y accesible a jóvenes y adultos
                  con escolaridad inconclusa, desde Octavo de Básica hasta
                  Tercero de Bachillerato, a través de modalidades
                  semipresenciales y virtuales a distancia. Nos fundamentamos en
                  la inclusión, fomentando la disciplina y la innovación
                  constante en nuestras metodologías. Capacitamos a nuestros
                  estudiantes no solo para obtener su Título de Bachiller, sino
                  con competencias técnicas y preparación preuniversitaria,
                  asegurando así su éxito en la vida laboral y académica.
                </p>
              </div>

              <div className={styles.visionCard}>
                {/* <div className={styles.cardIcon}>🚀</div> */}
                <h3>Nuestra visión</h3>
                <p>
                  Consolidarnos para el año 2031 como la institución referente
                  en la modalidad PCEI, reconocida por nuestra innovación en
                  entornos de aprendizaje flexibles y la excelencia
                  disciplinaria de nuestra comunidad. Aspiramos a ser un espacio
                  de inclusión donde cada estudiante, sin importar las barreras
                  del pasado, encuentre las herramientas necesarias para
                  alcanzar su máximo potencial profesional y humano, siendo
                  agentes activos de cambio en nuestra sociedad.
                </p>
              </div>
              <div className={styles.visionCard}>
                {/* <div className={styles.cardIcon}>🚀</div> */}
                <h3>Filosofía</h3>
                <p>
                  Formar personas críticas, solidarias, humanistas, innovadoras,
                  respetuosas con las diferencias individuales y colectivas de
                  sus semejantes; total respeto de actos culturales y
                  contextuales. Con estas características pretendemos contribuir
                  a la transformación de una sociedad justa, responsable,
                  empoderada con la ayuda social, respetuosa y tolerante de las
                  falencias en el caminar de la vida, finalmente comprometida
                  con el cuidado y respeto por el medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección FAQ */}
      <FaqSection />
    </MainLayout>
  );
};
