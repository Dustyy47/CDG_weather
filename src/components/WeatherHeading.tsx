import classNames from 'classnames'
import { useContext } from 'react'
import { FavouritesContext } from '../App'
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
  const favourites = useContext(FavouritesContext)

  const isFavourite =
    favourites?.favouritesCities.includes(activeCityInfo) ?? false

  function handleToggleCityFavourite() {
    favourites?.toggleFavourite(activeCityInfo)
    console.log(isFavourite)
  }

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
      <div className='cursor-pointer' onClick={handleToggleCityFavourite}>
        <FavouriteIcon isFavourite={isFavourite} />
      </div>
    </div>
  )
}

function FavouriteIcon({ isFavourite }: { isFavourite: boolean }) {
  const classname = classNames('fill-black w-[1rem]', isFavourite ? '' : '')

  if (isFavourite)
    return (
      <svg
        className={classname}
        viewBox='0 0 14 18'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 18V2C0 1.45 0.196 0.979002 0.588 0.587002C0.98 0.195002 1.45067 -0.000664969 2 1.69779e-06H12C12.55 1.69779e-06 13.021 0.196002 13.413 0.588002C13.805 0.980002 14.0007 1.45067 14 2V18L7 15L0 18Z' />
      </svg>
    )
  else {
    return (
      <svg
        className={classname}
        viewBox='0 0 11 14'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 14V1.55556C0 1.12778 0.154 0.761446 0.462 0.456557C0.77 0.151668 1.13981 -0.000517198 1.57143 1.32051e-06H9.42857C9.86071 1.32051e-06 10.2308 0.152446 10.5388 0.457335C10.8468 0.762223 11.0005 1.1283 11 1.55556V14L5.5 11.6667L0 14ZM1.57143 11.6278L5.5 9.95556L9.42857 11.6278V1.55556H1.57143V11.6278Z' />
      </svg>
    )
  }
}
