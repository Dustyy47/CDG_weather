import moment from 'moment'
import { capitalizeFirstLetter } from '../helpers/textFormatters'
import { Cityinfo } from '../http/CitiesAPI'
import { WeatherInfo } from './WeatherDisplay'

export function WeatherHeading({
  weatherInfo,
  activeCityInfo
}: {
  weatherInfo: WeatherInfo
  activeCityInfo: Cityinfo
}) {
  const date = capitalizeFirstLetter(moment().format('ddd, D MMM, LT'))
  console.log(activeCityInfo)
  const placeText = `${
    activeCityInfo.local_names
      ? activeCityInfo.local_names['ru']
      : activeCityInfo.name
  }, ${activeCityInfo.country}`
  const { lat, lon } = weatherInfo.coord

  return (
    <div className='flex justify-between'>
      <p className='h2 mb-8'>{date}</p>
      <div>
        <p className='h2 '>{placeText}</p>
        <p className='regular text-grey5 text-right'>
          {lat}, {lon}
        </p>
      </div>
    </div>
  )
}
