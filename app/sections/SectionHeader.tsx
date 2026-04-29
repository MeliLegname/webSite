type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <div className="mb-[2.5rem]">
    <p className="mb-[0.65rem] text-[0.72rem] tracking-[0.22em] uppercase text-[var(--color-muted)]">
      {eyebrow}
    </p>
    <h2 className="font-[var(--font-display)] text-[2rem] lg:text-[2.4rem] leading-[1.1] tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-[0.85rem] text-[0.95rem] leading-[1.6] text-[var(--color-muted)] max-w-[55rem]">
        {description}
      </p>
    )}
  </div>
)
