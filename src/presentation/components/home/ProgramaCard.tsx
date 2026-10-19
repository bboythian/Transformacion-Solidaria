/**
 * Componente Card para mostrar programas
 */

import styles from "./ProgramaCard.module.css";

interface ProgramaCardProps {
  id: string;
  titulo: string;
  descripcion: string;
  imagen?: string;
  duracion?: string;
  nivel?: string;
  onClick?: (id: string) => void;
}

export const ProgramaCard: React.FC<ProgramaCardProps> = ({
  id,
  titulo,
  descripcion,
  imagen,
  duracion,
  nivel,
  onClick,
}) => {
  return (
    <div
      className={styles.card}
      onClick={() => onClick?.(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.(id);
        }
      }}
    >
      {imagen && (
        <div className={styles.imageContainer}>
          <img src={imagen} alt={titulo} className={styles.image} />
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>

        {(duracion || nivel) && (
          <div className={styles.meta}>
            {nivel && <span className={styles.badge}>{nivel}</span>}
            {duracion && <span className={styles.duration}>{duracion}</span>}
          </div>
        )}

        <p className={styles.description}>{descripcion}</p>

        <button className={styles.cta}>Ver más →</button>
      </div>
    </div>
  );
};
