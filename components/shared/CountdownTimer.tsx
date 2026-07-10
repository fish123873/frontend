'use client'

import { useState, useEffect, useCallback } from 'react'

interface CountdownTimerProps {
  seconds: number
  onExpire?: () => void
  className?: string
}

export function CountdownTimer({ seconds, onExpire, className = '' }: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(seconds)

  const handleExpire = useCallback(() => {
    onExpire?.()
  }, [onExpire])

  useEffect(() => {
    if (remaining <= 0) {
      handleExpire()
      return
    }
    const timer = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [remaining, handleExpire])

  const pct = (remaining / seconds) * 100

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-linear rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-center text-sm font-bold text-primary">
        ⏰ العرض ينتهي في {String(Math.floor(remaining / 60)).padStart(2, '0')}:
        {String(remaining % 60).padStart(2, '0')}
      </p>
    </div>
  )
}
