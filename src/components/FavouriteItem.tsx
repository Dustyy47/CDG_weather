export function FavouriteItem({
  children,
  onClick,
  onRemove
}: {
  children: React.ReactElement | string
  onClick: () => any
  onRemove: () => any
}) {
  return (
    <div
      onClick={onClick}
      className='group bg-grey6 rounded-2 hover:bg-blueLight4 cursor-pointer flex justify-between items-center min-h-[2.5rem] px-4 py-2'
    >
      <div>{children}</div>
      <div
        onClick={(e) => {
          e.preventDefault()
          onRemove()
        }}
        className='w-6 aspect-square flex items-center justify-center hover:bg-blueLight2 rounded-1'
      >
        <svg
          className='stroke-black w-3 aspect-square rounded-1'
          viewBox='0 0 15 15'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M11.875 3.125L3.125 11.875' />
          <path d='M3.125 3.125L11.875 11.875' />
        </svg>
      </div>
    </div>
  )
}
