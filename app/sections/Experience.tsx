import { Timeline } from "@app/components/Timeline"
import { SectionHeader } from "@app/sections/SectionHeader"
import type { CompanyType } from "@app/types"

type ExperienceProps = {
  companies: CompanyType[]
}

export const Experience = ({ companies }: ExperienceProps) => (
  <section id="experiencia" className="border-b border-[var(--color-border)]">
    <div className="px-[1.5rem] lg:px-[3.5rem] py-[5rem]">
      <SectionHeader
        eyebrow="Trayectoria"
        title="Mi recorrido en frontend"
        description="Pasá el cursor (o tocá) sobre cada hito de la línea de tiempo para ver el detalle de cada rol."
      />
      <Timeline companies={companies} />
    </div>
  </section>
)
