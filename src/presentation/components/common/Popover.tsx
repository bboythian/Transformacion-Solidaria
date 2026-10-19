/**
 * Componente Popover reutilizable
 */

import React, { useEffect, useRef } from "react";
import styles from "./Popover.module.css";

export interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  isOpen,
  onClose,
  triggerElement,
  title,
  children,
  className,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerElement &&
        !triggerElement.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Cerrar con tecla Escape
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, triggerElement, onClose]);

  // Posicionar el popover
  useEffect(() => {
    if (!isOpen || !triggerElement || !popoverRef.current) return;

    const repositionPopover = () => {
      if (!popoverRef.current || !contentRef.current) return;

      const triggerRect = triggerElement.getBoundingClientRect();
      const popoverRect = contentRef.current.getBoundingClientRect();

      let top = triggerRect.bottom + 8;
      let left =
        triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;

      // Ajustar si se sale de la pantalla
      const padding = 16;

      if (left < padding) {
        left = padding;
      } else if (left + popoverRect.width > window.innerWidth - padding) {
        left = window.innerWidth - popoverRect.width - padding;
      }

      if (top + popoverRect.height > window.innerHeight - padding) {
        top = triggerRect.top - popoverRect.height - 8;
      }

      popoverRef.current.style.top = `${top}px`;
      popoverRef.current.style.left = `${left}px`;
    };

    repositionPopover();
    window.addEventListener("resize", repositionPopover);
    window.addEventListener("scroll", repositionPopover);

    return () => {
      window.removeEventListener("resize", repositionPopover);
      window.removeEventListener("scroll", repositionPopover);
    };
  }, [isOpen, triggerElement]);

  if (!isOpen) return null;

  return (
    <div className={`${styles.popover} ${className || ""}`} ref={popoverRef}>
      <div className={styles.arrow} />
      <div className={styles.content} ref={contentRef}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Popover;
