/**
 * Información detallada de las ofertas académicas para el popover
 */

export interface OfertaDetalleInfo {
  id: string;
  descripcionCorta: string;
  objetivos: string[];
  beneficios: string[];
  duracion?: string;
  horarios?: string;
  dirigidoA?: string;
  incluye?: string[];
  detalleEspecial?: {
    institucion: string;
    experiencia: string;
    niveles: string[];
    edades: string;
    modalidades: Array<{
      nombre: string;
      horario: string;
      descripcion: string;
    }>;
    requisitos: Array<{
      nivel: string;
      items: string[];
    }>;
    costos: Array<{
      concepto: string;
      valor: string;
    }>;
    notaFinal?: string;
    cursos?: Array<{
      id: string;
      titulo: string;
      resumen: string;
      destaque: string;
      puntosClave: string[];
      secciones: Array<{
        titulo: string;
        descripcion: string;
        items: string[];
      }>;
      cierre: string;
    }>;
  };
}

export const ofertasDetalleInfo: Record<string, OfertaDetalleInfo> = {
  "colegio-distancia": {
    id: "colegio-distancia",
    descripcionCorta:
      "Unidad Educativa Transformación Solidaria (UETS) con formación flexible para octavo a tercero de bachillerato.",
    objetivos: [],
    beneficios: [],
    duracion: "5 meses por curso",
    horarios: "semipresencial, virtual en línea y distancia",
    dirigidoA: "personas de 18 años o más",
    incluye: [
      "Octavo, Noveno y Décimo",
      "Primero, Segundo y Tercero de Bachillerato",
      "Certificación y requisitos de ingreso por nivel",
    ],
    detalleEspecial: {
      institucion: "Unidad Educativa Transformación Solidaria UETS",
      experiencia: "15 años de experiencia en educación",
      niveles: [
        "Octavo, Noveno y Décimo",
        "Primero, Segundo y Tercero de Bachillerato",
      ],
      edades: "Edad mínima: 18 años o más",
      modalidades: [
        {
          nombre: "Semipresencial",
          horario: "fines de semana",
          descripcion: "Sábado de 13:00 a 17:00 y domingo de 08:00 a 12:20.",
        },
        {
          nombre: "Virtual en línea",
          horario: "nocturno",
          descripcion: "Martes, miércoles y jueves de 18:40 a 22:00.",
        },
        {
          nombre: "Distancia",
          horario: "autoformación",
          descripcion:
            "Solo entregando trabajos y desarrollando el proceso de manera autónoma.",
        },
      ],
      requisitos: [
        {
          nivel: "Octavo",
          items: [
            "Certificado de notas de 5to, 6to y 7mo",
            "Copia de cédula",
            "2 fotos carnet",
            "Planilla de luz",
          ],
        },
        {
          nivel: "Noveno",
          items: [
            "Certificado de notas de 5to, 6to y 7mo",
            "Promoción del octavo",
            "Copia de cédula",
            "2 fotos carnet",
            "Planilla de luz",
          ],
        },
        {
          nivel: "Décimo",
          items: [
            "Certificado de notas de 5to, 6to y 7mo",
            "Promoción del octavo y noveno",
            "Copia de cédula",
            "2 fotos carnet",
            "Planilla de luz",
          ],
        },
        {
          nivel: "Primero de bachillerato",
          items: [
            "Certificado de notas de 5to, 6to y 7mo",
            "Promoción del octavo, noveno y décimo",
            "Copia de cédula",
            "2 fotos carnet",
            "Planilla de luz",
          ],
        },
        {
          nivel: "Segundo de bachillerato",
          items: [
            "Certificado de notas de 5to, 6to y 7mo",
            "Promoción del octavo, noveno, décimo y primero de bachillerato",
            "Certificado de 80 horas PPE",
            "Copia de cédula",
            "2 fotos carnet",
            "Planilla de luz",
          ],
        },
        {
          nivel: "Tercero de bachillerato",
          items: [
            "Certificado de notas de 5to, 6to y 7mo",
            "Promoción del octavo, noveno, décimo, primero y segundo de bachillerato",
            "Certificado de 160 horas PPE",
            "Copia de cédula",
            "2 fotos carnet",
            "Planilla de luz",
          ],
        },
      ],
      costos: [
        { concepto: "Matrícula", valor: "18.75" },
        { concepto: "Pensión", valor: "25" },
      ],
      notaFinal:
        "La propuesta está pensada para acompañar el avance por niveles con requisitos claros y una organización flexible.",
    },
  },
  "capacitacion-tecnica": {
    id: "capacitacion-tecnica",
    descripcionCorta:
      "Dos rutas técnicas para empezar o fortalecer tu perfil profesional con formación práctica y guiada.",
    objetivos: [],
    beneficios: [],
    duracion: "3 a 6 meses según el curso",
    horarios: "Vespertino y sabatino",
    dirigidoA: "personas interesadas en obtener habilidades técnicas",
    incluye: [
      "Electricidad domiciliaria",
      "Reparación de dispositivos móviles y computadoras portátiles",
    ],
    detalleEspecial: {
      institucion: "Cursos de capacitación técnica",
      experiencia: "Formación orientada a habilidades laborales reales",
      niveles: [
        "Electricidad domiciliaria",
        "Reparación de dispositivos móviles y computadoras portátiles",
      ],
      edades:
        "Formación abierta para personas interesadas en aprender un oficio técnico",
      modalidades: [
        {
          nombre: "Aprendizaje práctico",
          horario: "enfoque guiado",
          descripcion:
            "La formación combina explicación, práctica y aplicación directa en cada módulo.",
        },
        {
          nombre: "Ruta técnica",
          horario: "progresiva",
          descripcion:
            "Cada curso avanza desde lo básico hasta lo aplicable para resolver casos reales.",
        },
      ],
      requisitos: [
        {
          nivel: " ",
          items: [
            "Interés por aprender habilidades técnicas con enfoque práctico",
          ],
        },
      ],
      costos: [
        {
          concepto: "Referencia general",
          valor: "consultar según curso y nivel",
        },
      ],
      notaFinal:
        "Selecciona un curso para ver un resumen de sus módulos y conocer rápidamente qué aprenderás en cada ruta.",
      cursos: [
        {
          id: "electricidad-domiciliaria",
          titulo: "Electricidad domiciliaria",
          resumen:
            "Curso integral para aprender instalaciones seguras, automatización básica y soluciones eléctricas del hogar.",
          destaque:
            "Ideal para quienes buscan iniciar una ruta técnica con alta demanda laboral.",
          puntosClave: [
            "Instalaciones residenciales seguras",
            "Protección, iluminación y fuerza",
            "Domótica básica, CCTV y motores eléctricos",
          ],
          secciones: [
            {
              titulo: "Módulo 1: Electricidad básica y residencial",
              descripcion:
                "Base técnica para comprender y ejecutar instalaciones seguras desde cero.",
              items: [
                "Cajas de distribución, térmicos y diferenciales",
                "Circuitos de iluminación, fuerza e interruptores",
                "Conmutadores especiales para control de luces",
                "Sensores de movimiento y fotocélulas",
              ],
            },
            {
              titulo: "Módulo 2: Electricidad avanzada y tecnologías smart",
              descripcion:
                "Nivel superior para instalar soluciones modernas y de automatización.",
              items: [
                "Porteros y videoporteros",
                "Domótica y control móvil",
                "CCTV e IP",
                "Motores eléctricos y bombas de agua",
              ],
            },
          ],
          cierre:
            "Un programa pensado para dar una base técnica sólida y abrir oportunidades de trabajo independiente o en empresas de servicios.",
        },
        {
          id: "reparacion-dispositivos",
          titulo: "Reparación de dispositivos móviles y computadoras ",
          resumen:
            "Formación técnica para diagnosticar, reparar y optimizar teléfonos y laptops con enfoque práctico.",
          destaque:
            "Una ruta ideal si quieres desarrollar un perfil de soporte técnico con alta demanda.",
          puntosClave: [
            "Diagnóstico y reparación de hardware",
            "Sustitución de pantallas, baterías y pines de carga",
            "Soporte técnico en software y secuencia de carga",
          ],
          secciones: [
            {
              titulo: "Especialista en dispositivos móviles",
              descripcion:
                "Temario enfocado en fallas frecuentes y componentes críticos de la telefonía actual.",
              items: [
                "Diagnóstico y sustitución de pines de carga",
                "Reemplazo avanzado de pantallas y baterías",
                "Mantenimiento de micrófonos y antenas",
                "Verificación de IMEI y protocolo de carga universal",
              ],
            },
            {
              titulo: "Soporte técnico en computadoras portátiles",
              descripcion:
                "Bloque orientado al mantenimiento, reparación y optimización de laptops.",
              items: [
                "Reparación de pines de carga y sistemas de alimentación",
                "Sustitución de pantallas y baterías",
                "Instalación de Windows y configuración de software",
                "Estudio de la secuencia de carga y diagnóstico técnico",
              ],
            },
          ],
          cierre:
            "Una propuesta pensada para llevarte desde el nivel inicial hasta un dominio funcional y aplicado del soporte técnico.",
        },
      ],
    },
  },
  "preuniversitario-stem": {
    id: "preuniversitario-stem",
    descripcionCorta:
      "PRE - UNIVERSITARIO STEM con preparación estratégica para superar el examen de admisión a universidades e institutos públicos.",
    objetivos: [],
    beneficios: [],
    duracion: "consultar según convocatoria vigente",
    horarios: "Modalidad presencial con apoyo virtual",
    dirigidoA: "aspirantes a universidades o institutos públicos",
    incluye: [
      "Matemáticas y Lenguaje",
      "Ciencias Sociales (Historia y Ciudadanía)",
      "Ciencias Naturales (Física, Química y Biología)",
      "Razonamiento Abstracto",
      "Plataforma MOODLE: https://tsolidaria.edu.ec/tsolidaria/moodle/login/index.php",
    ],
  },
  "clases-nivelacion": {
    id: "clases-nivelacion",
    descripcionCorta:
      "Refuerzo académico con acompañamiento en tareas y preparación para exámenes, desde inicial hasta tercero de bachillerato.",
    objetivos: [],
    beneficios: [],
    duracion: "plan flexible según diagnóstico y metas académicas",
    horarios: "Horarios coordinados según modalidad y disponibilidad",
    dirigidoA:
      "estudiantes desde inicial hasta tercero de bachillerato que requieran refuerzo",
    incluye: [
      "Clases de refuerzo en temas no comprendidos",
      "Control y acompañamiento de tareas sin dependencia de respuestas",
      "Simulacros y práctica para llegar con confianza a los exámenes",
      "Clases personalizadas o grupales, según preferencia",
      "Diagnóstico inicial, plan de acción y seguimiento constante",
    ],
  },
};

export const getOfertaDetalle = (id: string): OfertaDetalleInfo | undefined => {
  return ofertasDetalleInfo[id];
};
