import { SectionHeader } from "@app/sections/SectionHeader"
import type { SkillGroupType } from "@app/types"

type SkillsProps = {
  skills: SkillGroupType[]
  highlights: string[]
}

export const Skills = ({ skills, highlights }: SkillsProps) => (
  <section id="skills" className="border-b border-[var(--color-border)]">
    <div className="px-[1.5rem] lg:px-[3.5rem] py-[5rem]">
      <SectionHeader eyebrow="Capacidades" title="Skills y aptitudes" />

      <div className="grid gap-[1.25rem] md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-[1.5rem]"
          >
            <p className="mb-[0.85rem] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-muted)]">
              {group.label}
            </p>
            <ul className="flex flex-wrap gap-[0.45rem]">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-[0.75rem] py-[0.3rem] text-[0.85rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-[2.5rem]">
        <p className="mb-[1rem] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-muted)]">
          Aptitudes destacadas
        </p>
        <ul className="grid gap-[0.55rem] sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-[0.55rem] text-[0.95rem] leading-[1.6]">
              <span className="mt-[0.55rem] h-[0.35rem] w-[0.35rem] shrink-0 rounded-full bg-[var(--color-accent)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)
