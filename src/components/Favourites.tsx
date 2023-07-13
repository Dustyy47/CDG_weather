import { useEffect, useState } from 'react'
import { FAVOURITES_LS_ROUTE } from '../App'
import { getCityName } from '../helpers/getCityName'
import { CityInfo } from '../http/CitiesAPI'
import { CountryFlag } from './CountryFlag'
import { FavouriteItem } from './FavouriteItem'
import { Search } from './Search'

export function FavouritesCities({
  favourites,
  setFavourites,
  onChoose
}: {
  favourites: CityInfo[]
  setFavourites: React.Dispatch<React.SetStateAction<CityInfo[]>>
  onChoose: (city: CityInfo) => void
}) {
  const [filteredFavourites, setFilteredFavourites] =
    useState<CityInfo[]>(favourites)

  useEffect(() => {
    setFilteredFavourites([...favourites])
  }, [favourites])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(FAVOURITES_LS_ROUTE) || '')
    if (items) {
      setFavourites([...items])
    }
  }, [])

  function handleRemoveFavourite(id: string) {
    setFavourites((prev) => [...prev.filter((city) => city.id !== id)])
  }

  function handleSearch(v: string) {
    console.log(v)
    if (!v) {
      setFilteredFavourites([...favourites])
      return
    }
    setFilteredFavourites([
      ...favourites.filter((city) => {
        const nameComparationResult = city.name
          .toLocaleLowerCase()
          .includes(v.toLocaleLowerCase())
        let localNamesComparationResult = false
        for (let localName of Object.values(city.local_names)) {
          if (localName.toLocaleLowerCase().includes(v.toLocaleLowerCase())) {
            localNamesComparationResult = true
            break
          }
        }
        return nameComparationResult || localNamesComparationResult
      })
    ])
  }

  return (
    <div className='max-h-full overflow-hidden h-full'>
      <div className='flex items-center mb-4'>
        <p className='h1 mr-2 '>Избранное</p>
        <svg
          className='w-3 fill-blueAccent'
          viewBox='0 0 11 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 14V1.55556C0 1.12778 0.154 0.761446 0.462 0.456557C0.77 0.151668 1.13981 -0.000517198 1.57143 1.32051e-06H9.42857C9.86071 1.32051e-06 10.2308 0.152446 10.5388 0.457335C10.8468 0.762223 11.0005 1.1283 11 1.55556V14L5.5 11.6667L0 14ZM1.57143 11.6278L5.5 9.95556L9.42857 11.6278V1.55556H1.57143V11.6278Z' />
        </svg>
      </div>
      <div className='mb-2'>
        <Search
          placeholder='Поиск по сохранённым городам'
          debounced={false}
          onChange={handleSearch}
        />
      </div>

      <div className='max-h-full'>
        {filteredFavourites.map((city) => (
          <div key={city.id} className='mb-1'>
            <FavouriteItem
              onRemove={() => handleRemoveFavourite(city.id)}
              onClick={() => onChoose(city)}
            >
              <div className='flex items-center'>
                <div className='mr-1 h-[.775rem] rounded-[.125rem] overflow-hidden'>
                  <CountryFlag country={city.country} />
                </div>
                <div>
                  <p className='regular h-2'>{getCityName(city)} </p>
                  <span className='light h-2 text-grey4 '>
                    {city.country} {city.state}
                  </span>
                </div>
              </div>
            </FavouriteItem>
          </div>
        ))}
      </div>
    </div>
  )
}
