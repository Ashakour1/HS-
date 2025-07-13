"use client"

import { useEffect, useState, useRef } from "react"

interface UseCountUpOptions {
  endValue: number
  duration?: number // in milliseconds
}

export function useCountUp({ endValue, duration = 2000 }: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const requestRef = useRef<number | undefined>(undefined)
  const startTimeRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    setCount(0) // Reset count when endValue changes

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const progress = (currentTime - startTimeRef.current) / duration

      if (progress < 1) {
        setCount(Math.floor(endValue * progress))
        requestRef.current = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [endValue, duration])

  return count
}
