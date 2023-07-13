import classNames from 'classnames'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

export function Search({
  onChange,
  focused = false,
  debounced = true,
  onFocus,
  onBlur,
  placeholder = ''
}: {
  onChange: (v: string) => void
  focused?: boolean
  debounced?: boolean
  onFocus?: () => void
  onBlur?: React.FocusEventHandler
  placeholder?: string
}) {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce<string>(value, 300)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    if (!debounced) onChange(e.target.value)
  }
  useEffect(() => {
    if (debounced) {
      onChange(debouncedValue ?? '')
    }
  }, [debouncedValue])

  const wrapperClassname = classNames(
    'flex justify-between  bg-blueLight2 w-full min-h-[2.5rem] p-1',
    focused ? 'rounded-b-none rounded-t-2' : 'rounded-20'
  )

  return (
    <div className={wrapperClassname}>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        className='bg-transparent w-full max-w-[90%] focus:outline-none px-4 regular text-black placeholder:text-grey4'
        type='text'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div className='h-[2.1875rem] aspect-square rounded-full flex items-center justify-center bg-blueAccent'>
        <svg
          className='fill-white'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M14.7 15.75L9.975 11.025C9.6 11.325 9.16875 11.5625 8.68125 11.7375C8.19375 11.9125 7.675 12 7.125 12C5.7625 12 4.6095 11.528 3.666 10.584C2.7225 9.64 2.2505 8.487 2.25 7.125C2.25 5.7625 2.722 4.6095 3.666 3.666C4.61 2.7225 5.763 2.2505 7.125 2.25C8.4875 2.25 9.6405 2.722 10.584 3.666C11.5275 4.61 11.9995 5.763 12 7.125C12 7.675 11.9125 8.19375 11.7375 8.68125C11.5625 9.16875 11.325 9.6 11.025 9.975L15.75 14.7L14.7 15.75ZM7.125 10.5C8.0625 10.5 8.8595 10.1718 9.516 9.51525C10.1725 8.85875 10.5005 8.062 10.5 7.125C10.5 6.1875 10.1718 5.3905 9.51525 4.734C8.85875 4.0775 8.062 3.7495 7.125 3.75C6.1875 3.75 5.3905 4.07825 4.734 4.73475C4.0775 5.39125 3.7495 6.188 3.75 7.125C3.75 8.0625 4.07825 8.8595 4.73475 9.516C5.39125 10.1725 6.188 10.5005 7.125 10.5Z' />
        </svg>
      </div>
    </div>
  )
}
