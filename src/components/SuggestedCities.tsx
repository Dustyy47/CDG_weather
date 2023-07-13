import classNames from 'classnames'
import { useEffect, useState } from 'react'
import CitiesAPI, { CityInfo } from '../http/CitiesAPI'
import { SuggestedCity } from './SuggestedCity'

export function SuggestedCities({
  cityQuery,
  onPick,
  isActive
}: {
  cityQuery: string
  onPick: (city: CityInfo) => void
  isActive: boolean
}) {
  const [cities, setCities] = useState<CityInfo[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchCities() {
      if (!cityQuery) {
        setCities([])
        setLoading(false)
        return
      }
      setLoading(true)
      const citiesInfo = await CitiesAPI.getCitiesFromName(cityQuery)
      console.log(citiesInfo)
      setLoading(false)
      setCities(citiesInfo)
    }
    fetchCities()
  }, [cityQuery])

  function handleClickCity(city: CityInfo) {
    onPick(city)
  }

  const wrapperClassname = classNames(
    'bg-blueLight2 w-full rounded-2',
    isActive
      ? 'opacity-100 pointer-events-auto  visible min-h-[1rem]'
      : 'opacity-0 pointer-events-none hidden min-h-0'
  )
  return (
    <div className={wrapperClassname}>
      <ul className='md:p-2 sm:p-1 flex flex-col w-full'>
        {loading ? (
          <p className='text-center regular text-grey4'>Загрузка...</p>
        ) : cities.length > 0 ? (
          cities.map((city) => (
            <div key={`${city.lat} ${city.lon}`} className='mb-1 last:mb-0 '>
              <SuggestedCity city={city} onClick={handleClickCity} />
            </div>
          ))
        ) : (
          <p className='text-center regular text-grey4'>Такого города нет</p>
        )}
      </ul>
    </div>
  )
}
