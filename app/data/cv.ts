import type { CvType } from "@app/types"

export const CV: CvType = {
  profile: {
    name: "Melisa Legname",
    title: "Engineering Lead (Frontend)",
    tagline:
      "Lidero equipos frontend y construyo productos escalables para organismos públicos y empresas privadas. Especializada en React, Angular y experiencia de usuario.",
    contact: {
      location: "Ituzaingó, GBA, Argentina",
      email: "melisalegname1995@gmail.com",
      phone: "+54 9 11 3601-0021",
      linkedin: {
        label: "/melisa-legname",
        url: "https://www.linkedin.com/in/melisa-legname"
      },
      github: {
        label: "/MeliLegname",
        url: "https://github.com/MeliLegname"
      }
    },
    summary: [
      "Engineering Lead (Frontend) con +9 años de experiencia, liderando equipos y construyendo productos escalables para organismos públicos y empresas privadas.",
      "Especializada en React, Angular y arquitecturas frontend modernas, con foco en performance, experiencia de usuario y decisiones alineadas a negocio.",
      "Background en diseño gráfico que aporta criterio UX/UI; adopto IA aplicada al desarrollo (Claude Code, MCP) para escalar la productividad del equipo."
    ]
  },
  stats: [
    { number: "9+", label: "Años de experiencia" },
    { number: "4+", label: "Liderando equipos" },
    { number: "7", label: "Equipo actual" },
    { number: "5+", label: "Productos activos" }
  ],
  clientsLine:
    "Clientes en producción: ANSES · Provincia de Santa Fe · y otros organismos públicos.",
  valueProposition:
    "Especializada en plataformas públicas escalables, con foco en performance y experiencia de usuario.",
  techBadges: ["React", "Angular", "Arquitecturas escalables", "Design Systems", "Performance"],
  companies: [
    {
      name: "Leafnoise",
      meta: "7 años · CABA (remoto)",
      description:
        "Empresa de software para grandes organismos públicos y privados (ANSES, Provincia de Santa Fe, entre otros). Mantengo y evoluciono una suite de productos: Workbench (que integra Flow Builder, Form Builder y Form Render), iManager (backoffice), Moorea Client (atención virtual al ciudadano), Indigo, frontends de SSO para distintos clientes y plataformas de pagos específicas.",
      roles: [
        {
          title: "Engineering Lead (Frontend)",
          period: "mayo 2022 – Presente · 4 años",
          achievements: [
            "Migré productos legacy desde Angular 8 y AngularJS hacia React, reduciendo deuda técnica y tiempo de entrega.",
            "Lideré la evolución técnica de productos críticos en producción para ANSES y Provincia de Santa Fe.",
            "Dirijo equipo frontend de 7 personas con estructura autónoma y referentes técnicos por área.",
            "Co-creé @leafnoise/components, librería interna que estandariza UI en toda la suite y elimina trabajo repetitivo.",
            "Modernicé la toolchain frontend (TailwindCSS, Vitest, Vite, Biome) y los pipelines de CI/CD."
          ],
          results: [
            "Equipo creció de 4 a 7 personas, con promoción interna de referentes senior y nuevos líderes.",
            "Reducción de bugs en producción mediante pipeline QA escalonado (Dev / Homologación / Calidad / Producción).",
            "Aceleración de migraciones legacy con IA aplicada al desarrollo (Claude Code, MCP, Figma)."
          ]
        },
        {
          title: "Frontend Developer",
          period: "agosto 2020 – mayo 2022 · 1 año 9 meses",
          achievements: [
            "Desarrollé y mantuve productos críticos de backoffice, atención ciudadana, autenticación y pagos.",
            "Construí SPAs con React + TypeScript y Angular en entornos enterprise.",
            "Participé en la modernización progresiva de sistemas legacy hacia una arquitectura modular y tipada.",
            "Integré múltiples APIs REST y entornos multi-servicio usando Vite proxies.",
            "Implementé herramientas avanzadas de UI como React Flow, Monaco Editor e interfaces embebidas.",
            "Trabajé en equipos Agile / Scrum colaborando con diseño, backend y producto."
          ]
        },
        {
          title: "UI Developer",
          period: "mayo 2019 – agosto 2020 · 1 año 4 meses",
          achievements: [
            "Desarrollé interfaces web pixel-perfect alineadas a diseño en productos enterprise.",
            "Construí componentes reutilizables basados en sistema de diseño interno.",
            "Implementé theming dinámico multi-cliente mediante variables de entorno.",
            "Diseñé experiencias responsive adaptadas a distintos dispositivos.",
            "Colaboré estrechamente con diseño y frontend para escalar consistencia visual entre productos."
          ]
        }
      ]
    },
    {
      name: "Gráfica Work",
      meta: "1 año 11 meses · Gran Buenos Aires",
      roles: [
        {
          title: "UI Developer",
          period: "julio 2017 – mayo 2019 · 1 año 11 meses",
          achievements: [
            "Diseñé y desarrollé sitios web end-to-end para distintos clientes.",
            "Construí interfaces responsive con HTML, CSS, JavaScript y jQuery.",
            "Realicé UI design, maquetado y adaptación mobile-first.",
            "Gestioné relación directa con clientes: relevamiento, propuestas, iteraciones y entregas finales.",
            "Traducí necesidades comerciales en soluciones web funcionales y visualmente consistentes."
          ]
        }
      ]
    },
    {
      name: "Orann",
      meta: "4 años · Gran Buenos Aires",
      roles: [
        {
          title: "Empleada Administrativa",
          period: "febrero 2013 – enero 2017 · 4 años",
          bullets: [
            "Primera experiencia laboral formal, desarrollada en paralelo a mi formación técnica.",
            "Etapa clave en la construcción de hábitos profesionales: organización, constancia y responsabilidad.",
            "Experiencia que consolidó mi compromiso con el crecimiento a largo plazo."
          ]
        }
      ]
    }
  ],
  skills: [
    {
      label: "Frontend",
      items: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Angular",
        "Redux",
        "React Router",
        "TailwindCSS",
        "SCSS",
        "HTML",
        "CSS"
      ]
    },
    {
      label: "Arquitectura",
      items: [
        "Patrón modular",
        "Tipado estricto",
        "Code review",
        "Definición de estándares",
        "Mentoría",
        "Agile / Scrum"
      ]
    },
    {
      label: "UX/UI",
      items: [
        "Criterio orientado a usabilidad",
        "Decisiones de diseño junto a producto",
        "Diseño responsive",
        "Pixel perfect",
        "Sistemas de diseño consistentes"
      ]
    },
    {
      label: "Tooling",
      items: ["Vite", "Biome", "Vitest", "Testing Library", "Git", "GitLab CI", "Docker"]
    },
    {
      label: "IA aplicada al desarrollo",
      items: [
        "Claude Code",
        "Diseño de skills custom",
        "CLAUDE.md y memoria persistente",
        "MCP servers (Figma)",
        "Automatización de scaffolding y validaciones"
      ]
    }
  ],
  highlights: [
    "Visión de producto y entendimiento del negocio",
    "Criterio UX/UI orientado a usabilidad",
    "Liderazgo técnico y mentoría",
    "Revisión de código y definición de estándares",
    "Resolución creativa de problemas",
    "Comunicación y trabajo en equipo"
  ],
  education: [
    {
      title: "Tecnicatura Superior en Programación",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2023"
    },
    {
      title: "Tecnicatura en Diseño Gráfico",
      institution: "Universidad de Morón",
      period: "2013 – 2019"
    },
    {
      title: "Bachiller en Economía y Administración",
      institution: "Instituto Santa María del Guadalupe",
      period: "2012"
    }
  ],
  courses: [
    {
      title: "Professional Webmaster",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2018"
    },
    {
      title: "Formación introductoria en UX Design",
      institution: "Digital House",
      period: "2018 · CABA"
    },
    {
      title: "JavaScript Avanzado",
      institution: "Coder House",
      period: "2019"
    },
    {
      title: "React Avanzado — Hooks, React Router, Redux",
      institution: "Udemy",
      period: "2019"
    },
    {
      title: "Maquetador Web Junior",
      institution: "EducaciónIT",
      period: "2017"
    }
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio (B1)" }
  ],
  about:
    "Mi cruce entre diseño y código es el eje de mi trabajo. Me importa entender qué necesita el usuario y el negocio, no solo escribir código. Disfruto definir estándares que ayuden al equipo a moverse más rápido sin perder calidad."
}
