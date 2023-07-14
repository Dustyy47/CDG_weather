import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

export function useLocalState<T>(
  key: string,
  defaultValue: T,
  valueOnLoading: T
): [T, SetValue<T>] {
  const [value, setValue] = useState<T>(valueOnLoading)

  useEffect(() => {
    const savedValue = localStorage.getItem(key)
    console.log('savedValue:', savedValue)
    if (savedValue) setValue(JSON.parse(savedValue))
    else setValue(defaultValue)
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
