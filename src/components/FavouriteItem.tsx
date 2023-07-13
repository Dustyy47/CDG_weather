import { getCityName } from '../helpers/getCityName'
import { CityInfo } from '../http/CitiesAPI'
import { CountryFlag } from './CountryFlag'

export function FavouriteItem({
  city,
  onClick,
  onRemove
}: {
  city: CityInfo
  onClick: () => any
  onRemove: () => any
}) {
  return (
    <div
      onClick={onClick}
      className='group bg-grey6 rounded-2 hover:bg-blueLight4 cursor-pointer flex justify-between items-center min-h-[2.5rem] px-3 py-2'
    >
      <div>
        <div className='flex items-center'>
          <div className='mr-1 h-[.775rem] rounded-[.125rem] flex items-center'>
            <CountryFlag country={city.country} />
          </div>
          <div>
            <p className='regular h-2'>{getCityName(city)} </p>
            <span className='light h-2 text-grey4 '>
              {city.country} {city.state}
            </span>
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
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
