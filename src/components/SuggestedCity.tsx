import { getCityName } from '../helpers/getCityName'
import { CityInfo } from '../http/CitiesAPI'
import { CountryFlag } from './CountryFlag'

export function SuggestedCity({
  city,
  onClick
}: {
  city: CityInfo
  onClick: (city: CityInfo) => void
}) {
  function handleClick() {
    onClick(city)
  }

  if (!city.country) return null

  return (
    <div
      className='cursor-pointer flex items-center p-1 bg-white rounded-1 h-10 group hover:bg-blueAccent'
      onClick={handleClick}
    >
      <div className='mr-1 h-[.775rem] rounded-[.125rem] flex items-center'>
        <CountryFlag country={city.country} />
      </div>
      <p className='regular group-hover:text-white'>
        {getCityName(city)}{' '}
        <span className='light text-grey4 group-hover:text-white'>
          {city.country} {city.state}
        </span>
      </p>
    </div>
  )
}
