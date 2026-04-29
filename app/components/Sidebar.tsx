import type { LanguageType, ProfileType } from "@app/types"

type SidebarProps = {
  profile: ProfileType
  languages: LanguageType[]
}

export const Sidebar = ({ profile, languages }: SidebarProps) => {
  const { name, title, tagline, contact } = profile

  const languagesLine = languages.map((lang) => `${lang.name} (${lang.level})`).join(" · ")

  return (
    <aside className="lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[22rem] lg:z-50 bg-[var(--color-sidebar)] border-b lg:border-b-0 lg:border-r border-[var(--color-border)]">
      <div className="flex h-full flex-col px-[1.5rem] py-[1.75rem] lg:px-[1.85rem] lg:py-[2rem]">
        <div className="flex items-center lg:flex-col lg:items-start gap-[1rem] lg:gap-[1.1rem]">
          <img
            src="/melisa.png"
            alt={name}
            className="h-[6rem] w-[6rem] lg:h-[10.5rem] lg:w-[10.5rem] shrink-0 rounded-full object-cover border-[2px] border-[var(--color-border)]"
          />
          <div className="flex min-w-0 flex-col gap-[0.25rem]">
            <h1 className="font-[var(--font-display)] text-[1.5rem] lg:text-[1.75rem] leading-[1.05] tracking-tight">
              {name}
            </h1>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-muted)]">
              {title}
            </p>
          </div>
        </div>

        <div className="mt-[1.25rem] inline-flex w-fit items-center gap-[0.55rem] rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-[0.75rem] py-[0.35rem] text-[0.78rem]">
          <span className="relative flex h-[0.5rem] w-[0.5rem]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
            <span className="relative inline-flex h-full w-full rounded-full bg-[#22c55e]" />
          </span>
          <span>Abierta a nuevas oportunidades</span>
        </div>

        <p className="mt-[1.25rem] text-[0.88rem] leading-[1.5] text-[var(--color-muted)]">
          {tagline}
        </p>

        <div className="mt-[1.5rem] grid gap-[0.5rem]">
          <a
            href={`mailto:${contact.email}`}
            className="break-all text-[0.92rem] font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="text-[0.92rem] font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
          >
            LinkedIn {contact.linkedin.label}
          </a>
        </div>

        <div className="mt-auto pt-[1.5rem] grid gap-[0.4rem] text-[0.8rem] text-[var(--color-muted)]">
          <p>{contact.location}</p>
          <p>
            <a
              href={contact.github.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              GitHub {contact.github.label}
            </a>
          </p>
          <p>{languagesLine}</p>
        </div>
      </div>
    </aside>
  )
}
