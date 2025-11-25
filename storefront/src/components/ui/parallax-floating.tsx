"use client"

import React, { useRef, useEffect, useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: ReactNode
  depth?: number
  className?: string
}

interface FloatingProps {
  children: ReactNode
  className?: string
  sensitivity?: number
}

export default function Floating({ children, className, sensitivity = 1 }: FloatingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

      setMousePosition({ x, y })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", () => setIsHovered(true))
      container.addEventListener("mouseleave", () => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
      })
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", () => setIsHovered(true))
        container.removeEventListener("mouseleave", () => setIsHovered(false))
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", className)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<FloatingElementProps>(child)) {
          return React.cloneElement(child, {
            mousePosition,
            isHovered,
            sensitivity,
          } as any)
        }
        return child
      })}
    </div>
  )
}

export function FloatingElement({
  children,
  depth = 1,
  className,
  mousePosition,
  isHovered,
  sensitivity = 1,
}: FloatingElementProps & {
  mousePosition?: { x: number; y: number }
  isHovered?: boolean
  sensitivity?: number
}) {
  const intensity = 20 * sensitivity
  const translateX = mousePosition?.x ? mousePosition.x * depth * intensity : 0
  const translateY = mousePosition?.y ? mousePosition.y * depth * intensity : 0

  return (
    <div
      className={cn("absolute transition-transform duration-300 ease-out", className)}
      style={{
        transform: isHovered
          ? `translate3d(${translateX}px, ${translateY}px, 0)`
          : "translate3d(0, 0, 0)",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}
