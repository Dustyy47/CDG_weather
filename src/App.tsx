import { createContext, useState } from 'react'
import { ActualWeather } from './components/ActualWeather'
import { Favourites } from './components/Favourites'
import { CityInfo } from './http/CitiesAPI'

interface ICitiesContext {
  activeCity: CityInfo | null
  setActiveCity: React.Dispatch<React.SetStateAction<CityInfo | null>>
  favouritesCities: CityInfo[]
  setFavouritesCities: React.Dispatch<React.SetStateAction<CityInfo[]>>
}

export const CitiesContext = createContext<ICitiesContext | null>(null)

function App() {
  const [activeCity, setActiveCity] = useState<CityInfo | null>(null)
  const [favouritesCities, setFavouritesCities] = useState<CityInfo[]>([])

  return (
    <div className='container mt-12'>
      <div className='flex justify-between'>
        <CitiesContext.Provider
          value={{
            activeCity,
            setActiveCity,
            favouritesCities,
            setFavouritesCities
          }}
        >
          <div className='max-w-[50rem] w-full'>
            <ActualWeather
              activeCity={activeCity}
              setActiveCity={setActiveCity}
            />
          </div>
          <div className='w-full max-w-[15.625rem]'>
            <Favourites<CityInfo>
              items={favouritesCities}
              setItems={setFavouritesCities}
            />
          </div>
        </CitiesContext.Provider>
      </div>
    </div>
  )
}

export default App
