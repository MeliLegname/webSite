# mlegname-cv

CV / portfolio personal de **Melisa Legname — Engineering Lead (Frontend)**. Single page en React que además permite descargar el CV en PDF generado en el cliente.

## Stack

- **React 19** + **TypeScript 5.9**
- **Vite 7** como bundler / dev server
- **Tailwind CSS 4** vía `@tailwindcss/vite`
- **@react-pdf/renderer** para generar el PDF del CV en el navegador
- **Biome 2.1** para format + lint (corre automáticamente en `start` y `build`)

## Pre-requisitos

- Node.js 20+ (recomendado, por Vite 7 y `@types/node` 24)
- npm 10+

## Levantar el proyecto

Desde la raíz del repo (`/home/mlegname/web`):

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Levantar el dev server
npm start
```

El sitio queda en <http://localhost:5173> con HMR. El comando `start` corre en orden:

1. `biome format --write app` — formatea
2. `biome lint --write app` — lintea (autofix donde puede)
3. `vite` — arranca el dev server

## Scripts disponibles

| Script             | Qué hace                                                        |
|--------------------|-----------------------------------------------------------------|
| `npm start`        | Format + lint + dev server (Vite en `:5173`).                   |
| `npm run build`    | Format + lint + build de producción a `dist/`.                  |
| `npm run preview`  | Sirve el build de `dist/` localmente para probarlo.             |
| `npm run format`   | Solo `biome format --write app`.                                |
| `npm run lint`     | Solo `biome lint --write app`.                                  |

## Estructura

```
.
├── index.html              # Entry HTML, monta /app/index.tsx
├── vite.config.ts          # Plugins: react + tailwind. Alias @app -> ./app
├── tsconfig.json           # rootDir = app, paths @app/*
├── biome.json              # Reglas de format + lint
├── package.json
└── app/
    ├── index.tsx           # Bootstrap React (createRoot)
    ├── App.tsx             # Layout: Nav + secciones + footer
    ├── index.css           # Tailwind + CSS vars (--color-border, --color-muted, ...)
    ├── types.ts            # Tipos del CV (Profile, Company, Role, etc.)
    ├── data/
    │   └── cv.ts           # Contenido del CV (fuente única de verdad)
    ├── components/
    │   ├── Nav.tsx
    │   └── DownloadCvButton.tsx   # Dispara la descarga del PDF
    ├── sections/
    │   ├── Hero.tsx
    │   ├── Experience.tsx
    │   ├── Skills.tsx
    │   ├── Education.tsx
    │   ├── About.tsx
    │   └── SectionHeader.tsx
    └── pdf/
        └── CvDocument.tsx   # Documento de @react-pdf/renderer para el CV
```

## Editar el contenido del CV

Todo el contenido (perfil, experiencia, skills, educación, idiomas, etc.) vive en [`app/data/cv.ts`](app/data/cv.ts), tipado por [`app/types.ts`](app/types.ts). Modificá ese archivo y tanto la vista web como el PDF descargable se actualizan automáticamente.

## Path alias

Importá desde dentro de `app/` usando el alias `@app`:

```ts
import { CV } from "@app/data/cv"
import { Hero } from "@app/sections/Hero"
```

Configurado tanto en `vite.config.ts` (resolve.alias) como en `tsconfig.json` (paths).

## Variables de entorno

Vite expone solo las variables que arrancan con prefijo **`ENV_`** (configurado en `vite.config.ts` con `envPrefix: "ENV_"`). Definilas en un `.env` en la raíz si las necesitás:

```env
ENV_API_URL=https://api.example.com
```

Y leelas en código con `import.meta.env.ENV_API_URL`.

## Build de producción

```bash
npm run build       # genera dist/
npm run preview     # sirve dist/ localmente para verificar
```

El output queda en `dist/` y son archivos estáticos — se puede deployar en cualquier hosting estático (Vercel, Netlify, GitHub Pages, S3 + CloudFront, etc.).

## Convenciones de código (Biome)

- Indent: 2 espacios
- Comillas: dobles
- Sin punto y coma (`semicolons: "asNeeded"`)
- Sin trailing commas
- Prohibidos: `any` explícito, non-null assertions (`!`), `let` cuando se puede `const`
- Obligatorio: `import type` para imports de tipos
