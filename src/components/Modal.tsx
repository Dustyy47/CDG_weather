import classNames from 'classnames'
import { ReactElement } from 'react'

export function Modal({
  onClose,
  isOpen,
  children
}: {
  onClose: () => void
  isOpen: boolean
  children: ReactElement
}) {
  const windowStateStyle = classNames(
    isOpen
      ? 'top-[50%] translate-y-[-70%] opacity-1 h-full'
      : 'top-[100%] translate-y-0 opacity-0 pointer-events-none'
  )

  const bgStateStyle = classNames(
    isOpen ? 'opacity-[60%]' : 'opacity-0 pointer-events-none'
  )

  return (
    <>
      <div
        className={classNames(
          'absolute max-w-[26.5625rem] min-h-[21.25rem] left-[50%] translate-x-[-50%] rounded-2 p-4 pb-6 w-full z-50 bg-white',
          windowStateStyle
        )}
      >
        {children}
      </div>
      <div
        className={classNames(
          'absolute cursor-pointer left-0 right-0 top-0 bottom-0 bg-black z-40',
          bgStateStyle
        )}
        onClick={onClose}
      ></div>
    </>
  )
}
