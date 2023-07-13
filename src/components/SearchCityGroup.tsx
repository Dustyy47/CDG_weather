import { useRef, useState } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { CityInfo } from '../http/CitiesAPI'
import { Search } from './Search'
import { SuggestedCities } from './SuggestedCities'

export function SearchCityGroup({
  onPick
}: {
  onPick: (city: CityInfo) => any
}) {
  const [cityQuery, setCityQuery] = useState('')
  const [suggestedCitiesActive, setSuggestedCitiesActive] = useState(false)
  const searchGroup = useRef(null)

  useOutsideClick(searchGroup, hide)

  function hide() {
    setSuggestedCitiesActive(false)
  }

  function handlePickCity(city: CityInfo) {
    hide()
    onPick(city)
  }

  function handleFocusSearchCity() {
    setSuggestedCitiesActive(true)
  }

  return (
    <div className='mb-2 relative  max-w-[25.625rem] w-full' ref={searchGroup}>
      <Search
        onChange={setCityQuery}
        onFocus={handleFocusSearchCity}
        focused={suggestedCitiesActive}
        placeholder='Поиск погоды'
      />
      <div className='w-full absolute'>
        <SuggestedCities
          cityQuery={cityQuery}
          isActive={suggestedCitiesActive}
          onPick={handlePickCity}
        />
      </div>
    </div>
  )
}
