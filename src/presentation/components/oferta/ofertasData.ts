import type { OfertaCardProps } from "./OfertaCard";

export const ofertasData: OfertaCardProps[] = [
  {
    id: "colegio-distancia",
    titulo: "Colegio a distancia",
    descripcion: [
      "Completa octavo, noveno y décimo en solo 15 meses",
      "Obtén tu título de bachiller en 15 meses (primero a tercero)",
    ],
    imagen: "/images/colegio-distancia.jpeg",
    altText: "Estudiantes en clase de colegio a distancia",
  },
  {
    id: "capacitacion-tecnica",
    titulo: "Cursos de capacitación técnica",
    descripcion: [
      "Electricidad domiciliaria",
      "Electricidad avanzada",
      "Reparación de dispositivos móviles (celulares y laptops)",
    ],
    imagen: "/images/capacitacion-tecnica.jpeg",
    altText: "Estudiantes en curso de capacitación técnica",
  },
  {
    id: "preuniversitario-stem",
    titulo: "Preuniversitario STEM",
    descripcion: {
      descripcion:
        "Preparación integral para rendir con seguridad el examen de admisión a universidades e institutos públicos.",
      items: [
        "Áreas clave: Matemáticas, Lenguaje, Sociales, Naturales y Razonamiento abstracto",
        "Acceso a plataforma MOODLE con simuladores 24/7",
        "Acompañamiento permanente hasta la postulación",
      ],
    },
    imagen: "/images/preuniversitario-stem.jpeg",
    altText: "Estudiantes preparándose para la universidad",
  },
  {
    id: "clases-nivelacion",
    titulo: "Clases de nivelación en todas las asignaturas",
    descripcion: [
      "Nivelación académica",
      "Clases de refuerzo y control de tareas en todas las asignaturas, desde inicial a tercero de bachillerato.",
      "Clases personalizadas y grupales.",
    ],
    imagen: "/images/clases-nivelacion.jpeg",
    altText: "Estudiantes en clases de nivelación académica",
  },
];
