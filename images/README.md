# 📁 Carpeta de Imágenes - Transformación Solidaria

## 📍 Ubicación

```
ts-app/
├── public/
│   └── images/
│       ├── PantallaHOME.jpeg
│       ├── estudiante-electronica.jpg (NUEVA - Ver descripción abajo)
│       ├── video-thumbnail.jpg (NUEVA - Thumbnail para video de presentación)
│       └── [NUEVAS IMÁGENES PARA OFERTA ACADÉMICA]
│           ├── colegio-distancia.jpeg
│           ├── capacitacion-tecnica.jpeg
│           ├── preuniversitario-stem.jpeg
│           └── clases-nivelacion.jpeg
```

## 🖼️ Nuevas Imágenes Requeridas para Oferta Académica

Las siguientes imágenes son necesarias para el carrusel de Oferta Académica:

### 1. `colegio-distancia.jpeg`

- **Contenido**: Estudiantes en clase virtual o modalidad a distancia
- **Dimensiones recomendadas**: 400x200px (ratio 2:1)
- **Formato**: JPG o PNG
- **Descripción**: Para la tarjeta "Colegio a Distancia"

### 2. `capacitacion-tecnica.jpeg`

- **Contenido**: Estudiantes en curso de capacitación técnica/STEM
- **Dimensiones recomendadas**: 400x200px (ratio 2:1)
- **Formato**: JPG o PNG
- **Descripción**: Para la tarjeta "Cursos de capacitación Técnica"

### 3. `preuniversitario-stem.jpeg`

- **Contenido**: Estudiantes preparándose para la universidad, ambiente académico
- **Dimensiones recomendadas**: 400x200px (ratio 2:1)
- **Formato**: JPG o PNG
- **Descripción**: Para la tarjeta "Preuniversitario STEM"

### 4. `clases-nivelacion.jpeg`

- **Contenido**: Estudiantes en clases de nivelación académica
- **Dimensiones recomendadas**: 400x200px (ratio 2:1)
- **Formato**: JPG o PNG
- **Descripción**: Para la tarjeta "Clases de nivelación en todas las asignaturas"

## 🎥 Imagen para Video de Presentación

### 5. `video-thumbnail.jpg`

- **Contenido**: Imagen representativa para el thumbnail del video de presentación institucional
- **Dimensiones recomendadas**: 1280x720px (ratio 16:9)
- **Formato**: JPG o PNG
- **Descripción**: Thumbnail que aparece antes de reproducir el video de "Quiénes Somos"
- **Sugerencias de contenido**: 
  - Logo de Transformación Solidaria
  - Imagen del equipo directivo o docente
  - Instalaciones representativas
  - Texto overlay: "Conoce nuestra historia"

## 📋 Imágenes Existentes

### `PantallaHOME.jpeg`

│ └── [otras imágenes aquí]
│ └── README.md (este archivo)

````

## 🎯 Imágenes Actuales

### PantallaHOME.jpeg

- **Ubicación**: `/public/images/PantallaHOME.jpeg`
- **Uso**: Imagen de fondo del Hero en la página Home
- **Tamaño recomendado**: 1920x1080px o superior (16:9)
- **Formato**: JPEG
- **Dónde se usa**: [src/presentation/pages/Home.tsx](../../src/presentation/pages/Home.tsx)

## 📝 Cómo Usar las Imágenes

### En el Componente Hero:

```typescript
// Home.tsx
<Hero
  title="Gradúate de BACHILLER EN CORTO TIEMPO"
  subtitle="Y OBTÉN TU LICENCIA PROFESIONAL DE CONDUCIR"
  tertiaryText="Virtual y a Distancia"
  quaternaryText="Semipresencial"
  ctaText="Contacta a un asesor"
  backgroundImage="/images/PantallaHOME.jpeg"  // ← Aquí va referenciada
  onCtaClick={() => {
    window.location.href = "#contacto";
  }}
/>
````

### En Otros Componentes:

```typescript
// Ejemplo genérico
<img src="/images/nombre-imagen.jpg" alt="Descripción" />
```

## ✅ Pasos para Agregar Nueva Imagen

1. **Preparar la imagen**
   - Formato: JPG, PNG, WebP
   - Tamaño: <2MB idealmente
   - Resolución: Acorde a su uso (Hero: 1920x1080)

2. **Guardar en la carpeta**
   - Ruta: `ts-app/public/images/`
   - Nombre descriptivo en minúsculas con guiones
   - Ejemplo: `pantalla-oferta.jpg`

3. **Referenciar en el código**
   ```typescript
   backgroundImage="/images/pantalla-oferta.jpg"
   // o
   <img src="/images/pantalla-oferta.jpg" alt="Descripción" />
   ```

## 🎨 Estructura de Carpetas Sugerida

```
public/images/
├── hero/
│   └── PantallaHOME.jpeg
├── sections/
│   ├── oferta-hero.jpg
│   └── preuniversitario-hero.jpg
├── cards/
│   ├── programa-1.jpg
│   └── programa-2.jpg
└── icons/
    ├── icono-1.svg
    └── icono-2.svg
```

## 🔗 Referencias Actuales en el Código

| Archivo  | Componente         | Imagen                     | Ruta                                 |
| -------- | ------------------ | -------------------------- | ------------------------------------ |
| Home.tsx | Hero               | PantallaHOME.jpeg          | `/images/PantallaHOME.jpeg`          |
| Home.tsx | MatriculasAbiertas | estudiante-electronica.jpg | `/images/estudiante-electronica.jpg` |

### 🆕 estudiante-electronica.jpg

- **Ubicación**: `/public/images/estudiante-electronica.jpg`
- **Uso**: Imagen en la sección "Matrículas Abiertas" del Home
- **Descripción**: Estudiante trabajando con circuitos electrónicos/componentes
- **Tamaño recomendado**: 400x300px mínimo (proporción 4:3)
- **Formato**: JPEG o PNG
- **Dónde se usa**: [src/presentation/components/home/MatriculasAbiertas.tsx](../../src/presentation/components/home/MatriculasAbiertas.tsx)
- **Características esperadas**:
  - Persona joven estudiando/trabajando
  - Enfoque en tecnología/electrónica
  - Ambiente educativo/técnico
  - Buena iluminación y calidad

## 📌 Notas Importantes

- Las imágenes se sirven desde `/public/images/` automáticamente
- No coloques `public/` en la ruta, comienza con `/images/`
- Las imágenes se copian automáticamente al build final
- Para optimización, considera usar WebP para navegadores modernos

## ❓ ¿Cómo cambiar la imagen?

Si deseas cambiar `PantallaHOME.jpeg`:

1. **Opción A: Reemplazar el archivo**
   - Elimina `PantallaHOME.jpeg`
   - Guarda tu nueva imagen con el mismo nombre
   - ¡Listo! (no necesitas cambiar código)

2. **Opción B: Nuevo nombre**
   - Guarda tu imagen con nuevo nombre (ej: `classroom-new.jpeg`)
   - Actualiza Home.tsx:
   ```typescript
   backgroundImage = "/images/classroom-new.jpeg";
   ```

---

**Última actualización**: 16 de abril de 2026
