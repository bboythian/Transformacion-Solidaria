/**
 * Componente ErrorAlert
 */

import styles from "./ErrorAlert.module.css";

interface ErrorAlertProps {
  message: string;
  onDismiss?: () => void;
  showDismiss?: boolean;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({
  message,
  onDismiss,
  showDismiss = true,
}) => {
  return (
    <div className={styles.alert}>
      <div className={styles.content}>
        <span className={styles.icon}>⚠️</span>
        <p className={styles.message}>{message}</p>
      </div>
      {showDismiss && onDismiss && (
        <button
          className={styles.closeBtn}
          onClick={onDismiss}
          aria-label="Cerrar alerta"
        >
          ✕
        </button>
      )}
    </div>
  );
};
