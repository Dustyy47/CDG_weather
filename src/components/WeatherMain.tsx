import { getWeatherImage } from '../helpers/getWeatherImage'
import {
  capitalizeFirstLetter,
  formatTemperature
} from '../helpers/textFormatters'
import { WeatherInfo } from './WeatherDisplay'

export function WeatherMain({ weatherInfo }: { weatherInfo: WeatherInfo }) {
  const temperature = formatTemperature(weatherInfo.main.temp)
  const weather = weatherInfo.weather[0]
  const desc = capitalizeFirstLetter(weather.description)

  return (
    <div className='flex flex-col justify-between lg:w-[22.8125rem] sm:w-full h-full sm:mb-3'>
      <div className='w-full py-2 flex justify-between items-start mr-2'>
        <img
          className='max-w-[6.25rem] w-full object-cover mr-2'
          src={getWeatherImage(weather)}
          alt={desc}
        />
        <div className='w-full h-[5rem] bg-blueLight3 rounded-1 flex items-center justify-center'>
          <span className='largeText'>{temperature}°</span>
          <svg
            className='fill-blueAccent h-11 '
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M16 20.51V10C16 7.87827 16.8429 5.84344 18.3431 4.34315C19.8434 2.84285 21.8783 2 24 2C26.1217 2 28.1566 2.84285 29.6569 4.34315C31.1571 5.84344 32 7.87827 32 10V20.51C34.446 22.2132 36.2846 24.6525 37.2482 27.4729C38.2118 30.2934 38.2501 33.3478 37.3575 36.1915C36.465 39.0353 34.6882 41.5199 32.2857 43.2839C29.8833 45.0479 26.9805 45.9991 24 45.9991C21.0195 45.9991 18.1167 45.0479 15.7143 43.2839C13.3118 41.5199 11.535 39.0353 10.6425 36.1915C9.74992 33.3478 9.78825 30.2934 10.7518 27.4729C11.7154 24.6525 13.554 22.2132 16 20.51ZM22 24.252C20.119 24.7435 18.4812 25.9027 17.3924 27.5133C16.3036 29.124 15.8382 31.0758 16.0831 33.0044C16.3281 34.9331 17.2666 36.7066 18.7234 37.9939C20.1803 39.2813 22.0559 39.9943 24 40C25.9485 40.0019 27.8308 39.2926 29.2935 38.0052C30.7561 36.7179 31.6987 34.9409 31.9442 33.0079C32.1897 31.0749 31.7212 29.1188 30.6268 27.5066C29.5323 25.8945 27.8872 24.7372 26 24.252V10H22V24.252Z' />
          </svg>
        </div>
      </div>
      <p className='h2 text-grey5 text-left'>{desc}</p>
    </div>
  )
}
