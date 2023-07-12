import classNames from 'classnames'

export function Checkbox({
  onChange,
  checked
}: {
  onChange: (v: boolean) => void
  checked: boolean
}) {
  const thumbStateStyles = classNames(
    checked
      ? 'bg-blueAccent left-[100%] translate-x-[-110%]'
      : 'bg-white left-[2px]'
  )

  return (
    <label
      className={classNames(
        'w-[2.1875rem] h-[1.125rem] rounded-20 p-[2px] cursor-pointer relative bg-blueLight4'
      )}
    >
      <span
        className={classNames(
          'rounded-full duration-300 w-[.875rem] h-[.875rem] block absolute',
          thumbStateStyles
        )}
      />
      <input
        className='invisible'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        type='checkbox'
      />
    </label>
  )
}
