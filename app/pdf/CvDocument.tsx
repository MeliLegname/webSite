import type { CvType } from "@app/types"
import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer"

const palette = {
  text: "#1a1a22",
  muted: "#555560",
  accent: "#1a1a22",
  border: "#cccccc",
  bg: "#ffffff"
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: palette.bg,
    color: palette.text,
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 40,
    lineHeight: 1.55
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
    paddingBottom: 12,
    marginBottom: 16
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: palette.text,
    lineHeight: 1.1,
    marginBottom: 4
  },
  title: {
    fontSize: 12,
    color: palette.text,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.2,
    marginBottom: 10
  },
  contactRow: {
    fontSize: 9.5,
    color: palette.muted,
    lineHeight: 1.5
  },
  link: {
    color: palette.text,
    textDecoration: "none"
  },
  section: {
    marginBottom: 14
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: palette.text,
    borderBottomWidth: 0.5,
    borderBottomColor: palette.border,
    paddingBottom: 3,
    marginBottom: 8
  },
  paragraph: {
    fontSize: 10,
    color: palette.text,
    marginBottom: 6,
    lineHeight: 1.55
  },
  highlightLine: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: palette.text,
    marginBottom: 4
  },
  inlineList: {
    fontSize: 10,
    color: palette.text,
    lineHeight: 1.55
  },
  companyBlock: {
    marginBottom: 10
  },
  companyName: {
    fontSize: 11.5,
    fontFamily: "Helvetica-Bold",
    color: palette.text
  },
  companyMeta: {
    fontSize: 9,
    color: palette.muted,
    marginBottom: 4
  },
  companyDescription: {
    fontSize: 9.5,
    color: palette.text,
    marginBottom: 8,
    lineHeight: 1.5
  },
  role: {
    marginBottom: 8,
    paddingLeft: 0
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 3
  },
  roleTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: palette.text
  },
  rolePeriod: {
    fontSize: 9,
    color: palette.muted
  },
  subLabel: {
    fontSize: 9,
    color: palette.text,
    fontFamily: "Helvetica-Bold",
    marginTop: 4,
    marginBottom: 3
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2.5,
    paddingLeft: 8
  },
  bulletDot: {
    width: 8,
    fontSize: 9,
    color: palette.text
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    color: palette.text,
    lineHeight: 1.5
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 3,
    fontSize: 9.5,
    lineHeight: 1.5
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    color: palette.text,
    width: 110
  },
  skillItems: {
    flex: 1,
    color: palette.text
  },
  educationItem: {
    marginBottom: 5
  },
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  eduTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: palette.text,
    flex: 1,
    paddingRight: 8
  },
  eduPeriod: {
    fontSize: 9,
    color: palette.muted
  },
  eduInstitution: {
    fontSize: 9.5,
    color: palette.muted
  },
  langRow: {
    flexDirection: "row",
    fontSize: 9.5,
    marginBottom: 2
  },
  langName: {
    fontFamily: "Helvetica-Bold",
    color: palette.text,
    width: 70
  },
  langLevel: {
    color: palette.text
  }
})

const Bullet = ({ text }: { text: string }) => (
  <View style={styles.bullet}>
    <Text style={styles.bulletDot}>•</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
)

type CvDocumentProps = {
  cv: CvType
}

export const CvDocument = ({ cv }: CvDocumentProps) => {
  const {
    profile,
    valueProposition,
    techBadges,
    companies,
    skills,
    highlights,
    education,
    courses,
    languages,
    about
  } = cv

  return (
    <Document
      author={profile.name}
      title={`${profile.name} — CV`}
      subject={profile.title}
      creator={profile.name}
      keywords={`${profile.title}, ${techBadges.join(", ")}`}
    >
      <Page size="A4" style={styles.page}>
        {/* Header: nombre, título, contacto en orden ATS-amigable */}
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <Text style={styles.contactRow}>
            {profile.contact.location} · {profile.contact.email} ·{" "}
            <Link src={profile.contact.linkedin.url} style={styles.link}>
              linkedin.com/in{profile.contact.linkedin.label}
            </Link>{" "}
            ·{" "}
            <Link src={profile.contact.github.url} style={styles.link}>
              github.com{profile.contact.github.label}
            </Link>
          </Text>
        </View>

        {/* Sobre mí: hook humano breve arriba */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre mí</Text>
          <Text style={styles.paragraph}>{about}</Text>
        </View>

        {/* Perfil profesional */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfil profesional</Text>
          {profile.summary.map((line) => (
            <Bullet key={line.slice(0, 32)} text={line} />
          ))}
        </View>

        {/* Especialización */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Especialización</Text>
          <Text style={styles.highlightLine}>{valueProposition}</Text>
          <Text style={styles.inlineList}>{techBadges.join(" · ")}</Text>
        </View>

        {/* Experiencia laboral */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia laboral</Text>
          {companies.map((company) => (
            <View key={company.name} style={styles.companyBlock}>
              <Text style={styles.companyName}>{company.name}</Text>
              <Text style={styles.companyMeta}>{company.meta}</Text>
              {company.description && (
                <Text style={styles.companyDescription}>{company.description}</Text>
              )}
              {company.roles.map((role) => (
                <View key={role.title} style={styles.role}>
                  <View style={styles.roleHeader}>
                    <Text style={styles.roleTitle}>{role.title}</Text>
                    <Text style={styles.rolePeriod}>{role.period}</Text>
                  </View>
                  {role.achievements && (
                    <View>
                      <Text style={styles.subLabel}>
                        {role.results ? "Impacto clave" : "Responsabilidades e impacto"}
                      </Text>
                      {role.achievements.map((item) => (
                        <Bullet key={item.slice(0, 48)} text={item} />
                      ))}
                    </View>
                  )}
                  {role.results && (
                    <View>
                      <Text style={styles.subLabel}>Resultados</Text>
                      {role.results.map((item) => (
                        <Bullet key={item.slice(0, 48)} text={item} />
                      ))}
                    </View>
                  )}
                  {role.bullets && (
                    <View style={{ marginTop: 4 }}>
                      {role.bullets.map((item) => (
                        <Bullet key={item.slice(0, 48)} text={item} />
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Skills técnicas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills técnicas</Text>
          {skills.map((group) => (
            <View key={group.label} style={styles.skillRow}>
              <Text style={styles.skillLabel}>{group.label}:</Text>
              <Text style={styles.skillItems}>{group.items.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Aptitudes destacadas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aptitudes destacadas</Text>
          <Text style={styles.inlineList}>{highlights.join(" · ")}</Text>
        </View>

        {/* Idiomas - subido para visibilidad ante reclutadores internacionales */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Idiomas</Text>
          <Text style={styles.inlineList}>
            {languages.map((lang) => `${lang.name}: ${lang.level}`).join(" · ")}
          </Text>
        </View>

        {/* Educación */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educación</Text>
          {education.map((item) => (
            <View key={item.title} style={styles.educationItem}>
              <View style={styles.eduRow}>
                <Text style={styles.eduTitle}>{item.title}</Text>
                {item.period && <Text style={styles.eduPeriod}>{item.period}</Text>}
              </View>
              <Text style={styles.eduInstitution}>{item.institution}</Text>
            </View>
          ))}
        </View>

        {/* Cursos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cursos</Text>
          {courses.map((item) => (
            <View key={item.title} style={styles.educationItem}>
              <View style={styles.eduRow}>
                <Text style={styles.eduTitle}>{item.title}</Text>
                {item.period && <Text style={styles.eduPeriod}>{item.period}</Text>}
              </View>
              <Text style={styles.eduInstitution}>{item.institution}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
