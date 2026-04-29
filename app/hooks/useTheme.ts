import { useEffect, useState } from "react"

type Theme = "light" | "dark"

const getInitialTheme = (): Theme => {
  if (typeof document === "undefined") return "light"
  const fromDom = document.documentElement.getAttribute("data-theme")
  if (fromDom === "light" || fromDom === "dark") return fromDom
  const saved = window.localStorage.getItem("theme")
  if (saved === "light" || saved === "dark") return saved
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const toggle = () => setTheme((current) => (current === "light" ? "dark" : "light"))

  return { theme, toggle }
}
