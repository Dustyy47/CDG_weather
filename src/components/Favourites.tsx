export function Favourites<T>({
  items,
  setItems
}: {
  items: T[]
  setItems: React.Dispatch<React.SetStateAction<T[]>>
}) {
  return (
    <div>
      <div className='flex items-center mb-4'>
        <p className='h1 mr-2 '>Избранное</p>
        <svg
          className='w-3 fill-blueAccent'
          viewBox='0 0 11 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 14V1.55556C0 1.12778 0.154 0.761446 0.462 0.456557C0.77 0.151668 1.13981 -0.000517198 1.57143 1.32051e-06H9.42857C9.86071 1.32051e-06 10.2308 0.152446 10.5388 0.457335C10.8468 0.762223 11.0005 1.1283 11 1.55556V14L5.5 11.6667L0 14ZM1.57143 11.6278L5.5 9.95556L9.42857 11.6278V1.55556H1.57143V11.6278Z' />
        </svg>
      </div>

      <div>{}</div>
    </div>
  )
}

function FavouriteItem({
  children,
  onClick,
  onRemove
}: {
  children: React.ReactElement | string
  onClick: () => any
  onRemove: () => any
}) {
  return (
    <div className='group bg-grey1 hover:bg-blueLight4'>
      <p>{children}</p>
      <div>
        <svg
          className='stroke-black w-[1.875rem] aspect-square rounded-1'
          viewBox='0 0 15 15'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.875 3.125L3.125 11.875'
            stroke-width='2'
            stroke-linecap='round'
          />
          <path
            d='M3.125 3.125L11.875 11.875'
            stroke-width='2'
            stroke-linecap='round'
          />
        </svg>
      </div>
    </div>
  )
}
