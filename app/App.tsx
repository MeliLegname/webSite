import { DownloadCvButton } from "@app/components/DownloadCvButton"
import { Sidebar } from "@app/components/Sidebar"
import { Topbar } from "@app/components/Topbar"
import { CV } from "@app/data/cv"
import { Education } from "@app/sections/Education"
import { Experience } from "@app/sections/Experience"
import { Hero } from "@app/sections/Hero"
import { Skills } from "@app/sections/Skills"

export const App = () => (
  <div className="min-h-screen bg-[var(--color-bg)] pt-[3.75rem] lg:pt-0 lg:pl-[22rem]">
    <Topbar />
    <Sidebar profile={CV.profile} languages={CV.languages} />
    <main className="lg:pt-[3.75rem]">
      <Hero
        stats={CV.stats}
        clientsLine={CV.clientsLine}
        valueProposition={CV.valueProposition}
        techBadges={CV.techBadges}
        email={CV.profile.contact.email}
      />
      <Experience companies={CV.companies} />
      <Skills skills={CV.skills} highlights={CV.highlights} />
      <Education education={CV.education} courses={CV.courses} />
      <footer className="border-t border-[var(--color-border)] px-[1.5rem] lg:px-[3.5rem] py-[2rem] text-[0.85rem] text-[var(--color-muted)]">
        © {new Date().getFullYear()} {CV.profile.name}
      </footer>
    </main>
    <div className="fixed bottom-[1.25rem] right-[1.25rem] lg:bottom-[1.75rem] lg:right-[1.75rem] z-[60]">
      <DownloadCvButton />
    </div>
  </div>
)
