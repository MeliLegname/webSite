export type ContactType = {
  location: string
  email: string
  linkedin: { label: string; url: string }
  github: { label: string; url: string }
}

export type ProfileType = {
  name: string
  title: string
  tagline: string
  contact: ContactType
  summary: string[]
}

export type RoleType = {
  title: string
  period: string
  achievements?: string[]
  results?: string[]
  bullets?: string[]
}

export type CompanyType = {
  name: string
  meta: string
  description?: string
  roles: RoleType[]
}

export type SkillGroupType = {
  label: string
  items: string[]
}

export type EducationItemType = {
  title: string
  institution: string
  period?: string
}

export type LanguageType = {
  name: string
  level: string
}

export type StatType = {
  number: string
  label: string
}

export type CvType = {
  profile: ProfileType
  stats: StatType[]
  clientsLine: string
  valueProposition: string
  techBadges: string[]
  companies: CompanyType[]
  skills: SkillGroupType[]
  highlights: string[]
  education: EducationItemType[]
  courses: EducationItemType[]
  languages: LanguageType[]
  about: string
}
