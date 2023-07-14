import { useEffect, useState } from 'react'

export function useNow<T>(
  initialValue: T,
  calculateValue: (v: T) => T,
  delay: number
) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const i = setInterval(() => {
      setValue(calculateValue)
    }, delay)
    return () => {
      clearInterval(i)
    }
  }, [initialValue])

  return value
}
