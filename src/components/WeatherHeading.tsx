import { getCityName } from '../helpers/getCityName'
import { CityInfo } from '../http/CitiesAPI'
import { CountryFlag } from './CountryFlag'
import { WeatherInfo } from './WeatherDisplay'

export function WeatherHeading({
  weatherInfo,
  activeCityInfo
}: {
  weatherInfo: WeatherInfo
  activeCityInfo: CityInfo
}) {
  // const date = capitalizeFirstLetter(moment().format('ddd, D MMM, LT'))
  const { lat, lon } = weatherInfo.coord

  return (
    <div className='flex justify-between mb-3'>
      {/* <p className='h2 '>{date}</p> */}
      <div>
        <div className='flex items-center'>
          <div className='mr-1 h-3 rounded-[.125rem] overflow-hidden'>
            <CountryFlag country={activeCityInfo.country} />
          </div>
          <p className='h2 '>
            {`${getCityName(activeCityInfo)}, `}
            <span className='regular text-grey4'>
              {activeCityInfo.country} {activeCityInfo.state}
            </span>
          </p>
        </div>
        <p className='regular text-grey5 text-left'>
          {lat}, {lon}
        </p>
      </div>
    </div>
  )
}
