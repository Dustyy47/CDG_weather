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
    'bg-blueLight2 w-full rounded-b-2 block',
    isActive
      ? 'opacity-100 pointer-events-auto min-h-[5.125rem] block'
      : 'opacity-0 pointer-events-none min-h-[0] hidden'
  )
  return (
    <div className={wrapperClassname}>
      <ul className='p-2'>
        {loading
          ? 'Loading'
          : cities.map((city) => (
              <div
                key={`${city.lat} ${city.lon}`}
                className='mb-1 last:mb-none '
              >
                <SuggestedCity city={city} onClick={handleClickCity} />
              </div>
            ))}
      </ul>
    </div>
  )
}
