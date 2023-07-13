import { createContext, useState } from 'react'
import { ActualWeather } from './components/ActualWeather'
import { FavouritesCities } from './components/Favourites'
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
    <div className='container mt-12'>
      <div className='flex justify-between'>
        <FavouritesContext.Provider
          value={{ favouritesCities, toggleFavourite }}
        >
          <div className='max-w-[50rem] w-full h-[22.5rem]'>
            <ActualWeather
              activeCity={activeCity}
              setActiveCity={setActiveCity}
            />
          </div>
        </FavouritesContext.Provider>
        <div className='w-full max-w-[15.625rem]'>
          <FavouritesCities
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
