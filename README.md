# Transformación Solidaria — Educational Institute Website

**React · TypeScript · Vite · CSS Modules**

A multi-page website developed for **Transformación Solidaria**, an educational institute in Ecuador. The frontend presents academic programs, pre-university preparation, institutional information, and contact channels through a responsive, component-based interface.

> **Portfolio case study:** This repository documents the frontend implementation. It remains private while publication permissions, media rights, and deployment details are reviewed.

![Transformación Solidaria banner](public/images/banner.png)

## Project Overview

The project organizes an educational institute's digital presence into dedicated sections for prospective students and visitors. Its codebase separates page presentation, reusable UI components, domain models, data services, and infrastructure utilities.

### Main Pages

| Route | Purpose |
| --- | --- |
| `/` | Home page with a hero section, enrollment information, academic offerings, institutional overview, and FAQ |
| `/oferta` | Academic offerings and program details |
| `/preuniversitario` | Pre-university preparation information |
| `/quienes-somos` | Institutional information |
| `/contacto` | Contact page with an embedded Google Form |

### Implemented Frontend Features

- Responsive, multi-page UI built with reusable React components and CSS Modules.
- Custom client-side navigation based on the browser History API.
- Academic program cards, detailed offerings, enrollment content, and FAQ sections.
- Scroll-triggered animations through a reusable intersection-observer hook.
- Multimedia sections using images and locally hosted video assets.
- Floating WhatsApp contact shortcut.
- Google Forms integration on the contact page.
- A separate API configuration and service layer for institute information, programs, sections, and contact requests.

> **Integration note:** The visible contact page embeds Google Forms. The repository also contains an API-backed contact hook and data-fetching services; the existence of these modules does not establish that a backend is included in this repository or deployed.

## Technology Stack

| Area | Technologies / Approach |
| --- | --- |
| UI | React 18, TypeScript |
| Tooling | Vite |
| Styling | CSS Modules, CSS |
| Navigation | Custom routing with the History API |
| State & effects | React hooks and reusable custom hooks |
| External services | Google Forms, WhatsApp links, configurable REST API endpoints |
| Assets | Images and HTML5 video |

## Architecture

The frontend is organized around separate responsibilities:

```text
src/
├── config/                # API endpoint configuration
├── data/services/         # API-facing service classes
├── domain/                # Entities and interfaces
├── infrastructure/
│   ├── constants/         # Shared constants and theme
│   ├── hooks/             # Reusable React hooks
│   ├── router/            # Page route definitions
│   └── utils/             # Navigation and other utilities
├── presentation/
│   ├── components/        # Shared and feature-specific UI
│   ├── layouts/           # Main page layout
│   └── pages/             # Page-level components
├── App.tsx                # App state and route selection
└── main.tsx               # Application entry point
```

**Navigation:** `App.tsx` selects the active page using route definitions in `src/infrastructure/router/routes.ts`. Navigation updates the browser URL with `history.pushState`; `popstate` is handled for browser history navigation.

**Data access:** `src/config/api.ts` defines configurable endpoints, and `src/data/services/` contains services for retrieving institute data and submitting contact messages. The corresponding backend implementation is **not included** here.

**Presentation:** Feature-specific UI lives under `src/presentation/components/`, with shared layout elements such as the header, footer, and contact shortcut.

Additional internal documentation is available in `DOCS.html` and the architecture-related source files.

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/bboythian/Transformacion-Solidaria.git
cd Transformacion-Solidaria
npm install
```

> The repository is private. Cloning requires authorized GitHub access.

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Optional API Configuration

The frontend defines `VITE_API_URL`, defaulting to `http://localhost:5000` when not supplied. To point API-based services at a compatible backend, create a local `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

The backend is not part of this repository. Some API-dependent functionality requires a separately available service.

## Media and Deployment Notes

- Brand images and videos are stored in `public/images/` and `public/videos/`.
- The repository also contains duplicate media folders at the project root; these may be candidates for cleanup after verifying references.
- No verified public deployment URL is provided here.
- Before public release, review ownership and publication permissions for institutional branding, images, videos, contact information, and any third-party assets.

## My Contribution

**Independent frontend development:** I built the website's React/TypeScript frontend, including page structure, reusable UI components, responsive styling, navigation, and service integration points.

This description refers to the frontend work represented in this repository; it does not claim ownership of external institutional content or a separately hosted backend.

## Portfolio Readiness

- [x] Multi-page frontend implementation present in the repository
- [x] Project-specific technical README
- [x] Documented stack, navigation, and source structure
- [ ] Verify build and runtime behavior in a clean environment
- [ ] Add reviewed screenshots of the actual rendered website
- [ ] Confirm authorization to publish source and institutional media
- [ ] Add a verified live demo URL, if available

---

**Developer:** [Christian Toapanta](https://github.com/bboythian) · [LinkedIn](https://www.linkedin.com/in/christian-toapanta-447b58275/)
