import moment from 'moment'
import { capitalizeFirstLetter } from '../helpers/textFormatters'
import { WeatherInfo } from './WeatherDisplay'

export function WeatherHeading({ weatherInfo }: { weatherInfo: WeatherInfo }) {
  const date = capitalizeFirstLetter(moment().format('ddd, D MMM, LT'))
  const placeText = `${weatherInfo.name}, ${weatherInfo.sys.country}`
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
