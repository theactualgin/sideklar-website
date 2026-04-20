"use client"

import { useEffect, useRef, useState } from "react"

export function InvertedCursor({ size = 40 }: { size?: number }) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const currentPos = useRef({ x: -size, y: -size })
  const targetPos = useRef({ x: -size, y: -size })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
    }
    const handleMouseLeave = () => setVisible(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    const animate = () => {
      const dx = (targetPos.current.x - currentPos.current.x) * 0.18
      const dy = (targetPos.current.y - currentPos.current.y) * 0.18
      currentPos.current.x += dx
      currentPos.current.y += dy

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x - size / 2}px, ${currentPos.current.y - size / 2}px)`
      }
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [size])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference transition-opacity duration-300"
      style={{ width: size, height: size, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  )
}
