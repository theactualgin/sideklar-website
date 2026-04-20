"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ThemeToggleButton2 } from "@/components/ui/theme-toggle-buttons"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-9 w-9" />

  const isDark = resolvedTheme === "dark"

  return (
    <ThemeToggleButton2
      className="h-6 w-6"
      isDark={isDark}
      onToggle={() => setTheme(isDark ? "light" : "dark")}
    />
  )
}
