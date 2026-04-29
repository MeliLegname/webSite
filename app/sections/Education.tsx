import { SectionHeader } from "@app/sections/SectionHeader"
import type { EducationItemType } from "@app/types"

type EducationProps = {
  education: EducationItemType[]
  courses: EducationItemType[]
}

export const Education = ({ education, courses }: EducationProps) => (
  <section id="educacion" className="border-b border-[var(--color-border)]">
    <div className="px-[1.5rem] lg:px-[3.5rem] py-[5rem]">
      <SectionHeader eyebrow="Formación" title="Educación" />

      <ul className="grid gap-[1rem] md:grid-cols-2">
        {education.map((item) => (
          <li
            key={item.title}
            className="rounded-[0.85rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-[1.25rem]"
          >
            <p className="font-[var(--font-display)] text-[1.05rem] leading-tight">{item.title}</p>
            <p className="mt-[0.35rem] text-[0.88rem] text-[var(--color-muted)]">
              {item.institution}
              {item.period ? ` · ${item.period}` : ""}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-[3rem]">
        <p className="mb-[1rem] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-muted)]">
          Cursos
        </p>
        <ul className="grid gap-[0.55rem] md:grid-cols-2">
          {courses.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-[0.55rem] text-[0.92rem] leading-[1.55]"
            >
              <span className="mt-[0.55rem] h-[0.3rem] w-[0.3rem] shrink-0 rounded-full bg-[var(--color-accent)]" />
              <span>
                <span className="font-medium">{item.title}</span>
                <span className="text-[var(--color-muted)]">
                  {" · "}
                  {item.institution}
                  {item.period ? ` · ${item.period}` : ""}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)
