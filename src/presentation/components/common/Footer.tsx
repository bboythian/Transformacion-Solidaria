/**
 * Componente Footer
 */

import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Tres columnas: Logo, Contacto y Redes Sociales */}
        <div className={styles.content}>
          {/* Columna del Logo */}
          <div className={styles.logoColumn}>
            <div className={styles.titleSection}>
              <p className={styles.somos}>Somos</p>
              <h2 className={styles.mainTitle}>Transformación Solidaria</h2>
            </div>
            <div className={styles.logoContainer}>
              <img
                src="/images/logo.png"
                alt="Transformación Solidaria"
                className={styles.logo}
              />
            </div>
          </div>

          {/* Columna de Información de contacto */}
          <div className={styles.contactColumn}>
            <h3 className={styles.sectionTitle}>Contáctanos</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.iconContainer}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#FEBE10"
                    />
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <p>
                    Av. Solano y Florencia Astudillo (Interior del Sindicato de
                    Choferes profesionales del Azuay)
                  </p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconContainer}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="#FEBE10"
                    />
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <p>0985106717 - 0988898918</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconContainer}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="#FEBE10"
                    />
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <p>transformacionsolidaria@gmail.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconContainer}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L9.99 16v1c0 1.1.9 2 2 2v1.93C7.06 20.44 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.89-1.4h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"
                      fill="#FEBE10"
                    />
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <p>Cuenca - Ecuador</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Redes sociales */}
          <div className={styles.socialColumn}>
            <h3 className={styles.sectionTitle}>Redes sociales</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=61571916506565"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#004270"
                  />
                  <path
                    d="M16.671 15.543l.531-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.513V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.642H7.078v3.47h3.047v8.385a12.118 12.118 0 003.75 0v-8.385h2.796z"
                    fill="#FEBE10"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/transformacionsolidaria_ec/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
                    fill="#FEBE10"
                  />
                  <path
                    d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"
                    fill="#004270"
                  />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@transformacionsolidaria "
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                    fill="#004270"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill="none"
                    stroke="#FEBE10"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                href="mailto:transformacionsolidaria@gmail.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636H1.636C.732 21.002 0 20.27 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728C23.268 3.821 24 4.553 24 5.457z"
                    fill="#004270"
                  />
                  <path
                    d="M1.636 3.821C.732 3.821 0 4.553 0 5.457v1.027L12 13.406l12-6.922V5.457c0-.904-.732-1.636-1.636-1.636H1.636z"
                    fill="#FEBE10"
                  />
                  <path
                    d="M0 19.366V7.466l8.727 5.068L0 19.366zm24 0l-8.727-6.832L24 7.466v11.9z"
                    fill="#FEBE10"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright 2026 | Designed & Developed by Christian Toapanta</p>
        </div>
      </div>
    </footer>
  );
};
