import type { CompanyType } from "@app/types"
import { useMemo, useState } from "react"

type FlatRole = {
  key: string
  title: string
  company: string
  period: string
  yearRange: string
  yearStart: string
  current: boolean
  description?: string
  achievements?: string[]
  results?: string[]
  bullets?: string[]
}

type TimelineProps = {
  companies: CompanyType[]
}

const buildYearRange = (period: string) => {
  const matches = period.match(/(\d{4})/g)
  if (!matches) return { yearStart: "", yearRange: "" }
  const isPresent = /presente|hoy/i.test(period)
  if (isPresent) {
    return { yearStart: matches[0], yearRange: `${matches[0]} – Hoy` }
  }
  if (matches.length > 1) {
    return { yearStart: matches[0], yearRange: `${matches[0]} – ${matches[1]}` }
  }
  return { yearStart: matches[0], yearRange: matches[0] }
}

const flatten = (companies: CompanyType[]): FlatRole[] =>
  companies.flatMap((company) =>
    company.roles.map((role) => {
      const { yearStart, yearRange } = buildYearRange(role.period)
      return {
        key: `${company.name}-${role.title}`,
        title: role.title,
        company: company.name,
        period: role.period,
        yearStart,
        yearRange,
        current: /presente|hoy/i.test(role.period),
        description: company.description,
        achievements: role.achievements,
        results: role.results,
        bullets: role.bullets
      }
    })
  )

export const Timeline = ({ companies }: TimelineProps) => {
  const roles = useMemo(() => flatten(companies), [companies])
  const [activeIndex, setActiveIndex] = useState(0)
  const active = roles[activeIndex]

  return (
    <div>
      <div className="-mx-[1.5rem] lg:mx-0 overflow-x-auto pb-[0.5rem]">
        <div className="relative min-w-[36rem] px-[1.5rem] lg:px-0">
          <div className="absolute left-[1.5rem] right-[1.5rem] lg:left-[1rem] lg:right-[1rem] top-[1.45rem] h-[2px] bg-[var(--color-border)]" />
          <div
            role="tablist"
            aria-label="Línea de tiempo de experiencia"
            className="relative grid gap-[0.5rem]"
            style={{ gridTemplateColumns: `repeat(${roles.length}, minmax(0, 1fr))` }}
          >
            {roles.map((role, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={role.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="timeline-panel"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group relative flex flex-col items-center gap-[0.65rem] pt-[0.5rem] pb-[0.25rem] text-center cursor-pointer focus:outline-none"
                >
                  <span
                    className={`h-[1.4rem] w-[1.4rem] rounded-full border-[3px] transition-all duration-200 ${
                      isActive
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)] scale-110 shadow-[0_0_0_6px_var(--color-accent-soft)]"
                        : "border-[var(--color-muted)] bg-[var(--color-bg)] group-hover:border-[var(--color-accent)] group-focus:border-[var(--color-accent)]"
                    }`}
                  />
                  <span
                    className={`font-[var(--font-display)] text-[1rem] lg:text-[1.05rem] leading-none transition-colors ${
                      isActive ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"
                    }`}
                  >
                    {role.yearStart}
                  </span>
                  <span
                    className={`text-[0.78rem] leading-tight px-[0.2rem] transition-colors ${
                      isActive
                        ? "text-[var(--color-text)] font-medium"
                        : "text-[var(--color-muted)]"
                    }`}
                  >
                    {role.title}
                  </span>
                  <span className="text-[0.7rem] text-[var(--color-muted)] hidden sm:block">
                    {role.company}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div
        id="timeline-panel"
        role="tabpanel"
        className="mt-[2rem] rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-[1.75rem] lg:p-[2.25rem]"
      >
        <div className="flex flex-wrap items-baseline gap-x-[0.85rem] gap-y-[0.35rem]">
          <h3 className="font-[var(--font-display)] text-[1.6rem] lg:text-[1.85rem] leading-tight tracking-tight">
            {active.title}
          </h3>
          <span className="text-[1rem] text-[var(--color-muted)]">@ {active.company}</span>
          {active.current && (
            <span className="rounded-full bg-[var(--color-accent-soft)] px-[0.65rem] py-[0.15rem] text-[0.7rem] font-medium tracking-[0.12em] uppercase text-[var(--color-accent)]">
              Actual
            </span>
          )}
        </div>
        <p className="mt-[0.4rem] text-[0.85rem] tracking-[0.04em] text-[var(--color-muted)]">
          {active.period}
        </p>

        {active.description && (
          <p className="mt-[1.25rem] text-[0.95rem] leading-[1.65] text-[var(--color-muted)] max-w-[60rem]">
            {active.description}
          </p>
        )}

        {active.achievements && (
          <div className="mt-[1.75rem]">
            <p className="mb-[0.85rem] text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-muted)]">
              {active.results ? "Impacto clave" : "Responsabilidades e impacto"}
            </p>
            <ul className="grid gap-[0.7rem]">
              {active.achievements.map((item) => (
                <li
                  key={item.slice(0, 48)}
                  className="flex gap-[0.6rem] text-[0.95rem] leading-[1.6]"
                >
                  <span className="mt-[0.6rem] h-[0.35rem] w-[0.35rem] shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {active.results && (
          <div className="mt-[1.75rem]">
            <p className="mb-[0.85rem] text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-muted)]">
              Resultados
            </p>
            <ul className="grid gap-[0.6rem]">
              {active.results.map((item) => (
                <li
                  key={item.slice(0, 48)}
                  className="flex gap-[0.6rem] text-[0.95rem] leading-[1.55] font-medium"
                >
                  <span className="mt-[0.65rem] h-[0.35rem] w-[0.35rem] shrink-0 rounded-full bg-[#22c55e]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {active.bullets && (
          <ul className="mt-[1.25rem] grid gap-[0.55rem]">
            {active.bullets.map((item) => (
              <li
                key={item.slice(0, 48)}
                className="flex gap-[0.6rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)]"
              >
                <span className="mt-[0.6rem] h-[0.35rem] w-[0.35rem] shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
