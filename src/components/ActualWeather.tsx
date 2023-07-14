import { useEffect, useState } from 'react'
import CitiesAPI, { CityInfo } from '../http/CitiesAPI'
import WeatherAPI from '../http/WeatherAPI'
import { Location } from './Location'
import { SearchCityGroupMemo } from './SearchCityGroup'
import { WeatherDisplay, WeatherInfo } from './WeatherDisplay'

export function ActualWeather({
  activeCity,
  setActiveCity
}: {
  activeCity: CityInfo | null
  setActiveCity: (city: CityInfo | null) => any
}) {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null)
  const [isUserLocation, setIsUserLocation] = useState(true)

  useEffect(() => {
    async function fetchWeather() {
      if (!activeCity) return
      const weather = await WeatherAPI.getWeatherFromCoords(activeCity)
      setWeatherInfo(weather)
    }
    fetchWeather()
  }, [activeCity])

  useEffect(() => {
    async function fetchPositionCity(coords: {
      latitude: number
      longitude: number
    }) {
      const info = await CitiesAPI.getCityFromCoords({
        lat: coords.latitude,
        lon: coords.longitude
      })
      setActiveCity(info[0])
    }
    if (isUserLocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchPositionCity(pos.coords)
        },
        (err) => console.log('err', err)
      )
    } else {
      setActiveCity(null)
    }
  }, [isUserLocation])

  function toggleUserLocation() {
    setIsUserLocation((prev) => !prev)
  }

  return (
    <div className='h-full'>
      <div className='flex items-center mb-4 md:justify-start sm:justify-center'>
        <p className='h1 mr-2 sm'>Актуальная погода</p>
        <svg
          className='fill-blueAccent w-3 '
          viewBox='0 0 15 15'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1.62502 12.4985H8.37502C8.66006 12.4986 8.93443 12.6069 9.14271 12.8015C9.35099 12.9961 9.47763 13.2624 9.49706 13.5468C9.51649 13.8312 9.42725 14.1123 9.24737 14.3334C9.0675 14.5546 8.8104 14.6991 8.52802 14.738L8.37502 14.7485H1.62502C1.33999 14.7484 1.06561 14.6401 0.857336 14.4455C0.649059 14.2509 0.522412 13.9846 0.502984 13.7002C0.483556 13.4158 0.572796 13.1347 0.752672 12.9136C0.932548 12.6924 1.18965 12.5479 1.47202 12.509L1.62502 12.4985ZM3.83002 3.8285C4.02069 3.6382 4.27332 3.52263 4.54198 3.50281C4.81064 3.48299 5.07749 3.56024 5.29402 3.7205L5.42002 3.83L10.67 9.08C10.8695 9.281 10.9858 9.54981 10.9957 9.83279C11.0057 10.1158 10.9086 10.3921 10.7238 10.6066C10.539 10.8212 10.2801 10.9581 9.99874 10.9902C9.71741 11.0222 9.43434 10.947 9.20602 10.7795L9.08002 10.67L3.83002 5.42C3.61935 5.20906 3.50101 4.92313 3.50101 4.625C3.50101 4.32687 3.61935 4.03944 3.83002 3.8285ZM13.625 0.5C13.8969 0.500011 14.1595 0.598464 14.3644 0.777151C14.5693 0.955837 14.7026 1.20267 14.7395 1.472L14.75 1.625V8.375C14.7499 8.66004 14.6417 8.93441 14.4471 9.14269C14.2525 9.35096 13.9861 9.47761 13.7017 9.49704C13.4173 9.51647 13.1362 9.42723 12.9151 9.24735C12.694 9.06748 12.5494 8.81038 12.5105 8.528L12.5 8.375V1.625C12.5 1.32663 12.6185 1.04048 12.8295 0.829505C13.0405 0.618526 13.3267 0.5 13.625 0.5Z' />
        </svg>
      </div>
      <div className='flex justify-between w-full items-center mb-2'>
        <SearchCityGroupMemo onPick={setActiveCity} />
        <Location isPicked={isUserLocation} onClick={toggleUserLocation} />
      </div>
      {weatherInfo && activeCity && (
        <WeatherDisplay activeCityInfo={activeCity} weatherInfo={weatherInfo} />
      )}
    </div>
  )
}
