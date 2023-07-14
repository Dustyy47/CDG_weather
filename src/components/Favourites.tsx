import { useEffect, useState } from 'react'
import { FAVOURITES_LS_ROUTE } from '../App'
import { CityInfo } from '../http/CitiesAPI'
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
    let ls = localStorage.getItem(FAVOURITES_LS_ROUTE)
    if (!ls) return
    const items = JSON.parse(ls)
    if (items) {
      setFavourites([...items])
    }
  }, [])

  function handleRemoveFavourite(id: string) {
    setFavourites((prev) => [...prev.filter((city) => city.id !== id)])
  }

  function handleChoose(city: CityInfo) {
    window.scrollTo(0, 0)
    onChoose(city)
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
    <div className='max-h-full overflow-hidden h-full md:w-auto sm:w-full'>
      <div className='flex items-center mb-4 md:justify-start sm:justify-center'>
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
              city={city}
              onRemove={() => handleRemoveFavourite(city.id)}
              onClick={() => handleChoose(city)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
