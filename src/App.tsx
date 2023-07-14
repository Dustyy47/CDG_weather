import { createContext, useState } from 'react'
import { ActualWeather } from './components/ActualWeather'
import { FavouritesCitiesMemo } from './components/Favourites'
import { useLocalState } from './hooks/useLocalState'
import { CityInfo } from './http/CitiesAPI'

interface IFavouritesContext {
  favouritesCities: CityInfo[]
  toggleFavourite: (c: CityInfo) => any
}

export const FavouritesContext = createContext<IFavouritesContext | null>(null)
export const FAVOURITES_LS_ROUTE = 'favourites'

function App() {
  const [activeCity, setActiveCity] = useState<CityInfo | null>(null)
  const [favouritesCities, setFavouritesCities] = useLocalState<CityInfo[]>(
    FAVOURITES_LS_ROUTE,
    [],
    []
  )

  function toggleFavourite(targetCity: CityInfo) {
    for (const city of favouritesCities) {
      if (targetCity.id === city.id) {
        setFavouritesCities((prev) => [
          ...prev.filter((city) => city.id !== targetCity.id)
        ])
        return
      }
    }
    setFavouritesCities((prev) => [...prev, targetCity])
  }

  return (
    <div className='container md:mt-12 sm:mt-5'>
      <div className='flex justify-between md:flex-row sm:flex-col'>
        <FavouritesContext.Provider
          value={{ favouritesCities, toggleFavourite }}
        >
          <div className='lg:max-w-[50rem] md:max-w-[28rem] w-full lg:h-[22.5rem] md:h-[32rem] md:mb-2 sm:mb-11'>
            <ActualWeather
              activeCity={activeCity}
              setActiveCity={setActiveCity}
            />
          </div>
        </FavouritesContext.Provider>
        <div className='w-full md:max-w-[15.625rem] sm:max-w-none lg:h-[33rem] md:h-[40rem] sm:h-full'>
          <FavouritesCitiesMemo
            onChoose={setActiveCity}
            favourites={favouritesCities}
            setFavourites={setFavouritesCities}
          />
        </div>
      </div>
    </div>
  )
}

export default App
