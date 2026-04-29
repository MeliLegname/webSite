import { CV } from "@app/data/cv"
import { useState } from "react"

type Status = "idle" | "loading" | "error"

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

export const DownloadCvButton = () => {
  const [status, setStatus] = useState<Status>("idle")

  const handleDownload = async () => {
    if (status === "loading") return

    setStatus("loading")

    try {
      const [{ pdf }, { CvDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@app/pdf/CvDocument")
      ])

      const blob = await pdf(<CvDocument cv={CV} />).toBlob()
      const url = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = `cv-${slugify(CV.profile.name)}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      URL.revokeObjectURL(url)
      setStatus("idle")
    } catch (error) {
      console.error("No se pudo generar el PDF", error)
      setStatus("error")
    }
  }

  const label = status === "loading" ? "Generando…" : status === "error" ? "Reintentar" : "CV"

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={status === "loading"}
      className="inline-flex cursor-pointer items-center gap-[0.45rem] rounded-full border border-[var(--color-accent)] bg-[var(--color-surface)] px-[1.1rem] py-[0.6rem] text-[0.88rem] font-medium text-[var(--color-accent)] shadow-[0_6px_18px_-10px_rgba(0,0,0,0.3)] transition-colors hover:bg-[var(--color-accent)] hover:text-white disabled:cursor-wait disabled:opacity-70"
    >
      <span aria-hidden="true">↓</span>
      {label}
    </button>
  )
}
