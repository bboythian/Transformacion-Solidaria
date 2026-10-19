/**
 * Componente Header/Navegación
 */

import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import logoImage from "/images/logo.png";
import { openExternalLink } from "../../../infrastructure/utils";
import { CONTACT } from "../../../infrastructure/constants";

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
  id?: string;
}

interface HeaderProps {
  navLinks: NavLink[];
  instituteTitle?: string;
  onNavigate?: (path: string, pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  navLinks,
  instituteTitle = "Transformación Solidaria",
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studentsMenuOpen, setStudentsMenuOpen] = useState(false);
  const studentsMenuRef = useRef<HTMLDivElement>(null);

  const handleStudentsOptionClick = (
    option: "preuniversitario" | "colegio",
  ) => {
    if (option === "preuniversitario") {
      openExternalLink(CONTACT.preuniversitarioUrl);
    } else {
      openExternalLink(CONTACT.studentsPortal);
    }

    setStudentsMenuOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        studentsMenuRef.current &&
        !studentsMenuRef.current.contains(event.target as Node)
      ) {
        setStudentsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setStudentsMenuOpen(false);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setStudentsMenuOpen(false);

    if (onNavigate && link.id) {
      onNavigate(link.href, link.id);
    } else {
      // Fallback para navegación tradicional
      window.location.href = link.href;
    }
  };

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate("/", "home");
    } else {
      // Fallback para navegación tradicional
      window.location.href = "/";
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo/Título */}
        <button
          className={styles.logoSection}
          onClick={handleLogoClick}
          aria-label="Ir a la página principal"
        >
          <img src={logoImage} alt="Logo" className={styles.logoIcon} />
          <h1 className={styles.title}>{instituteTitle}</h1>
        </button>

        {/* Toggle Mobile Menu */}
        <button
          className={`${styles.menuToggle} ${mobileMenuOpen ? styles.active : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>

        {/* Navegación */}
        <nav
          className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ""}`}
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${link.active ? styles.active : ""}`}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.studentsMenuContainer} ref={studentsMenuRef}>
            <button
              className={styles.ctaButton}
              onClick={() => setStudentsMenuOpen((prev) => !prev)}
              aria-expanded={studentsMenuOpen}
              aria-haspopup="menu"
            >
              Estudiantes
              <span
                className={`${styles.dropdownIcon} ${studentsMenuOpen ? styles.dropdownIconOpen : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`${styles.studentsDropdown} ${studentsMenuOpen ? styles.studentsDropdownOpen : ""}`}
              role="menu"
              aria-label="Opciones para estudiantes"
            >
              <button
                className={styles.dropdownItem}
                onClick={() => handleStudentsOptionClick("preuniversitario")}
                role="menuitem"
              >
                Preuniversitario
              </button>
              <button
                className={styles.dropdownItem}
                onClick={() => handleStudentsOptionClick("colegio")}
                role="menuitem"
              >
                Colegio
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
