import type { StatType } from "@app/types"

type HeroProps = {
  stats: StatType[]
  clientsLine: string
  valueProposition: string
  techBadges: string[]
  email: string
}

export const Hero = ({ stats, clientsLine, valueProposition, techBadges, email }: HeroProps) => (
  <section id="inicio" className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
    <div className="px-[1.5rem] lg:px-[3.5rem] py-[5rem] lg:py-[6.5rem]">
      <h2 className="font-[var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] leading-[1.15] tracking-tight max-w-[22ch] text-[var(--color-text)]">
        Casi una década construyendo productos frontend.{" "}
        <span className="opacity-65">
          Los últimos 4 años, liderando equipos y marcando dirección técnica.
        </span>
      </h2>

      <ul className="mt-[3rem] lg:mt-[3.5rem] grid grid-cols-2 lg:grid-cols-4 gap-x-[1.5rem] gap-y-[2rem] border-t border-[var(--color-border)] pt-[2.5rem]">
        {stats.map((stat) => (
          <li key={stat.label} className="flex flex-col gap-[0.5rem]">
            <span
              className="font-[var(--font-display)] text-[2.5rem] lg:text-[3rem] leading-none tracking-tight text-[var(--color-accent)]"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {stat.number}
            </span>
            <span className="text-[0.85rem] leading-[1.35] text-[var(--color-muted)]">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${email}`}
        className="mt-[2.5rem] inline-flex items-center gap-[0.5rem] rounded-full bg-[var(--color-accent)] px-[1.5rem] py-[0.85rem] text-[1rem] font-medium text-white transition-opacity hover:opacity-90"
      >
        Escribime
        <span aria-hidden="true">→</span>
      </a>

      <div className="mt-[2.75rem]">
        <p className="text-[1.05rem] lg:text-[1.15rem] leading-[1.55] font-medium tracking-tight max-w-[42ch] text-[var(--color-text)]">
          {valueProposition}
        </p>

        <ul className="mt-[1rem] flex flex-wrap gap-[0.45rem]">
          {techBadges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-[0.8rem] py-[0.3rem] text-[0.8rem] text-[var(--color-muted)]"
            >
              {badge}
            </li>
          ))}
        </ul>

        <p className="mt-[1rem] text-[0.78rem] leading-[1.5] text-[var(--color-muted)] opacity-70 max-w-[55ch]">
          {clientsLine}
        </p>
      </div>
    </div>
  </section>
)
