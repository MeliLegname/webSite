import { ThemeToggle } from "@app/components/ThemeToggle"

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#educacion", label: "Educación" }
]

export const Topbar = () => (
  <header className="fixed top-0 left-0 lg:left-[22rem] right-0 z-40 h-[3.75rem] border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_85%,transparent)] backdrop-blur-md">
    <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-[1rem] px-[1.5rem] lg:px-[2rem]">
      <div />
      <nav aria-label="Navegación principal" className="min-w-0 overflow-x-auto">
        <ul className="flex items-center gap-[1.75rem] text-[0.9rem]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="justify-self-end">
        <ThemeToggle />
      </div>
    </div>
  </header>
)
